import React from 'react'
import { useState } from 'react'

function Editform(props) {
   const[us,setUs] = useState(props.currentUser)

   const handleInput=(event)=>{
    const { name, value}=event.target

    setUs({...us,[name]:value});
}

  return (
    <>
<form onSubmit={event=>{
        event.preventDefault();
        if(!us.name||!us.des)return;
        props.updateUser(us.id,us);
        
    }}>
    <div className='ipsec'>
    <input type="text" value={us.name} onChange={handleInput} name='name' placeholder='Name'></input> 
    <br />
    <input type="text" value={us.des} onChange={handleInput} name='des' placeholder='Description'></input>
    <br></br>
    <button className='add-btn'>Update List</button>
    <button className='cn-btn' onClick={
        ()=>{
            props.setEditing(false);
        }
    }>Cancel</button>
  
   </div>
   </form>
    </>
    )
}

export default Editform