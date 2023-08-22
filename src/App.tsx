import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { OrderSummmary } from './components/OrderSummary';
import { NotFound } from './components/NotFound';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/Products/FeaturedProducts';
import { NewProducts } from './components/Products/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/Users/UserDetails';
import { AdminUser } from './components/Users/AdminUser';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/Auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';

const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/order-summary" element={<OrderSummmary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<AdminUser />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
