
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReport } from "../../src/actions/ReportAction";
import "./Support.css";
import MetaData from "./Metadata";
import BottomTab from './BottomTab.jsx';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../component/Home/Header";
import report from "../Assets/12983846_5114855.jpg"
import Foot from "../Foot"

const Support = ({history}) => {

    

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.creatReport);

  const [name, setName] = useState("");
  const [subject,setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createReport(name, subject, email, message));
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
    
    history.push("/support");
    toast.success("Report created successfully");
  };

    return (
       <Fragment>
       <MetaData title="Support"/>
       <Header/>
       <div style={{display:"flex",marginLeft:"250px",marginTop:"5%"}}>
       <div>
        <img src={report} alt="" style={{width:"550px",height:"550px"}} />
       </div>
       <div 
       className='support'
       style={{
        //    width:"100%",
           justifyContent:"center",
           alignItems:"center",
           padding:'50px 0',
           
       }}>
           <h2 className='support__heading' style={{
               textAlign:"center"
           }}>Hey How can we improve our services</h2>
           <h2  className='support__heading' style={{
               textAlign:"center"
           }}>Report us for something...</h2>
           <div>
               <form style={{
                   width:"400px",
                   margin:"auto",
                   padding:"20px 0"
               }}
               onSubmit={handleSubmit}
               >
                   <input  name="user__name"
                           type="text"
                           placeholder='Write your Name ...' 
                           label="Name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }} 
                   />
                    <input name="user__subject"
                           type="text" 
                           placeholder='Write a Subject ...'
                           label="Subject"
                           value={subject}
                           onChange={(e) => setSubject(e.target.value)}
                           required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   />
                   <input  name="user_email"
                           type="email" 
                           placeholder='write your Email ...' 
                           label="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}/>
                   <textarea 
                   cols="30" 
                   rows="5" 
                   required placeholder='write your message ...'
                   name="user__message"
                   label="message"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                   style={{
                    border:"none",
                    outline:"none",
                    width:"100%",
                    borderBottom:"1px solid #3BB77E",
                    margin:"10px 0",
                    fontSize:"1.2vmax",
                }}
                   ></textarea>
                   <button 
                   type="submit"
                   disabled={loading}
                   style={{
                       border:"none",
                       cursor:"pointer",
                       width:"100%",
                       background:"#2A4E45",
                       height:"40px",
                       margin:"10px 0",
                       color:"#fff",
                       fontSize:"1.2vmax"
                   }}
                   >Submit</button>
                   {/* {done && toast.success("Thanks for your report we will reply it in very soon...")} */}
               </form>
               <div className='animation'>
 
               </div>
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
       <BottomTab />
       <Foot/>
       </Fragment>
    )
}

export default Support