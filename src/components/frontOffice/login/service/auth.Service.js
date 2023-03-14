import axiosInstance from '../../../../config/axios';
export const addUser = data => {
  axiosInstance.post('/signup', data);
};

const login = (email, password) => {
  console.log('username:', email);

  return axiosInstance
    .post('/login', {
      email: email,
      password: password,
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem('user');
};
const authService = {
  addUser,
  login,
  logout,
};
export default authService;
