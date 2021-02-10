
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_TEXT_BODY = 'UPDATE_NEW_TEXT_BODY';


let initialState = {
    
    dialogs: [
        { id: 1, name: "Yerkozha" },
        { id: 2, name: "Dada" },
        { id: 3, name: "Asik" },
        { id: 4, name: "Baur" },
        { id: 5, name: "Adil" }
    ],
    messages: [
        { id: 1, name: "Assalamaleikum" },
        { id: 2, name: "Kalasin" },
        { id: 3, name: "Kaidasin" }
    ],
    newMessageBody : 'Hello'
}

const dialogsReducer = (state = initialState ,action) => {
    switch(action.type){
        case UPDATE_NEW_TEXT_BODY:
            return {
                ...state,
                newMessageBody : action.newBody
            };
        case SEND_MESSAGE:
            let newMessage = {
                id : 4,
                name : state.newMessageBody
            }
            return {
                ...state,
                messages : [...state.messages,newMessage],
                newMessageBody : ' '
            };
        default: return state
    }



}


export const actionCreatorSendMessage = () => ({ type: SEND_MESSAGE })
export const actionCreatorUppDateNewTextBody = (body) => ({ type: UPDATE_NEW_TEXT_BODY, newBody: body })

export default dialogsReducer;
