import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
export default function Recoverpassword() {
  const navigate = useNavigate()
  const updatepassword = async (setnewuser)=>{
    return axios.post("http://localhost:9000/forgetpassword", setnewuser)
    .then(res => { console.log(res.data)
      if(res.data==="Password updated successfully"){
      return res.data, showAlert(true), setTimeout(()=>{ navigate("/Signin") }, 1000);}
      else { return res.data, showAlert(false)}
  }).catch(err => console.log(err))}
  const showAlert = async (type) => {
    if (type === true) {
        Swal.fire({
            title: 'Password updated successfully',
            text: 'Redericting to Login page',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }   
    else {
        Swal.fire({
            icon: 'question',
            title: 'Your Email or Password are wrong',
            text: 'Verify you Info',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}
  const [setnewuser, setnewlist] = useState({ email: "", password: "", newPassword: "" })
  const [typeinput, settype]=useState("password")
  const togglePassword=(e)=>e.target.checked ? settype("text") : settype("password")
  return (
        <div className='formsignup'>
      <form style={{width:"40rem"}}>
        <h3>Update Your Password</h3>
        <div className="mb-3">
          <label>Email</label>
          <input onChange={(e)=>setnewlist({...setnewuser, email:e.target.value})}
            type="text"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3" >
          <label>Old Password</label>
          <input onChange={(e)=>setnewlist({...setnewuser, password:e.target.value})}
            type={`${typeinput}`}
            className="form-control"
            placeholder="Enter old password"
          /> 
            <input style={{marginRight:".3em"}} type='checkbox' onClick={togglePassword}/>
            <label for="lang1">Check for visible password</label>
</div>
<div className="mb-3" >
          <label>New Password</label>
          <input onChange={(e)=>setnewlist({...setnewuser, newPassword:e.target.value})}
            type={`${typeinput}`}
            className="form-control"
            placeholder="Enter new password"
          /> 
            <input style={{marginRight:".3em"}} type='checkbox' onClick={togglePassword}/>
            <label for="lang1">Check for visible password</label>
</div>
        <div className="d-grid">
          <p  onClick={()=>updatepassword(setnewuser)}  type="submit" className="btn btn-primary">
            Update Password
          </p>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to='/Signin'>sign in?</Link>
        </p>
      </form></div>
    )
  }
