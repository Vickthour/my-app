import React from 'react';
//import Header from '../section/Header';
//import Note from '../section/Note';
//import Footer from '../section/Footer';
//import Contacts from '../inc/Contacts';
//import Display from './Display';
import Form from './Form';


function Misc() {
const state = React.useState;
  var [isLogin, isSign] = state[true]

  function truly(){
    isLogin = true;
  }
  function untruly(){
    isSign(isLogin = false);
  }



  return (
    <div>      
      {/* <Header />  
        <Note />
          
        <Display name={Contacts[1].name} phone={Contacts[1].phone} email={Contacts[1].email} />
        <Display name={Contacts[2].name} phone={Contacts[2].phone} email={Contacts[2].email} />
        <Display name={Contacts[0].name} phone={Contacts[0].phone} email={Contacts[0].email} />
      <Footer />  */}
      <button onClick={truly}>True</button>
     <button onClick={untruly}>Untrue</button>

      <Form value={isLogin} />
    </div>
  );
}


export default Misc;
