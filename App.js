 //import ReactDOM  from "react-dom";
 import {BrowserRouter, Routes, Route } from "react-router-dom";
 import Layout from "./Layout";
 import Home from "./Home";
 import About from "./About";
 import Contact from "./Contact";
 import Career from "./Career";
 import Gallery from "./Gallery";
 
function App() {  
return (  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
   <Route path="about" element={<About />} />
   <Route path="contact" element={<Contact />} />
   <Route path="career" element={<Career />} />
   <Route path="gallery" element={<Gallery />} />
   </Route>
  </Routes>
  </BrowserRouter>
);  
}  
export default App;
