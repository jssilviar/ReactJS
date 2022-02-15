import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetailPage from './components/ProductDetailPage';
import { CartProvider } from './providers/CartProvider';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:category" component={Home}/>
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductDetailPage} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;