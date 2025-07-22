import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

function Header() {
  gsap.registerPlugin(ScrollTrigger);

  const [isProjectActive, setIsProjectActive] = useState(false);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const baseFontSize = isMobile ? '6vw' : '10vw';
  const secondaryFontSize = isMobile ? '3vw' : '5vw';
  const iconHeight = isMobile ? '4vw' : '6vw';
  const iconMarginRight = '1vw';

  const containerStyle = {
    backgroundImage: `url(${import.meta.env.BASE_URL}${isMobile ? 'mars-mobile.png' : 'mars.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    padding: isMobile ? '20px' : '40px',
  };

  const sectionStyle = {
    height: '100vh',
    padding: isMobile ? '20px' : '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'thin',
    fontFamily: 'Alumni Sans Pinstripe, sans-serif',
    gap: isMobile ? '20px' : '40px'
  };

  const aboutRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top+=800px bottom",
      },
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "back.out(1.7)",
      scale: 0.8
    });

    // Staggered fade-up for project list items
    gsap.utils.toArray(projectsRef.current.querySelectorAll("li")).forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out"
      });
    });

    // Animate the project section container as well (optional, can keep for overall effect)
    gsap.from(projectsRef.current, {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
      },
      opacity: 0,
      rotateY: 45,
      duration: 1,
      ease: "power4.out"
    });

    // Entrance scale and fade animation for Skills items
    gsap.utils.toArray(skillsRef.current.querySelectorAll("p")).forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        delay: i * 0.05,
        ease: "back.out(1.5)"
      });
    });

    // Animate the skills section container as well (optional, can keep for overall effect)
    gsap.from(skillsRef.current, {
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out"
    });

    // Fade and rotate animation for the contact icons (anchor tags)
    gsap.from(contactRef.current.querySelectorAll("a"), {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 85%",
      },
      opacity: 0,
      rotate: 10,
      y: 20,
      duration: 1,
      ease: "expo.out",
      stagger: 0.2
    });

    // Animate the contact section container as well (optional, can keep for overall effect)
    gsap.from(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "expo.out"
    });

    ScrollTrigger.create({
      trigger: projectsRef.current,
      start: "top 80%",
      onEnter: () => setIsProjectActive(true),
      onLeaveBack: () => setIsProjectActive(false),
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="alumni-sans-pinstripe-regular">
      <div style={containerStyle}>
        <section>
          <div ref={aboutRef} style={sectionStyle}>
            <h1 style={{ color: '#ffffff', fontSize: baseFontSize, margin: 0 }}>About Me</h1>
            <p style={{ fontSize: secondaryFontSize, margin: 0 }}>I love coding, design, and building web apps with Laravel and React.</p>
          </div>
        </section>

        <section>
          <div ref={projectsRef} style={sectionStyle}>
            <h2 style={{ color: '#ffffff', fontSize: baseFontSize, margin: 0 }}>My Projects</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ fontSize: secondaryFontSize, margin: 0 }}>
                <img src="shopify.png" alt="Shopify Logo" style={{ height: iconHeight, marginRight: iconMarginRight, verticalAlign: 'middle', maxWidth: '100%' }} />
                MySQL
               using  E-Commerce App \ Create a custom web application with ( <img src="react.svg" alt="React Logo" style={{ height: iconHeight, marginRight: iconMarginRight, verticalAlign: 'middle', maxWidth: '100%' }} /> + <img src="Laravel.svg" alt="Laravel Logo" style={{ height: iconHeight, marginRight: iconMarginRight, verticalAlign: 'middle', maxWidth: '100%' }} /> + )
              </li>
              <li style={{ fontSize: secondaryFontSize, margin: 0 }}>
                <img src="chatbot.gif" alt="Chatbot" style={{ height: iconHeight, marginRight: iconMarginRight, verticalAlign: 'middle', maxWidth: '100%' }} />
                Chatbot (React + AI)
              </li>
             
              <li style={{ fontSize: secondaryFontSize, margin: 0 }}>Flashbats.shop</li>
              <li style={{ fontSize: secondaryFontSize, margin: 0 }}>stacklyne</li>
            </ul>
          </div>
        </section>

        <section>
          <div ref={skillsRef} style={{ ...sectionStyle, marginTop: isMobile ? '30vw' : '500px', marginBottom: isMobile ? '24vw' : '400px' }}>
            <h2 style={{ color: '#ffffff', fontSize: '8vw', margin: 0 }}>Skills</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '4vw' : '10vw', flexWrap: 'wrap' }}>
              <p style={{ fontSize: secondaryFontSize, maxWidth: '100%', margin: 0 }}>
                <img src="react.svg" alt="React Logo" style={{ height: iconHeight, marginRight: iconMarginRight, verticalAlign: 'middle', maxWidth: '100%' }} />
                React
              </p>
              <p style={{ fontSize: secondaryFontSize, maxWidth: '100%', margin: 0 }}>
                <img src="Laravel.svg" alt="Laravel Logo" style={{ height: iconHeight, marginRight: iconMarginRight, verticalAlign: 'middle', maxWidth: '100%' }} />
                Laravel
              </p>
              <p style={{ fontSize: secondaryFontSize, maxWidth: '100%', margin: 0 }}>
                <img src="PHP.svg" alt="PHP Logo" style={{ height: iconHeight, marginRight: iconMarginRight, verticalAlign: 'middle', maxWidth: '100%' }} />
                PHP
              </p>
              <p style={{ fontSize: secondaryFontSize, maxWidth: '100%', margin: 0 }}>
                <img src="MySQL.svg" alt="MySQL Logo" style={{ height: iconHeight, marginRight: iconMarginRight, verticalAlign: 'middle', maxWidth: '100%' }} />
                MySQL
              </p>
              <p style={{ fontSize: secondaryFontSize, maxWidth: '100%', margin: 0 }}>
                <img src="java.svg" alt="JavaScript Logo" style={{ height: iconHeight, marginRight: iconMarginRight, verticalAlign: 'middle', maxWidth: '100%' }} />
                JavaScript
              </p>
            </div>
          </div>
        </section>

        <section>
          <div ref={contactRef} style={sectionStyle}>
            <h2 style={{ color: '#ffffff', fontSize: baseFontSize, margin: 0 }}>Contact</h2>
            <p style={{ fontSize: secondaryFontSize, margin: 0 }}>
              <a
                href="https://wa.me/94711544875"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                <SendIcon style={{ fontSize: secondaryFontSize, verticalAlign: 'middle' }} /> Whatsapp
              </a>
            </p>
            <p style={{ fontSize: secondaryFontSize, margin: 0 }}>
              <a
                href="mailto:pramodxxpc@gmail.com"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                <EmailIcon style={{ fontSize: secondaryFontSize, verticalAlign: 'middle' }} /> Email \
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Header;