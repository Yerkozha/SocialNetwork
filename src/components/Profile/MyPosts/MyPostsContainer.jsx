import React from 'react';
import { actionCreatorAddPost, actionCreatorUppDateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts'


const MyPostsContainer = (props) => {

let state = props.store.getState();
  




  let addPost = () => {

  
  props.store.dispatch(actionCreatorAddPost());
    
  }
  let onPostChange = (text) =>{
   
    let action =  actionCreatorUppDateNewPostText(text);
    props.store.dispatch(action);
  }

  return <MyPosts onAddPost = {addPost} PostChange = {onPostChange} 
  posts= {state.profilePage.posts} newPostText = {props.newPostText}/>
}

export default MyPostsContainer;