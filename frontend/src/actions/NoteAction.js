// noteActions.js

import axios from "axios";
import {
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE,
  GET_ALL_NOTES_REQUEST,
  GET_ALL_NOTES_SUCCESS,
  GET_ALL_NOTES_FAILURE,
  GET_NOTE_REQUEST,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILURE,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
} from "../constans/NoteConstans";

// Create a new note
export const createNote = (title, date, content) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_NOTE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/v2/notes', { title, date, content }, config);

    dispatch({
      type: CREATE_NOTE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_NOTE_FAILURE,
      payload: error.response.data.message,
    });
  }
};


// Get all notes
export const getAllNotes = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_NOTES_REQUEST });

    const { data } = await axios.get("/api/v2/notes");

    dispatch({ type: GET_ALL_NOTES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_NOTES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get a note by ID
export const getNoteById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_NOTE_REQUEST });

    const { data } = await axios.get(`/api/v2/notes/${id}`);

    dispatch({ type: GET_NOTE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_NOTE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Update a note
export const updateNote = (id, title, date, content) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_NOTE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(`/api/v2/notes/${id}`, { title, date, content }, config);

    dispatch({
      type: UPDATE_NOTE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_NOTE_FAILURE,
      payload: error.response.data.message,
    });
  }
};



// Delete a note
export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_NOTE_REQUEST });

    await axios.delete(`/api/v2/notes/${id}`);

    dispatch({ type: DELETE_NOTE_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_NOTE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};