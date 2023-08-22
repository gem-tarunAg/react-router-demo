import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <>
      <div className="text-center font-mono">
        <h1 className="text-4xl font-bold my-4">Products</h1>
        <input
          type="search"
          placeholder="Search products"
          className="w-2/3 h-12 p-3 text-xl text-gray-700 rounded-xl ring ring-orange-100 border border-orange-200 outline outline-orange-200 outline-offset-1 focus:ring-orange-700 focus:outline-orange-700 focus:border-orange-700 focus:bg-orange-100"
        />
      </div>

      <nav className="flex flex-row justify-left px-1 mt-2 text-xl text-red-800 underline">
        <Link className="mx-4" to="featured">
          Featured
        </Link>
        <Link className="mx-4" to="new">
          New
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
