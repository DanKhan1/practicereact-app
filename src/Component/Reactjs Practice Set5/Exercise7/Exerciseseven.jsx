import React, { useEffect, useState } from 'react'
import { Fakefetch6 } from './Fakefetch6'

const Exerciseseven = () => {
    const [commentdetail,setcommentdetail] = useState(null);
    const handledata = async () => {
        try {
            const {data,status} = await Fakefetch6('https://example.com/api/comments');
            if(status===200){
                console.log({data: data.comments});
                setcommentdetail(data.comments)
            }
        } catch(error){
            console.log(error);
        }
    }
    const handleclick = (index)=>{
    const updated = commentdetail.filter((_,items)=>items != index);
    console.log(updated);
    
    setcommentdetail(updated);
    }
    useEffect(() => {
      handledata();
    }, [])

  return (
    <>
    <h1>Comments</h1>
    {
        commentdetail ? (
            commentdetail.map((item,index)=>{
              return <div key={index}>
                    <h1 className='font-bold text-3xl'>{item.name}</h1>
                    <p className='font-semibold'>{item.text}</p>
                    <button className='p-3 rounded-sm bg-slate-700' onClick={()=>handleclick(index)}>Delete</button>
                </div>
            })
        ):(
            <p>Loading...</p>
        )
    }
    </>
  )
}

export default Exerciseseven