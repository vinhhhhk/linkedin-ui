import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login/index.js';
import Home from './components/Home/index.js';
import Header from './components/Header';
 import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <Router>
      <div className="App">
      <AuthProvider>
         <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<><Header/><Home/></>}>          
          </Route>
         </Routes>
      </AuthProvider>
      </div>
    </Router>
  );
}

export default App;

