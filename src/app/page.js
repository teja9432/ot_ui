"use client"
import { Footer } from "@/components/Footer"
import {Header} from "../components/Header"
import { ctx } from "@/context/appContext"
import { Test } from "@/components/Test"
import { Login } from "@/components/Login"
import { useContext } from "react"
export default function App(){
  const ctxData=useContext(ctx);
  const {state}=ctxData
  return <div>
    <Header/>
    {state.isLoggedIn?<Test/>:<Login/>}
    <Footer/>
  </div>

}