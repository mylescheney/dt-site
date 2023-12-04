const NavBar = ({ page, setPage, width }) => {
    if (width >= 1000) {
        return (
            <div className='navBar'>
                <div className='navBlock' onClick={() => setPage('Home')}>
                    <p className="navText">Home</p>
                </div>
                <div className='navBlock' onClick={() => setPage('AboutMe')}>
                    <p className="navText">About Me</p>
                </div>
                <div className='navBlock' onClick={() => setPage('Resume')}>
                    <p className="navText">Resume</p>
                </div>
                <div className='navBlock' onClick={() => setPage('Samples')}>
                    <p className="navText">Samples</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className='navBar'>
                <div className='navBlock' onClick={() => setPage('Home')}>
                    <p className="navTextTablet">Home</p>
                </div>
                <div className='navBlock' onClick={() => setPage('AboutMe')}>
                    <p className="navTextTablet">About Me</p>
                </div>
                <div className='navBlock' onClick={() => setPage('Resume')}>
                    <p className="navTextTablet">Resume</p>
                </div>
                <div className='navBlock' onClick={() => setPage('Samples')}>
                    <p className="navTextTablet">Samples</p>
                </div>
            </div>
        )
    }
}

export default NavBar;