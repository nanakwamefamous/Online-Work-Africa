import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3>LOGO</h3>
                            <p>dhjfdifkjd fiuljdsgiuhfgusiodho ssgiudhlfvsiughlkxgiu dyukhbvshjvbjk yfbv dsyiiltwiteugwou isuehfsgiduzgsh ilkviugsjkbv ivguhlzgusv gusoklv gbj </p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/About us">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/Sponsors">Sponsors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/Trainers">Trainers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/Blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="Contact/">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> 00000000000</p>
                            <p><i class="fa-solid fa-envelope"></i> fdmbjfdkfk@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> vhbnmdjhb dfdufgdk</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p></p>
            </div>
        </>
    )
}

export default Footer