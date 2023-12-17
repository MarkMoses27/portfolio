import { BrowserRouter,Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
