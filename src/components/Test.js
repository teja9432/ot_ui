import ServerCall from '@/common/ServerCall';
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
export const Test = () => {
  const [questions,setQuestions]=useState([]);
  const fnGetQuestions=async()=>{
    try{
   const resp=await ServerCall.fnSendGetreq("test/get-que")
   setQuestions(resp.data);
   console.log(resp.data);
    }catch(ex){
     console.log(ex);
    }
  }
  useEffect(()=>{
    fnGetQuestions()
  },[])
  return (
    <div>
      {
      
        questions.map((obj,ind)=>{
          const {_id,que,type,opt1,opt2,opt3,opt4,ans}=obj;
            return <Card>
            <h3>{ind+1} {que}</h3>
            <p><input name={_id} type={type=='M'?"checkbox":"radio"}/>{opt1}</p>
            <p><input name={_id} type={type=='M'?"checkbox":"radio"}/>{opt2}</p>
            <p><input name={_id} type={type=='M'?"checkbox":"radio"}/>{opt3}</p>
            <p><input name={_id} type={type=='M'?"checkbox":"radio"}/>{opt4}</p>
            </Card>
        })
      }

      
    </div>
  )
}
