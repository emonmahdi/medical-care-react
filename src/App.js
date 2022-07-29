import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Auth/AuthProvider/AuthProvider';
import Login from './components/Auth/Login/Login';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';
import Register from './components/Auth/Register/Register';
import Doctors from './components/Doctors/Doctors';
import Error from './components/Error/Error';
import Blogs from './components/Home/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <AuthProvider> 
       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/our-doctors' element={<Doctors />} />
              <Route path='/service/:Title' element={<PrivateRoute><ServiceDetails /></PrivateRoute> } />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<Error />} />
          </Routes>
       </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
