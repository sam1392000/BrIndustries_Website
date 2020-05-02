import React,{ Component } from "react";
import hex1 from "../hexpunch1img.jpeg"
import hex2 from "../Hexpunch2img.jpeg"
import hex3 from "../hexpunch3.jpeg"
import hex4 from "../hexpunch4.jpeg"
import slv1 from "../punchsleeve1.jpeg"
import slv2 from "../punchsleeve2.jpeg"
import slv3 from "../punchsleeve3.jpeg"
import mark1 from "../markingpunch1.jpeg"
import mark2 from "../markingpunch2img.jpeg"
import mark3 from "../markingpunch3.jpeg"
import dye1 from "../dyeinsert1.jpeg"
import dye2 from "../dyeinsert2.jpeg"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Product extends Component{
    render(){
        let styles = {
            margin: 'auto',
            width: '500px'
          };
        return(
            <div id="product">
                <h1 className="text-center"><span className="badge badge-primary text-wrap" >Our Products</span></h1>
                <div class="well text-center" >
                    <div class="col-md-12"> </div>
                    <div class="row" >
                    <div style={styles}>
                        <h1>HexPunch</h1>
                    <Carousel>
                        <div>
                            <img src={hex1}alt="WithOut Coating" />
                            <p className="legend">WithOut Coating</p>
                        </div>
                        <div>
                            <img src={hex2} alt="With PVD Coating"/>
                            <p className="legend">With PVD Coating</p>
                        </div>
                        <div>
                            <img src={hex3} alt="With Alcorna Coating"/>
                            <h1 className="legend">With Alcorna Coating</h1>
                        </div>
                        <div>
                            <img src={hex4} alt="WithOut Coating"/>
                            <p className="legend">WithOut Coating</p>
                        </div>
                        
                    </Carousel>
                    {/* <h3>HEX Punches</h3> */}
                  </div>
                  <div style={styles}>
                  <h1> Punch Sleeve</h1>
                    <Carousel>
                        <div>
                            <img src={slv1}alt="Marking and Piercing PunchSleeve" />
                            <p className="legend">Marking and Piercing PunchSleeve</p>
                        </div>
                        <div>
                            <img src={slv2} alt="Marking and Hexpunch Sleeve"/>
                            <p className="legend">Marking and Hexpunch Sleeve</p>
                        </div>
                        <div>
                            <img src={slv3} alt="Marking and Hexpunch Sleeve"/>
                            <h1 className="legend">Marking and Hexpunch Sleeve</h1>
                        </div>
                    </Carousel>
                </div>
                {/* <h3>PunchSleeve </h3> */}
                <hr className="my-4"/>
                <div style={styles}>
                <h1>Marking Punch</h1>
                    <Carousel>
                        <div>
                            <img src={mark1}alt="Marking Sleeve" />
                            <p className="legend">Marking HexPunch</p>
                        </div>
                        <div>
                            <img src={mark2} alt="Marking Hexpunch "/>
                            <p className="legend">Marking  Piercing Punch </p>
                        </div>
                        <div>
                            <img src={mark3} alt="Marking punch "/>
                            <h1 className="legend">Marking  Sleeve </h1>
                        </div>
                        
                    </Carousel>
                </div>
                {/* <h3>Marking Punch</h3> */}
                <div style={styles}>
                <h1>Die Insert</h1>
                    <Carousel>
                        <div>
                            <img src={dye1}alt="Die Insert" />
                            <p className="legend">Die Insert</p>
                        </div>
                        <div>
                            <img src={dye2} alt="Die Insert"/>
                            <p className="legend">Die Insert</p>
                        </div>

                    </Carousel>
                    </div>
                    {/* <h3>Dye Insert</h3> */}
              
            
                    </div>
                </div>
            </div>//final
       
        )
    }
}
export default Product