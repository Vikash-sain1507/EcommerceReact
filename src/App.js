
import './App.css';
import Header from './Components';
import Footer from './Components/Footer';
import Home from './Modules';
import { Routes, Route } from 'react-router-dom'
import SinglProduct from './Modules/SinglProduct';
import Products from './Modules/Products';
import CategoryProducts from './Modules/CategoryProducts';
import Cart from './Modules/Cart';
import Login from './Components/Login';
import AuthGuard from './Components/AuthGaurd';

function App() {
  return (
    <>

      <Header />
      <Routes>
        < Route path='/' element={<AuthGuard>
          <Home />
        </AuthGuard>} />   
        < Route path='/products/:id' element={<AuthGuard>
          <SinglProduct />
        </AuthGuard>} />  
         < Route path='/products' element={<AuthGuard>
          <Products />
        </AuthGuard>} />  
         < Route path='/categories/:name' element={<AuthGuard>
          <CategoryProducts />
        </AuthGuard>} />  
         < Route path='/cart' element={<AuthGuard>
          <Cart />
        </AuthGuard>} />
        <Route path='/Login' element={<Login />} />
      </Routes>

      <Footer />
    </>

  );
}

export default App;
