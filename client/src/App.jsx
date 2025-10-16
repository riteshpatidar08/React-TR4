import React from 'react';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/v1/auth/register', formData)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div style={{ margin: '200px' }}>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input onChange={handleChange} type="text" name="name" id="name" />
        <label>Email</label>
        <input onChange={handleChange} type="email" name="email" id="email" />
        <label>Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
