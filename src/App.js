import "./App.css";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import ServiceExperience from "./Components/ServiceExperience";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <ServiceExperience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
