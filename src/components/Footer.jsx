function Footer(){
    
    return(
        <footer className="Footer">
            <div className="footer-container">
                <div className="flogo">
                    <img src="/src/assets/restaurant-logo.avif" alt="Restaurant Logo" height="100px"
                    width="100px"/>
                    <br></br>
                    <h3>MY KITCHEN</h3>
                </div>
                
                <div className="flinks">
                    <h2>Links:</h2>
                    <ul className="no-bullets">
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#Menu">Menu</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                        <li>
                            <a href="#Login">Login</a>
                        </li>
                    </ul>
                    
                </div>
                <div className="flinks">
                    <h2>Links:</h2>
                    <ul className="no-bullets">
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#Menu">Menu</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                        <li>
                            <a href="#Login">Login</a>
                        </li>
                    </ul>
                    
                </div>
                <div className="flinks">
                    <h2>Links:</h2>
                    <ul className="no-bullets">
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#Menu">Menu</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                        <li>
                            <a href="#Login">Login</a>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
            <hr></hr>
                <p className="copyright">
                    © {new Date().getFullYear()} MY KITCHEN. All rights reserved.
                </p>
        </footer>
    )

}

export default Footer;