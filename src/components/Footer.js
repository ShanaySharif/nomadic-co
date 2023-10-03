
// Footer.js
import React from 'react';
import "../components/Styles/Footer.css"

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; Nomadic.Co. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}