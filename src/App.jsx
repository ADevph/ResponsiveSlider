
import './App.css';
import Slider1 from './Components/Slider1';
import Slider2 from './Components/slider2';

function App() {
  return (
    <div className="container mx-auto mt-4 text-center">
      <h1 className="text-2xl font-semibold mb-6">Product Slider 1</h1>
      <Slider1 />
      <br />
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-2">Product Slider 2</h1>
<Slider2 />
      </div>
    </div>
  );
}

export default App;
