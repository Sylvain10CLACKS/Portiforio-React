import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import About from "./pages/sections/About"
import Contact from "./pages/sections/Contact"
import Skills from "./pages/sections/Skills"

const App = () => {
  return (
    <div>
      <NavBar/>

      <About/>
      <Skills />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App


