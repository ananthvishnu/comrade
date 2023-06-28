import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNoteById,
  updateNote,
  getAllNotes,
  clearErrors,
} from "../../actions/NoteAction";
import { Button, TextField, Typography, Card, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from "../../more/Metadata";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../Admin/Sidebar";

const UpdateNote = ({ match, history }) => {
  const dispatch = useDispatch();
  const {
    loading,
    note,
    success: updateSuccess,
  } = useSelector((state) => state.NoteById);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getAllNotes()); // Refresh blogs
      history.push("/admin/notes");
    } else {
      dispatch(getNoteById(match.params.id));
    }
  }, [dispatch, match.params.id, updateSuccess, history]);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDate(note.date);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateNote(match.params.id, title, date, content));
    setTitle("");
    setDate("");
    setContent("");
    

    // Navigate to the blog page after successful update
    history.push("/admin/notes");
    toast.success("Note updated successfully");
  };

  return (
    <Fragment>
      <MetaData title="Edit Note" />
      <div className="dashboard">
        <Sidebar />
        <div className="productReviewsContaine">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: 40,
            }}
          >
            <Card sx={{ maxWidth: 1800, mt: 4 }}>
              <Link to="/admin/notes">
                <Button variant="contained" color="primary">
                  Back to Notes
                </Button>
              </Link>

              <Typography
                variant="h5"
                gutterBottom
                style={{ marginTop: "20px" }}
              >
                Edit Note
              </Typography>

              {loading ? (
                <Typography variant="body1">Loading...</Typography>
              ) : (
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                   <TextField
                    label="Date"
                    variant="outlined"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                  <TextField
                    label="Content"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </Button>
                </form>
              )}
            </Card>
          </Box>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default UpdateNote;