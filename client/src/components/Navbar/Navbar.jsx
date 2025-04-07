import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { AppContent } from '../../context/AppContext'

const Navbar = () => {
const {setCurrency}=useContext(CoinContext)

const currencyHandler = (event)=>{
   switch (event.target.value){
    case "usd":{
      setCurrency({name:"usd",symbol:"$"});
      break;
    }
    case "eur":{
      setCurrency({name:"eur",symbol:"€"});
      break;
    }
    case "inr":{
      setCurrency({name:"inr",symbol:"₹"});
      break;
    }
    default:{
      setCurrency({name:"usd",symbol:"$"});
      break;
    }
   }
}

//signup 

const navigate = useNavigate();
const {userData,backendUrl,setUserData,setIsLoggedIn}=useContext(AppContent)

  return (
    <div className='navbar'>
    <Link to={`/`}>
      <img src={logo} alt='' className='logo' />
    </Link>
      <ul>  
      <Link to={`/`}> <li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='inr'>INR</option>
        </select>
        {/* {userData ? 
        <div>
          {userData.name[0].toUpperCase()}
        </div>: 
         <button onClick={()=>navigate('/login')}>Login <img src={arrow_icon}/></button>}
        */}
      </div>

    </div>
  )
}

export default Navbar
