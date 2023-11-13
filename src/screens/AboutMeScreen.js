// import resumeVideo from '../images/VideoResume.mp4';
import greySquare from '../images/greySquare.jpeg';

const AboutMeScreen = () => {
    return (
        <div className="screen">
            {/*<div className="leftColumnAboutMe">
                <video src={resumeVideo} width='100%' controls/>
    </div> */}
            <div className='leftColumnAboutMe'>
                <img src={greySquare} width='100%' alt='me' />
            </div>
            <div className="rightColumnAboutMe">
                <h1>About Me</h1>
            </div>
        </div>
    )
}

export default AboutMeScreen;