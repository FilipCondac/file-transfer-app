import Navbar from "./components/Navbar";
import FillerComponent from "./components/FillerComponent";

const App = () => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-inline h-full">
        <FillerComponent componentTitle={"Group"} />
        <FillerComponent componentTitle={"Download"} />
        <FillerComponent componentTitle={"Upload"} />
      </div>
    </main>
  );
};

export default App;
