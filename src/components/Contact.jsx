export default function Contact() {
    return (    
        <div id="contact-div">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me anything you have in mind.</p>

            <form>
                <div className="form-group">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" name="first_name" id="first_name" className="form-control" placeholder="Enter your first name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <br />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="yourname@email.com" />
                    <br />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" className="form-control" cols="30" rows="5" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                    <br />
                    <div id="check-div">
                        <input type="checkbox" name="checkbox" id="checkbox" className="form-check-input" />
                        <label htmlFor="checkbox" className="form-check-label">You agree to providing your data to &#123;name&#125; who may contact you.</label>
                    </div>
                    <br />

                    <button type="submit" id="btn__submit" className="btn btn-primary col-12">Send Message</button>
                </div>
            </form>
        </div>
    ); 
}
