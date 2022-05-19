import "./style.css"
import { useDispatch, useSelector } from "react-redux"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { changeProductCount, removeBasket } from "../../Store/action"


function AddItems() {
       const cartItems = useSelector(state => {
              const { cartItems } = state.cartItemReducer
              return cartItems
       })
       const dispatch = useDispatch()
       const changeCount = (e, id, price) => {
              let count = e.target.value
              dispatch(changeProductCount(Number(count), id, price))
              if (count < 1) {
                     dispatch(removeBasket(id))
              }
       }
       return (
              <div className="add-items">
                     {cartItems.map(item => (
                            <div className="Person d-f" key={item.id}>
                                   <img className="img" alt="img" src={item.img} />
                                   <div className="info">
                                          <div className="person-info">
                                                 <p className="text">{item.text}</p>
                                                 <p className="date">{item.date}</p>
                                                 <p className="person">{item.person}</p>
                                                 <p className="delete">Հեռացնել</p>
                                          </div>
                                          <div className="d-f">
                                                 <p className="price">{item.price}.00</p>
                                                 <AttachMoneyIcon className="money-icon" />
                                                 <input
                                                        onChange={(e) => changeCount(e, item.id,
                                                               item.price)}
                                                        className="text-filded"
                                                        type="number"
                                                        value={item.count}
                                                 />
                                                 <p className="prices">{Number(item.count * item.price).toFixed(2)}</p>
                                                 <AttachMoneyIcon className="money-icon" />
                                          </div>
                                   </div>
                            </div>
                     ))}
              </div>
       )
}


export default AddItems