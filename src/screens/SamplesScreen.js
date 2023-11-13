import greySquare from '../images/greySquare.jpeg';

const SamplesScreen = () => {
    return (
        <div className="samplesScreen">
            <div className='samplesRow'>
                <div className='sampleBlock'>
                    <img className='sampleImg' src={greySquare} alt='me' />
                </div>
                <div className='sampleBlock'>
                    <img className='sampleImg' src={greySquare} alt='me' />
                </div>
            </div>
            <div className='samplesRow'>
                <div className='sampleBlock'>
                    <img className='sampleImg' src={greySquare} alt='me' />
                </div>
                <div className='sampleBlock'>
                    <img className='sampleImg' src={greySquare} alt='me' />
                </div>
            </div>
        </div>
    )
}

export default SamplesScreen;