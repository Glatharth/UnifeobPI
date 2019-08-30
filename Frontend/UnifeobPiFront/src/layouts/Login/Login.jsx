import React from 'react';

import './login.css';

export default function Login() {
  return (

  <div className="ini">
    <div class="content">      

      <div id="login">
        <form method="post" action=""> 
          <h1>Login</h1> 
          <p> 
            <label for="email_login">E-mail</label>
            <input id="email_login" name="email_login" required="required" type="text" />
          </p>
          
          <p> 
            <label for="password">Senha</label>
            <input id="password" name="password" required="required" type="password" /> 
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
