import React, { useEffect, useState } from 'react'
import { Fakefetch5 } from './Fakefetch5'

const Exercisesix = () => {
  const [chatdetail,setchatdetail] = useState(null);
  const handledata = async()=>{
    try {
      const {data,status} = await Fakefetch5('https://example.com/api/userchat')
      if(status===200){
        console.log({data});
        setchatdetail(data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handledata();
  }, []);
  return (
    <>
    <h1>Whatsapp chat</h1>
      {
        chatdetail ? (
        chatdetail.map((item)=>{
          return <div>
            <h1 className='font-bold text-3xl'>{item.name}'s chat</h1>
            {
              item.messages.map((items)=>{
                return <div>
                  <p><span className='font-bold text-xl'>{items.from}</span> - {items.message}</p>
                  </div>
              })
            }
          </div>
        })
        ):(
         <p>Loading ...</p>
        )
      }
    </>
  )
}

export default Exercisesix