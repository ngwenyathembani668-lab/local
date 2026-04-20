import './HeroSection.css';

function HeroSection () {
    
    return (

        <>

        
        
        <section id="hero-section">

            <div className='overlay'></div>
            
            <div id='hero-text' className='hero-text'>

                <div>

                    <span className='trust-badge'>
                        <svg className='badge' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm285 93q35-35 35-85v-240H360v240q0 50 35 85t85 35q50 0 85-35Zm115-93q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/></svg>
                        <p>Trusted by 100&#43; Local Businesses</p>
                    </span>

                </div>


                <div>

                    <h1>
                        Helping<br></br>
                        <span>Local Businesses</span><br></br>
                        Grow Online
                    </h1>

                </div>

                <div>

                    <p className='p-tag'>We specialize in Google Business Profile optimization, professional web development, and digital growth strategies that bring real customers through your door.</p>

                </div>

                <div className='hero-cta'>

                    <a className='start' href=''>Start Growing Today <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></a>
                    <a className='see' href=''>See Our Services</a>

                </div>

                <div className='hero-bottom'>

                    <div>
                        <div className='p-top'>
                            <p>100&#43;</p>
                        </div>
                        <div className='p-bottom'>
                            <p>Busineses Helped</p>
                        </div>
                    </div>

                    <div>
                        <div className='p-top'>
                            <p>3x</p>
                        </div>
                        <div className='p-bottom'>
                            <p>Avg. Traffic increase</p>
                        </div>
                    </div>

                    <div>
                        <div className='p-top'>
                            <p>98&#37;</p>
                        </div>
                        <div className='p-bottom'>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>

                </div>

                

            </div>

        </section>

        </>

    );

};

export default HeroSection;