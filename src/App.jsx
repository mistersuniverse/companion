import { Navbar, Hero, Courses, Subjects, Subject, Contact } from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => (

  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center paddingX">
        <Navbar />
        <Hero />
      </div>
      
      <Courses />
      {/* <Subjects /> */}
      <div className="relative">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
      
    </div>
  </BrowserRouter>
)

export default App
