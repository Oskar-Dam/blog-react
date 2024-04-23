import { useState } from 'react'
import axios from 'axios';
import Film from './components/Film';
import Spinner from './components/Spinner';
import './App.css'

function App() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);

  const handleClick = () => {
    setIsLoading(true);

    axios.get('https://api.disneyapi.dev/character')
    .then(function (response) {  
  
      setFilms(response.data.data);
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .finally(function () {
      setIsLoading(false);
    });
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>BLOG REACT</h1>
        </div>
        <div className='button-container'>
          <button className='request-button' onClick={handleClick}>LAUNCH</button>
        </div>
        {
          isLoading 
          ?        
            <Spinner />        
          : 
            <div className='blog-container'>
            {
              films.map((element, index) => {

                return <Film key={index} film={element} />

              })
            }
          </div>
        }       
      </div>
      
    </>
  )
}

export default App