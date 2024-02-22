import { NavLink } from "react-router-dom";
import { MdOutlineEmail} from "react-icons/md";
import { IoIosHeartEmpty, IoMdHome } from "react-icons/io";
import { LuClipboardEdit, LuUsers } from "react-icons/lu";
import { FaRegUser, FaSearch, FaShoppingBag} from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import IconButton from "@mui/material/IconButton";



const Navbar = () => {
    return (
    <nav className="navbar navbar-light bg-light nav-link">
        {/* 1 */}
        <div className="container">
             <NavLink to="/" className="navbar-brand position-absolute top-0 start-50 translate-middle-x">    
             <img
                  src="https://woodmart.xtemos.com/kids/wp-content/uploads/sites/13/2023/05/w-bcs-logo-black-l-1.svg"
                  alt=""
                />
             </NavLink>
        </div>
        <br /><br /><br />

        {/* 2 */}
        <div className="container">

        <div className="d-flex nav-tabs " >
        
        <div className="nav-item p-2 flex-fill" >
          <NavLink to="/" className="nav-link active" aria-current="page">
            <IoMdHome /> Home Page
          </NavLink>
        </div>
        <div className="nav-item p-2 flex-fill" >
          <NavLink to="/about" className="nav-link ">
            <LuUsers /> About Us
          </NavLink>
        </div>
        <div className="nav-item p-2 flex-fill" >
          <NavLink to="/contact" className="nav-link">
            <MdOutlineEmail /> Contact
          </NavLink>
        </div>
        <div className="nav-item p-2 flex-fill">
            <NavLink to="/blog" className="nav-link">
              <LuClipboardEdit /> Blog
            </NavLink>
        </div>
        
        </div>

       {/* 3 */}

      <div>
      <ul className="navbar-nav me-auto nav-underline">
        <li className="nav-item ">
             <NavLink to="/shop" className="nav-link"><b>Shop</b></NavLink>
        </li>
        </ul>
        
      </div>


      {/* 4 */}

      <div className="d-flex justify-content-between">

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

        <div>|</div>
      
        <div className="nav-item p-2 flex-fill">
              {/* My account */}
             <NavLink to="/shop" className="nav-link" style={{fontSize: 25}}>    
                  <Tooltip title="My account">
                    <IconButton>
                      <FaRegUser />
                    </IconButton>
                  </Tooltip>
              </NavLink>
        </div>

        <div className="nav-item p-2 flex-fill">
              {/* My withlist  */}
             <NavLink to="/shop" className="nav-link" style={{fontSize: 25}}>         
                <Tooltip title="My withlist">
                  <IconButton>
                     <IoIosHeartEmpty />
                  </IconButton>
                </Tooltip>
              </NavLink>
        </div>

        <div className="nav-item p-2 flex-fill">
              {/* Shopping cart */}
             <NavLink to="/shop" className="nav-link" style={{fontSize: 25}}>            
                <Tooltip title="Shopping cart">
                  <IconButton>
                     <FaShoppingBag />
                  </IconButton>
                </Tooltip>
              </NavLink>
        </div>
        
      </div>
    </div>
    
  </nav>
  
    );
  };
  
  export default Navbar;


