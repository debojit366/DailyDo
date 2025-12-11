import React, { useState } from 'react';

// --- MOCK DATA ---
const stats = [
  { label: "Total Tasks", value: "142", trend: "+12%", color: "#6366f1", icon: "📊" },
  { label: "Completed", value: "98", trend: "+5%", color: "#10b981", icon: "✅" },
  { label: "Pending", value: "34", trend: "-2%", color: "#f59e0b", icon: "⏳" },
  { label: "Issues", value: "10", trend: "+1%", color: "#ef4444", icon: "🔥" },
];

const activityData = [
  { user: "Sarah", action: "uploaded a file", target: "Design_v2.fig", time: "2m ago" },
  { user: "Mike", action: "completed task", target: "Fix API Endpoint", time: "1h ago" },
  { user: "Jessica", action: "commented on", target: "Q3 Review", time: "3h ago" },
  { user: "System", action: "automated backup", target: "Success", time: "5h ago" },
];

const chartData = [
  { day: 'Mon', height: '40%' },
  { day: 'Tue', height: '70%' },
  { day: 'Wed', height: '50%' },
  { day: 'Thu', height: '90%' },
  { day: 'Fri', height: '60%' },
  { day: 'Sat', height: '30%' },
  { day: 'Sun', height: '45%' },
];

// --- STYLES ---
const theme = {
  bg: '#f8fafc',
  white: '#ffffff',
  textMain: '#0f172a',
  textSec: '#64748b',
  primary: '#4f46e5',
  border: '#e2e8f0',
};

const s = {
  wrapper: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: theme.bg,
    color: theme.textMain,
  },
  sidebar: {
    width: '260px',
    backgroundColor: theme.white,
    borderRight: `1px solid ${theme.border}`,
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    position: 'sticky',
    top: 0,
    height: '100vh',
  },
  mainContent: {
    flex: 1,
    padding: '40px',
    overflowY: 'auto',
  },
  // Typography
  h1: { fontSize: '24px', fontWeight: '700', marginBottom: '8px' },
  h2: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' },
  subtitle: { color: theme.textSec, fontSize: '14px', marginBottom: '32px' },
  
  // Dashboard Grid
  gridStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  gridSplit: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
    marginBottom: '32px',
  },
  
  // Components
  card: {
    backgroundColor: theme.white,
    borderRadius: '16px',
    padding: '24px',
    border: `1px solid ${theme.border}`,
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '140px',
  },
  iconBox: (color) => ({
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    backgroundColor: `${color}15`, // 15% opacity
    color: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    marginBottom: '16px',
  }),
  
  // Chart Styles
  chartContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '200px',
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: `1px dashed ${theme.border}`,
  },
  barWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    height: '100%',
    justifyContent: 'flex-end',
  },
  bar: (height) => ({
    width: '32px',
    height: height,
    backgroundColor: theme.primary,
    borderRadius: '6px',
    transition: 'height 0.3s ease',
    opacity: 0.8,
  }),
  barLabel: {
    fontSize: '12px',
    color: theme.textSec,
  },

  // Activity Feed
  feedItem: {
    display: 'flex',
    gap: '12px',
    paddingBottom: '16px',
    marginBottom: '16px',
    borderBottom: `1px solid ${theme.border}`,
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#cbd5e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    color: theme.textMain,
  },
  
  // Navigation
  navLink: (active) => ({
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '8px',
    cursor: 'pointer',
    color: active ? theme.primary : theme.textSec,
    backgroundColor: active ? '#4f46e510' : 'transparent',
    fontWeight: active ? '600' : '500',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  })
};

// --- SUB-COMPONENTS ---

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard');
  const items = ['Dashboard', 'Projects', 'Tasks', 'Team', 'Settings'];
  
  return (
    <aside style={s.sidebar}>
      <div style={{ fontSize: '20px', fontWeight: '800', color: theme.primary, marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>⚡</span> TaskFlow
      </div>
      <nav>
        {items.map(i => (
          <div key={i} style={s.navLink(active === i)} onClick={() => setActive(i)}>
            {i}
          </div>
        ))}
      </nav>
      
      <div style={{ marginTop: 'auto', padding: '16px', backgroundColor: '#f1f5f9', borderRadius: '12px' }}>
        <p style={{ fontSize: '12px', fontWeight: '600' }}>Pro Plan</p>
        <p style={{ fontSize: '11px', color: theme.textSec, marginBottom: '8px' }}>5 days left in trial</p>
        <button style={{ width: '100%', padding: '6px', backgroundColor: theme.textMain, color: 'white', border: 'none', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' }}>Upgrade</button>
      </div>
    </aside>
  );
};

const StatCard = ({ item }) => (
  <div style={{ ...s.card, ...s.statCard }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
      <div style={s.iconBox(item.color)}>{item.icon}</div>
      <span style={{ 
        fontSize: '12px', 
        padding: '4px 8px', 
        borderRadius: '20px', 
        backgroundColor: item.trend.includes('+') ? '#dcfce7' : '#fee2e2',
        color: item.trend.includes('+') ? '#166534' : '#991b1b',
        fontWeight: '600'
      }}>
        {item.trend}
      </span>
    </div>
    <div>
      <h3 style={{ fontSize: '28px', fontWeight: '700', margin: 0 }}>{item.value}</h3>
      <p style={{ color: theme.textSec, fontSize: '13px', margin: '4px 0 0' }}>{item.label}</p>
    </div>
  </div>
);

const ChartSection = () => (
  <div style={s.card}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={s.h2}>Weekly Productivity</h2>
      <select style={{ padding: '4px 8px', borderRadius: '6px', border: `1px solid ${theme.border}`, fontSize: '12px', color: theme.textSec }}>
        <option>This Week</option>
        <option>Last Week</option>
      </select>
    </div>
    <div style={s.chartContainer}>
      {chartData.map((d, i) => (
        <div key={i} style={s.barWrapper}>
          <div style={s.bar(d.height)} />
          <span style={s.barLabel}>{d.day}</span>
        </div>
      ))}
    </div>
  </div>
);

const ActivityFeed = () => (
  <div style={s.card}>
    <h2 style={s.h2}>Recent Activity</h2>
    <div>
      {activityData.map((item, i) => (
        <div key={i} style={s.feedItem}>
          <div style={s.avatar}>{item.user.charAt(0)}</div>
          <div style={{ fontSize: '13px', lineHeight: '1.4' }}>
            <span style={{ fontWeight: '600' }}>{item.user}</span> {item.action} 
            <br />
            <span style={{ color: theme.primary }}>{item.target}</span>
            <div style={{ color: theme.textSec, fontSize: '11px', marginTop: '2px' }}>{item.time}</div>
          </div>
        </div>
      ))}
    </div>
    <button style={{ width: '100%', padding: '10px', marginTop: '10px', border: `1px solid ${theme.border}`, backgroundColor: 'transparent', borderRadius: '8px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', color: theme.textSec }}>
      View All History
    </button>
  </div>
);

// --- MAIN PAGE ---

const DashboardPage = () => {
  return (
    <div style={s.wrapper}>
      <Sidebar />
      
      <main style={s.mainContent}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px' }}>
          <div>
            <h1 style={s.h1}>Dashboard</h1>
            <p style={s.subtitle}>Good Morning, Admin! You have 5 tasks due today.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button style={{ padding: '10px 16px', backgroundColor: theme.white, border: `1px solid ${theme.border}`, borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Export Report</button>
            <button style={{ padding: '10px 16px', backgroundColor: theme.primary, color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)' }}>+ Create Task</button>
          </div>
        </header>

        {/* 1. Quick Stats Row */}
        <section style={s.gridStats}>
          {stats.map((item, index) => <StatCard key={index} item={item} />)}
        </section>

        {/* 2. Split View (Chart + Activity) */}
        <section style={s.gridSplit}>
          <ChartSection />
          <ActivityFeed />
        </section>

        {/* 3. Project Status Table (Quick View) */}
        <section style={s.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2 style={{ ...s.h2, marginBottom: 0 }}>Active Projects</h2>
            <a href="#" style={{ fontSize: '13px', color: theme.primary, textDecoration: 'none', fontWeight: '500' }}>See All</a>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${theme.border}`, color: theme.textSec }}>
                <th style={{ padding: '12px 0', fontWeight: '500' }}>Project Name</th>
                <th style={{ padding: '12px 0', fontWeight: '500' }}>Team Lead</th>
                <th style={{ padding: '12px 0', fontWeight: '500' }}>Progress</th>
                <th style={{ padding: '12px 0', fontWeight: '500' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((row) => (
                <tr key={row} style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <td style={{ padding: '16px 0', fontWeight: '500' }}>Website Redesign v{row}</td>
                  <td style={{ padding: '16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ ...s.avatar, width: '24px', height: '24px', fontSize: '10px' }}>AL</div>
                    <span style={{ color: theme.textSec }}>Alex</span>
                  </td>
                  <td style={{ padding: '16px 0' }}>
                    <div style={{ width: '100px', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${row * 30}%`, height: '100%', backgroundColor: theme.primary }}></div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 0' }}>
                    <span style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '12px', backgroundColor: '#f0fdf4', color: '#166534', fontWeight: '600' }}>
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;