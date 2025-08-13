import ContentArea from '../Components/ContentArea';
import main from '../assets/background/main.jpg';
import ParticlesComponent from '../Components/ParticlesComponent';
import PhoneWidget from '../Components/PhoneWidget';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Index = () => {

  return (
    <div>
      <ParticlesComponent />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <ContentArea backgroundImg={main}>
          <div class="flex text-center top-1/2 translate-y-2/3 justify-center p-8">
            <h1 class="text-white text-5xl font-semibold leading-tight">
               <p class="text-blue-400 text-lg md:text-xl mb-6 font-medium">
                Hi, welcome to my personal website.
              </p>
                My name is Nkeng Wilfried, a Swellendam based Developer
            </h1>
          </div>
          <div className="md:flex items-center jutify-center gap-3">
              <button className="bg-blue-700 text-white font-medium px-6 py-3 rounded-sm items-center gap-3 shadow-lg hover:shadow-xl"> 
                <span>Hire Me</span>
              </button>         
          </div>
        <PhoneWidget />
      </ContentArea>      
    </div>
  );
}

export default Index;