import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  MDBBtn} from 'mdb-react-ui-kit';

function UniversitePublic(props){
  const navigate = useNavigate();

  return (

    <div data-aos="fade-down"
    data-aos-easing="linear"
    dat-aos-duration="1500"
    className='Universite'>
<div className="card" >

  <div className="card-body">
    <p className="card-text">Title: {props.title}</p>
    <p className="card-text">Content: {props.content}</p>
    <p className="card-text">Location: {props.location}</p>
    <Link style={{ textDecoration: 'none', color: 'black'}} to={"/QustionDetail"} state={props}>Read Answers</Link>
  </div>
</div>
    </div>
  )
}

export default UniversitePublic