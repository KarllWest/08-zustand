import React from 'react';

export default function FilterLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      gap: '24px',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    }}>
      <aside style={{ 
        width: '240px', 
        flexShrink: 0,
        borderRight: '1px solid #eee',
        paddingTop: '32px'
      }}>
        {sidebar}
      </aside>

      <main style={{ 
        flex: 1, 
        paddingTop: '32px'
      }}>
        {children}
      </main>
    </div>
  );
}