import React, { createContext,useState } from 'react'
export  const Usercontex = createContext();  
function Contex(props) {
  const [first, setfirst] = useState([
    {"id": 0,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$"
    },
    {
        "id": 1,
        "email": "morrison@gmail.com",
        "username": "mor_2314",
        "password": "83r5^_"
    },
    {
    "id": 2,
    "email": "kevin@gmail.com",
    "username": "kevinryan",
    "password": "kev02937@"
    }
  ])
  return (
        <Usercontex.Provider value={[first, setfirst]}>{props.children}</Usercontex.Provider>
  )
}

export default Contex