
import React, { useState } from 'react'


const Event = () => {

    const[ UerName, setUserName]=useState("");

    const handle=(e)=>{
        setUserName(e.target.value)
    }

  return (
    <div>
        <h1>Hello {UerName}</h1>
        <input type="text" placeholder='Hello Enter ur Name' onChange={handle}/>
    </div>
  )
}

export default Event
