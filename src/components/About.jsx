function About(){
    
    return(
        <section className="about-section" >
            <div className="app-download">
                <div className="button-img">
                    <h2>My Kitchen is available on Android and IOS!</h2>
                    <p>Order your favourite meals anytime, anywhere 🍽️</p>
                    <br></br>
                    <br></br>
                    <a href="https://play.google.com/store" target="_blank">
                        <img src="/src/assets/playstore-button.svg" alt="Play Store Button" height="40px" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank">
                        <img src="/src/assets/appstore-button.svg" alt="App Store Button" height="40px"/>
                    </a>
                </div>    
            </div>

        </section>
    );
    
}

export default About;