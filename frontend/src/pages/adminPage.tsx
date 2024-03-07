import React from 'react';
import { useAuth } from '../auth/authContext';

const AdminPage: React.FC = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome, {auth.user}!</p>
      <button onClick={() => auth.logout()}>Logout</button>
    </div>
  );
};

export default AdminPage;
