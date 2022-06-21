import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './header/header';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Products from './products/products';
import ProductDetails from './products/productDetails';



function App() {
  return (
    <>
      
      <div className="container-fluid">

      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/details/:id" component={ProductDetails}/>

        </Switch>
      </Router>


      </div>
    </>
  );
}

export default App;
