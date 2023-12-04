import sample1 from '../images/GPA_Sample.png';
import sample2 from '../images/EMT_Sample.png';
import sample3 from '../images/NASM_Sample.png';
import sample4 from '../images/Software_Sample.png';

const SamplesScreen = ({ width }) => {
    if (width >= 1000) {
        return (
            <div className="samplesScreen">
                <div className='samplesRow'>
                    <div className='sampleBlock'>
                        <img className='sampleImg' src={sample1} alt='GPA' />
                    </div>
                    <div className='sampleBlock'>
                        <img className='sampleImg' src={sample2} alt='NREMT certificate' />
                    </div>
                </div>
                <div className='samplesRow'>
                    <div className='sampleBlock'>
                        <img className='sampleImg' src={sample3} alt='NASM certificate' />
                    </div>
                    <div className='sampleBlock'>
                        <img className='sampleImg' src={sample4} alt='Nucamp certificate' />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="samplesScreenTablet">
                <div className='sampleBlockTablet'>
                    <img className='sampleImgTablet' src={sample1} alt='scholarship letter' />
                </div>
                <div className='sampleBlockTablet'>
                    <img className='sampleImgTablet' src={sample2} alt='NREMT certificate' />
                </div>
                <div className='sampleBlockTablet'>
                    <img className='sampleImgTablet' src={sample3} alt='NASM certificate' />
                </div>
                <div className='sampleBlockTablet'>
                    <img className='sampleImgTablet' src={sample4} alt='Nucamp certificate' />
                </div>
            </div>
        );
    }
}

export default SamplesScreen;