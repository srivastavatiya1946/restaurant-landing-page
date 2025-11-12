function Navbar(){
    return(
        <section className="nav-section">
            <div className="nav-container">
                <div className="weblogo">
                    <img src="/src/assets/restaurant-logo.avif" alt="logo-image" height="70px"/>
                <h2>My Kitchen</h2>
                </div>
                <div className="nav-content">
                    <a href="#Home">Home</a>
                    <a href="#Menu">Menu</a>
                    <a href="#Order">Order</a>
                    <a href="#About">About</a>
                    <a href="Testimonial">Testimonials</a>
                </div>
            </div>
            
        </section>
    );
   

}
export default Navbar;