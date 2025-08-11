import ThemeDark from '../Contexts/ThemeDark';
import ThemeToggle from './ThemeToggle';
import loic4 from '../assets/logo/loic4.png';

const NavigationBar = () => {
  return (
    
      <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400 dark:bg-black">
        <nav className="flex justify-between items-center 
        text-black
        py-6 px-8
        md:px-32 bg-white drop-shadow-md">
          
          <a href="#">
            <img src={loic4} alt="Wilfried Nkeng" />
          </a>   
        </nav>
      </div>
    
  );
}

export default NavigationBar;