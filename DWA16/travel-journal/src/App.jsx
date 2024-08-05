import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="travels">
        {data.map((destination, index) => (
          <TravelCard key={index} destination={destination} />
        ))}
      </main>
    </div>
  );
}

export default App;
