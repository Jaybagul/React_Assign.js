import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './assets/Header';
import Content from './assets/Content';
import Footer from './assets/Footer';

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    const count = setTimeout(() => {
      setLoad(false);
    }, 2000); 
    return () => clearTimeout(count);
  }, []);

  return load ? (
    <div className="loader"></div>
  ) : (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
