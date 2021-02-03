

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
            ]

        },
        profilePage: {
            posts: [
                { id: 1, name: "Hi, how are you?", likesCount: 2 },
                { id: 2, name: "It's my first post", likesCount: 3 }
            ],
            newPostText: 'Lalala'
        }

    },
    getState() {
        return this._state;
    }
    ,
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
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('');
    }
    ,
    dispatch(action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 1,
                name: this._state.profilePage.newPostText,
                likesCount: 4
            }

                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '  ';
                this._callSubscriber(this._state);
        }
        else if(action.type === 'UPPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
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
    }
}

export const actionCreatorAddPost = () => {
    return { type: 'ADD-POST' };
}
export const actionCreatorUppDateNewPostText = (text) => {
    return { type: 'UPPDATE-NEW-POST-TEXT', newText: text };
    
}

export default store;