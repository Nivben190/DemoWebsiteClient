import { useState } from 'react'
import './App.css'
import { UserService } from './services/userSevice';

function App() {
 const [userName, setUserName] = useState('')
  //call the user service login and set the user name from login response
   const userService = new UserService();
  userService.login('niv', 'nivben2000').then((response) => {
    setUserName(response); 
  } 
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>My Website </h1>
      <p>User Name : {userName}</p>
    </>
  )
}

export default App
