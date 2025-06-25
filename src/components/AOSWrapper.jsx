import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease',
      once: false,
      mirror: true,
    });

    return () => {
      AOS.refresh(); 
    };
  }, []);

  return children;
};

export default AOSWrapper;
