import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/Home/HomePage'
import Productpage from "./components/Products/ProductsPage/Productpage";
import SingleProduct from "./components/Products/SingleProduct/SingleProduct";
import UserDashboard from "./components/UserAccount/Dashboard";
import Messenger from "./components/Messenger/Messenger";
import MessageAreaToggle from "./components/Messenger/ContentAreaMessages/MessageAreaToggle";
import SingleStore from "./components/SingleStore/SingleStore";
import Ambassadors from "./components/Ambassadors/Ambassadors";
import Login from "./Authenticaiton/Login/Login";
import SellProducts from "./components/UserAccount/SellProducts/SellProduct";
import SearchProducts from "./components/SearchProducts/SearchProducts";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<Productpage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/shop/:shopname" element={<SingleStore />} />
        <Route path="/page/ambassadors" element={<Ambassadors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchProducts />} />

        {/* Protected routes - Dashboard and user areas */}
        <Route 
          path="/user/dashboard/:id" 
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/user/messenger/:id" 
          element={
            <ProtectedRoute>
              <MessageAreaToggle />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/sell/:id" 
          element={
            <ProtectedRoute>
              <SellProducts />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
