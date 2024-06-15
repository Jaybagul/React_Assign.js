import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4 mt-5" id='footer'>
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Barber Shop</h5>
              <p>
                Providing the best haircuts and shaves in town. Visit us for an
                amazing experience.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Services</h5>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                  Haircuts
                </a>
              </p>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                  Shaves
                </a>
              </p>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                  Beard Trims
                </a>
              </p>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                  Facials
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                  About Us
                </a>
              </p>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                  Contact
                </a>
              </p>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                  Book Online
                </a>
              </p>
              <p>
                <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
              <p>
                <i className="fas fa-home mr-3"></i> 1234 Main St, Anytown, USA
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@barbershop.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +1 234 567 890
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> +1 234 567 891
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p>© 2023 Barber Shop. All Rights Reserved.</p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: '23px' }}
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: '23px' }}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: '23px' }}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: '23px' }}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
