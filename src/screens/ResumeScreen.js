import resume from '../images/resume.jpg';

const ResumeScreen = () => {
    return (
        <div className='resumeScreen'>
            <div className='downloadResBtn'>
            <p>Download</p>
            </div>
                <img className="resume" src={resume} />
        </div>
    )
}

export default ResumeScreen;