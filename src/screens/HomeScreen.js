import greySquare from '../images/greySquare.jpeg';

const HomeScreen = () => {
    return (
        <div className="screen">
            <div className="leftColumnHome">
                <div className='homeImgDiv'>
                    <img className='rotateLeftLC' src={greySquare} alt='image' />
                </div>
                <div className='homeImgDiv'>
                    <img className='rotateRightLC' src={greySquare} alt='image' />
                </div>
            </div>
            <div className="mainHome">
                <h1>Hello there!</h1>
                <p>My name is Miles Morlock. I am a biology major at the Univeristy of the District of Columbia and an aspiring forensic pathologist. The next step for me and my career goals is attending medical school. If you're considering my application, you can explore this website to learn more about me!</p>
                <div className="contactInfo">
                    <p>Miles Morlock</p>
                    <p>Washington, D.C.</p>
                    <p>410-610-8220</p>
                    <p>miles.morlock@udc.edu</p>
                </div>
            </div>
            <div className="rightColumnHome">
            <div className='homeImgDiv'>
                    <img className='rotateLeftRC' src={greySquare} alt='image' />
                </div>
                <div className='homeImgDiv'>
                    <img className='rotateRightRC' src={greySquare} alt='image' />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;