import React, {useState} from 'react';
import Form from '../inc/Form';


export default function SignIn() {

    
  var [isLogin, isSign] = useState(true);
  function truly(){
    isSign(isLogin = true);
  }
  function untruly(){
    isSign(isLogin = false);
  }
 
    return (
      <div>
        <h1>Hello, Vic</h1>
        {!isLogin ? <button className='btn' onClick={truly}>Login?</button> : <button className='btn' onClick={untruly}>Register?</button>}
      <Form value={isLogin} />
      </div>
    )
  
}