import React, {useState} from 'react';

import './login.css';

import api from '../../config/api'

export default function Login() {
  const [data, setData] = useState({})

  async function handleSubmit(e) {
    e.preventDefault()
    
    const response = await api.post('/auth/register', data)

    alert(JSON.stringify(response.data))
  }

  return (

  <div className="ini">
    <div class="content">      

      <div id="login">
        <form method="post" action="" onSubmit={handleSubmit}> 
          <h1>Login</h1> 
          <p> 
            <label for="email">E-mail</label>
            <input 
              id="email" 
              name="email" 
              required="required" 
              type="text"
              onChange={e=> setData({...data, email: e.target.value})} />
          </p>
          
          <p> 
            <label for="password">Senha</label>
            <input 
              id="password" 
              name="password" 
              required="required" 
              type="password"
              onChange={e=> setData({...data, password: e.target.value})} /> 
          </p>
          
          <p> 
            <input type="submit" value="Login" /> 
          </p>
          
        </form>
      </div>

      
    </div>
  </div>  
  );
}
