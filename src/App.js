import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Auth/AuthProvider/AuthProvider';
import Login from './components/Auth/Login/Login';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';
import Register from './components/Auth/Register/Register';
import Home from './components/Home/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <AuthProvider> 
       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/service/:Title' element={<PrivateRoute><ServiceDetails /></PrivateRoute> } />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
          </Routes>
       </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
