import React, {useState} from 'react';

import { Redirect } from 'react-router-dom';

import './login.css';

import api from '../../services/api'

import {isAuthenticated} from '../../services/auth'

export default function Login({ history }) {
  
  const [data, setData] = useState({})

  async function handleSubmit(e) {
    e.preventDefault()
    
    const response = await api.post('/auth/authenticate', data)

    const newToken = response.data.token;
    const newCompany = response.data.admin.company;

    localStorage.setItem('@admin-Token', newToken);
    localStorage.setItem('@admin-Company', newCompany);

    history.push("/");

  }

  const [toHome, setToHome] = useState(isAuthenticated);

  return (

  <>

  {toHome ? <Redirect to="/"/>: null}

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
            <input id="btnLogin" type="submit" value="Login" />  
          </p>
          
        </form>
      </div>

      
    </div>
  </div>  

    </>

  );
}
