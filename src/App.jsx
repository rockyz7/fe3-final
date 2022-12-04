
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs";
import Home from "./Routes/Home"
import "./index.css";
import { ContextProvider } from "./Components/utils/global.context";




function App() {
  return (
   
      <Router className="App">
        <ContextProvider>
        <Navbar/>
       
       <Routes>
          
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/dentista/:id" element={<Detail/>}/>
       
          
        </Routes>
       
       
        <Footer/>
        </ContextProvider>
      </Router>
  
   
      
     
  
     
  );
}

export default App;
