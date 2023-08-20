import React from 'react'
import { useState } from 'react'

function Task(props) {
    const[isClicked,setState]=useState(true);
    const but=()=>{
        if(isClicked==true){
            setState(false);
        }
        else{
            setState(true);
         }
         
    }


  return (
    <div className='bolero'>
        {props.user.length>0?(
                props.user.map((e)=>(
                    <div className='container'>
                    <div className='body' key={e.id}>
                        <h5>Name: {e.name} </h5>
                        <h5>Description: <p>{e.des}</p></h5>
        
                        <h5>Status: {isClicked ? <button onClick={()=>but()} className='gr'>Not Completed</button> : <button onClick={()=>but()} className='rd'>Completed</button>}</h5>
                        <button className='ed' onClick={
                            ()=>{
                                props.editRow(e)
                            }
                        }>Edit</button> 
                        <button className='dlt' onClick={()=>props.deleteUser(e.id)}>Delete</button>
        
                    </div> 
        
                </div>
                ))
            ):(alert("No Data i sAdded"))}
       
    </div>
  )
}

export default Task