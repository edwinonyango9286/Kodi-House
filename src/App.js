import './App.css';
import SignIn from './Pages/SignIn';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
