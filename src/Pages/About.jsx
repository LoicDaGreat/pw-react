import React, { useState } from 'react';
import ContentArea from '../Components/ContentArea';
import SocialMediaWidget from '../Components/SocialMediaWidget';
import Forest from '../assets/background/Forest.jpg';
import Wilfried1 from '../assets/background/Wilfried1.png';

const About = () => {

  const [isFlipped, setIsFlipped] = useState(false);
  let flipOnHover = false;

  const handleHoverFlip = () => {
    if (!flipOnHover) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="relative">
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <ContentArea backgroundImg={Forest}>
        <div className="flex h-screen sm:flex-row md:flex-row inset-0">

          <div className="w-1/2 perspective-1000 z-10">
            <div 
              className={`relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              onClick={handleHoverFlip}
            >
              <div className="absolute inset-0 bg-blue-500 flex items-center justify-center backface-hidden">
                <div className="text-center text-white">
                </div>
              </div>
              
              <div className="absolute inset-0 bg-purple-600 flex items-center justify-center backface-hidden rotate-y-180">
                <div className="text-center text-white">
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-1/2 bg-green-500 flex items-center justify-center">
            <img src={Wilfried1} alt="Wilfried Nkeng"/>
          </div>
        </div>
      </ContentArea>
    </div>
  )
}

export default About