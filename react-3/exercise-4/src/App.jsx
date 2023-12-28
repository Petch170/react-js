import usePost from "./hook/usePost";
import { getUser } from "./hook/me";
import "./App.css";
import { useState } from "react";

function App() {
  const { get, remove, update, create } = usePost();
  const posts = get();

  const createPost = (content, image) => { //console.log(content,image); เพื่อดูว่าสองค่าออกไหม
    let id = `id-${Math.floor(Math.random() * 10000)}`; // generate id here by Math.random() (please use integer)
    let time = new Date().toDateString(); // generate timestamp here by (new Date().toDateString())
    const user = getUser();
    let data = {
      id:id,
      time:time,
      author:user.author,
      avatar:user.avatar,
      content:content,
      image:image,
    };
    // console.log(data);
    create(data);//จะดูแค่ใส่dataถูกไหม
  };
//create post จะเช็คinputว่าKEYถูกไหม ดูในไฟล์usePost.jsx แถวที่41-56


  return ( // เรียกรับค่าcreatePostในแถวที่23 ซึ่งจะรับค่าในแถวที่10. 2ค่าเท่านั้น
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer createPost={createPost}/>  
      <FeedSection posts={posts} removeHandler={remove} />
    </div>
  );
}

const PostContainer = (props) => {
  const createPost = props.createPost //รับค่าจากแถว23
  
  // สร้าง state management ทั้งcontent and img
  const [content, setContent] = useState();
  const [image, setImage] = useState();

  // สร้างฟังก์ชั่นcreatePostInPostContainer เพื่อรับค่าเมื่อclick btn post 
  const createPostInPostContainer = () => { //ฟังก์ชั่นนี้ต้องเรียกใช้งานฟังก์ชัน createPost แถว10 ให้ได้ โดยส่งให้เรียกได้ที่PostContainer ในreturn function App
   
    // console.log("create Post Container");
    // console.log("content =>", content); // ให้logค่าให้ดูก่อน
    // console.log("img=>",image);// ให้logค่าให้ดูก่อน
  
    createPost(content,image);// เรียกรับค่า
  }
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?" //content
          onChange={(e) => setContent(e.target.value)} //ใช้e.target.value เพื่อดึงค่าที่ถูกพิมพ์เข้าไปในกล่อง
        ></textarea>
        <input type="text" className="post-input" placeholder="img url" onChange={(e) => setImage(e.target.value)} />
        {/*ใส่input ข้างใต้ textarea เพื่อให้ใส่ลิ้งค์รูปภาพได้ และต้องมีclaaNameด้วย ถ้าไม่มีกรอบurl จะไม่ตรงกัน และใส่onchage เพื่อรับค่าที่เปลี่ยนแปลงไป */}
      </div>
      <div className="post-actions">
        <button className="post-button" onClick={() => createPostInPostContainer()}>Post</button>
        {/* เรียกใช้ฟังก์ชั่น createPostInPostContainer เมื่อclick btn post */}
      </div>
    </div>
  );
};

const FeedSection = ({ posts, removeHandler }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          id={post.id}
          author={post.author}
          avatar={post.avatar}
          time={post.time}
          content={post.content}
          image={post.image}
          removeHandler={removeHandler}
        />
      ))}
    </div>
  );
};

const Post = ({ id, author, avatar, time, content, image, removeHandler }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt="User 3" />
        <div>
          <div className="post-author">{author}</div>
          <div className="post-time">{time}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <img className="post-image" src={image} alt="Post 3" />
      <button onClick={() => removeHandler(id)}>DELETE</button>
    </div>
  );
};

export default App;
