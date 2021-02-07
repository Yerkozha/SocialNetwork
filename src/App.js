import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import './App.css';
import { Route } from 'react-router-dom';



function App(props) {

  

debugger;
  return (
   
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={()=> <Profile store = {props.store} 
        newPostText={props.store.getState().profilePage.newPostText} />} />
        <Route path='/dialogs' render={()=> <DialogsContainer store={props.store} 
        newMessageBody={props.store.getState().dialogsPage.newMessageBody}/>} />
        
      </div>

    </div>
    
  );
}

export default App;
