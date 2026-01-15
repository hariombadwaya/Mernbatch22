import  { useState } from 'react'
import { useSelector } from 'react-redux';
import { changeName, changeAge } from './slice/userSlice';
import { useDispatch } from 'react-redux';

const App = () => {

  // it is hook that is used to access the value which is store in a slice it take callback function and on that it takes one parameter called state. state holds the initial value of a slice
  const {username,name1} = useSelector((state)=>{
    console.log(state)
    return state.user
  });
  // dispatch is a hook that is used to call the functions of a reducers 
  const dispatch = useDispatch();
  console.log(username)
  const [value, setValue] = useState(username);
  const [age, setAge] = useState(name1)
  return (
    <div>
      <input type="text"  placeholder='enterNaame' 
      onChange={(e)=>setValue(e.target.value)}
      />
      <input type='number' placeholder='enter the age'
      onChange={(e)=>setAge(e.target.value)}></input>
      <button onClick={()=>dispatch(changeName(value))}>change Name</button>
      <p>Current Name : <mark>{username}</mark></p>
      <button onClick={()=>dispatch(changeAge(age))}> change the age</button>
      <p>Age is : <mark>{name1}</mark></p>
    </div>
  )
}

export default App
