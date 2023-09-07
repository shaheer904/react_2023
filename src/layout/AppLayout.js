import React from 'react';
import AppHeader from './AppHeader';
import AppSiderbar from './AppSidebar';

const AppLayout = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <AppSiderbar />
      {/* App Content */}
      <p>Component below</p>
      {children}
    </div>
  );
};

export default AppLayout;
