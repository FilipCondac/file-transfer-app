import Navbar from "./components/Navbar";
import FillerComponent from "./components/FillerComponent";
const App = () => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-inline h-full">
        <FillerComponent />
        <FillerComponent />
        <FillerComponent />
      </div>
    </main>
  );
};

export default App;
