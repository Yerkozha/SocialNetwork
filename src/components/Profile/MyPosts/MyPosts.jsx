import React from 'react';
import { actionCreatorAddPost, actionCreatorUppDateNewPostText } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map(m => <Post message={m.name} id={m.id} likesCount={m.likesCount} />);

  let newPostElement = React.createRef();


  let addPost = () => {
debugger;
  
  props.dispatch(actionCreatorAddPost());
    
  }
  let onPostChange = () =>{
    let text = newPostElement.current.value;
   debugger;
    let action =  actionCreatorUppDateNewPostText(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts </h3>
      <div>
        <div>


          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>

        {postsElements}

      </div>
    </div>
  )
}

export default MyPosts;