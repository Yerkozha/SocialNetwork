
let rerenderEntireTree = () =>{
    console.log('');
}

let state = {

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
        newPostText : 'Lalala'
    }

}
window.state = state;
export const addPost = ()=>
{
 
    let newPost = {
        id: 1,
        name : state.profilePage.newPostText,
        likesCount : 4
    }
    
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '  ';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText)=>
{
 
    
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer)=>{
    rerenderEntireTree = observer;
}

export default state;