import './App.css';
import ForgotPassword from './Pages/ForgotPassword';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Edit from  './Pages/Edit';
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
