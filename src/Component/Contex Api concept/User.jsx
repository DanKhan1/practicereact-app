import React, { useContext } from 'react'
import { Usercontex } from '../../Contex/Contex'
import { Link } from 'react-router-dom';
const User = () => {
 const [details,setdetails] = useContext( Usercontex);
 
  return (
    <div>
      <h4>Userdetails</h4>
      <div className='flex w-1/2 flex-col mt-10'>
        {
          details.map((item)=>(
            <Link to={`/first/${item.id}`} className='mb-3 bg-red-300 p-3'>{item.email}</Link>
          ))
        }
      </div>
    </div>

  )
}

export default User