import { useState } from 'react';
import './App.css';
import Title from './Title';
import Fetchdata from './Components/Post';
import './Components/post.css'

function App() {
  const [showData, setShowData] = useState(false);

  const handleButtonClick = () => {
    setShowData(true); 
  };

  return (
    <>
      <Title />
      {!showData && ( 
        <div style={{ textAlign: 'center' }}>
          <button
            className='btn btn-danger ps-4 pe-4 mt-3'
            style={{
              textAlign: 'center',
            }}
            onClick={handleButtonClick}
          >
            GET
          </button>
        </div>
      )}

      {showData && <Fetchdata />} </>
  );
}

export default App;
