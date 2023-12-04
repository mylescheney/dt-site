import { useState, useEffect } from 'react';
import './App.css';
import greySquare from './images/greySquare.jpeg';
import MilesMorlockResume from './assets/MilesMorlockResume.pdf';
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

  if (width < 570) {
    return (
      <div className='phoneView'>
        <h1 className='greetingPhone'>Hello there!</h1>
        <p className='greetingParagraphPhone'>My name is Miles Morlock. I am a biology major at the Univeristy of the District of Columbia and an aspiring forensic pathologist. The next step for me and my career goals is attending medical school. If you're considering my application, you can explore this webpage to learn more about me!</p>
        <div className="contactInfoPhone">
          <div className='contactInfoRow'>
            <p className='signaturePhone'>Miles Morlock</p>
            <p className='contactInfoParagraphPhone'>Washington, D.C.</p>
          </div>
          <div className='contactInfoRow'>
            <p className='contactInfoParagraphPhone'>miles.morlock@udc.edu</p>
            <p className='contactInfoParagraphPhone'>410-610-8220</p>
          </div>
        </div>
        <div className='samplesDivPhone'>
          <div className='samplePhone'>
            <img className='sampleImgPhone' src={greySquare} alt='sample' />
          </div>
          <div className='samplePhone'>
            <img className='sampleImgPhone' src={greySquare} alt='sample' />
          </div>
          <div className='samplePhone'>
            <img className='sampleImgPhone' src={greySquare} alt='sample' />
          </div>
          <div className='samplePhone'>
            <img className='sampleImgPhone' src={greySquare} alt='sample' />
          </div>
        </div>
        <div className='videoPhone'>
          <iframe
            width="308"
            height="173.25"
            src="https://www.youtube.com/embed/C83ccqUZ_kE?si=t_fCWhdKuwisgyZX"
            title="Resume Video"
            frameborder="0"
            allow="accelerometer"
            alt='resume vid'
          />
        </div>
        <a href={MilesMorlockResume} download="MilesMorlockResume" target='_blank' rel="noreferrer" className='downloadResBtnPhone'>
          <p className='downloadPPhone'>Download Resume</p>
        </a>
      </div>
    )
  } else {
    return (
      <div className='app'>
        <NavBar page={page} setPage={setPage} width={width} />
        {page === 'Home' &&
          <HomeScreen width={width} />
        }
        {page === 'AboutMe' &&
          <AboutMeScreen width={width} />
        }
        {page === 'Resume' &&
          <ResumeScreen width={width} />
        }
        {page === 'Samples' &&
          <SamplesScreen width={width} />
        }
      </div>
    );
  }
}

export default App;

