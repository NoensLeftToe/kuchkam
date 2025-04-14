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
    <div className="relative bg-black flex justify-center items-center h-[1200px]">
      <img 
        src="/car.png" 
        className="w-[1000px] h-auto"
        style={{
            transform: `translateY(-${scrollY * 0.3}px)`,
          }} />

     </div>
  );
};

export default FooterBody;
