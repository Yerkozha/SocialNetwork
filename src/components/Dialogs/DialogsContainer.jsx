import React from "react";
import { connect } from "react-redux";
import store, { actionCreatorSendMessage, actionCreatorUppDateNewTextBody } from "../../redux/dialogsReducer";
import Dialogs from './Dialogs'








/*
const DialogsContainer = (props) => {
   
    
   
  



    


    return ( <StoreContext>
        { store =>{

let onMessageChange = (body) => {
        
    store.dispatch(actionCreatorUppDateNewTextBody(body))
}
let onSendMessageClick = () =>{
    
   store.dispatch(actionCreatorSendMessage())
}



    return <Dialogs MessageChange = {onMessageChange} SendMessageClick = {onSendMessageClick}
    newMessageBody = {store.getState().newMessageBody} state = {store.getState().dialogsPage}/>}
        }
    </StoreContext>)

}*/
const mapStateToProps = (state) =>{
    return {
        state : state.dialogsPage,
        newMessageBody : state.dialogsPage.newMessageBody
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        MessageChange : (body) =>{ dispatch(actionCreatorUppDateNewTextBody(body))},
        SendMessageClick : () => { dispatch(actionCreatorSendMessage())}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
