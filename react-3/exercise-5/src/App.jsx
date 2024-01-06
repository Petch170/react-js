import usePost from "./hook/usePost";
import { getUser } from "./hook/me";
import "./App.css";
import { useState } from "react";

function App() {
  const { get, remove, update, create } = usePost();
  const posts = get();
  const [editId,setEditId]=useState();

  const createPost = (content, image) => {
    let id = `id-${Math.floor(Math.random() * 10000)}`; // generate id here by Math.random() (please use integer)
    let time = new Date().toDateString(); // generate timestamp here by (new Date().toDateString())
    const user = getUser();
    const data = {
      id: id,
      author: user.author,
      avatar: user.avatar,
      time: time,
      content: content,
      image: image,
    };
    create(data);
  };

  const updatePost =(id,content,image) =>{
    // console.log('Editid',editId);
    // console.log('content',content);
    // console.log('image',image);
    // console.log('id',id);
    //ด้านล่างดึงจากข้อมูลที่มีอยู่แล้ว
    let time = new Date().toDateString(); // generate timestamp here by (new Date().toDateString())
    const user = getUser(); 
  

   const updateData={
    id:editId,
    content:content,
    image:image,
    time:time,
    author: user.author,
    avatar: user.avatar,
   }

   console.log(updateData);
   update(updateData);
  }

  return (
    <div id="app">
      <h1>Enter Data</h1>

      <PostContainer create={createPost} />
      <PostUpdateContainer update={updatePost} editId={editId}/>
      <FeedSection posts={posts} removeHandler={remove} setEditId={setEditId}/>
    </div>
  );
}

//Update Post
const PostUpdateContainer = ({ update,editId }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const[id,setId]=useState("");

  const updatePostInContainer = () => {
    update(id,content,image)
    //ลองlog ค่าไว้ดู
    // console.log('content',content)
    // console.log('image',image)
    // console.log('id',id)
  };
 
  return (
    <div className="post-container">
      <h3>Update Post</h3>
      <div className="post-content">
      <input
          className="post-input"
          type="text"
          placeholder="id" //เพิ่ม id เข้ามา เพราะเป็นข้อมูลที่มีอยู่แล้วและเอากลับมาใช้งาน ไว้ให้กรอกid
         value={editId}
          onChange={(ev) => setId(ev.target.value)}//ให้userกรอกข้อมูลเอง
        />
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <input
          className="post-input"
          type="text"
          placeholder="image"
          onChange={(ev) => setImage(ev.target.value)}
        />
      </div>
      <div className="post-actions">
        <button className="post-button" onClick={(e)=>updatePostInContainer()}>Update</button>
      </div>
    </div>
  );
};

//Create Post
const PostContainer = ({ create }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const createPostInPostContainer = () => {
    create(content, image);
  };

  return (
    <div className="post-container">
      <h3>Create Post</h3>
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <input
          className="post-input"
          type="text"
          placeholder="image"
          onChange={(ev) => setImage(ev.target.value)}
        />
      </div>
      <div className="post-actions">
        <button className="post-button" onClick={createPostInPostContainer}>
          Post
        </button>
      </div>
    </div>
  );
};

const FeedSection = ({ posts, removeHandler,setEditId }) => {
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
          setEditId={setEditId}
        />
      ))}
    </div>
  );
};

const Post = ({ id, author, avatar, time, content, image, removeHandler, setEditId }) => {
  return (
    <div className="post">
      {/* Id:{id} */}
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
    <button onClick={()=>setEditId(id)}>UPDATE</button>
    </div>
  );
};



// // ของพี่เจมส์
// function App() {
//   const { get, remove, update, create } = usePost();
//   const posts = get();
//   const [editId, setEditId] = useState();

//   const createPost = (content, image) => {
//     let id = `id-${Math.floor(Math.random() * 10000)}`; // generate id here by Math.random() (please use integer)
//     let time = new Date().toDateString(); // generate timestamp here by (new Date().toDateString())
//     const user = getUser();
//     const data = {
//       id: id,
//       author: user.author,
//       avatar: user.avatar,
//       time: time,
//       content: content,
//       image: image,
//     };
//     create(data);
//   };

//   const updatePost = (id, content, image) => {
//     // console.log("this is edit id: ", editId);
//     // console.log("content outside: ", content);
//     // console.log("image outside: ", image);
//     // console.log("id outside: ", id);
//     let time = new Date().toDateString(); // generate timestamp here by (new Date().toDateString())
//     const user = getUser();

//     const updatedData = {
//       id: editId,
//       image: image,
//       content: content,
//       time: time,
//       author: user.author,
//       avatar: user.avatar,
//     };

//     console.log(updatedData);
//     update(updatedData);
//   };

//   return (
//     <div id="app">
//       <h1>Enter Data</h1>
//       <PostContainer create={createPost} />
//       <PostUpdateContainer update={updatePost} editId={editId} />
//       <FeedSection posts={posts} removeHandler={remove} setEditId={setEditId} />
//     </div>
//   );
// }

// const PostUpdateContainer = ({ update, editId }) => {
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState("");
//   const [id, setId] = useState("");

//   const updatePostInContainer = () => {
//     update(id, content, image);
//   };
//   return (
//     <div className="post-container">
//       <h3>Update Post</h3>
//       <div className="post-content">
//         <input
//           type="text"
//           className="post-input"
//           placeholder="id"
//           value={editId}
//           onChange={(ev) => setId(ev.target.value)}
//         />
//         <textarea
//           className="post-input"
//           placeholder="What's on your mind?"
//           onChange={(ev) => setContent(ev.target.value)}
//         ></textarea>
//         <input
//           className="post-input"
//           type="text"
//           placeholder="image"
//           onChange={(ev) => setImage(ev.target.value)}
//         />
//       </div>
//       <div className="post-actions">
//         <button className="post-button" onClick={() => updatePostInContainer()}>
//           Update
//         </button>
//       </div>
//     </div>
//   );
// };

// const PostContainer = ({ create }) => {
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState("");

//   const createPostInPostContainer = () => {
//     create(content, image);
//   };

//   return (
//     <div className="post-container">
//       <h3>Create Post</h3>
//       <div className="post-content">
//         <textarea
//           className="post-input"
//           placeholder="What's on your mind?"
//           onChange={(ev) => setContent(ev.target.value)}
//         ></textarea>
//         <input
//           className="post-input"
//           type="text"
//           placeholder="image"
//           onChange={(ev) => setImage(ev.target.value)}
//         />
//       </div>
//       <div className="post-actions">
//         <button className="post-button" onClick={createPostInPostContainer}>
//           Post
//         </button>
//       </div>
//     </div>
//   );
// };

// const FeedSection = ({ posts, removeHandler, setEditId }) => {
//   return (
//     <div className="feed">
//       {posts.map((post) => (
//         <Post
//           id={post.id}
//           author={post.author}
//           avatar={post.avatar}
//           time={post.time}
//           content={post.content}
//           image={post.image}
//           removeHandler={removeHandler}
//           setEditId={setEditId}
//         />
//       ))}
//     </div>
//   );
// };

// const Post = ({
//   id,
//   author,
//   avatar,
//   time,
//   content,
//   image,
//   removeHandler,
//   setEditId,
// }) => {
//   return (
//     <div className="post">
//       <div className="post-header">
//         <img className="post-avatar" src={avatar} alt="User 3" />
//         <div>
//           <div className="post-author">{author}</div>
//           <div className="post-time">{time}</div>
//         </div>
//       </div>
//       <div className="post-content">{content}</div>
//       <img className="post-image" src={image} alt="Post 3" />
//       <button onClick={() => removeHandler(id)}>DELETE</button>
//       <button onClick={() => setEditId(id)}>UPDATE</button>
//     </div>
//   );
// };


export default App;
