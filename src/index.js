import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductsPage from './pages/ProductsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Something went wrong!</h1>,
  },
  {
    path: '/products',
    element: <ProductsPage />,
    errorElement: <h1>Products doesnt exist</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
