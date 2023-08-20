import React from 'react'
import { useState } from 'react'

function Form(props) {
    const inform={id:null,name:"",des:""};
    const[us,setUs]=useState(inform);

    const handleInput=(event)=>{
        const { name, value}=event.target

        setUs({...us,[name]:value});
    }
  return (
    <form onSubmit={event=>{
        event.preventDefault();
        if(!us.name||!us.des)return;
        props.adduser(us);
        setUs(inform);
    }}>
    <div className='ipsec'>
    <input type="text" value={us.name} onChange={handleInput} name='name' placeholder='Name'></input> 
    <br />
    <input type="text" value={us.des} onChange={handleInput} name='des' placeholder='Description'></input>
    <br></br>
    <button className='add-btn'>Add List</button>
  
   </div>
   </form>
  )
}

export default Form