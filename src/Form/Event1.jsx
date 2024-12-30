
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Event1 = () => {

    const [ userName, setUserName]=useState("");

    const[ userDetails, setUserDetails]= useState("");

    const notify = () => toast("Your data Submit");


    const handle=(e)=>{
        setUserName(e.target.value);
    }

    const userDetailsHandle=(e)=>{
        e.preventDefault();
        setUserDetails(userName)
        notify()
    }

  return (
    <div>
        <ToastContainer/>
      <form action="" onSubmit={userDetailsHandle}>
        <h1>Hello {userDetails}</h1>
        <input type="text" onChange={handle}/>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default Event1
