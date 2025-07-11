import React from 'react';
import { DashboardContent } from './components/dashboard-content';
import Login from './login/page';

const ComplexDashboardLayout = React.memo(function ComplexDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = true; // TODO: replace with real auth check

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>{children}</div>
      <DashboardContent isLoggedIn={isLoggedIn} />
    </div>
  );
});

export default ComplexDashboardLayout;