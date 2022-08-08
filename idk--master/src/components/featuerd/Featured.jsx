import React from "react";
import useFetch from "../hooks/useFetch";
import "./featured.css"
const Featured = () =>{

    const {data, loading ,error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")

    console.log(data)
    return (
        <div className="featured_main">
        <div className="featured_1">
            
            <div className="featuredItem">
                <img src= "https://t-cf.bstatic.com/xdata/images/city/640x640/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
                
                alt="" className="featuredImg" />
                <div className="featuredbg">
                   
                </div>
                <div className="featuredTitles">
                <h1>New Delhi</h1>
                <h2>381 Gateway Deals</h2>
                
                </div>
            </div>    
            <div className="featuredItem">
                <img src= "https://t-cf.bstatic.com/xdata/images/city/640x640/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" 
                alt="" className="featuredImg" />
                <div className="featuredbg">
                   
                </div>
                <div className="featuredTitles">
                <h1>Bangalore</h1>
                <h2>226 Gateway Deals</h2>
                </div>  
            </div>
            <div className="featuredItem">
                <img src= "https://t-cf.bstatic.com/xdata/images/city/640x640/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" 
                alt="" className="featuredImg" />
                <div className="featuredbg">
                   
                </div>
                <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>169 Gateway Deals</h2>
                
                </div>
            </div>
        </div> 
        
        <div className="featured_2">  
            <div className="featuredItem">
                <img src= "https://t-cf.bstatic.com/xdata/images/city/640x640/684716.webp?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o=" 
                alt="" className="featuredImg" />
                <div className="featuredbg">
                   
                </div>
                <div className="featuredTitles">
                 
                <h1>Manali</h1>
                <h2>127 Gataway Deals</h2>
                </div>
                
            </div>
            <div className="featuredItem">
                <img src= "https://t-cf.bstatic.com/xdata/images/city/640x640/684571.webp?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=" 
                alt="" className="featuredImg" />
                <div className="featuredbg">
                   
                </div>
                <div className="featuredTitles">
                <h1>Kolkata</h1>
                <h2>111 Gataway Deals</h2>
                </div>  
            </div>
            <div className="featuredItem">
                <img src= "https://t-cf.bstatic.com/xdata/images/city/640x640/684653.webp?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=" 
                alt="" className="featuredImg" />
                <div className="featuredbg">
                   
                </div>
                <div className="featuredTitles">
                <h1>Hyderabad</h1>
                <h2>107 Gataway Deals</h2>
                </div>  
            </div>
        </div>
        </div>
        )
}

export default Featured