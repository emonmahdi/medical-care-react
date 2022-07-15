import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div> 
       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/service/:Title' element={<ServiceDetails />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
