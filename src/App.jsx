
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs";
import Home from "./Routes/Home"
import Card from "./Components/Card";
import "./index.css";
import { ContextProvider } from "./Components/utils/global.context";




function App() {
  return (
   
      <Router className="App">
        <Navbar/>
       <ContextProvider>
       <Routes>
          <Route path="/home" element={<Home/>}/>

          <Route path="/contact" element={<Contact/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="dentista/:id" element={<Card/>}/>
        </Routes>
       </ContextProvider>
       
        <Footer/>
      </Router>
  
   
      
     
  
     
  );
}

export default App;
