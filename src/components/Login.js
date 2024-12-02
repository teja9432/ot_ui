import React, { useState ,useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ServerCall from '@/common/ServerCall';
import {ctx} from '@/context/appContext';
export const Login = () => {
  const [msg,setMsg]=useState("");
  const {dispatch}=useContext(ctx);
    const [data,setData]=useState({});
    const fnChange=(eve)=>{
        const {id,value}=eve.target;
        setData({...data,[id]:value})
    }
    const fnLogin=()=>{
        console.log(data);
        ServerCall.fnSendPostreq("auth/login",data)
        .then((res)=>{
          console.log(res);
          const{token,message}=res.data;
          console.log(res.data);
          if(token){
            sessionStorage.token=res.data.token;
            dispatch({
              type:"LOGIN",
              payload:true

            });
        }else{
         
          setMsg(message)
       } //console.log(res.data))
    })
        .catch((res)=>{
          console.log(res);
        setMsg(res.message)
    })
  }
  return (
    <div className='container-fluid'>
      <div className='text-center  font-weight-bold my-3'><h2>Login</h2></div>
      <div className='row'>
      <div className='col-sm-5 text-end'>
        <b className='mui-lbl'>user ID:</b>
      </div>
      <div className='col-sm-5 mui-tb-div'>
      <TextField onChange={fnChange} id="uid" label="user id" variant="standard" />
      </div>
      <div className='row'>
      <div className='col-sm-5 text-end'>
        <b className='mui-lbl'>password:</b>
      </div>
      <div className='col-sm-5  mui-tb-div'>
      <TextField onChange={fnChange} id="pwd" label="password" variant="standard" />
      </div>
    </div>
    </div>
    <div className='offset-sm-5 col-sm-7 mt-3'>
    <Button onClick={fnLogin} variant="contained">Login</Button>
    </div>
    <div className='row text-center mt-3'><b className='text-danger'>{msg}</b></div>
    </div>
  )

}
