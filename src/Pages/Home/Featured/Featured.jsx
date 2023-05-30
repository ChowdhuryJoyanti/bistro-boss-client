import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './featured.css';
const Featured = () => {
    return (
        <div className='featured-item bg-fixed  text-white pt-10 my-10'>
            <SectionTitle
                    subHeading="check it out"
                    heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pt-12 pb-20 px-36'>
                 <div>
                  <img src={featuredImg} alt="featured" />    
                </div>
                <div className='md:-ml-10 px-16'>
                   <p>Aug 20,2029</p>
                   <p className='uppercase'>Where I get some</p>
                   <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Dolorum obcaecati qui ex ducimus ratione fugit. Eveniet, 
                     dolor maxime. Totam, at laboriosam animi vitae repudiandae 
                     consequatur. Ea fugit hic velit quisquam impedit id atque 
                     dolorum tempore aperiam, voluptates commodi ab, rerum totam.
                      Vitae explicabo 
                    pariatur excepturi dolorum quo cumque esse aspernatur!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured; 