import resumePic from '../images/resume.jpg';
import MilesMorlockResume from '../assets/MilesMorlockResume.pdf';


const ResumeScreen = () => {
    return (
        <div className='resumeScreen'>
            <a href={MilesMorlockResume} download="MilesMorlockResume" target='_blank' className='downloadResBtn'>
                <p>Download</p>
            </a>
            <img className="resume" src={resumePic} />
        </div>
    )
}

export default ResumeScreen;