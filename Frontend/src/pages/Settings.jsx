import React, { useState } from 'react';

// --- STYLES ---
const theme = {
  bg: '#f8fafc',
  white: '#ffffff',
  textMain: '#0f172a',
  textSec: '#64748b',
  primary: '#4f46e5',
  danger: '#ef4444',
  border: '#e2e8f0',
};

const s = {
  container: {
    padding: '40px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Inter, sans-serif',
    color: theme.textMain,
  },
  header: {
    marginBottom: '32px',
  },
  h1: { fontSize: '28px', fontWeight: '700', margin: 0 },
  subtitle: { color: theme.textSec, marginTop: '8px' },
  
  // Layout
  layout: {
    display: 'flex',
    gap: '40px',
    alignItems: 'flex-start', // Important for sidebar height
  },
  sidebar: {
    width: '240px',
    flexShrink: 0,
  },
  content: {
    flex: 1,
    backgroundColor: theme.white,
    borderRadius: '16px',
    border: `1px solid ${theme.border}`,
    padding: '32px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },

  // Navigation Tabs
  tabItem: (active) => ({
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '12px 16px',
    marginBottom: '4px',
    borderRadius: '8px',
    backgroundColor: active ? '#e0e7ff' : 'transparent',
    color: active ? theme.primary : theme.textSec,
    fontWeight: active ? '600' : '500',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s',
  }),

  // Form Elements
  sectionTitle: { fontSize: '18px', fontWeight: '600', marginBottom: '24px', paddingBottom: '16px', borderBottom: `1px solid ${theme.border}` },
  formGroup: { marginBottom: '24px' },
  label: { display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: theme.textMain },
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: `1px solid ${theme.border}`,
    fontSize: '14px',
    color: theme.textMain,
    outline: 'none',
  },
  btnPrimary: {
    padding: '10px 20px',
    backgroundColor: theme.primary,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  btnSecondary: {
    padding: '10px 20px',
    backgroundColor: 'white',
    color: theme.textSec,
    border: `1px solid ${theme.border}`,
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    marginRight: '12px',
  },
  
  // Toggle Switch UI
  toggleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #f1f5f9',
  },
  toggleLabel: { fontSize: '14px', fontWeight: '500' },
  toggleDesc: { fontSize: '12px', color: theme.textSec, marginTop: '4px' },
  switch: (isOn) => ({
    width: '44px',
    height: '24px',
    backgroundColor: isOn ? theme.primary : '#cbd5e1',
    borderRadius: '99px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'background 0.2s',
  }),
  switchKnob: (isOn) => ({
    width: '18px',
    height: '18px',
    backgroundColor: 'white',
    borderRadius: '50%',
    position: 'absolute',
    top: '3px',
    left: isOn ? '23px' : '3px',
    transition: 'left 0.2s',
    boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
  }),

  // User Row (Team Settings)
  userRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: `1px solid ${theme.border}`,
  },
  avatar: { width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px', fontSize: '12px', fontWeight: 'bold' },
};

// --- TABS COMPONENTS ---

// 1. General Settings Tab
const GeneralSettings = () => (
  <div>
    <h2 style={s.sectionTitle}>Profile Information</h2>
    
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
      <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
      <div>
        <button style={s.btnSecondary}>Change Avatar</button>
        <button style={{ ...s.btnSecondary, border: 'none', color: theme.danger }}>Remove</button>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <div style={s.formGroup}>
        <label style={s.label}>First Name</label>
        <input style={s.input} type="text" defaultValue="Alex" />
      </div>
      <div style={s.formGroup}>
        <label style={s.label}>Last Name</label>
        <input style={s.input} type="text" defaultValue="Morgan" />
      </div>
    </div>
    
    <div style={s.formGroup}>
      <label style={s.label}>Email Address</label>
      <input style={s.input} type="email" defaultValue="alex.morgan@company.com" />
    </div>

    <div style={{ textAlign: 'right', marginTop: '20px' }}>
      <button style={s.btnPrimary}>Save Changes</button>
    </div>
  </div>
);

// 2. Notification Settings Tab
const NotificationSettings = () => {
  const [toggles, setToggles] = useState({ email: true, push: false, weekly: true });
  
  const toggle = (key) => setToggles({ ...toggles, [key]: !toggles[key] });

  return (
    <div>
      <h2 style={s.sectionTitle}>Notifications</h2>
      
      <div style={s.toggleRow}>
        <div>
          <div style={s.toggleLabel}>Email Notifications</div>
          <div style={s.toggleDesc}>Receive emails about task updates and due dates.</div>
        </div>
        <div style={s.switch(toggles.email)} onClick={() => toggle('email')}>
          <div style={s.switchKnob(toggles.email)} />
        </div>
      </div>

      <div style={s.toggleRow}>
        <div>
          <div style={s.toggleLabel}>Push Notifications</div>
          <div style={s.toggleDesc}>Get real-time alerts on your desktop.</div>
        </div>
        <div style={s.switch(toggles.push)} onClick={() => toggle('push')}>
          <div style={s.switchKnob(toggles.push)} />
        </div>
      </div>

      <div style={s.toggleRow}>
        <div>
          <div style={s.toggleLabel}>Weekly Digest</div>
          <div style={s.toggleDesc}>A summary of your team's performance every Monday.</div>
        </div>
        <div style={s.switch(toggles.weekly)} onClick={() => toggle('weekly')}>
          <div style={s.switchKnob(toggles.weekly)} />
        </div>
      </div>
    </div>
  );
};

// 3. Team Settings Tab
const TeamSettings = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${theme.border}`, paddingBottom: '16px', marginBottom: '24px' }}>
      <h2 style={{ ...s.sectionTitle, borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>Team Members</h2>
      <button style={{ ...s.btnPrimary, fontSize: '12px', padding: '8px 16px' }}>+ Invite User</button>
    </div>

    {[
      { name: 'Alex Morgan', role: 'Admin', color: '#4f46e5' },
      { name: 'Sarah Connors', role: 'Editor', color: '#10b981' },
      { name: 'John Doe', role: 'Viewer', color: '#f59e0b' }
    ].map((user, i) => (
      <div key={i} style={s.userRow}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ ...s.avatar, backgroundColor: `${user.color}20`, color: user.color }}>
            {user.name.charAt(0)}
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '500' }}>{user.name}</div>
            <div style={{ fontSize: '12px', color: theme.textSec }}>{user.role}</div>
          </div>
        </div>
        <select style={{ padding: '6px', borderRadius: '6px', border: `1px solid ${theme.border}`, fontSize: '12px' }}>
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
          <option style={{ color: theme.danger }}>Remove</option>
        </select>
      </div>
    ))}
  </div>
);

// --- MAIN PAGE ---

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div style={s.container}>
      {/* Page Header */}
      <header style={s.header}>
        <h1 style={s.h1}>Settings</h1>
        <p style={s.subtitle}>Manage your account settings and preferences.</p>
      </header>

      <div style={s.layout}>
        {/* Sidebar Navigation */}
        <aside style={s.sidebar}>
          <nav>
            <button style={s.tabItem(activeTab === 'general')} onClick={() => setActiveTab('general')}>
              General
            </button>
            <button style={s.tabItem(activeTab === 'notifications')} onClick={() => setActiveTab('notifications')}>
              Notifications
            </button>
            <button style={s.tabItem(activeTab === 'team')} onClick={() => setActiveTab('team')}>
              Team & Users
            </button>
            <button style={s.tabItem(activeTab === 'security')} onClick={() => setActiveTab('security')}>
              Security
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main style={s.content}>
          {activeTab === 'general' && <GeneralSettings />}
          {activeTab === 'notifications' && <NotificationSettings />}
          {activeTab === 'team' && <TeamSettings />}
          {activeTab === 'security' && (
             <div style={{ textAlign: 'center', padding: '40px', color: theme.textSec }}>
                🔒 Security settings placeholder
             </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;