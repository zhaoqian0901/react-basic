import React, { useEffect } from 'react'
import IndexRouter from './router/IndexRouter'
import './App.module.scss'
import axios from 'axios'
export default function App() {
  useEffect(()=>{
    axios.get("/ajax/moreComingList?token=&movieIds=1374577,1466394,475180,1198578,1385822,1518388,1495758,1500234,1427828,1259816&optimus_uuid=4FA4FC6015F811EF9C3C67B165175B0AAF2EF8AF85274787B40AE4F429720E2C&optimus_risk_level=71&optimus_code=10").then((res)=>{
      console.log(res,"res")
    })
  },[])
  return (
    <div>
      <IndexRouter></IndexRouter>
    </div>
  )
}
