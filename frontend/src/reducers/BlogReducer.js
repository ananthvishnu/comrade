// blogReducers.js

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
    UPDATE_BLOG_RESET,
    UPDATE_BLOG_FAILURE,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_RESET,
    DELETE_BLOG_FAILURE,
    CLEAR_ERRORS
  } from '../constans/BlogConstans';
  
  export const createBlogReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_BLOG_REQUEST:
        return { loading: true };
      case CREATE_BLOG_SUCCESS:
        return { loading: false, blog: action.payload };
      case CREATE_BLOG_FAILURE:
        return { loading: false, error: action.payload };
      case CLEAR_ERRORS:
        return { ...state, error: null };
      default:
        return state;
    }
  };
  
  export const getAllBlogsReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
      case GET_ALL_BLOGS_REQUEST:
        return { loading: true, blogs: [] };
      case GET_ALL_BLOGS_SUCCESS:
        return { loading: false, blogs: action.payload };
      case GET_ALL_BLOGS_FAILURE:
        return { loading: false, error: action.payload };
      case CLEAR_ERRORS:
        return { ...state, error: null };
      default:
        return state;
    }
  };
  
  export const getBlogByIdReducer = (state = { blog: {} }, action) => {
    switch (action.type) {
      case GET_BLOG_BY_ID_REQUEST:
        return { loading: true, blog: {} };
      case GET_BLOG_BY_ID_SUCCESS:
        return { loading: false, blog: action.payload };
      case GET_BLOG_BY_ID_FAILURE:
        return { loading: false, error: action.payload };
      case CLEAR_ERRORS:
        return { ...state, error: null };
      default:
        return state;
    }
  };
  

  
  export const deleteBlogReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_BLOG_REQUEST:
      case UPDATE_BLOG_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isDeleted: action.payload,
        };
  
      case UPDATE_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_BLOG_FAILURE:
      case UPDATE_BLOG_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_BLOG_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_BLOG_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  