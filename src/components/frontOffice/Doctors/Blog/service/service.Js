import axios from 'axios';

export const getAllBlogs = () => {
  

  return axios
    .get('http://localhost:3000/api/blogs')
    .then(response => {
       console.log('response',response.data)
      return response.data.blogs;
    });
};

class BlogService {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/blogs';
  }

  getAllBlogs() {
    return axios.get(this.baseUrl).then(response =>{
        console.log(response);
        return response.data.blogs
    } );
  }

  createBlog(blogData) {
    return axios
      .post(`${this.baseUrl}/addblog`, blogData)
      .then(response => response.data.blog);
  }

  updateBlog(blogId, blogData) {
    return axios
      .put(`${this.baseUrl}/${blogId}`, blogData)
      .then(response => response.data.blog);
  }

  deleteBlog(blogId) {
    return axios
      .delete(`${this.baseUrl}/${blogId}`)
      .then(response => response.data.blog);
  }

  likeBlog(blogId) {
    return axios
      .put(`${this.baseUrl}/${blogId}/like`)
      .then(response => response.data.blog);
  }

  dislikeBlog(blogId) {
    return axios
      .put(`${this.baseUrl}/${blogId}/dislike`)
      .then(response => response.data.blog);
  }

  addComment(blogId, commentData) {
    return axios
      .post(`${this.baseUrl}/${blogId}/comment`, commentData)
      .then(response => response.data.comment);
  }
}

const service = {
  getAllBlogs,
};
export default service;
