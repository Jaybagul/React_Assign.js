import React from 'react';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg" id='home'>
      <div class="container-fluid">
 
        <a class="navbar-brand" href="#">
          <img src="https://marketplace.canva.com/EAFzl_fI3WU/1/0/1600w/canva-red-and-black-illustrative-barber-shop-logo-A5183UnPgkI.jpg" alt="Logo" width="60"  height="60" style={{borderRadius:'50px'}}/>
        </a>
        <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list" style={{color:'white'}}></i>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
         
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#content">Content</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#footer">Footer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      
        <div class="d-flex">
          <a class="nav-link" href="#">
          <i class="bi bi-instagram"></i>
          </a>
          <a class="nav-link" href="#">
          <i class="bi bi-twitter"></i>
          </a>
          <a class="nav-link" href="#">
          <i class="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </nav>

  )
}

export default Header
