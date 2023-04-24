// import axios from 'axios';
// import { useState, useEffect } from 'react';

// function BlogComponent() {
//   const [blogs, setBlogs] = useState([]);
//   const [newBlog, setNewBlog] = useState({ title: '', content: '' });
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     getAllBlogs();
//   }, []);

//   function getAllBlogs() {
//     axios
//       .get('/api/blogs')
//       .then(response => setBlogs(response.data))
//       .catch(error => console.error(error));
//   }

//   function createBlog() {
//     axios
//       .post('/api/blogs/addblog', newBlog)
//       .then(response => {
//         setMessage('Blog created successfully!');
//         setBlogs([...blogs, response.data]);
//         setNewBlog({ title: '', content: '' });
//       })
//       .catch(error => console.error(error));
//   }

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setNewBlog({ ...newBlog, [name]: value });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     createBlog();
//   }

//   return (
//     <div>
//       <h1>Create a new blog</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={newBlog.title}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Content:
//           <textarea
//             name="content"
//             value={newBlog.content}
//             onChange={handleInputChange}
//           ></textarea>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//       <h1>All Blogs</h1>
//       <ul>
//         {blogs.map(blog => (
//           <li key={blog._id}>
//             <h2>{blog.title}</h2>
//             <p>{blog.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

