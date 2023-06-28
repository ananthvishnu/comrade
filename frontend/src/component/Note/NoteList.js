import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes, deleteNote } from "../../actions/NoteAction";
import {
  Button,
  Typography,
  Box,
  Card,
  CardHeader,
  CardContent,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import { DELETE_NOTE_RESET } from "../../constans/NoteConstans";
import { ToastContainer, toast } from "react-toastify";
import MetaData from "../../more/Metadata";
import Sidebar from "../Admin/Sidebar";
// import "./NoteList.css";
const Notelist = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.AllNotes);
  const { success: deleteSuccess } = useSelector((state) => state.deletNote);

  useEffect(() => {
    dispatch(getAllNotes());
    if (deleteSuccess) {
      dispatch({ type: DELETE_NOTE_RESET });
      toast.success("Note deleted successfully");
    }
  }, [dispatch, deleteSuccess]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Note?")) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <Fragment>
      <MetaData title="Admin Blogs" />
      <div className="dashboard">
        <Sidebar />
        <div className="productReviewsContaine">
          <div style={{padding:"40px"}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding:"40px",
              py: 4,
            }}
          >
            <Link to="/create-note">
              <Button variant="contained" style={{padding:"10px 15px 10px 15px",background:"#2A4E45",borderRadius:"20px",color:"#fff"}}>
                Create Note
              </Button>
            </Link>

            <Typography variant="h3" gutterBottom style={{ marginTop: "20px",fontFamily:"montserrat" }}>
              Write Notes
            </Typography>

            {notes.map((note) => (
              <Card key={note._id} sx={{ maxWidth: 800, mt: 4 }}>
                <CardHeader
                  avatar={<Avatar aria-label="author">{note.author}</Avatar>}
                  title={note.title}
                  subheader={moment(note.createdAt).format("MMMM Do, YYYY")}
                />
                <CardContent>
                 <Typography variant="body1">{note.date}</Typography>
                  <Typography variant="body1">{note.content}</Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                  <Link
                    to={`/edit-note/${note._id}`}
                    style={{ textDecoration: "none",marginRight:"5px" }}
                  >
                    <Button variant="contained" style={{padding:"10px 15px 10px 15px",background:"#2A4E45",borderRadius:"20px",color:"#fff"}} sx={{ mr: 3 }}>
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                     onClick={() => handleDelete(note._id)}
                     style={{padding:"10px 15px 10px 15px",background:"#2A4E45",borderRadius:"20px",color:"#fff",marginRight:"20px"}}
                  >
                    Delete
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        </div>
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



    // <div class="snote">
    //   <Link to="/create-note">
    //     <Button variant="contained" color="primary">
    //       Create Note
    //     </Button>
    //   </Link>
    //   <ul>
    //     {notes.map((note) => (
    //       <li key={note._id}>
    //         <a href="#LINK 1">
    //           <CardHeader
    //             avatar={<Avatar aria-label="author">{note.author}</Avatar>}
    //             title={note.date}
    //             subheader={moment(note.createdAt).format("MMMM Do, YYYY")}
    //           />
    //           <h2>{note.title}</h2>
    //           <hr />
    //           <p>{note.content}</p>
              
    //         </a>
           
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Notelist;
