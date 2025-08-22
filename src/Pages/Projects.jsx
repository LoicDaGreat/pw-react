import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContentArea from '../Components/ContentArea';
import ParticlesComponent from '../Components/ParticlesComponent';
import faspro24 from '../assets/projects/pf1/faspro24.png';
import Showbay from '../assets/projects/pf2/Showbay.png';
import Sinansel from '../assets/projects/pf3/Sinansel.png';
import PropertyTV from '../assets/projects/pf4/PropertyTV.png';
import Kleekle from '../assets/projects/pf5/screenshots-pro/Samsung S10 (1080x1920)/Original/Kleekle.png'

const Projects = () => {

  const [activeCard, setActiveCard] = useState(1);

  const projects = [
    {
      id: 1,
      image: faspro24,
      title: 'FASPRO 24',
      description: 'A facility management application to help keep track of your properties'
    },
    {
      id: 2,
      image: Showbay,
      title: 'SHOWBAY 24',
      description: 'A hybrid virtual events platform'
    },
    {
      id: 3,
      image: Sinansel,
      title: 'Sinansel Marketplace',
      description: 'An internationalmarketplace mainly based in South Africa and Cameroon'
    },
    {
      id: 4,
      image: PropertyTV,
      title: 'PropertyTV',
      description: 'A video subscription platform focused on properties and sales'
    },
    {
      id: 5,
      image: Kleekle,
      title: 'Kleekle',
      description: 'A photography platform made for property agents to request photography services'
    }
  ];

  const getCardWidth = (cardId) => {
    if (cardId === activeCard) {
      return 'w-150 md:w-150 sm:w-full';
    }
    return 'w-50 md:w-50 sm:w-full'; 
  };

  const getCardOpacity = (cardId) => {
    if (cardId === activeCard) {
      return 'opacity-100';
    }
    return 'opacity-100 hover:opacity-90';
  };

  const getCardHeight = (cardId) => {
    if (cardId === activeCard) {
      return 'h-64 sm:h-48';
    }
    return 'h-64 sm:h-32';
  };

  return (
   <div>
       <style jsx="true">{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        @media (min-width: 768px) {
          .w-150 { width: 37.5rem; }
          .w-50 { width: 12.5rem; }
        }
        
        @media (max-width: 767px) {
          .w-150, .w-50 { width: 100%; }
        }
      `}
      </style>
      <ParticlesComponent config={"amongUs"}/>
      <ContentArea>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8">
          <div className="hidden md:flex space-x-2 h-[40rem] w-full max-w-[50rem] bg-transparent overflow-hidden">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`
                  relative cursor-pointer transition-all duration-800 ease-in-out rounded-xl overflow-hidden
                  ${getCardWidth(project.id)} ${getCardOpacity(project.id)}
                  transform hover:scale-90
                `}
                onClick={() => setActiveCard(project.id)}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
               <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                <div className="relative h-full flex flex-col justify-end p-6">
                  {project.id === activeCard && (
                   <Link to={`/projectDetails/${activeCard}`}> 
                    <div className="text-white opacity-0 animate-fade-in">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-90">
                          {project.description}
                        </p>
                      </div>
                    </Link>
                  )}
                  
                  {project.id !== activeCard && (
                    <div className="text-white transform rotate-90 origin-bottom-left absolute bottom-4 left-4">
                      <span className="text-sm font-medium whitespace-nowrap">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          <div className="pt-16">
            <div className="md:hidden w-full max-w-sm space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`
                    relative cursor-pointer transition-all duration-500 ease-in-out rounded-xl overflow-hidden
                    ${getCardHeight(project.id)} ${getCardOpacity(project.id)}
                    transform active:scale-95
                  `}
                  onClick={() => setActiveCard(project.id)}
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  
                  <div className="relative h-full flex flex-col justify-end p-4">
                    {project.id === activeCard && (
                      <Link to={`/projectDetails/${activeCard}`}> 
                        <div className="text-white opacity-0 animate-fade-in">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm opacity-90 line-clamp-3">
                            {project.description}
                          </p>
                        </div>
                      </Link>
                    )}
                    
                    {project.id !== activeCard && (
                      <div className="text-white">
                        <h4 className="text-lg font-semibold">{project.title}</h4>
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>  
      </ContentArea>
    </div>
  )
}

export default Projects