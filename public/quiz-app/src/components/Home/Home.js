import React from "react";
import reactDom from "react-dom";
import './Home.css'

function Home () {
    return(
            <div className="content" style={{backgroundColor:"white"}}>
                <div className="con">
                <h1>Welcome</h1>
                <p>If you are desired test your knowledge about Web Technologies 
                </p>
                <p>This is the best option that you can have</p>
                <button className="log"><a href='/login'>Log in</a></button>
                <button className="sign"><a href='/signup'>Sign up</a></button>
                <img src="./pic6.png" className="img"/>
                </div>
                
            </div>
    );
}

export default Home;