import React, { useEffect,useState } from 'react'
import { Fakefetch } from './Fakefetch'

const Exerciseone = () => {
  const [Online,Setonline] = useState([])
  const handledata = async ()=>{
    try{
        const {data,status} = await Fakefetch("https://example.com/api/users/status")
        if(status === 200){
            console.log({data:data.users});
            Setonline(data.users);
        }
    }catch(error){
     console.log(error);
        
    }
  }
  useEffect(()=>{
    handledata();
  },[])  
  return (
   <>
     <ul>
        {
            Online.map(({name,Status})=>{
              return <li>
                <p style={{color: Status=='Online' ? "green" : "red"}}>{name} - {Status}</p>
              </li>  
})
        }
     </ul>
   </>
  )
}

export default Exerciseone