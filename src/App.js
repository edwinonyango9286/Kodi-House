
import React from 'react';
import './App.css';
import ForgotPassword from './Pages/ForgotPassword';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ResetPassword from './Pages/ResetPassword';
import EmailVerification from './Pages/EmailVerification';
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      <Route path='/email-verification' element={<EmailVerification/>}/>
      
    </Routes>
   </Router>
   </>
  );
}

export default App;
