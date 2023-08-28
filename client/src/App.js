import {Routes,Route} from "react-router-dom"

import Navbar from './components/Navbar';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app bg-slate-50">
  <Navbar/>
     <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>

    </div>
  );
}

export default App;
