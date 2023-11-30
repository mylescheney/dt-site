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
                    alt='resume vid'
                />
            </div>
            <div className="rightColumnAboutMe">
                <h1>About Me</h1>
                <p className='aboutMeText'>I have done a lot of self-discovery since graduating high school. I spent time working as a personal trainer, web developer, and an EMT. It was my experience working in emergency medicine that made me realize that my passion resided in the medical field. Specifically, I want to go on and become a forensic pathologist. I am graduating Spring of 2026, and hope I can be admitted to your medical school come the fall!</p>
            </div>
        </div>
    )
}

export default AboutMeScreen;