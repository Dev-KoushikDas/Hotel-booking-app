import React from "react";
import Featured from "../../components/featuerd/Featured";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css"
const Home = () =>{
    return (
        <div className="mainContainer">
        
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <h1 className="home_header1">
        Explore India
        </h1>
        <Featured/>
        <h1 className="home_header1">
        Browse by property type
        </h1>
        <PropertyList/>
        <MailList/>
        
    
        </div>
        </div>
        )
}

export default Home