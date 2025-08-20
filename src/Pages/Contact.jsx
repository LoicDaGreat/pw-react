import { useState } from 'react';
import ContentArea from '../Components/ContentArea';
import Street from '../assets/background/Street.jpg';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <ContentArea>
         <div className="flex h-screen">

          <div className="w-1/2  bg-gray-900 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="min-h-screen flex items-center justify-center p-6">
                <div className="w-full max-w-md">

                  <div className="mb-12">
                    <h1 className="text-white text-4xl font-bold leading-tight mb-6">
                      LET'S BLOSSOM YOUR IDEA
                    </h1>
                    <p className="text-gray-300 text-lg">
                      Fill in the form below to book a consultation with me.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="block text-white text-lg font-medium mb-3">
                        Name
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInput}
                        placeholder="John Smith"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white text-lg placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-white transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <div className="block text-white text-lg font-medium mb-3">
                        Email
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInput}
                        placeholder="you@example.com"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white text-lg placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-white transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <div className="block text-white text-lg font-medium mb-3">
                        Phone number
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInput}
                        placeholder="+27 (XX) XXX XXXX"
                        className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white text-lg placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-white transition-colors duration-200"
                      />
                    </div>

                    <div className="pt-8">
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-transparent border-2 border-white text-white font-semibold text-lg py-4 px-8 hover:bg-white hover:text-black HOVER:border-black transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                      >
                        CONTACT ME
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="w-1/2 bg-transparent flex">
            <img src={Street} alt="Wilfried. Trusted Dev" className="w-full object-cover"/>
          </div>
        </div>
      </ContentArea>
    </div>
  )
}

export default Contact