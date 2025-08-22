import { useState } from 'react';
import ContentArea from '../Components/ContentArea';
import bulb2 from '../assets/background/bulb2.jpg';
import Showbay5 from '../assets/projects/pf2/Showbay5.png';

const ProjectDetails = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ContentArea backgroundImg={bulb2}>

        <div className="flex h-screen flex-col">

          <div className="h-1/2 bg-transparent flex justify-center items-center pt-8">
            <div className="mb-16 flex">
              <h1 className="text-9xl lg:text-9xl font-bold text-white leading-none tracking-widest">
                SHOWBAY 24
              </h1>
            </div>
          </div>
          
          <div className="h-1/2 bg-gray-900 grid">
            <div className="bg-gray-800 h-[160px] flex justify-center items-center">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Date</h3>
                  <p className="text-gray-300 text-lg">March 2022</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Client</h3>
                  <p className="text-gray-300 text-lg">TNG Solutions</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Role</h3>
                  <p className="text-gray-300 text-lg">React and Node.js Dev (FullStack Dev)</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">URL</h3>
                  <p className="text-gray-300 text-lg">www.showbay24.com</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:gap-24 mx-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-white text-2xl font-semibold mb-4 pt-4">Objective</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Hybrid Virtual and in-person events platform
                  </p>
                </div>

                <div>
                  <h2 className="text-white text-2xl font-semibold mb-4 pt-1">Tech Stack</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    React → Node.js → MongoDB
                  </p>
                </div>

                <div className="">
                  <h2 className="text-white text-2xl font-semibold mb-4 pt-1">Color Identity</h2>
                  <div className="flex space-x-2">
                    <div className="w-24 h-8 bg-green-400 rounded"></div>
                    <div className="w-24 h-8 bg-blue-400 rounded"></div>
                    <div className="w-24 h-8 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-14 bg-gray-900">
              <img src={Showbay5} alt=""/>
              <img src={Showbay5} alt=""/>
              <img src={Showbay5} alt=""/>
              <img src={Showbay5} alt=""/>
              <img src={Showbay5} alt=""/>
              <img src={Showbay5} alt=""/>
            </div>


          </div>

        </div>

      </ContentArea>
    </div>
  )
}

export default ProjectDetails