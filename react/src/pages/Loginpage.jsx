import React from 'react';
import { useNavigate } from 'react-router-dom';
function Loginpage() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    const isUser = false;
    if (isUser) {
      navigate('/');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input type="email" />
        <label>password</label>
        <input type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Loginpage;

//in login when user click on the login button it navigate to homepages
