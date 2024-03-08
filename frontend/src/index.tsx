import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/authContext'; // Assuming authContext.tsx is in the src folder
import HomePage from './pages/homePage';
import JoinPage from "./pages/joinPage";
import BlogPage from "./pages/blogPage";
import CavingPage from "./pages/cavingPage";
import InvalidPage from "./pages/invalidPage";
import GalleryPage from "./pages/galleryPage";
import CalenderPage from "./pages/calenderPage";
import ApiPage from "./pages/apiPage";
import BlogFullScreen from "./components/blog/blogFullScreen";
import LoginPage from './pages/loginPage'; // Assuming loginPage.tsx is in the src folder
import AdminPage from './pages/adminPage'; // Assuming AdminPage.tsx is in the src folder
import RequireAuth from './auth/requireAuth'; // Assuming RequireAuth.tsx is in the src folder

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/join', element: <JoinPage /> },
  { path: '/caving', element: <CavingPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/gallery', element: <GalleryPage /> },
  { path: '/calender', element: <CalenderPage /> },
  { path: '/api', element: <ApiPage /> },
  { path: '/indivblog', element: <BlogFullScreen /> },
  { path: '/login', element: <LoginPage /> },
  {
    path: '/admin',
    element: (
      <RequireAuth>
        <AdminPage />
      </RequireAuth>
    ),
  },
  { path: '*', element: <InvalidPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
