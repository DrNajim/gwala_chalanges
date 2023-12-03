import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Footer() {
  const gotto=()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <Button onClick={()=>gotto()} size="lg" variant="secondary">Go to Top</Button>{' '}
        <div>
        <Link style={{ textDecoration: 'none', color: 'black'}} to={'/Signin'}>  
          <button size="lg" type="button" className="btn btn-success">Sign in </button></Link>
          <Link style={{ textDecoration: 'none', color: 'black'}} to={'/Signup'}> 
          <button size="lg" type="button" className="btn btn-danger">Sign Up</button></Link>
        <Button variant="outline-primary" size="lg" onClick={() => window.location = 'mailto:this_just_an_essay@domain.com'}>Contact Me</Button>{' '}


        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <div className="nav-icone rounded-circle p-3 bg-info text-white">
        <h4> Local Q&A Hub </h4></div>
              <p>
              Have a burning question about the best local eateries, hidden gems, or upcoming events? Post it on LocaQuery! Connect with users nearby who can provide valuable insights and personalized recommendations.
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Sign up to:</h6>
              <p>
              <a href='#!' className='text-reset'>
                  Post your question
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Add answer
                </a>
              </p>
              <p>
              <a href='#!' className='text-reset'>
                  Search your local neighborhood
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Casablanca, Morocco
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
        © 2023 Copyright:  
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Local Q&A Hub.com
        </a>
      </div>
    </MDBFooter>
  );
}