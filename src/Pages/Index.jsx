import ContentArea from '../Components/ContentArea';
import main from '../assets/background/main.jpg';
import ParticlesComponent from '../Components/ParticlesComponent';
import PhoneWidget from '../Components/PhoneWidget';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Index = () => {



  return (
    <div>
      <ParticlesComponent />
      <ContentArea backgroundImg={main}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <PhoneWidget />
      </ContentArea>      
    </div>
  );
}

export default Index;