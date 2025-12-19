import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Admin from './pages/Admin.jsx'
import SettingsPage from './pages/Settings.jsx'
import ProtectedRoute from './pages/ProtectedRoute.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Homepage/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/admin/:userid" element = {
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }/>
        <Route path = "/settings" element = {<SettingsPage/>}/>
      </Routes>
    </>
  )
}

export default App
