import React from "react";
import { VsGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <h2>Made by Hassimiou Diallo</h2>
            <p>
                <ul>
                    <a href="https://github.com/Sadjo456">
                        <li className="logo">
                            <VsGithubAlt />
                        </li>
                    </a>
                    <a href="https://linked.com//in/">
                        <li className="logo">
                            <AiOutlineLinkedin />
                        </li>
                    </a>
                    <a href="https://www.instagram.com/">
                        <li className="logo">
                            <FaInstagram />
                        </li>
                    </a>
                </ul>
            </p>
        </footer>
    );
}

export default Footer;