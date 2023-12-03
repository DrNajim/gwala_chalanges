import React from 'react'
import Search from './Search';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Article(){
  return (
    <div>
        <Search/>
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="TaySsir-prsentation-icone">
        <div className="nav-icone rounded-circle p-3 bg-info text-white">
        <h4> Local Q&A Hub </h4>
        </div>
      
        </div>
    </div>
  ) 
}

export default Article