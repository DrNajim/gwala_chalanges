import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UniversitePublic from './UniversitePublic'
import { useState } from 'react'
import {  MDBBtn} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { getList } from '../Redux/Reducer/Questionposts';
function Qustions(){
  const [selector, setItemList] = useState(null);

  const dispatch= useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getList());
        setItemList(response.payload || []); // Make sure to handle the case where response.payload is null
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  console.log(selector)
  const navigate = useNavigate();
  return (
    <div>
<div style={{textAlign:"center", display: "flex", justifyContent:"space-evenly" }}>
          <div style={{textAlign:"center", width: "50vw"}}>      <h2>This is all Question</h2>
            Happy to share with us <MDBBtn type='submit' className='mb-2' block onClick={() =>navigate("/Post-Qustion")}>
            Post a Question
      </MDBBtn>      </div>

        <div className="search-videoflag"></div>
      </div>
      <div className="Universite_component">
        <div className="Universite_card">
          {selector?.map((item) => (
            <UniversitePublic key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Qustions