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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
           <Route index element={<HomePage />} />
           <Route path="/register" element={<Register />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/products/*" element={<ProductView />} />
           <Route path="cart" element={<CartPage />} />
          {/*<Route path="/products/*" element={<ProductView />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="cart" element={<CartModel />} /> */}
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
