import React from "react";
import "./home.css";



const Home = () => {
  return (
    <div>
      <div className="landing-page-div">
        <div className="landing-page-header"> </div>
      </div>
      <div className="menu">
        <div className="menu-header">
          <h3>What we're offering</h3>
        </div>
        <div className="menu-card-div">
          <div className="menu-card">
            <div className="red">
              <h1>Breakfast</h1>
            </div>
           
            <div>
              
            </div>
          </div>
          <div className="menu-card">
            <div className="red">
              <h1>Indian</h1>
            </div>
            
            <div>
              
            </div>
          </div>
          <div className="menu-card">
            <div className="red">
              <h1>Chinese</h1>
            </div>
           
            <div>
             
            </div>
          </div>
          <div className="menu-card breakfast">
            <div className="red">
              <h1>Chat</h1>
            </div>
           
            <div>
             
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;