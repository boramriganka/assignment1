import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/pages/Home';
import SpecificProduct from './components/pages/SpecificProduct';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';
import Shipping from './components/pages/Shipping';
import Payment from './components/pages/Payment';
import PlaceOrder from './components/pages/PlaceOrder';
import Order from './components/pages/Order';
import UserList from './components/pages/UserList';
import UserEdit from './components/pages/UserEdit';
import ProductList from './components/pages/ProductList';
import ProductEdit from './components/pages/ProductEdit';
import OrderList from './components/pages/OrderList';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={Order} />
          <Route path='/placeOrder' component={PlaceOrder} />
          <Route path='/payment' component={Payment} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/product/:id' component={SpecificProduct} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/admin/userList' component={UserList} />
          <Route path='/admin/user/:id/edit' component={UserEdit} />
          <Route path='/admin/productList' component={ProductList} exact />
          <Route
            path='/admin/productList/:pageNumber'
            component={ProductList}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEdit} />
          <Route path='/admin/orderList' component={OrderList} />
          <Route path='/search/:keyword' component={Home} exact />
          <Route path='/page/:pageNumber' component={Home} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={Home}
            exact
          />
          <Route path='/' component={Home} exact />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
