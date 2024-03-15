// AdminPage.tsx
import React, { useState } from 'react';
import BlogPost from '../components/admin/postBlog';
import TabBar from "../components/admin/tabBar";
import ScrollNavBar from "../components/repeats/scrollNavBar";
import GalleryUpload from "../components/admin/uploadToGallery/galleryUpload"; // Adjust the import path as necessary

// Import ScrollNavBar or any other components you need

function AdminPage() {
  const [selectedTab, setSelectedTab] = useState<string>('Gallery');

  function renderComponent() {
    switch (selectedTab) {
      case 'Blog':
        return <BlogPost />;
      case 'Gallery':
        return <GalleryUpload/>;
      case 'Company':
      case 'Team Members':
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
