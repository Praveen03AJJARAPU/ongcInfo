import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';


function App() {
  

  return (
    <div>
     {/*<Login />*/
      <Home />
     }
      {/* { <Nav />
      <Header /> */}
      <div className='flex py-2 items-center text-xl justify-center text-white bg-zinc-400 font-bold'>
        <p className="px-1">&copy; Designed By Infocom Services Rajahmundry</p>
      </div> 
      
    </div> 
  );
}

export default App
