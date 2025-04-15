import React, { useState, useEffect } from 'react'

const FooterBody = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative  flex justify-center items-start pt-10 h-[700px] overflow-hidden">
      <img
        src="/car.png"
        alt="Car"
        className="w-[900px] h-auto transition-transform duration-200"
        style={{
          transform: `translateY(-${scrollY * 3.03}px)`,
          marginTop: '-80px' // pull the car closer to navbar
        }}
      />
    </div>
  );
};

export default FooterBody;
