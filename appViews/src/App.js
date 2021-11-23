import Navbar from './components/header/navbar'
import { Login } from './components/auth/login';


function App() {
  return (
    <div className="App">
      <Navbar isLoggedIn={true}></Navbar>
      <Login></Login>
    </div>
  );
}

export default App;
