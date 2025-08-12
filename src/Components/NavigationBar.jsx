import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeDark from '../Contexts/ThemeDark';
import ThemeToggle from './ThemeToggle';
import loic4 from '../assets/logo/loic4.png';
import { FileDown, Menu, X } from 'lucide-react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400 dark:bg-black">
        <nav className="flex justify-between items-center 
        text-black
        py-6 px-8
        md:px-32 bg-white drop-shadow-md bg-opacity-0">
          
          <a href="#">
            <img src={loic4} alt="Wilfried Nkeng" className="w-52 hover:scale-110 transition-all"/>
          </a> 

          <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><span className="text-blue-600">01</span><br/><Link to="/">Home</Link></li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><span className="text-blue-600">02</span><br/><Link to="/about">About</Link></li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><span className="text-blue-600">03</span><br/><Link to="/skills">Skills</Link></li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><span className="text-blue-600">04</span><br/><Link to="/projects">Projects</Link></li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer"><span className="text-blue-600">05</span><br/><Link to="/contact">Contact</Link></li>
          </ul> 

          <div className="relative hidden md:flex items-center jutify-center gap-3">
            <button className="bg-opacity-50 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-3 transition-colors duration-200 shadow-lg hover:shadow-xl"> 
              <FileDown />
              <span>Download CV</span>
            </button>         
          </div>
          
          <i className="xl:hidden block text-5xl cursor-pointer"
            onClick={() => {setIsMenuOpen(!isMenuOpen)}}
          >
           { isMenuOpen ? <X size={40} /> : <Menu size={40}/>}
          </i>
          <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            style={{transition: "transform 0.4s ease, opacity 0.4s ease"}}
          >
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Home</li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">About</li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Skills</li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Project</li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Contact</li>
          </div>
        </nav>
      </div>
  );
}

export default NavigationBar;