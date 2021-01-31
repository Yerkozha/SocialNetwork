import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";










const Dialogs = (props) => {


    let addMessage = React.createRef();

    let callback = () => {
        let text = addMessage.current.value;
        alert(text);
    }



    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.name} id={m.id} />);



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={addMessage}> Введите сообщение </textarea>
            </div>
            <div>
                <button onClick={callback}>
                    Отправить сообщение
            </button>
            </div>
        </div>
    )

}

export default Dialogs;
