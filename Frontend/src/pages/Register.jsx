import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Uncomment if using navigation
import { useState } from 'react';
import axios from 'axios'
const AuthPage = () => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleRegisterSubmit = async (e) =>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/register',{
        username:username,
        email:email,
        password:password
      })

      console.log("user registered successfully")
      setPassword('');
      setEmail('')
      setUsername('')
    } catch (error) {
      console.log(error);
      console.log("registration submit form failed")
    }
  }
  const onChangeUsername = (e)=>{
    setUsername(e.target.value);
  }
  const onChangeEmail = (e)=>{
    setEmail(e.target.value);
  }
  const onChangePassword = (e)=>{
    setPassword(e.target.value)
  }
  // const navigate = useNavigate(); // Uncomment to use hooks for button clicks

  // --- STYLES ---
  const styles = {
    // The main page background with geometric shapes approximation
    pageContainer: {
      minHeight: '100vh',
      // Using a solid background that matches the overall theme
      // To exactly replicate the geometric shapes in the corners requires complex CSS or images.
      // This solid color provides a clean base.
      backgroundColor: '#f0f2f5', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif", // Using a modern font
      padding: '20px',
    },
    // The main centered card
    card: {
      display: 'flex',
      width: '1000px',
      maxWidth: '100%',
      minHeight: '600px',
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden', // Ensures the left panel gradient doesn't spill out
      boxShadow: '0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.08)',
    },
    
    // --- LEFT PANEL (Green Gradient) ---
    leftPanel: {
      flex: '1', // Takes up 1 part of space (approx 40%)
      background: 'linear-gradient(to right, #4bb6b7, #20a4a5)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '50px',
      // Adding a subtle pattern overlay to match the image
      backgroundImage: `
        linear-gradient(to right, #4bb6b7cc, #20a4a5cc),
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='%23ffffff' fill-opacity='0.05'/%3E%3Cpath d='M0 0h10v10H0z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")
      `,
    },
    leftTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    leftText: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '40px',
      maxWidth: '300px',
    },
    signInBtn: {
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

    // --- RIGHT PANEL (White Form) ---
    rightPanel: {
      flex: '1.5', // Takes up 1.5 parts of space (approx 60%)
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px',
      textAlign: 'center',
    },
    rightTitle: {
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
    // Style for the container holding the input and its icon
    inputContainer: {
      backgroundColor: '#f3f4f6', // Light gray bg
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
      // Using unicode characters for simplicity instead of importing icons
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
    signUpBtn: {
      backgroundColor: '#20a4a5', // Teal color
      border: 'none',
      color: 'white',
      padding: '15px 70px',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '20px',
      boxShadow: '0 5px 15px rgba(32, 164, 165, 0.3)',
    },
  };

  return (
    // Need to import the font first
    <div style={styles.pageContainer}>
       <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />

      <div style={styles.card}>
        
        {/* --- LEFT PANEL --- */}
        <div style={styles.leftPanel}>
          <h1 style={styles.leftTitle}>Welcome Back!</h1>
          <p style={styles.leftText}>
            To keep connected with us please login with your personal info
          </p>
          {/* Add onClick handler here, e.g., onClick={() => navigate('/login')} */}
          <button style={styles.signInBtn}>SIGN IN</button>
        </div>

        {/* --- RIGHT PANEL --- */}
        <div style={styles.rightPanel}>
          <h1 style={styles.rightTitle}>Create Account</h1>
          
          {/* Social Icons */}
          <div style={styles.socialContainer}>
            <div style={styles.socialIcon}>f</div>
            <div style={styles.socialIcon}>G+</div>
            <div style={styles.socialIcon}>in</div>
          </div>
          
          <p style={styles.helperText}>or use your email for registration:</p>
          
          {/* Form Inputs */}
          <form style={styles.form} onSubmit={handleRegisterSubmit}>
            
            {/* Name Input */}
            <div style={styles.inputContainer}>
              <span style={styles.inputIcon}>👤</span> {/* Unicode User Icon */}
              <input type="text"
              placeholder="Name"
              name="username"
              style={styles.inputField}
              value = {username}
              onChange={onChangeUsername}
              />
            </div>

             {/* Email Input */}
             <div style={styles.inputContainer}>
              <span style={styles.inputIcon}>✉️</span> {/* Unicode Envelope Icon */}
              <input type="email"
              placeholder="Email"
              name='email'
              value={email}
              onChange={onChangeEmail}
              style={styles.inputField}

               />
            </div>

             {/* Password Input */}
             <div style={styles.inputContainer}>
              <span style={styles.inputIcon}>🔒</span> {/* Unicode Lock Icon */}
              <input type="password"
              placeholder="Password"
              name='password'
              value={password}
              onChange={onChangePassword}
              style={styles.inputField} />
            </div>

            <button type="submit" style={styles.signUpBtn}>SIGN UP</button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;