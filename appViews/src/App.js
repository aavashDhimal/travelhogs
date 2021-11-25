import Navbar from './components/header/navbar'
import { Login } from './components/auth/login';
import Slider from './components/blogSlider/blogSlider'
import Home from './components/pages/home/home';


function App() {
  return (
    <div className="App">
      <Navbar isLoggedIn={true}></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
