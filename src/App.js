import { useState } from 'react';
import './App.css';
// Components
import HomeScreen from './screens/HomeScreen';
import AboutMeScreen from './screens/AboutMeScreen';
import ResumeScreen from './screens/ResumeScreen';
import SamplesScreen from './screens/SamplesScreen';
import NavBar from './components/NavBar';

function App() {

  const [page, setPage] = useState('Home');

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

export default App;
