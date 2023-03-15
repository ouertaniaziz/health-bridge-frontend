import axiosInstance from '../../../../config/axios';
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
