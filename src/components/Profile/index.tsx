import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth';

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate('/');
  };

  return (
    <div className="text-center font-mono">
      <h1 className="text-4xl font-bold my-4">User Profile</h1>
      <p className="text-lg">Welcome @{auth?.user}</p>
      <button className="w-1/6 h-14 p-2 bg-red-800 my-5 text-xl text-white rounded-2xl border-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
