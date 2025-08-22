import ContentArea from '../Components/ContentArea';
import bulb2 from '../assets/background/bulb2.jpg';
import Showbay5 from '../assets/projects/pf2/Showbay5.png';

const ProjectDetails = () => {
  const images = [
    Showbay5, Showbay5, Showbay5, Showbay5, Showbay5, Showbay5
  ];

  return (
    <div>
      <ContentArea backgroundImg={bulb2}>
        <div className="hidden lg:flex h-screen flex-col">
          <div className="h-1/2 bg-transparent flex justify-center items-center pt-14">
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
                  <h2 className="text-white text-2xl font-semibold mb-4 pt-1">Objective</h2>
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
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Project screenshot ${index + 1}`}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden min-h-screen">
          <div className="relative h-64 bg-transparent flex justify-center items-center">
            <div className="absolute inset-0 bg-black/30"></div>
            <h1 className="relative text-5xl md:text-6xl font-bold text-white leading-none tracking-wider text-center px-4">
              SHOWBAY 24
            </h1>
          </div>
          
          <div className="bg-gray-900 pb-8">
            <div className="bg-gray-800 py-6 px-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Date</h3>
                  <p className="text-gray-300 text-base">March 2022</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Client</h3>
                  <p className="text-gray-300 text-base">TNG Solutions</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Role</h3>
                  <p className="text-gray-300 text-base">React and Node.js Dev (FullStack Dev)</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">URL</h3>
                  <p className="text-gray-300 text-base">www.showbay24.com</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 space-y-6">
              <div>
                <h2 className="text-white text-xl font-semibold mb-3">Objective</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Hybrid Virtual and in-person events platform
                </p>
              </div>

              <div>
                <h2 className="text-white text-xl font-semibold mb-3">Tech Stack</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  React → Node.js → MongoDB
                </p>
              </div>

              <div>
                <h2 className="text-white text-xl font-semibold mb-3">Color Identity</h2>
                <div className="flex space-x-3">
                  <div className="w-16 h-8 bg-green-400 rounded"></div>
                  <div className="w-16 h-8 bg-blue-400 rounded"></div>
                  <div className="w-16 h-8 bg-white rounded"></div>
                </div>
              </div>
            </div>

            <div className="px-6">
              <h2 className="text-white text-xl font-semibold mb-4">Project Screenshots</h2>
              <div className="grid grid-cols-2 gap-3">
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Project screenshot ${index + 1}`}
                    className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity w-full h-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden min-h-screen">
          <div className="relative h-48 bg-transparent flex justify-center items-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <h1 className="relative text-3xl sm:text-4xl font-bold text-white leading-tight tracking-wide text-center px-4">
              SHOWBAY 24
            </h1>
          </div>
          
          <div className="bg-gray-900 pb-8">
            <div className="bg-gray-800 py-4 px-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Date</h3>
                    <p className="text-gray-300 text-sm">March 2022</p>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Client</h3>
                    <p className="text-gray-300 text-sm">TNG Solutions</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">Role</h3>
                  <p className="text-gray-300 text-sm">React and Node.js Dev (FullStack Dev)</p>
                </div>
                
                <div>
                  <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-1">URL</h3>
                  <p className="text-gray-300 text-sm break-all">www.showbay24.com</p>
                </div>
              </div>
            </div>

            <div className="px-4 py-6 space-y-5">
              <div>
                <h2 className="text-white text-lg font-semibold mb-2">Objective</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Hybrid Virtual and in-person events platform
                </p>
              </div>

              <div>
                <h2 className="text-white text-lg font-semibold mb-2">Tech Stack</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  React → Node.js → MongoDB
                </p>
              </div>

              <div>
                <h2 className="text-white text-lg font-semibold mb-2">Color Identity</h2>
                <div className="flex space-x-2">
                  <div className="w-12 h-6 bg-green-400 rounded"></div>
                  <div className="w-12 h-6 bg-blue-400 rounded"></div>
                  <div className="w-12 h-6 bg-white rounded"></div>
                </div>
              </div>
            </div>

            <div className="px-4">
              <h2 className="text-white text-lg font-semibold mb-3">Project Screenshots</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Project screenshot ${index + 1}`}
                    className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity w-full h-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContentArea>
    </div>
  )
}

export default ProjectDetails