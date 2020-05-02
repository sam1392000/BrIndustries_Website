import React, { Component } from 'react'
import {Link , animateScroll as scroll} from 'react-scroll';

import './Space.css'
export class Nav extends Component {
  scrollToTop = () =>{
    scroll.scrollToTop();
  }
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
    collapsed: true,
    };
    }
    toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed,
    });
    }
  
  render() {
    const myStyle={
      color:"#ffffff",
      marginLeft:"3em",
      fontSize:"4.5vw"
    }
    const button={
      marginLeft:"1em"
    }
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <h4  style={myStyle} onClick={this.scrollToTop}><span className="containers para  badge badge-primary text-wrap">BR Industries</span></h4>
        <button onClick={this.toggleNavbar}  type="button" 
        data-toggle="collapse" className={`${classTwo}`} data-target="#navbarResponsive" 
        aria-controls="navbarResponsive" aria-expanded="false" 
        aria-label="Toggle navigation" class="navbar-toggler">
        <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active" style={button}>
            <button type="button" className="btn btn-outline-primary">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
              About</Link></button>
            </li>
            <li className="nav-item" style={button}>
            <button type="button" className="btn btn-outline-primary">
            <Link
                activeClass="active"
                to="product"
                spy={true}
                smooth={true}
                duration={500}
              >Product</Link></button>
            </li>
            <li className="nav-item" style={button}>
            <button type="button" className="btn btn-outline-primary">
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >Contact</Link></button>
            </li>
            </ul>
            </div>

        </nav>
   
      </div>
    )
  }
}

export default Nav
