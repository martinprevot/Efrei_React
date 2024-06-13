import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import React from "react";

const Home = () => {
    const location = useLocation();
    const { user } = location.state || {} 
    return (
        <React.Fragment>
            <Menu/>
            <h1>Bienvenue {user.name}</h1>
        </React.Fragment>
    )

};

export default Home;