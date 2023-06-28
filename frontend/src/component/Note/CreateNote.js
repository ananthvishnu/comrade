
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../../actions/NoteAction";
import { Button, TextField, Typography, Box, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from "../../more/Metadata";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../Admin/Sidebar";

const CreateNote = ({ history }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.creatNote);

  const [title, setTitle] = useState("");
  const [date,setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNote(title, date, content));
    setTitle("");
    setDate("");
    setContent("");
    
    history.push("/admin/notes");
    toast.success("Note created successfully");
  };

  return (
    <Fragment>
      <MetaData title="Create Note" />

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
            <Card sx={{ maxWidth: 800, mt: 4 }}>
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
                Create Note
              </Typography>

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
                  Create
                </Button>
              </form>
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

export default CreateNote;