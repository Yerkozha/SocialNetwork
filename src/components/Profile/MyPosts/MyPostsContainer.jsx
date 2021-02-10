import React from 'react';
import { connect } from 'react-redux';
import { actionCreatorAddPost, actionCreatorUppDateNewPostText } from '../../../redux/profileReducer';

import MyPosts from './MyPosts'


// const MyPostsContainer = (props) => {



//   return (<StoreContext.Consumer>
//     { store => {
//       let addPost = () => {


//         store.dispatch(actionCreatorAddPost());

//       }
//       let onPostChange = (text) => {

//         let action = actionCreatorUppDateNewPostText(text);
//         store.dispatch(action);
//       }


//       return (<MyPosts onAddPost={addPost} PostChange={onPostChange}
//         posts={store.getState().profilePage.posts} newPostText={store.getState().newPostText} />)
//     }
//     }
//   </StoreContext.Consumer>
//   )
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(actionCreatorAddPost());
    },
    PostChange: (text) => {
      let action = actionCreatorUppDateNewPostText(text);
      dispatch(action);
    }
  }
}

const mapStateToProps = (state) =>{
  return{
    newPostText: state.newPostText,
    posts: state.profilePage.posts
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;