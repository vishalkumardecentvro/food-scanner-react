import logo from './logo.svg';
import './App.css';
import Barcode from './Component/Barcode';
import SideBar from './Component/SideBar/SideBar';

function App() {
  return (
    <div className="App">

      <SideBar/>
      <div className='barcode'><Barcode/></div>

      
    </div>
  );
}

export default App;
