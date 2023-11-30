import { useState, useEffect } from 'react';
import './App.css';
// Components
import HomeScreen from './screens/HomeScreen';
import AboutMeScreen from './screens/AboutMeScreen';
import ResumeScreen from './screens/ResumeScreen';
import SamplesScreen from './screens/SamplesScreen';
import NavBar from './components/NavBar';

console.log('test')

function App() {

  const [page, setPage] = useState('Home');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  if (width < 400) {
    return (
      <div>
        <p>phone {width}</p>
      </div>
    )
  } else if (width < 1000) {
    return (
      <div>
        <p>tablet {width}</p>
      </div>
    )
  } else {
    return (
      <div className='app'>
        <NavBar page={page} setPage={setPage} />
        {page === 'Home' &&
          <HomeScreen />
        }
        {page === 'AboutMe' &&
          <AboutMeScreen />
        }
        {page === 'Resume' &&
          <ResumeScreen />
        }
        {page === 'Samples' &&
          <SamplesScreen />
        }
      </div>
    );
  }
}

export default App;
