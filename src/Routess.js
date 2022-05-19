import { Routes, Route } from "react-router-dom"
import Basket from "./components/Basket"
import ShoppingCart from "./components/ShoppingCart"



function Routess() {
       return (
              <div>
                     <Routes>
                            <Route path="/" element={<Basket />} />
                            <Route path="/shoppingCart" element={<ShoppingCart />} />
                     </Routes>
              </div>
       )
}

export default Routess
