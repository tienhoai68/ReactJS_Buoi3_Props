import React, { Component } from 'react'
import "./style.css"
export default class Header extends Component {
  render() {
    return (
      <div>
        {/* <h1 style={{fontSize: "3.5rem"}} className='p-3'>Shoes Store</h1> */}
        <div className="container-fluid px-0">
          <header>
            <div className="shape" />
            <nav className="navbar navbar-expand-lg navbar-transparent">
              <a className="navbar-brand" href="#">SPORT SHOES</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">MEN</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">WOMEN</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">KIDS</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-md-6 left-side">
                  <img src="https://i.imgur.com/jrRBTai.png" className="w-100" />
                </div>
                <div className="col-md-6 right-side">
                  <h1>SPORTS SHOES</h1>
                  <p>FREE DELIVERY</p>
                  <div className="text-center">
                    <button className="btn order-button">ORDER NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    )
  }
}
