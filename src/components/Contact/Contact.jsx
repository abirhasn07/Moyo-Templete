import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact"id="Contact">
            <h2 className="contact-title">
            Let's talk
            </h2>
            <h4 className="contact-subtitle">
            Start your project with us.
            </h4>
            <form action="">
                <div>Hey, my name is <input type="text" id="name" placeholder="enter your name" required/>and my email is <input type="email" id="email" placeholder="enter your email" required/> and i'm interested on
                <div className="checkbox">
                   <div>

                    <input type="checkbox" id="webdesign" />
                    <label htmlFor="webdesign">
                        Web Design
                    </label>
                   </div>


                    <div>
                    <input type="checkbox" id="development" />
                    <label htmlFor="development">
                    Development
                    </label>
                    </div>
                    <div>
                    <input type="checkbox" id="Marketing" />
                    <label htmlFor="Marketing">
                    Marketing
                    </label>
                    </div>
                    <div>
                    <input type="checkbox" id="Branding" />
                    <label htmlFor="Branding">
                    Branding
                    </label>
                    </div>
                    <div>

                    <input type="checkbox" id="GraphicDesign" />
                    <label htmlFor="GraphicDesign">
                    Graphic Design
                    </label>
                    </div>
                    <div>
                        
                    <input type="checkbox" id="UXDesign" />
                    <label htmlFor="UXDesign">
                    UX Design
                    </label>
                    </div>
                </div>
                so we can discuss <input type="text" id="message" placeholder="enter your brief about your projects" />
                <br />

                <input type="submit" value="Send Message" id="submit" />
                </div>
            </form>
        </section>
    )
}

export default Contact
