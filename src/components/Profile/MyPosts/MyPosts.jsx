import React from 'react';
import { updateNewPostText } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map(m => <Post message={m.name} id={m.id} likesCount={m.likesCount} />);

  let newPostElement = React.createRef();



  let addPost = () => {

    
  props.addPost();
    
  }
  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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