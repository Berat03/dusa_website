// AdminPage.tsx
import React, { useState } from 'react';
import BlogPost from '../components/admin/postBlog';
import TabBar from "../components/admin/tabBar";
import ScrollNavBar from "../components/repeats/scrollNavBar"; // Adjust the import path as necessary
// Import ScrollNavBar or any other components you need

function AdminPage() {
  const [selectedTab, setSelectedTab] = useState<string>('Team Members');

  function renderComponent() {
    switch (selectedTab) {
      case 'Blog Posts':
        return <BlogPost />;
      case 'My Account':
      case 'Company':
      case 'Team Members':
      case 'Billing':
      default:
        return <div>Select a tab to view its content.</div>;
    }
  }

  return (
    <div>
        <ScrollNavBar/>
        <TabBar onTabSelect={(tabName: React.SetStateAction<string>) => setSelectedTab(tabName)} />
        {renderComponent()}
    </div>
  );
}

export default AdminPage;
