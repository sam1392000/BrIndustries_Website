import React, { Component } from 'react'
import './Space.css'
import {Link , animateScroll as scroll} from 'react-scroll';
import screw1 from "../body.png"
 class Body extends Component {
    render() {
        const img={
            marginLeft:"40em",
            marginTop:"-21em",
            width:"700px",
            height:"700px"
        }
        const font={
            marginLeft:"5em",
            marginTop:"6em",
            fontSize:"2vw"
        }
        const button={
            // paddingLeft :"3em",
            // paddingRight:"3em",
            marginTop:"2em",
            marginLeft:"3.5em",
            width:"10em"
            
        }
        // const arrow={
        //     paddingLeft:"1em",
        //     paddingTop:"-1em"
        // }
        return (
            <div style={{marginTop:"10rem"}}>
                <div className="containers para " style={ font}>
                    <h2>A <div className="badge badge-primary text-wrap">Hex-Punch and Punch Sleeve</div></h2> 
                    <h2>Manufacturing Company</h2>
                
                
                    <button type="button" style={button} className=" text-center btn btn-primary btn-lg btn btn-primary rounded-pill ">
                        <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Explore</Link>
                    </button>
               </div>
                <div className="bg" style={img}>
                    <img src={screw1} className="image2 rounded" style={{width:"750px",height:"600px"}}alt="pic"/>
                </div>
                <br/>
                <br/>
                
                
            </div>
            
        )
    }
}

export default Body
