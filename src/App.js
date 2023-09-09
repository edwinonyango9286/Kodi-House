import './App.css';
import ForgotPassword from './Pages/ForgotPassword';
import SignIn from './Pages/SignIn';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
