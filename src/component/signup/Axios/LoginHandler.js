import axios from 'axios';

export const loginHandler = async (email, password) => {
  try {
    const adminCredentials = {
        email: 'adminff@gmail.com',
        password: 'admin123'
      };
  
      // Check if the credentials match admin credentials
      if (email === adminCredentials.email && password === adminCredentials.password) {
        localStorage.setItem('isAdmin', 'true');
        console.log("Admin logged in, isAdmin set to true");
        return true;
      }
    const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
    console.log(response);
    
    // Assuming the API response structure contains user info
    if (response.data.success) {
      const { username,userId } = response.data; // Extract the username
      localStorage.setItem('username', username); // Save username in localStorage
      localStorage.setItem('userid', userId);

      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
