import axiosInstance from '../../../../config/axios';
import authHeader from './auth-header';
export const addUser = data => {
  console.log(data);
  axiosInstance.post('/signup', data).then(
    res => {
      console.log('first');
      return res;
    },
    error => {
      console.log(error);
      return error;
    }
  );
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
        localStorage.setItem(
          'token',
          JSON.stringify(response.data.accessToken)
        );
      }

      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
export const getDoctor = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return axiosInstance
    .post('/doctor/profile', {
      userId: user.id,
    })
    .then(response => {
      if (response.data) {
      }

      return response.data;
    });
};
const authService = {
  addUser,
  login,
  logout,
  getDoctor,
};
export default authService;
