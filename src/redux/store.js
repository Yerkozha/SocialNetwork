import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


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
            newMessageBody : ' '

        },
        profilePage: {
            posts: [
                { id: 1, name: "Hi, how are you?", likesCount: 2 },
                { id: 2, name: "It's my first post", likesCount: 3 }
            ],
            newPostText: 'Lalala'
        },
        sidebar : { 

        }

    },
 

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

        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)


        this._callSubscriber(this._state);
           
        
           
   
    }
}






export default store;