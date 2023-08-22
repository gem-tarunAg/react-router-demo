import React from 'react';
import { useNavigate } from 'react-router-dom';

export const OrderSummmary = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="text-xl my-2" onClick={() => navigate(-1)}>
        {'< Back'}
      </button>
      <p className="text-2xl text-center font-mono font-bold">Your order is confirmed!</p>
    </>
  );
};
