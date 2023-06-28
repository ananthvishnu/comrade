const Blog = require("../models/BlogSchema");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");


// Create a blog
exports.createBlog = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "blogs",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const blog = await Blog.create(req.body);

  res.status(201).json({
    success: true,
    blog,
  });
});

// Get all blogs
exports.getAllBlogs = catchAsyncErrors(async (req, res, next) => {
  const blogs = await Blog.find();

  res.status(200).json({
    success: true,
    data: blogs,
  });
});

// Get a single blog
exports.getBlogById = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  if (!blog) {
    return next(new ErrorHandler("Blog not found", 404));
  }

  res.status(200).json({
    success: true,
    data: blog,
  });
});

// Update a blog
exports.updateBlog = catchAsyncErrors(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);
  if (!blog) {
    return next(new ErrorHandler("Blog is not found with this id", 404));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Delete image from cloudinary
    for (let i = 0; i < blog.images.length; i++) {
      await cloudinary.v2.uploader.destroy(blog.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "blogs",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    blog,
  });
});

// Delete a blog
exports.deleteBlog = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new ErrorHandler("Blog is not found with this id", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; i < blog.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(blog.images[i].public_id);
  }

  await blog.remove();

  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
  });
});