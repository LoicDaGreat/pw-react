import { useState } from 'react';
import ContentArea from '../Components/ContentArea';
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

  return (
    <div>
       <style jsx>{`
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
          animation: fade-in 0.6s ease-out forwards;
        }
      `}
      </style>

      <ContentArea>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
         
        </div>  
      </ContentArea>
    </div>
  )
}

export default Projects