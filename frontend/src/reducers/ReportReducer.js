// reportReducer.js

import {
    CREATE_REPORT_REQUEST,
    CREATE_REPORT_SUCCESS,
    CREATE_REPORT_FAILURE,
    GET_ALL_REPORTS_REQUEST,
    GET_ALL_REPORTS_SUCCESS,
    GET_ALL_REPORTS_FAILURE,
    GET_REPORT_REQUEST,
    GET_REPORT_SUCCESS,
    GET_REPORT_FAILURE,
    UPDATE_REPORT_REQUEST,
    UPDATE_REPORT_SUCCESS,
    UPDATE_REPORT_RESET,
    UPDATE_REPORT_FAILURE,
    DELETE_REPORT_REQUEST,
    DELETE_REPORT_SUCCESS,
    DELETE_REPORT_RESET,
    DELETE_REPORT_FAILURE,
    CLEAR_ERRORS
  } from '../constans/ReportConstans';
  
  // Reducer for creating a new report --customer
  export const createReportReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_REPORT_REQUEST:
        return { loading: true };
      case CREATE_REPORT_SUCCESS:
        return { loading: false, success: true, reports: action.payload };
      case CREATE_REPORT_FAILURE:
        return { loading: false, error: action.payload };
      case CLEAR_ERRORS:
        return { ...state, error: null };
      default:
        return state;
    }
  };
  
  // Reducer for getting all reports --admin
  export const getAllReportsReducer = (state = { reports: [] }, action) => {
    switch (action.type) {
      case GET_ALL_REPORTS_REQUEST:
        return { loading: true, reports: [] };
      case GET_ALL_REPORTS_SUCCESS:
        return { loading: false, reports: action.payload };
      case GET_ALL_REPORTS_FAILURE:
        return { loading: false, error: action.payload, reports: [] };
     case CLEAR_ERRORS:
        return { ...state, error: null };
      default:
        return state;
    }
  };
  
  // Reducer for getting a report by ID
  export const getReportByIdReducer = (state = { reports: {} }, action) => {
    switch (action.type) {
      case GET_REPORT_REQUEST:
        return { loading: true, reports: {} };
      case GET_REPORT_SUCCESS:
        return { loading: false, reports: action.payload };
      case GET_REPORT_FAILURE:
        return { loading: false, error: action.payload, reports: {} };
      case CLEAR_ERRORS:
        return { ...state, error: null };
      default:
        return state;
    }
  };
  // Reducer for update and delete report
  export const deleteReportReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_REPORT_REQUEST:
      case UPDATE_REPORT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_REPORT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isDeleted: action.payload,
        };
  
      case UPDATE_REPORT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_REPORT_FAILURE:
      case UPDATE_REPORT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_REPORT_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_REPORT_RESET:
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