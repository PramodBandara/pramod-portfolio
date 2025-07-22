import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Logos() {
  const imgRef = useRef();

  useEffect(() => {
    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="logos" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: window.innerWidth <= 768 ? "20px" : "40px"
    }}>
      <h2 style={{ fontSize: window.innerWidth <= 768 ? "32px" : "64px" }}>Logos</h2>
      <div
        ref={imgRef}
        className="logo"
        style={{
          width: window.innerWidth <= 768 ? "100%" : "1000px",
          height: window.innerWidth <= 768 ? "400px" : "600px", // Approx 16:9 aspect ratio
          backgroundImage: `url(${import.meta.env.BASE_URL}logos.png)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      />
    </div>
  );
}
export default Logos;