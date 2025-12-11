import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// --- CONFIGURATION & THEME ---
const theme = {
  primary: '#6366f1', // Indigo
  primaryHover: '#4f46e5',
  textDark: '#1f2937',
  textLight: '#6b7280',
  bgLight: '#f9fafb',
  white: '#ffffff',
  shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
};

// --- HELPER COMPONENT: BUTTON WITH HOVER STATE ---
// Inline styles don't support :hover pseudo-classes easily, so we use a small component.
const Button = ({ text, onClick, primary = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: primary 
      ? (isHovered ? theme.primaryHover : theme.primary) 
      : 'transparent',
    color: primary ? theme.white : theme.textDark,
  };

  return (
    <button
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// --- MAIN COMPONENT ---
export default function LandingPage() {
    const navigate = useNavigate();
    const handleLoginClick = () =>{
        navigate('/login')
    }
    const handleRegisterClick = ()=>{
        navigate('register')
    }
  // State for the interactive mockup demo in the Hero section
  const [demoTasks, setDemoTasks] = useState([
    { id: 1, text: 'Check out the new homepage', done: true },
    { id: 2, text: 'Sign up for free', done: false },
    { id: 3, text: 'Get organized', done: false },
  ]);

  const toggleTask = (id) => {
    setDemoTasks(demoTasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  // --- STYLES OBJECT ---
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: theme.textDark,
      backgroundColor: theme.bgLight,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 5%',
      backgroundColor: theme.white,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: theme.primary,
      cursor: 'pointer',
    },
    heroSection: {
      display: 'flex',
      flexWrap: 'wrap', // Makes it responsive
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '80px 5%',
      gap: '40px',
    },
    heroContent: {
      flex: '1 1 400px', // Grow, shrink, basis
      maxWidth: '600px',
    },
    h1: {
      fontSize: '3.5rem',
      lineHeight: '1.1',
      marginBottom: '20px',
      color: '#111827',
    },
    heroP: {
      fontSize: '1.25rem',
      color: theme.textLight,
      marginBottom: '30px',
      lineHeight: '1.6',
    },
    // The visual mockup styles
    mockupContainer: {
      flex: '1 1 400px',
      backgroundColor: theme.white,
      borderRadius: '20px',
      padding: '30px',
      boxShadow: theme.shadow,
      border: '1px solid #e5e7eb',
      transform: 'rotate(-2deg)', // Stylistic tilt
      maxWidth: '500px',
    },
    mockupHeader: {
      marginBottom: '20px',
      fontWeight: '700',
      fontSize: '1.2rem',
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #f3f4f6',
      cursor: 'pointer',
    },
    checkbox: (checked) => ({
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      border: `2px solid ${checked ? theme.primary : '#d1d5db'}`,
      backgroundColor: checked ? theme.primary : 'transparent',
      marginRight: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '14px',
    }),
    taskText: (checked) => ({
      textDecoration: checked ? 'line-through' : 'none',
      color: checked ? '#9ca3af' : theme.textDark,
      transition: 'color 0.2s',
    }),
    // Features Section
    featuresSection: {
      padding: '80px 5%',
      backgroundColor: theme.white,
      textAlign: 'center',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      marginTop: '40px',
    },
    card: {
      flex: '1 1 300px',
      maxWidth: '350px',
      padding: '30px',
      borderRadius: '12px',
      backgroundColor: theme.bgLight,
      textAlign: 'left',
    },
    icon: {
      fontSize: '2rem',
      marginBottom: '15px',
      display: 'block',
    },
    footer: {
      textAlign: 'center',
      padding: '40px',
      borderTop: '1px solid #e5e7eb',
      color: theme.textLight,
      marginTop: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      
      {/* --- NAVBAR --- */}
      <nav style={styles.nav}>
        <div style={styles.logo}>DailyDo.</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Button text="Log In" primary={false} onClick={handleLoginClick} />
          <Button text="Get Started" onClick={handleRegisterClick} />
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.h1}>
            Focus on work,<br />
            <span style={{ color: theme.primary }}>not the clutter.</span>
          </h1>
          <p style={styles.heroP}>
            The minimal todo app designed to help you clear your mind and master your day. 
            No confusing menus, just tasks.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Button text="Start for Free" onClick={() => alert('Started!')} />
          </div>
          <p style={{ marginTop: '15px', fontSize: '0.85rem', color: theme.textLight }}>
            No credit card required.
          </p>
        </div>

        {/* --- INTERACTIVE MOCKUP --- */}
        <div style={styles.mockupContainer}>
          <div style={styles.mockupHeader}>My Day ☀️</div>
          {demoTasks.map((task) => (
            <div 
              key={task.id} 
              style={styles.taskItem} 
              onClick={() => toggleTask(task.id)}
            >
              <div style={styles.checkbox(task.done)}>
                {task.done && '✓'}
              </div>
              <span style={styles.taskText(task.done)}>
                {task.text}
              </span>
            </div>
          ))}
          <div style={{ ...styles.taskItem, color: '#9ca3af', fontStyle: 'italic', borderBottom: 'none' }}>
            + Add a task...
          </div>
        </div>
      </header>

      {/* --- FEATURES SECTION --- */}
      <section style={styles.featuresSection}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Why TaskFlow?</h2>
        <p style={{ color: theme.textLight }}>Everything you need, nothing you don't.</p>
        
        <div style={styles.grid}>
          <div style={styles.card}>
            <span style={styles.icon}>⚡</span>
            <h3>Lightning Fast</h3>
            <p style={{ marginTop: '10px', color: theme.textLight }}>
              Built for speed. Keyboard shortcuts allow you to manage tasks without touching your mouse.
            </p>
          </div>
          <div style={styles.card}>
            <span style={styles.icon}>🧠</span>
            <h3>Smart Layout</h3>
            <p style={{ marginTop: '10px', color: theme.textLight }}>
              We automatically prioritize your list based on deadlines and your personal habits.
            </p>
          </div>
          <div style={styles.card}>
            <span style={styles.icon}>🔒</span>
            <h3>Private by Default</h3>
            <p style={{ marginTop: '10px', color: theme.textLight }}>
              Your data is encrypted locally. We don't sell your data, we just help you manage it.
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} TaskFlow App. All rights reserved.
      </footer>
    </div>
  );
}