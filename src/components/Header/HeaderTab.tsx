import { NavLink } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUser, FaSearch, FaShoppingBag} from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import IconButton from "@mui/material/IconButton";
import 'react-slideshow-image/dist/styles.css'
import "../../index.css"
import { Box } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";





const HeaderTab = () => {
    return (
       <header className="navbar nav-link " style={{background:"#ff99cc" }}>
        <label htmlFor="mb-input" className="checkbtn"><FaBars /></label>
        <input type="checkbox" hidden className="mb-input" id="mb-input" />
        <label htmlFor="mb-input" className="overlay"></label>
         <div className="reponsive-mb">
          <div>
          <label htmlFor="mb-input" className="closes">
          <IoClose />
          </label>
          </div>
          <br /><hr />
          
            

          <div className="repomsive-mb-list">

          <div  >
          <NavLink to="/" className="mbb nav-link" aria-current="page">
           Home Page
          </NavLink>
        </div>
        
        <div >
             <NavLink to="/shop" className="mbb nav-link">
              Shop
             </NavLink>
        </div>
        
        <div  >
          <NavLink to="/about" className="mbb nav-link ">
             About Us
          </NavLink>
        </div>
        <div >
          <NavLink to="/contact" className="mbb nav-link">
             Contact
          </NavLink>
        </div>
        <div >
            <NavLink to="/blog" className="mbb nav-link">
               Blog
            </NavLink>
        </div>

        

          </div>
        
        </div>
        
          
          

          <Box className="logo ">
             <NavLink to="/">    
             <img 
                  src="https://woodmart.xtemos.com/kids/wp-content/uploads/sites/13/2023/05/w-bcs-logo-black-l-1.svg"
                  alt=""
                />
             </NavLink>
        </Box> 
          
        <div className="container">
          
    <div className="uppercase">
     <Box>
      <div className="nav-underline position-absolute start-50 translate-middle">
      <div className="d-flex nav-underline" >
        
        <div className="a nav-item p-2 flex-fill " >
          <NavLink to="/" className="nav-link" aria-current="page">
           Home Page
          </NavLink>
        </div>
        
        <div className="a nav-item p-2 flex-fill">
             <NavLink to="/shop" className="nav-link">
              Shop
             </NavLink>
        </div>
        
        <div className="nav-item p-2 flex-fill" >
          <NavLink to="/about" className="nav-link ">
             About Us
          </NavLink>
        </div>
        <div className=" nav-item p-2 flex-fill" >
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
      </Box>


     <Box className="d-flex position-absolute top-50 end-0 translate-middle-y">
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
                      
                  </IconButton>
                </Tooltip>
              </NavLink>
        </div>

      </Box>
    </div>
        

     </div>
      </header>
    
    );
  };
  
  export default HeaderTab;



