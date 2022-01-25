import './App.css';
import NavBar from './components/NavBar'
import { ItemListContainer} from './components/ItemListContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Ubicanos from './pages/Ubicanos';
import Contactanos from './pages/Contactanos';
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
          <Route path="/ubicanos" component={Ubicanos} />
          <Route path="/contactanos" component={Contactanos} />
          <Route path="/cart" component={Cart} />
          <Route path="/products" component={ItemListContainer} />
          <Route path="/product/:id" component={ProductDetailPage} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;