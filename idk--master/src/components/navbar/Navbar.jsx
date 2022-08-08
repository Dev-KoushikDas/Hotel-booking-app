import "./navbar.css"

const Navbar = () =>{
    return (
        <div  className="navbar">
        <div className="navContainer">
        <span className = "logo">Hare krishno booking</span>
        <div className="navitems">
         <button className="navButton_2">List your property</button> 
         <button className="navButton">Signin</button> 
         <button className="navButton">Login</button>     
        </div>        
        </div>
        </div>
    )
}
export default Navbar