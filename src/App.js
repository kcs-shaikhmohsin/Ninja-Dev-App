// import logo from './logo.svg';
// import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import RegisterUser from './Pages/RegisterUser/RegisterUser'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import HomePage from './Pages/HomePage/HomePage'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
 
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sigup' element={<RegisterUser />} />
        <Route path='/forgot_passwd' element={<ForgotPassword />} />
        <Route path='/home' element={<HomePage setMode={setMode} mode={mode}/>} />
      </Routes>
      </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
