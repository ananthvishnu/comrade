// noteReducers.js

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
    UPDATE_NOTE_RESET,
    UPDATE_NOTE_FAILURE,
    DELETE_NOTE_REQUEST,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_RESET,
    DELETE_NOTE_FAILURE,
    CLEAR_ERRORS
  } from '../constans/NoteConstans';
  
  // Reducer for creating a new note
  export const createNoteReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_NOTE_REQUEST:
        return { loading: true };
      case CREATE_NOTE_SUCCESS:
        return { loading: false, success: true, note: action.payload };
      case CREATE_NOTE_FAILURE:
        return { loading: false, error: action.payload };
      case CLEAR_ERRORS:
        return { ...state, error: null };
      default:
        return state;
    }
  };
  
  // Reducer for getting all notes
  export const getAllNotesReducer = (state = { notes: [] }, action) => {
    switch (action.type) {
      case GET_ALL_NOTES_REQUEST:
        return { loading: true, notes: [] };
      case GET_ALL_NOTES_SUCCESS:
        return { loading: false, notes: action.payload };
      case GET_ALL_NOTES_FAILURE:
        return { loading: false, error: action.payload, notes: [] };
     case CLEAR_ERRORS:
        return { ...state, error: null };
      default:
        return state;
    }
  };
  
  // Reducer for getting a note by ID
  export const getNoteByIdReducer = (state = { note: {} }, action) => {
    switch (action.type) {
      case GET_NOTE_REQUEST:
        return { loading: true, note: {} };
      case GET_NOTE_SUCCESS:
        return { loading: false, note: action.payload };
      case GET_NOTE_FAILURE:
        return { loading: false, error: action.payload, note: {} };
      case CLEAR_ERRORS:
        return { ...state, error: null };
      default:
        return state;
    }
  };
  // Reducer for update and delete note
  export const deleteNoteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_NOTE_REQUEST:
      case UPDATE_NOTE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_NOTE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          isDeleted: action.payload,
        };
  
      case UPDATE_NOTE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_NOTE_FAILURE:
      case UPDATE_NOTE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_NOTE_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_NOTE_RESET:
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
  