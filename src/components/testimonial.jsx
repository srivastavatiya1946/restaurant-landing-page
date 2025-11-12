function Testimonial(){
    return(
        <section className="testimonial-section">
            <div className="testimonial-content">
                <h1>Testimonial</h1>
                <br></br>
                <h2>Here's what our customers say!</h2>
            </div>
            <div className="testimonial-img">
                <div className="review">
                    <img src="/src/assets/1st-pic.jpeg" alt="customer iamge" height="120px" width="120px"/> 
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda est sunt sed odit eveniet doloremque non corporis maiores at aut facilis veritatis, aliquam sequi? Repudiandae, aspernatur. Corrupti, quam quisquam!"</p>
                </div>
                
                <div className="review">
                    <img src="/src/assets/2nd-pic.jpeg" alt="customer iamge" height="120px" width="120px"/> 
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda est sunt sed odit eveniet doloremque non corporis maiores at aut facilis veritatis, aliquam sequi? Repudiandae, aspernatur. Corrupti, quam quisquam!"</p>
                </div>

                <div className="review">
                    <img src="/src/assets/3rd-pic.jpeg" alt="customer iamge" height="120px" width="120px"/> 
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda est sunt sed odit eveniet doloremque non corporis maiores at aut facilis veritatis, aliquam sequi? Repudiandae, aspernatur. Corrupti, quam quisquam!"</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;