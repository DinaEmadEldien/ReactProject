import React from 'react';
import { useHistory } from "react-router-dom";



export default function Contact(props) {

  const history = useHistory();
  const redirectToAbout=()=>{
    history.push("/about");

  }
  return (
    <div>
        <h1>contact us</h1>
        <button className='btn btn-secondary' onClick={()=>redirectToAbout()}>Go To About</button>
    </div>
  )
}
