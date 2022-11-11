import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login/index.js';
import Home from './components/Home/index.js';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<><Header/> <Home/></>}>
          
        </Route>
       </Routes>
      </div>
    </Router>
  );
}

export default App;

