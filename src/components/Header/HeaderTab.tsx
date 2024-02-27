import { NavLink } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUser, FaSearch, FaShoppingBag} from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import IconButton from "@mui/material/IconButton";
import 'react-slideshow-image/dist/styles.css'
import "../../index.css"
import "../../App.css"


const HeaderTab = () => {
    return (
       <header className="navbar nav-link " style={{background:"#ff99cc" }}>

        <div className="container">
        <div className="logo">
             <NavLink to="/">    
             <img 
                  src="https://woodmart.xtemos.com/kids/wp-content/uploads/sites/13/2023/05/w-bcs-logo-black-l-1.svg"
                  alt=""
                />
             </NavLink>
        </div>  
        
      <div>
      <div className="nav-underline position-absolute start-50 translate-middle">
      <div className="d-flex nav-underline" >
        
        <div className="nav-item p-2 flex-fill " >
          <NavLink to="/" className="nav-link" aria-current="page">
           Home Page
          </NavLink>
        </div>
        
        <div className="nav-item p-2 flex-fill">
             <NavLink to="/shop" className="nav-link">
              Shop
             </NavLink>
        </div>
        
        <div className="nav-item p-2 flex-fill" >
          <NavLink to="/about" className="nav-link ">
             About Us
          </NavLink>
        </div>
        <div className="nav-item p-2 flex-fill" >
          <NavLink to="/contact" className="nav-link">
             Contact
          </NavLink>
        </div>
        <div className="nav-item p-2 flex-fill">
            <NavLink to="/blog" className="nav-link">
               Blog
            </NavLink>
        </div>
        
        </div>
        </div>
        
      </div>


     <div className="d-flex position-absolute top-50 end-0 translate-middle-y">
        <div className="nav-item p-2 flex-fill">
              {/* My account */}
             <NavLink to="/shop" className="nav-link" style={{fontSize: 25}}>    
                  <Tooltip title="My account">
                    <IconButton aria-label="cart">         
                         <FaRegUser />
                    </IconButton>
                  </Tooltip>
              </NavLink>
        </div>

        <div className="nav-item p-2 flex-fill">
              {/* Search */}
             <NavLink to="/shop" className="nav-link" style={{fontSize: 25}}>
                <Tooltip title="Search">
                  <IconButton>
                    <FaSearch /> 
                  </IconButton> 
                </Tooltip> 
              </NavLink>
        </div>

        <div className="nav-item p-2 flex-fill">
              {/* My withlist  */}
             <NavLink to="/shop" className="nav-link" style={{fontSize: 25}}>         
                <Tooltip title="My withlist">
                  <IconButton >
                      <IoIosHeartEmpty />
                      <span className="carousel"></span>
                  </IconButton>
                </Tooltip>
              </NavLink>
        </div>

        <div className="nav-item p-2 flex-fill">
              {/* Shopping cart */}
             <NavLink to="/shop" className="nav-link" style={{fontSize: 25}}>            
                <Tooltip title="Shopping cart">
                <IconButton >
                      <FaShoppingBag />
                      <span className="carousel"></span>
                  </IconButton>
                </Tooltip>
              </NavLink>
        </div>

      </div>
     </div>
      </header>
    
    );
  };
  
  export default HeaderTab;



