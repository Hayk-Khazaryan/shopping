import "./style.css"
import Button from '@mui/material/Button'
import data from "../../Store/data"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { useDispatch } from "react-redux"
import { ADD_TO_BASKET } from "../../toolkitRedux/Slicers/toolkitSlice"


function Basketball() {
       const dispatch = useDispatch()
       const addPerson = (id, img, price, text, date, person, count) => {
              const paramsObj = { id, img, price, text, date, person, count }
              dispatch(ADD_TO_BASKET(paramsObj))
       }
       return (
              <>
                     <div className="contanier d-f">
                            {
                                   data.map(item => (
                                          <div className="basketball" key={item.id}>
                                                 <img className="img" alt="img" src={item.img} />
                                                 <div className="d-f">
                                                        <p className="price">{item.price}.00</p>
                                                        <AttachMoneyIcon />
                                                 </div>
                                                 <p className="text">{item.text}</p>
                                                 <p className="date">{item.date}</p>
                                                 <p className="person">{item.person}</p>
                                                 <Button
                                                        onClick={() => addPerson(item.id, item.img, item.price,
                                                               item.text, item.date, item.person, item.count)}
                                                        className="add-button"
                                                        variant="outlined">
                                                        ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ
                                                 </Button>
                                          </div>
                                   ))
                            }
                     </div>
              </>
       )
}


export default Basketball