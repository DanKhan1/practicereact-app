import React, { useEffect, useState } from 'react'
import { fakeFetch3 } from './Fakefetch3'

const Exercisefour = ({heading,width_of_img,height_of_img}) => {
  const [imgdetail,setimgdetail] = useState(null);
  
  const handledata = async ()=>{
    try{
      const {data,status} = await fakeFetch3('https://example.com/api/user');
      if(status === 200){
        console.log({data});
        setimgdetail(data)
      } 
    }catch(error){
      console.log(error);  
    }
  }
  useEffect(() => {
    handledata();
  }, []);
  return (
    <>
    <h1 className='font-extrabold text-5xl'>{heading}</h1>
         {
          imgdetail ? (  <div>
              <img style={{width: width_of_img, height: height_of_img}} src={imgdetail.image} />
              <p>Names: {imgdetail.name}</p>
              <p>Likes: {imgdetail.likes}</p>
              <p>Comments: {imgdetail.comments}</p>
            </div>
          ):(
            <p>Loading...</p>
          )
         }
    </>
  )
}

export default Exercisefour