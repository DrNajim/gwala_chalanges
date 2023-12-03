import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { verifuser } from '../Redux/Reducer/Siginreducer'
import Swal from 'sweetalert2';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit'
function Signin () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const verify = (setnewuser)=>{
    dispatch(verifuser(setnewuser))
   .then(res => { if(res.payload==='You are connected successfully') {
    return res.data, showAlert(true), setTimeout(()=>{ navigate("/Qustions") }, 1000);}      
    else {return res.data, showAlert(false)}
}).catch(err => console.log(err));
   }     
   const showAlert = async (type) => {
    if (type === true) {
        Swal.fire({
            title: 'You are connected successfully',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }   
    else {
        Swal.fire({
            icon: 'question',
            title: 'Your Email or Password Wrong',
            text: 'Verify Your Info',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}
  const [setsign, setcurrentsign] = useState({ email: '', password: '' })

  return (
    <MDBContainer className='my-5 gradient-form'>
      <MDBRow>
        <MDBCol col='6' className='mb-5'>
          <div className='d-flex flex-column ms-5'>
            <div className='text-center'>
              <div style={{ width: '185px' }} className="nav-icone rounded-circle p-3 bg-info text-white">
        <h4> Local Q&A Hub </h4>
    </div>
              
            </div>
            <p>Please login to your account</p>
            <MDBInput
              onChange={e =>
                setcurrentsign({ ...setsign, email: e.target.value })
              }
              wrapperClass='mb-4'
              label='Email address'
              id='form1'
              type='email'
            />
            <MDBInput
              onChange={e =>
                setcurrentsign({ ...setsign, password: e.target.value })
              }
              wrapperClass='mb-4'
              label='Password'
              id='form2'
              type='password'
            />
            <div className='text-center pt-1 mb-5 pb-1'>
              <MDBBtn
                onClick={() => verify(setsign)}
                className='mb-4 w-100 btn-success'
              >
                Sign in
              </MDBBtn>

              <Link to='/Recoverpassword'>
                <a className='text-muted' href='#!'> Forgot password? </a></Link>
            </div>
            <div className='d-flex flex-row align-items-center justify-content-center pb-4 mb-4'>
              <p className='mb-0'>Don't have an account?</p>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={'/Signup'}
              >
                <MDBBtn outline className='mx-2' color='danger'>
                  Register
                </MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCol>
          <div className='d-flex flex-column justify-content-center bg-info h-100 mb-4'>
            <div className='text-white px-3 py-4 p-md-5 mx-md-4'>
              <h4 class='mb-4'>We are more than just a company</h4>
              <p class='small mb-0'>
              Are you new in town, like Karima, with a multitude of Qustions about your surroundings? Look no further! Local Q&A Hub
 is here to bridge the gap between curiosity and local expertise.
              </p>
            </div>  
          </div>
      </MDBRow>
    </MDBContainer>
  )
}

export default Signin
