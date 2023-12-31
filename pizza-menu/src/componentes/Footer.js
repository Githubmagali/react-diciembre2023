import React from "react";
import './../index.css';

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    //console.log(isOpen);

    
    return (
        <footer className="footer">
  {isOpen ?
  (
    <Order closeHour={closeHour} openHour={openHour} />
  ) : (
    <p className="footer-p">
    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
  </p>
  )
  }
        </footer>
    );
}
function Order ({closeHour, openHour}){
    return(
        <div className="footer-order">
            <p className="footer-p">
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
        </div>
    )
}


export default Footer;