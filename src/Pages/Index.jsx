import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import ContentArea from '../Components/ContentArea';
import main from '../assets/background/main.jpg';

const Index = () => {
  return (
    <div className="bg-cover bg-center h-screen w-full"
    >
      <ContentArea backgroundImg={main}>

      </ContentArea>
      

    </div>
  );
}

export default Index;