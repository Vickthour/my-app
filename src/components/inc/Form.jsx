import React from 'react'
import Input from './Input';


export default function Form(props) {
  return (
    
    <form className='form'>
        <Input name='fname' type="text" placeholder="Username" />
        <Input name='pass' type="password" placeholder="Password" />
        {!props.value ? <div><Input name='cpass' type="password" placeholder="Confirm Password" /><button title='Submit'>Register</button> </div> :  <button title='Submit'>Login</button> }
        
    </form>
  )
}
