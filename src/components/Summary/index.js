import "./style.css"
import Button from '@mui/material/Button'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { selectCartItems } from "../../toolkitRedux/Slicers/toolkitSlice"
import { useSelector } from "react-redux"



function Summary() {
       const cartItems = useSelector(selectCartItems)
       let sum = 0;
       cartItems.forEach(item => {
              sum += item.price * item.count
       })
       return (
              <div className="summary">
                     <p className="title">Ամփոփում</p>
                     <div className="d-f">
                            <p>Ընդամենը</p>
                            <div className="display-f">
                                   <p className="total-price">{sum}</p>
                                   <AttachMoneyIcon className="icon-attach" />
                            </div>
                     </div>
                     <div className="d-f">
                            <p className="discount">Զեղչ</p>
                            <div className="display-f">
                                   <p className="discount">0.00</p>
                                   <AttachMoneyIcon className="icon" />
                            </div>
                     </div>
                     <p>Առաքում - Հաշվարկը՝ հաջորդ քայլում</p>
                     <div className="d-f">
                            <p className="total-price">Ընդհանուր գինը</p>
                            <div className="display-f">
                                   <p className="total-price">{sum}</p>
                                   <AttachMoneyIcon className="icon-attach" />
                            </div>
                     </div>
                     <Button className="continue-payment" variant="outlined">
                            Շարունակել վճարումը
                     </Button>
              </div>
       )
}


export default Summary