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
<<<<<<< HEAD
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
=======
      <Route path='/SignUp' element={<SignUp/>}/>
>>>>>>> b0eff4f0889bae9eab5056001d200f7f4b754f55
    </Routes>
   </Router>
   </>
  );
}

export default App;
