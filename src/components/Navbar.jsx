import React from 'react'
import './styles/Navbar.css'

export default function Navbar() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-black bg-black" style={{height: "83px"}}>
            <img src="https://app.pepcorns.com/assets/img/logo.png" height="52%" style={{marginLeft: "45px"}}></img>
            <button id="login_btn" className="btn mb-1" style={{fontSize: "15px", marginLeft: "29%"}}>Startups</button>
            <button id="login_btn" className="btn mb-1" style={{fontSize: "15px", marginLeft: "15px"}}>Raise Funding</button>
            {/* <button id="login_btn" className="btn mb-1" style={{fontSize: "15px", marginLeft: "4%"}}>Learn</button> */}

            <div class="dropdown">
            <button
              class="btn mb-1 dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
              style={{fontSize: "15px", marginLeft: "29%"}}
            >
              Learn
            </button>
            <ul id="list" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

            <button id="login_btn" className="btn mb-1" style={{fontSize: "15px", marginLeft: "26%"}}>Login</button>
            <button id="register_btn" className="btn mb-1" style={{fontSize: "15px", marginLeft: "3%",}}>Get Started</button>
        </nav>

    </div>
  )
}
