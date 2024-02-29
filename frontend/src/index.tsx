import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// Pages
import JoinPage from "./pages/joinPage";
import BlogPage from "./pages/blogPage";
import CavingPage from "./pages/cavingPage";
import InvalidPage from "./pages/invalidPage";
import GalleryPage from "./pages/galleryPage";
import HomePage from './pages/homePage';
import CalenderPage from "./pages/calenderPage";
import ApiPage from "./pages/apiPage";
import BlogFullScreen from "./components/blogFullScreen";
const router = createBrowserRouter([
    {
        path: '/', element: <HomePage/>,
    }, {
        path: '/join', element: <JoinPage/>,
    }, {
        path: '/caving', element: <CavingPage/>,
    }, {
        path: '*', element: <InvalidPage/>,
    }, {
        path: '/blog', element: <BlogPage/>,
    }, {
        path: '/gallery', element: <GalleryPage/>,
    }, {
        path: '/calender', element: <CalenderPage/>,
    }, {
        path: '/api', element: <ApiPage/>,
    },{
        path: '/indivblog', element: <BlogFullScreen/>
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
