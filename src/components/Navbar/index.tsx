import { NavLink } from 'react-router-dom';
import { useAuth } from '../Auth';

export const Navbar = () => {
  const auth = useAuth();
  return (
    <nav className="text-white text-xl p-2 flex flex-row justify-evenly bg-orange-600">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth?.user && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};
