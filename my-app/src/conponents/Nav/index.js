import React, { useEffect } from 'react';
import { capitalizatizeFirstletter } from '../../utils/helpers';

function Nav(props) {
    const {
        currentTab,
        handleTabChange,

    } = props;

    useEffect(() => {
        document.title = capitalizatizeFirstletter(currentTab.name);
    }, [currentTab]);

    return (

        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a 
                        href="#about"
                        onClick={() => handleTabChange('About')}
                        className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#portofolio"
                        onClick={() => handleTabChange('Portofolio')}
                        className={currentTab === 'Portofolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portofolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handleTabChange('Contact')}
                        className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#resume"
                        onClick={() => handleTabChange('Resume')}
                        className={currentTab === 'Resum' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>

            </ul>    
        </nav>
    );
}

export default Nav;