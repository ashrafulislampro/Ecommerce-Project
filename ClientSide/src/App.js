import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Checkout from "./Components/Checkout/Checkout";
import Contact from "./Components/Contact/Contact";
import FAQ from "./Components/FAQ/FAQ";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Footer from "./Components/Home/Footers/Footers";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Navbar from "./Components/Home/Navbar/Navbar";
import Login from "./Components/Login/Login";
import ChangePassword from "./Components/MyAccountPages/ChangePassword/ChangePassword";
import ManageAddress from "./Components/MyAccountPages/ManageAddress/ManageAddress";
import MyAccount from "./Components/MyAccountPages/MyAccount/MyAccount";
import ProfileInformation from "./Components/MyAccountPages/ProfileInformation/ProfileInformation";
import Wishlist from "./Components/MyAccountPages/Wishlist/Wishlist";
import MyOrderHistory from "./Components/MyOrderHistory/MyOrderHistory";
import MyReturns from "./Components/MyReturns/MyReturns";
import MyReviews from "./Components/MyReviews/MyReviews";
import NotFound from "./Components/NotFound/NotFound";
import OrderCancellation from "./Components/OrderCancellations/OrderCancellation";
import OrderComplete from "./Components/OrderComplete/OrderComplete";
import Payment from "./Components/Payment/Payment";
import PaymentMethods from "./Components/PaymentMethods/PaymentMethods";
import Registered from "./Components/Registered/Registered";
import ProductDetails from "./Components/Shoppages/ProductDetails/ProductDetails";
import Shopgridview from "./Components/Shoppages/Shopgridview";
import Shoplistview from "./Components/Shoppages/Shoplistview";
import Shoppingcart from "./Components/Shoppages/Shoppingcart/Shoppingcart";
import TrackOrder from "./Components/TrackOrder/TrackOrder";
import Voucher from "./Components/Voucher/Voucher";
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
