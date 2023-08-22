import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center font-mono">
      <h1 className="text-4xl font-bold my-4">Home Page</h1>
      <button
        className="w-1/6 h-14 p-2 bg-red-800 my-5 text-xl text-white rounded-2xl border-2"
        onClick={() => navigate('order-summary', { replace: true })}
      >
        Place Order
      </button>
    </div>
  );
};
