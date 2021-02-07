
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, name: "Hi, how are you?", likesCount: 2 },
        { id: 2, name: "It's my first post", likesCount: 3 }
    ],
    newPostText: 'Lalala'
}

const profileReducer = (state = initialState,action) =>{

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 1,
                name: state.newPostText,
                likesCount: 4
            }

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default: return state;

    }
 
}


export const actionCreatorAddPost = () => ({ type: ADD_POST })
export const actionCreatorUppDateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;