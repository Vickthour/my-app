import React, {useState} from 'react';
//import Header from '../section/Header';
//import Note from '../section/Note';
//import Footer from '../section/Footer';
//import Contacts from '../inc/Contacts';
//import Display from './Display';
import Form from '../inc/Form';



function App() {

  var [isLogin, isSign] = useState(true);
  function truly(){
    isSign(isLogin = true);
  }
  function untruly(){
    isSign(isLogin = false);
  }

  return (
    <div className='container'>      
      {/* <Header />  
        <Note />
        <Display name={Contacts[1].name} phone={Contacts[1].phone} email={Contacts[1].email} />
        <Display name={Contacts[2].name} phone={Contacts[2].phone} email={Contacts[2].email} />
        <Display name={Contacts[0].name} phone={Contacts[0].phone} email={Contacts[0].email} />
      <Footer />  */}
      <h1>Hello, Vic</h1>
        {!isLogin ? <button className='btn' onClick={truly}>Login?</button> : <button className='btn' onClick={untruly}>Register?</button>}
      <Form value={isLogin} />
    </div>
  );
}

export default App;
