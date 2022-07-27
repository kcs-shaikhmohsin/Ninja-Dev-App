// import logo from './logo.svg';
// import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import RegisterUser from './Pages/RegisterUser/RegisterUser'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sigup' element={<RegisterUser />} />
        <Route path='/forgot_passwd' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
