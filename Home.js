import React from 'react';

const Home = () => {
    return (
        <div className='container-fluid Main'>
            <div className='container-fluid Main1'>
            <img src='img1.webp' className='Main1' alt='this is img1' style={{width:"100%",height:"auto"}}/>
            </div>
            <div className='container-fluid Main2'>
           <p>Specialized ERP And <span className='ERP'>Software</span> </p>
           <p className='Main3'><span className='ERP'>Product</span> For Various Domains</p>
           <p className='WITH'>with Kangaroo Software</p>
           <button type="button" className="btn btn-primary">Read More</button>
           <button type="button" className="btn btn-primary">Contact</button> 
           </div> 
        
        </div>
    );
};

export default Home;