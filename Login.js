
import React,{useState} from "react";
import './Login.css';

// Component for login functionality
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication (dummy example)
    if (username === 'sk' && password === '12345') {
      onLogin(true);
    } else {
      alert('Invalid username or password');
    }
  };



  const handleCreateAccount = () => {
    alert('Redirect to create account page'); // Placeholder action, replace with your functionality
  };

  return (
   <div className="pic">
 <div className="login-form">
      <h2 ><a href="#" class="text-white bg-dark"> Login </a>    </h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCreateAccount} className="create-account-btn">Create Account</button>
    </div>
    <div className='Login'>

<h4> hEy BuDdiEs! <span style={{color: "red"}}> WeLcOmE </span>  tO U :) ^ *-_-* ^ </h4> 
</div>


   </div>



        
    
   
  );
};
export default Login;