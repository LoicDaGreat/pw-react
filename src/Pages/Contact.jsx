import { useState } from 'react';
import ContentArea from '../Components/ContentArea';
import Street from '../assets/background/Street.jpg';

const Contact = () => {

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 4) {
      newErrors.name = 'Name must be at least 4 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const SanitizedPhone = formData.phone.replace(/[^\d+]/g, '');
    const digitCount = SanitizedPhone.replace(/^\+/, '').length;

    if (digitCount < 7 || digitCount > 15) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (digitCount < 7 || digitCount > 15) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);

    try {
      console.log('Submitted:', formData);
      
      setFormData({ name: '', email: '', phone: '' });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block text-white text-lg font-medium mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInput}
                        placeholder="Enter your name"
                        className={`w-full bg-transparent border-0 border-b-2 text-white text-lg placeholder-gray-500 py-3 px-0 focus:outline-none transition-colors duration-200 ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-white'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white text-lg font-medium mb-3">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInput}
                        placeholder="Enter your email"
                        className={`w-full bg-transparent border-0 border-b-2  text-white text-lg placeholder-gray-500 py-3 px-0 focus:outline-none transition-colors duration-200 ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white text-lg font-medium mb-3">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInput}
                        placeholder="+27 (XX) XXX XXXX"
                        className={`w-full bg-transparent border-0 border-b-2 text-white text-lg placeholder-gray-500 py-3 px-0 focus:outline-none transition-colors duration-200 ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-white'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                      )}
                    </div>

                    <div className="pt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-transparent border-2 border-white text-white font-semibold text-lg py-4 px-8 hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:transform-none"
                      >
                        {isSubmitting ? 'SENDING...' : 'CONTACT ME'}
                      </button>
                    </div>
                  </form>
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