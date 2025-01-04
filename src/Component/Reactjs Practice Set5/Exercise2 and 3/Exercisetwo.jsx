import React, { useEffect, useState } from 'react'
import { Fakefetch2 } from './Fakefetch2';

const Exercisetwo = () => {
    const [Stationary,setStationary] = useState([]);
    const [Highlight,setHighlight] = useState(false);

    const handleData = async()=>{
        try {
            const {data,status} = await Fakefetch2('https://example.com/api/products')
            if(status === 200){
                console.log({data: data.products});
                setStationary(data.products);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handlehighlight = ()=>{
        setHighlight(true);
    }
    useEffect(() => {
      handleData();
    }, [])
    
  return (
    <>
      <h1 className='font-bold'>Products</h1>
        {Highlight == false &&
            Stationary.map((item)=>{
                return <li>{item.name} - {item.price} - {item.quantity}</li>
            })
        }
        {
            Highlight && Stationary.filter((item)=>item.quantity>20).map((item)=>{
                return <li>{item.name} - {item.price} - {item.quantity}</li>
            })
        }
      <button className='bg-slate-600 text-white p-2 rounded-sm' onClick={handlehighlight}>Show product with Quality more than 20</button>
    </>
  )
}

export default Exercisetwo