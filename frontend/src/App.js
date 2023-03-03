import './App.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/layout/Footer/Footer';
import WebFont from "webfontloader";
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Product/Search';
import LoginSignUp from './components/User/LoginSignUp';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from "./components/layout/Header/UserOptions"
import { useSelector } from 'react-redux';
import Profile from './components/User/Profile';
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import OrderSuccess from './components/Cart/OrderSuccess';
import MyOrders from './components/Order/MyOrders';
import OrderDetails from './components/Order/OrderDetails';
import Dashboard from './components/Admin/Dashboard';
import ProductList from './components/Admin/ProductList';
import NewProduct from './components/Admin/NewProduct';
import UpdateProduct from './components/Admin/UpdateProduct';
import OrderList from './components/Admin/OrderList';
import ProcessOrder from './components/Admin/ProcessOrder';
import UsersList from './components/Admin/UsersList';
import UpdateUser from './components/Admin/UpdateUser';
import ProductReviews from './components/Admin/ProductReviews';
import NotFound from './components/layout/Not Found/NotFound';
import StripePayment from './components/Cart/StripePayment';
import About from './components/layout/About/About';
import Contact from './components/layout/Contact/Contact';

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);



  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());


  }, []);

  return (
    <>
      <Router>
        <Header />
        {isAuthenticated && <UserOptions user={user} />}



        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/product/:id' element={<ProductDetails />} />

          <Route path='/products' element={<Products />} />

          <Route path='/products/:keyword' element={<Products />} />

          <Route path='/search' element={<Search />} />

          <Route path='/login' element={<LoginSignUp />} />


          <Route path='/account' element={<ProtectedRoute component={Profile} />} />

          <Route path='/me/update' element={<ProtectedRoute component={UpdateProfile} />} />

          <Route path='/password/update' element={<ProtectedRoute component={UpdatePassword} />} />

          <Route path='/password/forgot' element={<ForgotPassword />} />

          <Route path='/password/reset/:token' element={<ResetPassword />} />

          <Route path='/cart' element={<Cart />} />


          <Route path='/shipping' element={<ProtectedRoute component={Shipping} />} />


          <Route path='/order/confirm' element={<ProtectedRoute component={ConfirmOrder} />} />
         

          <Route path='/success' element={<ProtectedRoute component={OrderSuccess} />} />

          <Route path='/orders' element={<ProtectedRoute component={MyOrders} />} />


          <Route path='/orders/:id' element={<ProtectedRoute component={OrderDetails} />} />
    

          <Route isAdmin={true} path='/admin/dashboard' element={<ProtectedRoute component={Dashboard} />} />

          <Route isAdmin={true} path='/admin/products' element={<ProtectedRoute component={ProductList} />} />


          <Route isAdmin={true} path='/admin/product' element={<ProtectedRoute component={NewProduct} />} />

          <Route isAdmin={true} path='/admin/product/:id' element={<ProtectedRoute component={UpdateProduct} />} />

          <Route isAdmin={true} path='/admin/orders' element={<ProtectedRoute component={OrderList} />} />

          <Route isAdmin={true} path='/admin/order/:id' element={<ProtectedRoute component={ProcessOrder} />} />

          <Route isAdmin={true} path='/admin/users' element={<ProtectedRoute component={UsersList} />} />

          <Route isAdmin={true} path='/admin/user/:id' element={<ProtectedRoute component={UpdateUser} />} />

          <Route isAdmin={true} path='/admin/reviews' element={<ProtectedRoute component={ProductReviews} />} />
          <Route path='/process/payment' element={<ProtectedRoute component={StripePayment} />} />
          <Route path='/about' element={<ProtectedRoute component={About} />} />

          <Route path='/contact' element={<ProtectedRoute component={Contact} />} />

          <Route
            element={
              window.location.pathname === "/process/payment" ? null : NotFound
            }
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
