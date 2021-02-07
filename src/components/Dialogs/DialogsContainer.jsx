import React from "react";
import store, { actionCreatorSendMessage, actionCreatorUppDateNewTextBody } from "../../redux/dialogsReducer";
import Dialogs from './Dialogs'









const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    
   
  

    let onMessageChange = (body) => {
        
        props.store.dispatch(actionCreatorUppDateNewTextBody(body))
    }
    let onSendMessageClick = () =>{
        
        props.store.dispatch(actionCreatorSendMessage())
    }



    


    return (<Dialogs MessageChange = {onMessageChange} SendMessageClick = {onSendMessageClick}
    newMessageBody = {props.newMessageBody} state ={state}/>)
}


export default DialogsContainer;
