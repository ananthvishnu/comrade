import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deleteProductReducer,
  deleteReviewReducer,
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReviewsReducer,
  productsReducer,
} from "./reducers/ProductReducer";
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/CartReducer";
import { favouriteReducer } from "./reducers/FavouriteReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/OrderReducer";
import {
  createBlogReducer,
  getAllBlogsReducer,
  getBlogByIdReducer,
  deleteBlogReducer,
} from "./reducers/BlogReducer";

import {
  createNoteReducer,
  getAllNotesReducer,
  getNoteByIdReducer,
  deleteNoteReducer,
} from "./reducers/NoteReducer";

import {
  createReportReducer,
  getAllReportsReducer,
  getReportByIdReducer,
  deleteReportReducer,
} from "./reducers/ReportReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  cart: cartReducer,
  favourite: favouriteReducer,
  order: newOrderReducer,
  myOrder: myOrdersReducer,
  myOrderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  createProduct: newProductReducer,
  deleteProduct: deleteProductReducer,
  AllOrders: allOrdersReducer,
  deleteOrder: orderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  deleteReview: deleteReviewReducer,
  productReviews: productReviewsReducer,
  forgotPassword: forgotPasswordReducer,
  
  AllBlogs: getAllBlogsReducer,
  creatBlog: createBlogReducer,
  deletBlog: deleteBlogReducer,
  BlogById: getBlogByIdReducer,

  AllNotes: getAllNotesReducer,
  creatNote: createNoteReducer,
  deletNote: deleteNoteReducer,
  NoteById: getNoteByIdReducer,

  AllReports: getAllReportsReducer,
  creatReport: createReportReducer,
  deletReport: deleteReportReducer,
  ReportById: getReportByIdReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],

    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  favourite: {
    favouriteItems: localStorage.getItem("favouriteItems")
      ? JSON.parse(localStorage.getItem("favouriteItems"))
      : [],
  },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
