import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs";
import Home from "./Routes/Home"
import { Layout } from "./Routes/Layout";
import "./index.css";



function App() {
  return (
 <Router>
  <div className="App">
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/favs" element={<Favs/>}/>
        <Route path="/dentista/:id" element={<Detail/>}/>
        </Route>
      </Routes>
  </div>
  </Router>
  
  );
}

export default App;
