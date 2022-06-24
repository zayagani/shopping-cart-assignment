import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import HomePage from './Pages/HomePage';
import Register from './Pages/Register';
import SignIn from './Pages/SignUp';
import ProductView from './ProductView';
import CartPage from './Component/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
           <Route index element={<HomePage />} />
           <Route path="/register" element={<Register />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/products/*" element={<ProductView />} />
           <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
