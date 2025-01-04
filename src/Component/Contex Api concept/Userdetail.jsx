import React, { useContext } from 'react'
import { Usercontex } from '../../Contex/Contex'
import { useNavigate, useParams } from 'react-router-dom';

const Userdetail = () => {
  const { id } = useParams();
  const [ details ] = useContext(Usercontex) 
  console.log(details[id]);
  const navigate = useNavigate();
  const goback = ()=>{
    navigate(-1);
  }
  return (
    <div>
      <h4>Usersinformation</h4>
      <h1>{details[id].email}</h1>
      <h4>{details[id].username}</h4>
      <button className='bg-red-400 mx-3 px-3 mt-3 rounded-sm' onClick={goback}>Back</button>
    </div>
  )
}

export default Userdetail