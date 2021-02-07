import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map(m => <Post message={m.name} id={m.id} likesCount={m.likesCount} />);

  let newPostElement = React.createRef();


  let addPost = () => {

  props.onAddPost();
    
  }
  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.PostChange(text)
    
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