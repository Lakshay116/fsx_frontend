import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import VDO from "./images/login.mp4"





function App() {
  return (
    <div className="App">
      <video style={{ width: '100vw' }} className='videoTag' autoPlay loop muted>
        <source src={VDO} type='video/mp4' />
      </video>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<LandingPage key='general' />}></Route>
          <Route exact path="/contact" element={<Contact key='contact' />}></Route>
          <Route exact path="/pricing" element={<Pricing key='pricing' />}></Route>
          <Route exact path="/login" element={<Login key='login' />}></Route>
          <Route exact path="/signup" element={<Signup key='login' />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
