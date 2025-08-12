import ContentArea from '../Components/ContentArea';
import main from '../assets/background/main.jpg';
import ParticlesComponent from '../Components/ParticlesComponent';

const Index = () => {
  return (
    <div>
      <ParticlesComponent />
      <ContentArea backgroundImg={main}>
        
      </ContentArea>      
    </div>
  );
}

export default Index;