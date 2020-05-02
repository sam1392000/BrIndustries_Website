import React, { Component } from 'react'

 class Contact extends Component {
     
    render() {
        const myStyle={
           color:"#ffffff",
            marginLeft:"0em",
            fontSize:"3vw",
            borderRadius:"2em",
            paddingLeft:"1em",
            paddingRight:"1em",
            borderStyle:"none"
          }
          const styles={
              width:"200px",
              color:"white"

          } 
          const colors={
              color:"white"
          }
          const border={
              borderStyle:"none",
              
          }
        //   const Address={
        //     //fontSize: "3vw",
        //     whiteSpace: "nowrap",
        //     marginLeft:"09em" 
        //   }
        return (
            <div id="contact" className=" p-3 mb-2 bg-primary text-white">
                <hr/>
                <h1 className="mx-auto"style={styles}>Contact us</h1>
                <div class="row p-3 mb-2 bg-primary text-white" >
                <div class="col-sm-6" style={border}>
                    <div class="card  p-3 mb-2 bg-primary text-white" style={border}>
                        <div class="card-body p-3 mb-2 bg-primary text-white" style={border} >
                        <header style={myStyle}>
                        <h3 style={border}>Ph-No</h3>
                        </header>
                        <div style={colors}>
                        <h3> +91 9952118001</h3>
                        <h3>+91 9655906050</h3>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card  p-3 mb-2 bg-primary text-white" style={border}>
                <div class="card-body p-3 mb-2 bg-primary text-white" style={border} >
                    <header style={myStyle}>
                        <h3>Mail us</h3>
                    </header>
                    <div style={colors}>
                    <h3>brindustry90@yahoo.com</h3>
                    <h3>brindustry90@gmail.com</h3>
                    </div>
                    
                </div>
                </div>
            </div>
            </div>
            <div class="card p-3 mb-2 bg-primary text-white" style={border}>
                <div class="card-header p-3 mb-2 bg-primary text-white " style={border}>
                    <h2 className="text-center" >Our Company Address</h2>
                </div>
                <div class="card-body p-3 mb-2 bg-primary text-white" style={border}>
                    <blockquote class="blockquote mb-0 p-3 mb-2 bg-primary text-white" >
                    <h3>18,KanniMariAmman koil 2nd street k.pudur madurai-625007 TamilNadu India</h3>
                    </blockquote>
                </div>
                </div>
        </div>
        )
    }
}

export default Contact
