import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeDark from '../Contexts/ThemeDark';
import ThemeToggle from './ThemeToggle';
import loic4 from '../assets/logo/loic4.png';
import { FileDown, Menu, X } from 'lucide-react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { 
      id: '/home', 
      label: 'HOME' 
    },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
    { id: 'contact', label: 'PROJECTS' },
    { id: 'contact', label: 'DETAILS' }
  ];

  const handleDownload = () => {
    const filePath = '/files/LoicCV.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'LoicCV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
      <div className="w-full h-28 absolute z-20">
        <nav className="flex justify-between items-center 
        text-white
        py-6 px-8
        md:px-32 bg-white drop-shadow-md bg-opacity-0">
          
          <Link to="/">
            <img src={loic4} alt="Wilfried Nkeng" className="w-52 hover:scale-110 transition-all"/>
          </Link> 

          <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
            <li className="p-3 hover:bg-blue-600 hover:text-white hover:scale-110 rounded-md transition-all cursor-pointer"><span className="text-blue-600">01</span><br/><Link to="/">HOME</Link></li>
            <li className="p-3 hover:bg-blue-600 hover:text-white hover:scale-110 rounded-md transition-all cursor-pointer"><span className="text-blue-600">02</span><br/><Link to="/about">ABOUT</Link></li>
            <li className="p-3 hover:bg-blue-600 hover:text-white hover:scale-110 rounded-md transition-all cursor-pointer"><span className="text-blue-600">03</span><br/><Link to="/skills">SKILLS</Link></li>
            <li className="p-3 hover:bg-blue-600 hover:text-white hover:scale-110 rounded-md transition-all cursor-pointer"><span className="text-blue-600">04</span><br/><Link to="/projects">PROJECTS</Link></li>
            <li className="p-3 hover:bg-blue-600 hover:text-white hover:scale-110 rounded-md transition-all cursor-pointer"><span className="text-blue-600">05</span><br/><Link to="/contact">CONTACT</Link></li>
            <li className="p-3 hover:bg-blue-600 hover:text-white hover:scale-110 rounded-md transition-all cursor-pointer"><span className="text-blue-600">06</span><br/><Link to="/projectDetails/:id">DETAILS</Link></li>
          </ul> 

          <div className="relative hidden md:flex items-center jutify-center gap-3">
            <button className="outline outline-gray-500 outline-1 bg-opacity-50 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-sm flex items-center gap-3 transition-colors duration-200 shadow-lg hover:shadow-xl"
              onClick={handleDownload}
            > 
              <FileDown />
              <span>Download CV</span>
            </button>         
          </div>
          
          <i className="xl:hidden block text-5xl cursor-pointer"
            onClick={() => {setIsMenuOpen(!isMenuOpen)}}
          >
           { isMenuOpen ? <X size={40} /> : <Menu size={40}/>}
          </i>
          <div className={`min-h-screen absolute lg:hidden top-24 left-0 w-full flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            style={{transition: "transform 0.4s ease, opacity 0.4s ease"}}
          >
            <div class="absolute inset-0 backdrop-filter backdrop-blur-lg bg-black bg-opacity-50"></div>
              <div className="z-50 inset-0">
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="/">Home</Link></li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="/about">About</Link></li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="/skills">Skills</Link></li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="/projects">Project</Link></li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"><Link to="/contact">Contact</Link></li>
              </div>
          </div>
        </nav>
      </div>
  );
}

export default NavigationBar;