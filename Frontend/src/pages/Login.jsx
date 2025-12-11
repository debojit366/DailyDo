import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Uncomment for navigation

const LoginPage = () => {
  // const navigate = useNavigate(); // Uncomment to use hooks

  // --- STYLES (Reused & Adapted) ---
  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: '#f0f2f5', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif",
      padding: '20px',
    },
    card: {
      display: 'flex',
      width: '1000px',
      maxWidth: '100%',
      minHeight: '600px',
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.08)',
    },
    
    // --- LEFT PANEL (White Form - Now on Left) ---
    formPanel: {
      flex: '1.5', 
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px',
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#20a4a5', // Teal color
      marginBottom: '30px',
    },
    socialContainer: {
      display: 'flex',
      gap: '15px',
      marginBottom: '25px',
    },
    socialIcon: {
      width: '45px',
      height: '45px',
      border: '1px solid #ddd',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#555',
      fontSize: '1.2rem',
      cursor: 'pointer',
    },
    helperText: {
      color: '#a0a5a8',
      marginBottom: '25px',
      fontSize: '0.9rem',
    },
    form: {
      width: '100%',
      maxWidth: '350px',
    },
    inputContainer: {
      backgroundColor: '#f3f4f6', 
      display: 'flex',
      alignItems: 'center',
      padding: '12px 15px',
      borderRadius: '8px',
      marginBottom: '15px',
    },
    inputIcon: {
      color: '#a0a5a8',
      marginRight: '10px',
      fontSize: '1.1rem',
    },
    inputField: {
      flex: '1',
      border: 'none',
      backgroundColor: 'transparent',
      outline: 'none',
      fontSize: '1rem',
      color: '#333',
      fontFamily: "'Poppins', sans-serif",
    },
    forgotPassword: {
      display: 'block',
      color: '#333',
      fontSize: '0.9rem',
      textDecoration: 'none',
      margin: '15px 0 25px',
      fontWeight: '500',
      cursor: 'pointer',
    },
    signInBtn: {
      backgroundColor: '#20a4a5', // Teal
      border: 'none',
      color: 'white',
      padding: '15px 70px',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(32, 164, 165, 0.3)',
    },

    // --- RIGHT PANEL (Green Gradient - Now on Right) ---
    overlayPanel: {
      flex: '1', 
      background: 'linear-gradient(to right, #4bb6b7, #20a4a5)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '50px',
      backgroundImage: `
        linear-gradient(to right, #4bb6b7cc, #20a4a5cc),
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='%23ffffff' fill-opacity='0.05'/%3E%3Cpath d='M0 0h10v10H0z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")
      `,
    },
    overlayTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    overlayText: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '40px',
      maxWidth: '300px',
    },
    signUpBtn: {
      backgroundColor: 'transparent',
      border: '2px solid white',
      color: 'white',
      padding: '15px 50px',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.pageContainer}>
      {/* Import Font */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />

      <div style={styles.card}>
        
        {/* --- LEFT PANEL: SIGN IN FORM --- */}
        <div style={styles.formPanel}>
          <h1 style={styles.title}>Sign in</h1>
          
          <div style={styles.socialContainer}>
            <div style={styles.socialIcon}>f</div>
            <div style={styles.socialIcon}>G+</div>
            <div style={styles.socialIcon}>in</div>
          </div>
          
          <p style={styles.helperText}>or use your email account:</p>
          
          <form style={styles.form}>
            {/* Email Input */}
            <div style={styles.inputContainer}>
              <span style={styles.inputIcon}>✉️</span>
              <input type="email" placeholder="Email" style={styles.inputField} />
            </div>

            {/* Password Input */}
            <div style={styles.inputContainer}>
              <span style={styles.inputIcon}>🔒</span>
              <input type="password" placeholder="Password" style={styles.inputField} />
            </div>

            <a href="#" style={styles.forgotPassword}>Forgot your password?</a>

            <button type="submit" style={styles.signInBtn}>SIGN IN</button>
          </form>
        </div>

        {/* --- RIGHT PANEL: HELLO FRIEND --- */}
        <div style={styles.overlayPanel}>
          <h1 style={styles.overlayTitle}>Hello, Friend!</h1>
          <p style={styles.overlayText}>
            Enter your personal details and start your journey with us
          </p>
          
          {/* This button should link to your Register Page */}
          {/* onClick={() => navigate('/register')} */}
          <button style={styles.signUpBtn}>SIGN UP</button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;