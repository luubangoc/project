import { NavLink } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosHeartEmpty, IoMdHome } from "react-icons/io";
import { LuClipboardEdit, LuUsers } from "react-icons/lu";
import { FaRegUser, FaSearch, FaShoppingBag } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const Navbar = () => {

  return (
    <nav className="navbar navbar-light bg-light">
      {/* 1 */}
      <div className="container" style={{ textAlign: "center" }}>
        <NavLink to="/" className="navbar-brand">
          <h2>WoodMart.</h2>
          <p style={{ fontSize: 15 }}>Organic Baby Clothes</p>
        </NavLink>
      </div>
      <br />
      <br />
      <br />

      {/* 2 */}
      <div className="container">
        <div>
          <ul className="navbar-nav me-auto d-flex justify-content-end">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                <span>
                  <IoMdHome />
                </span>{" "}
                Home Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <span>
                  <LuUsers />
                </span>{" "}
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                <span>
                  <MdOutlineEmail />
                </span>{" "}
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                <span>
                  <LuClipboardEdit />
                </span>{" "}
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3 */}

        <div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">
                Shop
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              {/* Search */}
              <NavLink to="/shop" className="nav-link" style={{ fontSize: 25 }}>
                <Tooltip title="Search">
                  <IconButton>
                    <FaSearch />
                  </IconButton>
                </Tooltip>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 4 */}

        <div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              {/* My account */}
              <NavLink to="/shop" className="nav-link" style={{ fontSize: 25 }}>
                <Tooltip title="My account">
                  <IconButton>
                    <FaRegUser />
                  </IconButton>
                </Tooltip>
              </NavLink>
            </li>

            <li className="nav-item">
              {/* My wishlist  */}
              <NavLink to="/shop" className="nav-link" style={{ fontSize: 25 }}>
                <Tooltip title="My wishlist">
                  <IconButton>
                    <IoIosHeartEmpty />
                  </IconButton>
                </Tooltip>
              </NavLink>
            </li>

            <li className="nav-item">
              {/* Shopping cart */}
              <NavLink to="/cart" className="nav-link" style={{ fontSize: 25 }}>
                <Tooltip title="Shopping cart">
                  <IconButton>
                    <FaShoppingBag />
                  </IconButton>
                </Tooltip>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
