import greySquare from '../images/greySquare.jpeg';

const SamplesScreen = ({ width }) => {
    if (width >= 1000) {
        return (
            <div className="samplesScreen">
                <div className='samplesRow'>
                    <div className='sampleBlock'>
                        <img className='sampleImg' src={greySquare} alt='sample' />
                    </div>
                    <div className='sampleBlock'>
                        <img className='sampleImg' src={greySquare} alt='sample' />
                    </div>
                </div>
                <div className='samplesRow'>
                    <div className='sampleBlock'>
                        <img className='sampleImg' src={greySquare} alt='sample' />
                    </div>
                    <div className='sampleBlock'>
                        <img className='sampleImg' src={greySquare} alt='sample' />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="samplesScreenTablet">
                <div className='sampleBlockTablet'>
                    <img className='sampleImgTablet' src={greySquare} alt='sample' />
                </div>
                <div className='sampleBlockTablet'>
                    <img className='sampleImgTablet' src={greySquare} alt='sample' />
                </div>
                <div className='sampleBlockTablet'>
                    <img className='sampleImgTablet' src={greySquare} alt='sample' />
                </div>
                <div className='sampleBlockTablet'>
                    <img className='sampleImgTablet' src={greySquare} alt='sample' />
                </div>
            </div>
        );
    }
}

export default SamplesScreen;