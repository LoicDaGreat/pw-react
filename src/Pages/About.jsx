import { useState } from 'react';
import ContentArea from '../Components/ContentArea';
import SocialMediaWidget from '../Components/SocialMediaWidget';
import PhoneWidget from '../Components/PhoneWidget';
import Forest from '../assets/background/Forest.jpg';
import Wilfried1 from '../assets/background/Wilfried1.png';
import { Smile } from 'lucide-react';

const About = () => {

  const [isFlipped, setIsFlipped] = useState(false);
  let flipOnHover = false;

  const handleHoverFlip = () => {
    if (!flipOnHover) {
      setIsFlipped(!isFlipped);
    }
  };

  const experiences = [
    {
      date: 'Jan 2023 - Present',
      title: 'Software developer - Southern Oil Pty',
      description: 'Handle system tasks automation, Working with SAP to analyze data and creating custom reporting developed. Make use of SSRS, MSSQL, Laravel Php and React'
    },
    {
      date: 'JAN 2021 - Dec 2021',
      title: 'Software Developer - TNG Solutions',
      description: "Used LAMP stack of technologies to develop, test and Maintain client software on an MVC framework, Designed, developed, and deployed database elements that included database queries for internal applications Used the Laravel PHP Framework to develop, test and implement APIs for internal applications. Tools Used: Ionic Angular, Ionic React, Visual Studio Code, Github, MySQL, Trello, Laravel 8 framework, Capacitor and Cordova."
    },
     {
      date: 'JAN 2021 - Dec 2021',
      title: 'Junior Software Developer - Moody and Smith',
      description: 'Creating more than 15+ websites with WordPress.Using CSS/Bootstrap to design multiple responsive web apps. Using PHP back-end programming to maintain security on websites.'
    },
    {
      date: 'March 2017 - 2018',
      title: 'Programming Intern - Semlex(Guinea Bissau)',
      description: 'Implemented innovative systems for data collection, storage, and management of customer data. Tested hardware and performed troubleshooting techniques to identify problems. Collaborated closely with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.'
    },
  ];

  return (
    <div className="relative">
      <style>{`
        .perspective-1000 {
          perspective: 700px;
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
        
        @media (max-width: 767px) {
          .mobile-scroll {
            max-height: 70vh;
            overflow-y: auto;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-black opacity-10"></div>

      <ContentArea backgroundImg={Forest}>
        <div className="hidden md:flex h-screen inset-0">
          <div className="w-1/2 perspective-1000 z-10">
            <div 
              className={`relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              onClick={handleHoverFlip}
            >
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center backface-hidden">
                <div className="text-center text-white">
                  <div className="flex-1 flex flex-col justify-center px-12 lg:px-20">
                    <div className="max-w-2xl">
                      <div className="mb-8">
                        <span className="text-white text-sm font-semibold tracking-widest uppercase">
                          HI THERE!
                        </span>
                      </div>
                      
                      <p className="font-light leading-tight mb-12">
                        I am an application software developer based Centurion and originally from Cameroon, 
                        with a strong focus in Back-End development. 
                        I love to get new experiences and always learn from my surroundings. 
                        I've done more than 10 projects. 
                        I look forward to any opportunities and challenges.
                      </p>
                    
                      <button className="border-2  gap-3 inline-flex border-white text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-stone-100 hover:text-black transition-colors">
                          EXPLORE <Smile size={20}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-stone-300 flex items-center justify-center backface-hidden rotate-y-180 pt-28">
                <div className="text-center text-black">
                  <div className="max-w-4xl mx-28 space-y-8">
                    {experiences.map((experience, index) => (
                      <div key={index} className="space-y-4">
                        <div className="inline-block bg-blue-600 px-3 py-1 text-sm font-medium rounded">
                            {experience.date}
                        </div>
                        <h2 className="text-xl font-bold text-black">
                            {experience.title}
                        </h2>
                        <div className="leading-tight">
                          {experience.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <SocialMediaWidget/>
          </div>
          
          <div className="w-1/2 bg-transparent flex">
            <img src={Wilfried1} alt="Wilfried Nkeng" className="w-full h-auto object-cover"/>
          </div>
          <PhoneWidget />
        </div>

        <div className="md:hidden min-h-screen flex flex-col">
          <div className="relative h-64 sm:h-80 flex-shrink-0">
            <img 
              src={Wilfried1} 
              alt="Wilfried Nkeng" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
          </div>

          <div className="flex-1 bg-gray-900 px-6 py-8">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <span className="text-white text-xs font-semibold tracking-widest uppercase">
                  HI THERE!
                </span>
              </div>
              
              <p className="text-white font-light leading-relaxed mb-8 text-sm">
                I am an application software developer based Centurion and originally from Cameroon, 
                with a strong focus in Back-End development. 
                I love to get new experiences and always learn from my surroundings. 
                I've done more than 10 projects. 
                I look forward to any opportunities and challenges.
              </p>

              <div className="bg-stone-200 rounded-lg p-4 mobile-scroll">
                <div className="space-y-6">
                  {experiences.map((experience, index) => (
                    <div key={index} className="border-b border-gray-300 pb-4 last:border-b-0">
                      <div className="inline-block bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded mb-2">
                        {experience.date}
                      </div>
                      <h3 className="text-base font-bold text-black mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentArea>
    </div>
  )
}

export default About