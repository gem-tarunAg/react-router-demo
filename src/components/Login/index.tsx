import { useState } from 'react';
import { useAuth } from '../Auth';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState('');

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/';

  const handleLogin = () => {
    auth?.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <>
      <h1 className="text-4xl text-center font-bold font-mono my-4">Login Page</h1>
      <div className="flex flex-row justify-evenly my-10">
        <input
          type="text"
          placeholder="Enter Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-2/6 h-12 p-2 my-1 text-xl text-gray-700 rounded-xl ring ring-orange-100 border border-orange-200 outline outline-orange-200 outline-offset-1 focus:ring-orange-700 focus:outline-orange-700 focus:border-orange-700 focus:bg-orange-100"
        />

        <button className="w-1/6 h-14 bg-red-800 text-xl text-white rounded-2xl border-2" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};
