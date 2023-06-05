import { Navbar, Hero, Courses, Contact } from "./components";
import ScrollDownMenu from "./components/ScrollDownMenu";
import { BrowserRouter } from "react-router-dom";

const App = () => (

  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center paddingX">
        <Navbar />
        <Hero />
      </div>
      
      <Courses />
    
      <div className="relative">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
      
      <ScrollDownMenu />
    </div>
  </BrowserRouter>
)

export default App
