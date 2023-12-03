import React from 'react'
import { Link } from 'react-router-dom';

function Navbare(){
  return (
    <div className="navbarcomponent">
    <div className="nav-icone rounded-circle p-3 bg-info text-white">
    <Link style={{ textDecoration: 'none', color: 'black'}}  to={'/'}> <h4> Local Q&A Hub </h4></Link>
    </div>
    <div className="navlist">
        <ul>
          <Link style={{ textDecoration: 'none', color: 'black'}} className="bg-light"  to={'/'}> <li>Home</li></Link>
          <Link style={{ textDecoration: 'none', color: 'black'}} className="bg-light" to={'/Contact'}><li >Contact Us</li></Link>
          <Link style={{ textDecoration: 'none', color: 'black'}} to={'/Signin'}>  
          <button type="button" className="btn btn-success">Sign in </button></Link>
          <Link style={{ textDecoration: 'none', color: 'black'}} to={'/Signup'}> 
          <button type="button" className="btn btn-danger">Sign Up</button></Link>
        </ul>
    </div>
</div>
  );
}

export default Navbare;