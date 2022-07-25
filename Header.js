import React from "react"
import { Link } from "react-router-dom";
function Header() 
{
    return(
          <div>
            <div class="HR">hr@kangaroosoftware.net +919630623876</div>
            <div className="logonav">
              <div className="logo"><img src="logo.jpg" alt="img"/></div>
            </div>
              <header>
                
                
              <nav >
              <div > 
        <ul>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link  to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
        </div>
      </nav>
      
              </header>
             
          </div>

        );
    }
export default Header;
