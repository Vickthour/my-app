import React from "react";



function Footer(){
    const date = new Date().getFullYear();
    
    return <footer>Copyright © {date}</footer>
}
export default Footer;