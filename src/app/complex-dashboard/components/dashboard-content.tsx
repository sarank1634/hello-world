'use client';

import dynamic from 'next/dynamic';

// Dynamic imports with SSR disabled
const Users = dynamic(() => import('../../complex-dashboard/users/page'), { ssr: false });
const Revenue = dynamic(() => import('../../complex-dashboard/revenue/page'), { ssr: false });
const Notification = dynamic(() => import('../../complex-dashboard/notification/page'), { ssr: false });

export function DashboardContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
          <div style={{ marginBottom: '20px' }}><Users /></div>
          <div><Revenue /></div>
        </div>
        <div style={{ width: '30%' }}><Notification /></div>
      </div>
    </div>
  );
}
