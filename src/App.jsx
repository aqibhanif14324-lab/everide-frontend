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

function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/category/:category" element={<Productpage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/user/dashboard/:id" element={<UserDashboard />} />
          <Route path="/user/messenger/:id" element={<MessageAreaToggle />} />
        <Route path="/shop/:shopname" element={<SingleStore />} />
                <Route path="/page/ambassadors" element={<Ambassadors />} />
                <Route path="/login" element={<Login />} />
        <Route path="/sell/:id" element={<SellProducts />} />
        <Route path="/search" element={<SearchProducts />} />

      </Routes>
                                            
    </Router>

    </>
  )
}

export default App
