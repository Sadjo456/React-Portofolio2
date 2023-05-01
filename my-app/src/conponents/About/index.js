import React from "react";
import myProfilePicture from "../..assets/large/Profile/Profile_Pic.png";
function About() {
    return (
        <section id="about-me" className="my-5 intro">
            <div className="flex-row">
                <h1 id="about" className="section-title primary-border">
                    About Me
                </h1>
            </div>
            <div className="flex-row">
                <div className="intro-info">
                    <div className="intro-imag">
                        <imag src={myProfilePicture} style={{ width: "100%"}} alt="my-profile" />
                    </div>
                    <p>
                        Hi, my name is Hassimiou Diallo
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;