import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Login from './pages/Login.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Stories from './components/Stories.jsx';


function App() {
  

  return (
    <div className="font-osw">
      <Home />
      <Stories />
      <Footer />
    </div>
  );
}

export default App
