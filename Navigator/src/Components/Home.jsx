import React from 'react'
import "./style.css"


const Home = () => {
    return (
        <>
            <div className="welcome-container">
                <div className="welcome-message">
                    <h1 className="animated-title">Welcome to Our Application!</h1>
                    <p className="animated-description">
                        Discover a world of possibilities with our application. Designed to bring you:
                        <ul className="feature-list list-unstyled">
                            <li>🌟 Innovative features that enhance productivity</li>
                            <li>🔒 Secure and reliable performance</li>
                            <li>📊 Intuitive interface for a seamless user experience</li>
                            <li>🚀 Fast and responsive design for optimal performance</li>
                            <li>🛠️ Customizable options to fit your needs</li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home
