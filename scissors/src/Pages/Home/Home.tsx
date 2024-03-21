import './Home.css'
import { useState } from 'react';
import axios from 'axios';

const Home = () => {

    // Menu Toggle

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    // FAQ Toggle Buttons

    const [isOpen, setIsOpen] = useState<Array<boolean>>(Array(8).fill(false)); // Array with 8 elements initialized to false

    const toggleAnswer = (index: number) => {
        const newIsOpen = [...isOpen]
        newIsOpen[index] = !newIsOpen[index]
        setIsOpen(newIsOpen)
    }

    // URL Shortener
    const [trim, setTrim] = useState('');
    const [result, setResult] = useState('');
    const [loader, setLoader] = useState(false);

    const handleClick = async () => {
        setLoader(true);
        const encodedParams = new URLSearchParams();
        encodedParams.set('url', trim);

        const options = {
            method: 'POST',
            url: 'https://url-shortener-service.p.rapidapi.com/shorten',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '632aa95fe6msh1af53dc2a475469p11d293jsnca540375806c',
                'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
            },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);
            setResult(response.data.result_url);
        } catch (error) {
            console.error(error);
        } finally {
            setLoader(false);
        }
    };

    return (
        <div>
            <main>

                <nav className="navbar">

                    <div className="logo">
                        <a href="#"><img src="images/Logo.svg" className="nav-logo" /></a>
                    </div>

                    <div className="menu">
                        <ul>
                            <li><a href="#"><span className="url-color">My URLs</span></a></li>
                            <li><a href="#">Features <i className="fa fa-chevron-down"></i></a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="register">
                        <a href="/login" className="login">Log in</a>
                        <a href="/register" className="try"><button className="btn btn-blue">Try for free</button></a>
                    </div>

                    <div className="nav-toggle-btn" onClick={toggleMenu}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>

                    {menuOpen && (
                    <div className="dropdown-menu">
                        <li><a href="#"><span className="url-color">My URLs</span></a></li>
                        <li><a href="#">Features <i className="fa fa-chevron-down"></i></a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Analytics</a></li>
                        <li><a href="#">FAQs</a></li>
                        <a href="/register" className="try2"><button className="btn btn-blue">Try for free</button></a>
                    </div>
                    )}
                </nav>


                <section className="page1">


                    <div className="text-box">
                        <h1>Optimize Your Online Experience with Our <br /> Advanced <span className="shorterner">URL Shortening <img
                            src="images/Line.svg" /></span> Solution</h1>


                        <p className="p1">Personalize your shortened URLs to align with our brand identity. Utilize custom slugs,
                            branded links, and domain customization options to reinforce your brand presence and enhance user
                            engagement.</p>

                        <div className="sl">
                            <a href="/register"><button className="btn btn-blue">Sign Up</button></a>
                            <a href="#" className="learn-more">Learn more</a>
                        </div>

                        <div className="shapes">
                            <div className="rectangle">
                                <img src="images/chain.svg" />
                                <p className="rect-text">Seamlessly transform your long URLs into concise and <strong>shareable
                                    links</strong> with just few clicks.</p>
                            </div>

                            <div className="hexagon">
                                <img src="images/Hexagon.svg" alt="Hexagon" />
                            </div>
                        </div>

                    </div>

                    <div className="shapes2">
                        <img src="images/Double shape.svg" />
                    </div>

                </section>



                <section className="page2">
                    <div className="pg2header">
                        <h2>One Stop. <br/>Four <span>Possibilities.</span></h2>
                        <div className="sitestats">
                            <div className="sitestats-num">
                                <h2>3M</h2>
                                <p>Active users</p>
                            </div>
                            <div className="sitestats-num">
                                <h2>60M</h2>
                                <p>Links & QR <br/>codes created</p>
                            </div>
                            <div className="sitestats-num">
                                <h2>1B</h2>
                                <p>Clicked & Scanned <br/>connections</p>
                            </div>
                            <div className="sitestats-num">
                                <h2>300k</h2>
                                <p>App Integrations</p>
                            </div>
                        </div>
                    </div>

                    <div className="scissors">
                        <div className="why">
                            <img src="images/barline.svg" alt="bar line" />
                                <div className="scissor-header">
                                    <h2 className="pg2title">Why Choose Scissors</h2>
                                    <p>Scissors is the hub of everything that has to do with your link management. We shorten
                                        your URLs, allow you creating custom ones for your personal, business, event usage.
                                        Our swift QR code creation, management and usage tracking with advance analytics for all of
                                        these is second to none</p>
                                </div>
                        </div>
                        <div className="scissors-features">

                            <div className="features">
                                <div className="feature-icon">
                                    <img src="images/icon1.svg" alt="URL Shortening Icon" />
                                </div>
                                <div className="feature-text">
                                    <h2>URL Shortening</h2>
                                    <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale,
                                        URL redirects.</p>
                                </div>
                            </div>

                            <div className="features">
                                <div className="feature-icon">
                                    <img src="images/icon2.svg" alt="URL Shortening Icon" />
                                </div>
                                <div className="feature-text">
                                    <h2>Custom URLs</h2>
                                    <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at
                                        scale, URL redirects.</p>
                                </div>
                            </div>

                            <div className="features">
                                <div className="feature-icon">
                                    <img src="images/icon3.svg" alt="URL Shortening Icon" />
                                </div>
                                <div className="feature-text">
                                    <h2>QR Codes</h2>
                                    <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale,
                                        URL redirects.</p>
                                </div>
                            </div>

                            <div className="features">
                                <div className="feature-icon">
                                    <img src="images/icon4.svg" alt="URL Shortening Icon" />
                                </div>
                                <div className="feature-text">
                                    <h2>Data</h2>
                                    <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale,
                                        URL redirects.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="page3">
                    <div className="pg3header">
                        <img src="images/barline.svg" alt="" />
                            <h2>A <span>price perfect</span> for your needs.</h2>
                    </div>

                    <p className="price-description">From catering for your personal, business, event, socials needs, you can be
                        rest assured we have you in mind in our pricing.</p>

                    <div className="plans">
                        <div className="plan1">
                            <h4>Basic</h4>
                            <h3>Free</h3>
                            <h5>Free plan for all users</h5>
                            <ul className="price-benefits">
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>Unlimited URL Shortening</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>Unlimited Basic Link Analytics</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>Unlimited Customizable Short Links</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>Unlimited Standard Support</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>Unlimited Ad-Supported</p>
                                </li>
                            </ul>
                        </div>

                        <div className="plan1 current-selection">
                            <h4>Professional</h4>
                            <h3>$15/ month</h3>
                            <h5>Ideal for business creators</h5>
                            <ul className="price-benefits">
                                <li className="pb-list">
                                    <img src="images/check-circle-white.svg" alt="" />
                                        <p>Enhanced Link Analytics</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-white.svg" alt="" />
                                        <p>Custom Branded Domains</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-white.svg" alt="" />
                                        <p>Advanced Link Customization</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-white.svg" alt="" />
                                        <p>Priority Support</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-white.svg" alt="" />
                                        <p>Ad-free Experience</p>
                                </li>
                            </ul>
                        </div>

                        <div className="plan3">
                            <h4>Teams</h4>
                            <h3>$25/ month</h3>
                            <h5>Share with up to 10 users</h5>
                            <ul className="price-benefits">
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>Team Collaboration</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>User Roles and Permissions</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>Enhance Security</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>API Access</p>
                                </li>
                                <li className="pb-list">
                                    <img src="images/check-circle-blue.svg" alt="" />
                                        <p>Dedicated Account Manager</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="price-btn">
                        <a href="#"><button className="btn btn-blue">Get Customer Pricing</button></a>
                        <a href="#"><button className="btn btn-white">Select Pricing</button></a>
                    </div>
                </section>

                <section className="form">
                    <div className="white-form">
                        <div className="input-box">
                            <input className="form-color domain-input" type="text" 
                            placeholder="Paste URL here" 
                            value={trim}
                            onChange={(e) => setTrim(e.target.value)}
                            />

                                <div className="domain-alias">
                                    <select name="choose domain" id="" className="domain-picker">
                                        <option value="choose domain">Choose Domain</option>
                                        <option value="basic">Basic</option>
                                        <option value="professional">Professional</option>
                                        <option value="teams">Teams</option>
                                    </select>
                                    <input type="text" placeholder="Type Alias here" className="form-color" />
                                </div>

                                <button onClick={handleClick} className="btn-blue btn btn-form">
                                    <p>Trim Url</p>
                                    <img src="images/magic.png" alt="" />
                                </button>

                                {loader ? <p className='trimmer'>Trimming...</p> : <p>{result}</p>}
                        </div>
                        <p className="p-form">By clicking TrimURL, I agree to the <strong>Terms of Service, Privacy Policy</strong>
                            and Use of Cookies.</p>
                    </div>
                </section>

                <section className="page4">
                    <div className="faqs">
                        <img src="images/barline.svg" alt="" />
                            <h2>FAQs</h2>
                    </div>

                    <div className="faqs-list faqs-section">
                        <article className="faq1">
                            <div className="question">
                                <h5 className="question1">How does URL shortening work?</h5>
                                <button className="btn-question" onClick={() => toggleAnswer(0)}>
                                    <i className={isOpen[0] ? "fa fa-minus" : "fa fa-plus"}></i>
                                </button>
                            </div>
                            <p className={isOpen[0] ? "answer show" : "answer"}>URL shortening works by taking a long URL and creating a shorter, condensed
                                version that redirects to the original URL. When a user clicks on the shortened link, they are
                                redirected to the intended destination.</p>
                        </article>

                        <article className="faq1">
                            <div className="question">
                                <h5 className="question1">Is it necessary to create an account to use the URL shortening service?</h5>
                                <button className="btn-question" onClick={() => toggleAnswer(1)}>
                                    <i className={isOpen[1] ? "fa fa-minus" : "fa fa-plus"}></i>
                                </button>
                            </div>
                            <p className={isOpen[1] ? "answer show" : "answer"}>Generally, most URL shortening services allow users to shorten URLs without creating an account. However, having an account might offer additional features such as link tracking and management.</p>
                        </article>

                        <article className="faq1">
                            <div className="question">
                                <h5 className="question1">Are the shortened links permanent? Will they expire?</h5>
                                <button className="btn-question" onClick={() => toggleAnswer(2)}>
                                    <i className={isOpen[2] ? "fa fa-minus" : "fa fa-plus"}></i>
                                </button>
                            </div>
                            <p className={isOpen[2] ? "answer show" : "answer"}>Shortened links typically remain active indefinitely, but this may vary depending on the URL shortening service. Some services may offer expiration options for links.</p>
                        </article>

                        <article className="faq1">
                            <div className="question">
                                <h5 className="question1">Are there any limitations on the number of URLs I can shorten?</h5>
                                <button className="btn-question" onClick={() => toggleAnswer(3)}>
                                    <i className={isOpen[3] ? "fa fa-minus" : "fa fa-plus"}></i>
                                </button>
                            </div>
                            <p className={isOpen[3] ? "answer show" : "answer"}>Many URL shortening services have limitations on the number of URLs users can shorten within a certain timeframe or may offer different tiers of service with varying limits.</p>
                        </article>

                        <article className="faq1">
                            <div className="question">
                                <h5 className="question1">Can I customize the shortened URLs to reflect my brand or content?</h5>
                                <button className="btn-question" onClick={() => toggleAnswer(4)}>
                                    <i className={isOpen[4] ? "fa fa-minus" : "fa fa-plus"}></i>
                                </button>
                            </div>
                            <p className={isOpen[4] ? "answer show" : "answer"}>Yes, some URL shortening services offer customization options, allowing users to create custom short URLs that reflect their brand or content.</p>
                        </article>

                        <article className="faq1">
                            <div className="question">
                                <h5 className="question1">Can I track the performance of my shortened URLs?</h5>
                                <button className="btn-question" onClick={() => toggleAnswer(5)}>
                                    <i className={isOpen[5] ? "fa fa-minus" : "fa fa-plus"}></i>
                                </button>
                            </div>
                            <p className={isOpen[5] ? "answer show" : "answer"}>Yes, this URL shortening service provide analytics tools that allow users to track the performance of their shortened URLs, including metrics like clicks, geographic location of users, and referral sources.</p>
                        </article>

                        <article className="faq1">
                            <div className="question">
                                <h5 className="question1">How secure is the URL shortening service? Are the shortened links
                                    protected against spam or malicious activity?</h5>
                                <button className="btn-question" onClick={() => toggleAnswer(6)}>
                                    <i className={isOpen[6] ? "fa fa-minus" : "fa fa-plus"}></i>
                                </button>
                            </div>
                            <p className={isOpen[6] ? "answer show" : "answer"}>URL shortening services employ various security measures to protect against spam and malicious activity. These may include link scanning for malware, CAPTCHA verification, and rate limiting.</p>
                        </article>

                        <article className="faq1">
                            <div className="question">
                                <h5 className="question1">What is a QR code and what can it do?</h5>
                                <button className="btn-question" onClick={() => toggleAnswer(7)}>
                                    <i className={isOpen[7] ? "fa fa-minus" : "fa fa-plus"}></i>
                                </button>
                            </div>
                            <p className={isOpen[7] ? "answer show" : "answer"}>A QR code is a type of matrix barcode that can store information such as text, URLs, or other data. QR codes can be scanned by smartphones or other devices equipped with QR code readers, allowing users to quickly access the encoded information, such as a shortened URL.</p>
                        </article>

                        <article className="faq1">
                            <div className="question">
                                <h5 className="question1">Is there an API available for integrating the URL shortening service into
                                    my own applications or websites?</h5>
                                <button className="btn-question" onClick={() => toggleAnswer(8)}>
                                    <i className={isOpen[8] ? "fa fa-minus" : "fa fa-plus"}></i>
                                </button>
                            </div>
                            <p className={isOpen[8] ? "answer show" : "answer"}>Many URL shortening services offer APIs that allow developers to integrate the service into their own applications or websites, enabling programmatic access to shorten URLs and retrieve analytics data.</p>
                        </article>

                    </div>
                </section>

                <section className="optimization">
                    <h2 className="optm">Revolutionizing Link Optimization</h2>
                    <div className="btn-optimization">
                        <a href="#" className="btn btn-blue">Get Started</a>
                    </div>
                </section>

                <footer className="footer">
                    <div className="main-footer">
                        <div className="footer-content">
                            <div className="socials">
                                <img src="images/Footerlogo.svg" alt="Scissor Logo"/>
                                    <ul className="footer-socials">
                                        <li><img src="images/i.fi-social-twitter.svg" alt="Twitter" /></li>
                                        <li><img src="images/svg.instagram.svg" alt="instagram" /></li>
                                        <li><img src="images/i.fi-social-linkedin.svg" alt="Linkedin" /></li>
                                        <li><img src="images/i.fi-social-facebook.svg" alt="Facebook" /></li>
                                    </ul>
                            </div>

                            <div className="footer2">
                                <h4>Why Scissor ?</h4>
                                <ul className="">
                                    <li><a href="#">Scissors 101</a></li>
                                    <li><a href="#">Integrations and API</a></li>
                                    <li><a href="#">Pricing</a></li>
                                </ul>
                            </div>

                            <div className="footer2">
                                <h4>Solutions</h4>
                                <ul className="">
                                    <li><a href="#">Social Media</a></li>
                                    <li><a href="#">Digital Marketing</a></li>
                                    <li><a href="#">Customer Service</a></li>
                                    <li><a href="#">For Developers</a></li>
                                </ul>
                            </div>

                            <div className="footer2">
                                <h4>Products</h4>
                                <ul className="">
                                    <li><a href="#">Link Management</a></li>
                                    <li><a href="#">QR Codes</a></li>
                                    <li><a href="#">Link-in-bio</a></li>
                                </ul>
                            </div>

                            <div className="footer2">
                                <h4>Company</h4>
                                <ul className="">
                                    <li><a href="#">About Scissor</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Reviews</a></li>
                                </ul>
                            </div>

                            <div className="footer2 empty-grid">

                            </div>

                            <div className="footer2">
                                <h4>Resources</h4>
                                <ul className="">
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Resource Library</a></li>
                                    <li><a href="#">Developers</a></li>
                                    <li><a href="#">App Connectors</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Trust Center</a></li>
                                    <li><a href="#">Browser Extension</a></li>
                                    <li><a href="#">Mobile App</a></li>
                                </ul>
                            </div>

                            <div className="footer2">
                                <h4>Features</h4>
                                <ul className="">
                                    <li><a href="#">Branded Links</a></li>
                                    <li><a href="#">Mobile Links</a></li>
                                    <li><a href="#">Campaign</a></li>
                                    <li><a href="#">Management & Analytics</a></li>
                                    <li><a href="#">QR Code generation</a></li>
                                </ul>
                            </div>

                            <div className="footer2">
                                <h4>Legal</h4>
                                <ul className="">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Cookie Policy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Acceptable Use Policy</a></li>
                                    <li><a href="#">Code of Conduct</a></li>
                                </ul>
                            </div>

                            <div className="footer2 empty-grid">

                            </div>

                        </div>
                    </div>
                    <p className="text-footer">Terms of Service | Security | Scissor <span>2024</span></p>
                </footer>
            </main>
        </div>
    );
}

export default Home