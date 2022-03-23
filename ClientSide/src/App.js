import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Footer from "./Pages/Home/Footers/Footers";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Home/Navbar/Navbar";
import ProductDetails from "./Pages/Home/Shop/ProductDetails/ProductDetails";
import Shopgridview from "./Pages/Home/Shop/Shopgridview";
import Shoplistview from "./Pages/Home/Shop/Shoplistview";
import Shoppingcart from "./Pages/Home/Shoppingcart/Shoppingcart";
import Login from "./Pages/Login/Login";
import ChangePassword from "./Pages/MyAccountPages/ChangePassword/ChangePassword";
import ManageAddress from "./Pages/MyAccountPages/ManageAddress/ManageAddress";
import MyAccount from "./Pages/MyAccountPages/MyAccount/MyAccount";
import ProfileInformation from "./Pages/MyAccountPages/ProfileInformation/ProfileInformation";
import Wishlist from "./Pages/MyAccountPages/Wishlist/Wishlist";
import MyOrderHistory from "./Pages/MyOrderHistory/MyOrderHistory";
import MyReturns from "./Pages/MyReturns/MyReturns";
import MyReviews from "./Pages/MyReviews/MyReviews";
import NotFound from "./Pages/NotFound/NotFound";
import OrderCancellation from "./Pages/OrderCancellations/OrderCancellation";
import OrderComplete from "./Pages/OrderComplete/OrderComplete";
import Payment from "./Pages/Payment/Payment";
import PaymentMethods from "./Pages/PaymentMethods/PaymentMethods";
import Registered from "./Pages/Registered/Registered";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import Voucher from "./Pages/Voucher/Voucher";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="gridview" element={<Shopgridview />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="listview" element={<Shoplistview />} />
        <Route path="shoppingcart" element={<Shoppingcart />} />
        <Route path="productDetails" element={<ProductDetails />} />
        <Route path="register" element={<Registered />} />
        <Route path="login" element={<Login />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="myAccount/profileInfo" element={<ProfileInformation />} />
        <Route path="myAccount/manageAddress" element={<ManageAddress />} />
        <Route path="myAccount/changePassword" element={<ChangePassword />} />
        <Route path="myAccount/wishlist" element={<Wishlist />} />
        <Route path="shop/checkout" element={<Checkout />} />
        <Route path="shop/payment" element={<Payment />} />
        <Route path="trackorder" element={<TrackOrder />} />
        <Route path="orderComplete" element={<OrderComplete />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="myAccount/myOrderHistory" element={<MyOrderHistory />} />
        <Route path="myAccount/myReturns" element={<MyReturns />} />
        <Route path="myAccount/orderCancel" element={<OrderCancellation />} />
        <Route path="myAccount/myReviews" element={<MyReviews />} />
        <Route path="myAccount/payment" element={<Voucher />} />
        <Route path="myAccount/paymentMethods" element={<PaymentMethods />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
