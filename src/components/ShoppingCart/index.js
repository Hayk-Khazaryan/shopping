import "./style.css"
import Summary from "../Summary"
import AddItems from "../AddItems"


function ShoppingCart() {
       return (
              <div className="ShoppingCart">
                     <div className="payment">
                            <p className="nameing">Անվանում</p>
                            <p className="price">Գին</p>
                            <p className="quantity">Քանակ</p>
                            <p className="total">Ընդամենը</p>
                     </div>
                     <div className="d-f">
                            <AddItems />
                            <Summary />
                     </div>
              </div>
       )
}


export default ShoppingCart