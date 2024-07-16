import { Route, Routes } from "react-router-dom";
import Navigation from "../customer/components/navigation/Navigation";
import Cart from "../customer/pages/Cart";
import Checkout from "../customer/pages/Checkout";
import Home from "../customer/pages/Home";
import Order from "../customer/pages/Order";
import OrderDetails from "../customer/pages/OrderDetails";
import Product from "../customer/pages/Product";
import ProductDetails from "../customer/pages/ProductDetails"
import Navigation2 from "../customer/components/navigation/Navigation2";
import CreateReview from "../customer/pages/CreateReview";

export default function CustomerRoutes() {
  return (
    <div>
      <div>
      <Navigation/>
      </div>
      <Routes>
      <Route path="/login" element={<Home />} />
      <Route path="/register" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        
        {/* <Route path="/products" element={<Product />} /> */}

        <Route path="/products/:productId" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/account/:productId/review" element={<CreateReview />} />

      </Routes>
    </div>
  );
}
