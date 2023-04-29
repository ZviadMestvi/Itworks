import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductsPage from './pages/ProductsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404 Not found</h1>,
  },
  {
    path: '/products',
    element: <ProductsPage />,
    errorElement: <h1>404 Not found</h1>,
  },
  {
    path: '/product/:name',
    element: <ProductPage />,
    errorElement: <h1>404 Not found</h1>,
  },
  {
    path: '/cart',
    element: <CartPage />,
    errorElement: <h1>404 Not found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
