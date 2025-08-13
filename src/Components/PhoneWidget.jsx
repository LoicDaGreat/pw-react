import { Phone } from 'lucide-react';

const PhoneWidget = () => {
  return (
    <div>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <div className="transform -rotate-90">
            <span className="text-white tracking-widest">
                +27 67 769 4520
            </span>
        </div>
        <div onClick={() => window.open('tel:+27677624520', '_self')}>
            <Phone />
        </div>
      </div>
    </div>
  );
};

export default PhoneWidget;