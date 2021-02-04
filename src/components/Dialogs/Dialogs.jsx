import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import store, { actionCreatorSendMessage, actionCreatorUppDateNewTextBody } from "../../redux/state";










const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let newTextBody = state.newTextBody;
    

    let onMessageChange = (e) => {
        let body = e.target.value;
        store.dispatch(actionCreatorUppDateNewTextBody(body))
    }
    let onSendMessageClick = () =>{
        props.store.dispatch(actionCreatorSendMessage())
    }



    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = state.messages.map(m => <Message message={m.name} id={m.id} />);
  


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={newTextBody} onChange={onMessageChange} placeholder={"Enter message"}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>
                    Send
            </button>
            </div>
        </div>
    )

}

export default Dialogs;
