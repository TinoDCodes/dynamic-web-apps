import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div className="app">
      <PersonalInfo />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
