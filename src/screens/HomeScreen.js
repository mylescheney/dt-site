import greySquare from '../images/greySquare.jpeg';



const HomeScreen = ({ width }) => {
    if (width >= 1000) {
        return (
            <div className="screen">
                <div className="leftColumnHome">
                    <div className='homeImgDiv'>
                        <img className='rotateLeftLC' src={greySquare} alt='me' />
                    </div>
                    <div className='homeImgDiv'>
                        <img className='rotateRightLC' src={greySquare} alt='me' />
                    </div>
                </div>
                <div className="mainHome">
                    <h1 className='homeHeading'>Hello there!</h1>
                    <p className='homeParagraph'>My name is Miles Morlock. I am a biology major at the Univeristy of the District of Columbia and an aspiring forensic pathologist. The next step for me and my career goals is attending medical school. If you're considering my application, you can explore this website to learn more about me!</p>
                    <div className="contactInfo">
                        <p className='signature'>- Miles Morlock</p>
                        <p className='contactInfoParagraph'>Washington, D.C.</p>
                        <p className='contactInfoParagraph'>miles.morlock@udc.edu</p>
                        <p className='contactInfoParagraph'>410-610-8220</p>
                    </div>
                </div>
                <div className="rightColumnHome">
                    <div className='homeImgDiv'>
                        <img className='rotateLeftRC' src={greySquare} alt='me' />
                    </div>
                    <div className='homeImgDiv'>
                        <img className='rotateRightRC' src={greySquare} alt='me' />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="screen">
                <div className="mainHome">
                    <h1 className='homeHeading'>Hello there!</h1>
                    <p className='homeParagraph'>My name is Miles Morlock. I am a biology major at the Univeristy of the District of Columbia and an aspiring forensic pathologist. The next step for me and my career goals is attending medical school. If you're considering my application, you can explore this website to learn more about me!</p>
                    <div className="contactInfoTablet">
                        <p className='signatureTablet'>Miles Morlock</p>
                        <p className='contactInfoParagraphTablet'>Washington, D.C.</p>
                        <p className='contactInfoParagraphTablet'>miles.morlock@udc.edu</p>
                        <p className='contactInfoParagraphTablet'>410-610-8220</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeScreen;