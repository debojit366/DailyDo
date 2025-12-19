import { useState , useEffect } from "react";
const Admin = () => {
  const [isAccessAllowed, setIsAccessAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAccessAllowed(true);
    }
    setLoading(false);
  }, []);
  if (loading) {
    return <h1>Wait karo bhai, checking...</h1>;
  }
  if (isAccessAllowed) {
    return <h1>Logged In</h1>;
  } else {
    return <h1>Unauthorised</h1>;
  }
};
export default Admin;