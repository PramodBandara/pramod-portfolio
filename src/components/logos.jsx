import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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

  const itemData = Array.from({ length: 12 }, (_, i) => ({
    img: `${import.meta.env.BASE_URL}logo${i + 1}.png`,
    title: `Logo ${i + 1}`,
  }));

  return (
    <div className="logos" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: window.innerWidth <= 768 ? "20px" : "40px"
    }}>
      <h2 style={{ fontSize: window.innerWidth <= 768 ? "32px" : "64px" }}>Logos</h2>
      <div ref={imgRef} style={{ width: "100%", maxWidth: "1000px" }}>
        <ImageList
          sx={{ width: 1000, maxWidth: "100%", height: "auto" }}
          variant="woven"
          cols={4}
          gap={8}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
export default Logos;