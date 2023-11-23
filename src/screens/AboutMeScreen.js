// import resumeVideo from '../images/VideoResume.mp4';
import greySquare from '../images/greySquare.jpeg';

const AboutMeScreen = () => {
    return (
        <div className="screen">
            <div className='leftColumnAboutMe'>
                <iframe
                    width="560'"
                    height="315"
                    src="https://www.youtube.com/embed/C83ccqUZ_kE?si=t_fCWhdKuwisgyZX"
                    title="Resume Video"
                    frameborder="0"
                    allow="accelerometer"
                />
            </div>
            <div className="rightColumnAboutMe">
                <h1>About Me</h1>
            </div>
        </div>
    )
}

export default AboutMeScreen;