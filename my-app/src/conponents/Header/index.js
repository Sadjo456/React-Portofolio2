import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <section>
                <header className="flex-row px-1">
                    <div>
                        <h1>Hassimiou Diallo's Portofolio</h1>
                    </div>
                    <div>
                        <Nav
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        ></Nav>
                        
                    </div>
                </header>
            </section>
            <section className="hero">
                <div className="hero-cta">
                    <h2>Welcome</h2>
                    <p>
                        Welcome to Hassimiou Diallo' Portofolio page
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Header;