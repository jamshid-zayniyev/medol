import React, { useState } from 'react'
import Home from './page/home'
import { BrowserRouter } from 'react-router-dom'
import { useActiveMenu } from "react-active-menu";
import Loader from "./components/Loader"
const App = () => {
  const [loading,setLoading] = useState(true)
  const { registerContainer } = useActiveMenu(
    {
      smooth: true
    }
  );
    setTimeout(()=>{
      setLoading(false)
    },4000)
  return (
    <div ref={registerContainer}>
      <BrowserRouter>
      {loading ?  <Loader/> : <Home/>}
      {/* <Loader/> */}
     
      </BrowserRouter>
    </div>
  )
}

export default App