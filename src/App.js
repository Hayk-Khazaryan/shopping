import './App.css'
import Routess from './Routess'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function App() {
  const [isClick, setIsClick] = useState(false)
  const handleClick = () => {
    if (isClick) {
      setIsClick(false)
    } else {
      setIsClick(true)
    }
  }
  return (
    <div className="App">
      <div
        onClick={() => handleClick()}
        className="shopping-icon">
        {
          isClick
            ?
            <Link to="/" className='home'>HOME</Link>
            :
            <Link to="/shoppingCart"><LocalGroceryStoreIcon /></Link>
        }
      </div>
      <Routess />
    </div>
  )
}

export default App
