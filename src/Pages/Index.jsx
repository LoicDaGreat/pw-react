import ContentArea from '../Components/ContentArea';
import Wilfried2 from '../assets/background/Wilfried2.png';
import ParticlesComponent from '../Components/ParticlesComponent';
import PhoneWidget from '../Components/PhoneWidget';
import { Link } from 'react-router-dom';
import { CircleArrowRight, FolderGit2 } from 'lucide-react';

const Index = () => {

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <ParticlesComponent config={"geo"}/>
      <ContentArea backgroundImg={Wilfried2}>
        <section className="content-overlay flex flex-col items-center justify-center min-h-screen px-8 mt-2">
          <div className="text-center max-w-3xl relative z-20">
              <p className="text-blue-400 text-lg mb-8 font-medium">
                  Hi, welcome to my personal website.
              </p>
              <h1 className="text-white text-2xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-12">
                  My name is Wilfried, a Swellendam based Developer
              </h1>
              <div className="flex justify-center gap-3">
                <Link to="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded transition-all duration-300 hover:scale-110 flex items-center gap-3 animate-bounce">
                      Hire Me <CircleArrowRight />
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded transition-all duration-300 hover:scale-110 flex items-center gap-3 animate-bounce">
                      Portfolio <FolderGit2 />
                  </button>
                </Link>
              </div>
          </div>
        </section>
        <PhoneWidget />
      </ContentArea>      
    </div>
  );
}

export default Index;