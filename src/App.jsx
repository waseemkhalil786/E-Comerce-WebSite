import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/home/homePage";
import NoPage from "./pages/noHome/noPage";
import ProductInfo from "./pages/productInfo/productinfo";
import ScrollTop from "./components/scrollTop/scrollTop";
import CartPage from "./pages/cart/cartPage";
import AllProduct from "./pages/allProduct/allProduct";
import Signup from "./pages/registration/signup";
import Login from "./pages/registration/login";
import UserDashboard from "./pages/user/userDashboard";
import AdminDashboard from "./pages/admin/adminDashboard";
import AddProductPage from "./components/admin/addProductPage";
import UpdateProductPage from "./components/admin/updateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/protectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/protectedRouteForAdmin";
import CategoryPage from "./pages/category/categoryPage";

function App() {
  return (
    <MyState>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage/>} />

          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/add-product" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/update-product/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </MyState>
  );
}

export default App;
