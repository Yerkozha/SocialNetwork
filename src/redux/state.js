const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_TEXT_BODY = 'UPDATE_NEW_TEXT_BODY';

let store = {

    _state: {

        dialogsPage: {
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
            newTextBody : ' '

        },
        profilePage: {
            posts: [
                { id: 1, name: "Hi, how are you?", likesCount: 2 },
                { id: 2, name: "It's my first post", likesCount: 3 }
            ],
            newPostText: 'Lalala'
        }

    },
    _callSubscriber() {
        console.log('');
    }
    ,

    getState() {
        return this._state;
    }
    ,
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    /*addPost() {

        let newPost = {
            id: 1,
            name: this._state.profilePage.newPostText,
            likesCount: 4
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '  ';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {


        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }
    ,*/


    _callSubscriber() {
        console.log('');
    }
    ,

    dispatch(action) {

        switch (action) {
            case ADD_POST: let newPost = {
                id: 1,
                name: this._state.profilePage.newPostText,
                likesCount: 4
            }
   
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state); break;
            case UPDATE_NEW_TEXT_BODY:
                this._state.dialogsPage.newTextBody = action.newBody;
                this._callSubscriber(this._state);
                break;
            case SEND_MESSAGE:
                let newMessage = {
                    id : 4,
                    name : this._state.dialogsPage.newTextBody
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newTextBody = ''
                this._callSubscriber(this._state);
                break;

            default: break;
   
   
        }
        /*
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 1,
                name: this._state.profilePage.newPostText,
                likesCount: 4
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }*/

    }
}

export const actionCreatorAddPost = () => ({ type: ADD_POST })
export const actionCreatorUppDateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const actionCreatorSendMessage = () => ({ type: SEND_MESSAGE })
export const actionCreatorUppDateNewTextBody = (body) => ({ type: UPDATE_NEW_TEXT_BODY, newBody: body })



export default store;

/* switch (action) {
         case "ADD-POST": let newPost = {
             id: 1,
             name: this._state.profilePage.newPostText,
             likesCount: 4
         }

             this._state.profilePage.posts.push(newPost);
             this._state.profilePage.newPostText = '  ';
             this._callSubscriber(this._state);

         case "UPPDATE-NEW-POST-TEXT":
             this._state.profilePage.newPostText = action.newText;
             this._callSubscriber(this._state);


     }*/