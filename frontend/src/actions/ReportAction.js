// reportAction.js

import axios from "axios";
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
    UPDATE_REPORT_FAILURE,
    DELETE_REPORT_REQUEST,
    DELETE_REPORT_SUCCESS,
    DELETE_REPORT_FAILURE,
} from "../constans/ReportConstans";

// Create a new report --customer
export const createReport = (name, subject, email, message) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_REPORT_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/v2/reports', { name, subject, email,  message}, config);

    dispatch({
      type: CREATE_REPORT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_REPORT_FAILURE,
      payload: error.response.data.message,
    });
  }
};


// Get all reports --admin
export const getAllReports = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_REPORTS_REQUEST });

    const { data } = await axios.get("/api/v2/reports");

    dispatch({ type: GET_ALL_REPORTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_REPORTS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get a report by ID
export const getReportById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REPORT_REQUEST });

    const { data } = await axios.get(`/api/v2/reports/${id}`);

    dispatch({ type: GET_REPORT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_REPORT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Update a report
export const updateReport = (id, name, subject, email, message) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_REPORT_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(`/api/v2/reports/${id}`, { name, subject, email, message }, config);

    dispatch({
      type: UPDATE_REPORT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_REPORT_FAILURE,
      payload: error.response.data.message,
    });
  }
};



// Delete a report
export const deleteReport = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REPORT_REQUEST });

    await axios.delete(`/api/v2/reports/${id}`);

    dispatch({ type: DELETE_REPORT_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_REPORT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};