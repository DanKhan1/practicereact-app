import React, { useEffect, useState } from 'react'
import { Fakefetch4 } from './Fakefetch4';

const Exercisefive = () => {
  const [Imgdetail,setimgdetail] = useState(null);
  const handledata = async()=>{
    try{
        const {data,status} = await Fakefetch4('https://example.com/api/users');
        if(status === 200){
            console.log(data);
            
            setimgdetail(data)
        }
    }catch(error){
        console.log(error);
        
    }
  }
  useEffect(() => {
    handledata();
  }, [])
    return (
    <>
     <h1 className='font-extrabold text-5xl'>User feed</h1>
    { Imgdetail ? (
        Imgdetail.map((item)=>{
            return <div>
                <img src={item.image} />
                <p>Name: {item.name}</p>
                <p>Likes: {item.likes}</p>
                <p>Comments: {item.comments}</p>
            </div>
        })
      ):(
        <p>Loading..</p>
      )
    }
    </>
  )
}

export default Exercisefive