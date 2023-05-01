import React, { useState } from "react";

import { validateMyEmail } from "../../utils/helpers";

function Contact() {
    const [email, setMyEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleImputChange = (e) => {
        const { target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "myEmail") {
            setMyEmail(inputValue);
        } else if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateMyEmail(myEmail) || !userName) {
            setErrorMessage("Email or Name is invalid");
            return;
        }
        if (!setMessage(message)) {
            setErrorMessage(`Message is require.`);
            return;
        }

        setUserName("");
        setMessage("");
        setMyEmail("");
    };

    return (
        <section id="reach-out" className="contact">
            <div className="flex-row">
                <h2 className="section-title secondary-border">Reach Out</h2>
            </div>

            <div className="contact-info">
                <div>
                    <h3>Hello {userName}</h3>
                    <p>Want to get into contact?</p>
                    <address>
                        Bronx, NY <br />
                        P: <a href="tel:9176370489">9176370489</a>
                        <b />
                        E:{" "}
                        <a href="mailto://hddinguiraye@gmail.com">
                            hddinguiraye@gmail.com
                        </a>
                    </address>
                    <p>
                        <strong>Don't hesitate to send any feedback</strong>
                    </p>
                </div>
                <div className="contact-form">
                    <h3>Contact Me</h3>
                    <form className="form">
                        <label for="contact-name">Your name</label>
                        <input
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            id="contact-name"
                            placeholder="Your Name"
                        />
                        <label for="contact-email">Your Email</label>
                        <input 
                            value={myEmail}
                            name="myEmail"
                            onChange={handleInputCange}
                            type="myEmail"
                            id="contact-email"
                            placeholder="Your Email"
                        />
                        <label for="contact-message">Message</label>
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="message"
                            id="contact-message"
                            placeholder="Your Message"
                        />
                        <button type="button" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
        
    </section>
                            
);

}

export default Contact;
                        