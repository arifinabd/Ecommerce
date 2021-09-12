import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomeScreen from './screens/home';
import ProductList from './screens/ProductList';
import ProductScreen from './screens/ProductScreen';



function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Ecommerce</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>
      <main>
        <Route path="/product/:id" component={ProductScreen}/>
        <Route path="/productlist" component={ProductList}/>
        <Route path="/" component={HomeScreen} exact/>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
