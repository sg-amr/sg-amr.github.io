import React from 'react';
import './styles.css';

function App() {
    return (
        <div>
            <header>
                <div className="logo">Futuristic Site</div>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            
            <section className="hero-section" id="home">
                <h1>Welcome to the Future</h1>
                <p>Experience the cutting-edge technology</p>
            </section>
            
            <section className="section services" id="services">
                <h2>Our Services</h2>
                <div className="card">Service 1</div>
                <div className="card">Service 2</div>
                <div className="card">Service 3</div>
            </section>
            
            <section className="section projects" id="projects">
                <h2>Our Projects</h2>
                <div className="card">Project 1</div>
                <div className="card">Project 2</div>
                <div className="card">Project 3</div>
            </section>
            
            <section className="section contact" id="contact">
                <h2>Contact Us</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default App;
