// blogActions.js

import axios from 'axios';
import {
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAILURE,
  GET_ALL_BLOGS_REQUEST,
  GET_ALL_BLOGS_SUCCESS,
  GET_ALL_BLOGS_FAILURE,
  GET_BLOG_BY_ID_REQUEST,
  GET_BLOG_BY_ID_SUCCESS,
  GET_BLOG_BY_ID_FAILURE,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAILURE,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAILURE,
  CLEAR_ERRORS
} from '../constans/BlogConstans';

//create blog action
export const createBlog = (title, content, images) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BLOG_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/v2/blogs', { title, content, images }, config);

    dispatch({
      type: CREATE_BLOG_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BLOG_FAILURE,
      payload: error.response.data.message,
    });
  }
};

//get all blogs action
export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_BLOGS_REQUEST });

    const { data } = await axios.get('/api/v2/blogs');

    dispatch({
      type: GET_ALL_BLOGS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_BLOGS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

//get blog by id action
export const getBlogById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOG_BY_ID_REQUEST });

    const { data } = await axios.get(`/api/v2/blogs/${id}`);

    dispatch({
      type: GET_BLOG_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_BLOG_BY_ID_FAILURE,
      payload: error.response.data.message,
    });
  }
};

//update blog action
export const updateBlog = (id, title, content, images) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BLOG_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(`/api/v2/blogs/${id}`, { title, content, images }, config);

    dispatch({
      type: UPDATE_BLOG_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BLOG_FAILURE,
      payload: error.response.data.message,
    });
  }
};

//delete blog action
export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST });

    await axios.delete(`/api/v2/blogs/${id}`);

    dispatch({
      type: DELETE_BLOG_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BLOG_FAILURE,
      payload: error.response.data.message,
    });
  }
};

//   Clearing errors
export const clearErrors= () => async (dispatch)=>{
  dispatch({
      type: CLEAR_ERRORS
  })
}