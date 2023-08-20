import { useState } from 'react'
import Task from './Task.jsx'
import Form from './Form.jsx';
import Editform from './Editform.jsx';
function App() {
  const data=[{id:1, name:"Task 1",des:"To complete Todo task 1"}
,{id:2,name:"Task 2",des:"To complete Todo task 2"},
{id:3,name:"Task 3",des:"To complete Todo task 3"}];

const [user,setUser]=useState(data);
const inform={id:null,name:"",des:""};

const[editing,setEditing]=useState(false);
const[currentUser,setCurrentUser]=useState(inform);
const editRow=(user)=>{
  setEditing(true);
  setCurrentUser({id:user.id,name:user.name,des:user.des})
}

const updateUser=(id,updatedUser)=>{
  setEditing(false);
  setUser(user.map((users)=>(users.id===id?updatedUser:user)))
}


const adduser=(users)=>{
  users.id=user.length+1;
  setUser([...user,users])
}

const deleteUser =(id)=>{
  setUser(user.filter((user)=>user.id!==id))
}

  return (
    <>
     <div className='contmain'> 
 <h1 className='headtit'>To Do List</h1>
 <div className='neo'>
 {editing?(<div><Editform setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}></Editform></div>):(<Form  adduser={adduser}></Form>)}
 </div>
  <div className='bodyit'>
   <Task editRow={editRow} deleteUser={deleteUser} user={user}></Task><br />
  </div>
 </div>
       </>
  )
}

export default App
