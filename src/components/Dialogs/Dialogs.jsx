import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";











const Dialogs = (props) => {
   
    let state = props.state
    let newTextBody = React.createRef();
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.name} id={m.id} />);

    let onMessageChange = () => {
        let body = newTextBody.current.value;
        props.MessageChange(body)
    }
    let onSendMessageClick = () =>{
        
        props.SendMessageClick();
    }



    
  


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={newTextBody} value={props.newMessageBody}></textarea>
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
