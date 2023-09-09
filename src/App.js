import './App.css';
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
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
