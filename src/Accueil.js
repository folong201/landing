import React from 'react';
import me from './me.png'
function Accueil() {
    return (
        <div className='flex justify-space'>

        <div>
            <p className='ml-[180px] mt-[211px] '>
                <span className=' text-[#FFFFFF] justify-center text-[44px] font-extrabold '>Folong Emerson</span>
            </p>
            <p className='ml-[180px] text-[#9C9C9C] w-96'>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
            <div className='ml-[50px] text-[#9C9C9C] w-96 mt-[120px]'>
                <img src={me} />
            </div>
        </div>
    );
}

export default Accueil;
