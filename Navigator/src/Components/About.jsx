import React from 'react';

const About = () => {
    return (
        <>
            <div className="about-container">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to our online store! We offer a wide range of products including men's clothing, women's clothing, jewelry, and electronics. Our mission is to provide high-quality products at affordable prices. We are committed to delivering exceptional customer service and a seamless shopping experience.
                </p>
                <div className="categories">
                    <div className="category">
                        <img src="https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Men's Clothing" className="category-image" />
                        <h2 className="category-title">Men's Clothing</h2>
                        <p className="category-description">Explore our stylish and comfortable men's clothing collection.</p>
                    </div>
                    <div className="category">
                        <img src="https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Women's Clothing" className="category-image" />
                        <h2 className="category-title">Women's Clothing</h2>
                        <p className="category-description">Discover the latest trends in women's fashion.</p>
                    </div>
                    <div className="category">
                        <img src="https://images.unsplash.com/photo-1695050049047-54e27a908898?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jewelry" className="category-image" />
                        <h2 className="category-title">Jewelry</h2>
                        <p className="category-description">Find stunning jewelry pieces to complete your look.</p>
                    </div>
                    <div className="category">
                        <img src="https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Electronics" className="category-image" />
                        <h2 className="category-title">Electronics</h2>
                        <p className="category-description">Get the latest and greatest in electronics and gadgets.</p>
                    </div>
                </div>
            </div>

            <div className="mens-clothing-container">
                <h1 className="mens-clothing-title">About Men's Clothing</h1>
                <div className="mens-clothing-content">
                    <img src="https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Men's Clothing" className="mens-clothing-image" />
                    <div className="mens-clothing-text">
                        <p>
                            Welcome to our men's clothing collection! Here are some highlights:
                        </p>
                        <ul>
                            <li>👕 Stylish and comfortable casual wear</li>
                            <li>👔 Elegant and durable formal attire</li>
                            <li>👖 High-quality fabrics for every occasion</li>
                            <li>🧥 Trendy outerwear to keep you warm and fashionable</li>
                            <li>👜 Accessories that complement your style</li>
                        </ul>
                        <p>
                            Our collection is designed with the modern man in mind, ensuring you always look your best. Explore our selection and find the perfect additions to your wardrobe.
                        </p>
                    </div>
                </div>
            </div>

            {/* womens clothing */}
            <div className="womens-clothing-container">
                <h1 className="womens-clothing-title">About Women's Clothing</h1>
                <div className="womens-clothing-content">
                    <img src="https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Women's Clothing" className="womens-clothing-image" />
                    <div className="womens-clothing-text">
                        <p>
                            Discover our exclusive collection of women's clothing! Here are some highlights:
                        </p>
                        <ul>
                            <li>👗 Elegant dresses for any occasion</li>
                            <li>👚 Trendy tops and blouses</li>
                            <li>👖 Comfortable and stylish jeans</li>
                            <li>🧥 Fashionable outerwear to complete your look</li>
                            <li>👠 Accessories to add a touch of glamour</li>
                        </ul>
                        <p>
                            Our women's clothing collection combines fashion-forward designs with comfort and quality. Explore our range to find the perfect pieces that reflect your personal style and enhance your wardrobe.
                        </p>
                    </div>
                </div>
            </div>

            {/* jwellery content */}
            <div className="jewelry-container">
                <h1 className="jewelry-title">About Jewelry</h1>
                <div className="jewelry-content">
                    <img src="https://images.unsplash.com/photo-1695050049047-54e27a908898?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=" Jewelry" className="jewelry-image" />
                    <div className="jewelry-text">
                        <p>
                            Explore our exquisite collection of jewelry! Here are some highlights:
                        </p>
                        <ul>
                            <li>💍 Elegant rings for any occasion</li>
                            <li>📿 Stunning necklaces and bracelets</li>
                            <li>✨ High-quality materials and craftsmanship</li>
                            <li>💎 Unique designs to suit your style</li>
                            <li>🎁 Perfect gifts for your loved ones</li>
                        </ul>
                        <p>
                            Our jewelry collection combines timeless elegance with contemporary design. Discover pieces that make a statement and enhance your beauty.
                        </p>
                    </div>
                </div>
            </div>

            {/* electronics */}

            <div className="electronics-container">
                <h1 className="electronics-title">About Electronics</h1>
                <div className="electronics-content">
                    <img src="https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Electronics" className="electronics-image" />
                    <div className="electronics-text">
                        <p>
                            Explore our cutting-edge electronics collection! Here are some highlights:
                        </p>
                        <ul>
                            <li>📱 Latest smartphones and accessories</li>
                            <li>💻 High-performance laptops and tablets</li>
                            <li>🎧 Premium headphones and audio equipment</li>
                            <li>📷 Advanced cameras and gadgets</li>
                            <li>🖥️ Innovative home electronics and appliances</li>
                        </ul>
                        <p>
                            Our electronics collection features the latest technology and high-quality products to enhance your digital experience. Discover the perfect devices and accessories to fit your needs.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
