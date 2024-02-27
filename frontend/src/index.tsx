import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// Pages
import JoinPage from "./pages/joinPage";
import Blog from "./pages/blog";
import NewToCaving from "./pages/newToCaving";
import InvalidPage from "./pages/invalidPage";
import GalleryPage from "./pages/galleryPage";
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
    {
        path: '/', element: <HomePage/>,
    }, {
        path: '/join', element: <JoinPage/>,
    }, {
        path: '/caving', element: <NewToCaving/>,
    }, {
        path: '*', element: <InvalidPage/>,
    }, {
        path: '/blog', element: <Blog/>,
    }, {
        path: '/gallery', element: <GalleryPage/>,
    },

]);
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
