import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// Pages
import Join from "./pages/join";
import Blog from "./pages/blog";
import NewToCaving from "./pages/newToCaving";
import InvalidPage from "./pages/invalidPage";

const router = createBrowserRouter([
    {
        path: '/', element: <HomePage />,
    },
    {
        path: '/Join', element: <Join />,
    },
    {
        path: '/NewToCaving', element: <NewToCaving />,
    },

    {
        path: '*', element: <InvalidPage/>,
    },
    {
        path: '/TripReports', element: <Blog />,
    }

]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
