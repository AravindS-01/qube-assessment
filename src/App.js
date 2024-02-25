import logo from './logo.svg';
import './App.css';
import DeviceList from './components/deviceList';
import DeviceDetail from './components/deviceDetail'
import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<DeviceList/>}></Route>
      <Route path='/:applianceId/detail' element={<DeviceDetail/>}>
      </Route>
    </Routes>
    </div>

  );
}

export default App;
