import { useRef, useEffect, useState } from 'react';

function ps() {
  const plug6Ref = useRef(null);
  const plug1Ref = useRef(null);
  const marsRef = useRef(null);
  const skyRef = useRef(null);
  const plug4Ref = useRef(null);
  const plug7Ref = useRef(null);
  const plug3Ref = useRef(null);
  const moonRef = useRef(null);
  const plug5Ref = useRef(null);
  const plug2Ref = useRef(null);
  const subjectRef = useRef(null);
  const plug5_1Ref = useRef(null);
  const plug4_1Ref = useRef(null);
  const landRef = useRef(null);
  const bgRef = useRef(null);

  const [linePos, setLinePos] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [lineMarsToPlug6, setLineMarsToPlug6] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug6ToSky, setLinePlug6ToSky] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug6ToPlug4, setLinePlug6ToPlug4] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug6ToPlug7, setLinePlug6ToPlug7] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [lineSkyToPlug3, setLineSkyToPlug3] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug1ToMoon, setLinePlug1ToMoon] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug1ToPlug4, setLinePlug1ToPlug4] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug4ToPlug5, setLinePlug4ToPlug5] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug5ToPlug2, setLinePlug5ToPlug2] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug2ToSubject, setLinePlug2ToSubject] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug7ToPlug5_1, setLinePlug7ToPlug5_1] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug5_1ToPlug4_1, setLinePlug5_1ToPlug4_1] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug4_1ToLand, setLinePlug4_1ToLand] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePlug3ToBg, setLinePlug3ToBg] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [lineBgToLand, setLineBgToLand] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

  useEffect(() => {
    const updateLine = () => {
      const p6 = plug6Ref.current?.getBoundingClientRect();
      const p1 = plug1Ref.current?.getBoundingClientRect();
      const mars = marsRef.current?.getBoundingClientRect();
      const sky = skyRef.current?.getBoundingClientRect();
      const plug4 = plug4Ref.current?.getBoundingClientRect();
      const plug7 = plug7Ref.current?.getBoundingClientRect();
      const plug3 = plug3Ref.current?.getBoundingClientRect();
      const moon = moonRef.current?.getBoundingClientRect();
      const plug5 = plug5Ref.current?.getBoundingClientRect();
      const plug2 = plug2Ref.current?.getBoundingClientRect();
      const subject = subjectRef.current?.getBoundingClientRect();
      const plug5_1 = plug5_1Ref.current?.getBoundingClientRect();
      const plug4_1 = plug4_1Ref.current?.getBoundingClientRect();
      const land = landRef.current?.getBoundingClientRect();
      const bg = bgRef.current?.getBoundingClientRect();

      if (p6 && p1) {
        const x1 = p6.left + p6.width / 2;
        const y1 = p6.top + p6.height / 2;
        const x2 = p1.left + p1.width / 2;
        const y2 = p1.top + p1.height / 2;
        setLinePos({ x1, y1, x2, y2 });
      }

      if (mars && p6) {
        const x1 = mars.left + mars.width / 2;
        const y1 = mars.top + mars.height / 2;
        const x2 = p6.left + p6.width / 2;
        const y2 = p6.top + p6.height / 2;
        setLineMarsToPlug6({ x1, y1, x2, y2 });
      }

      if (p6 && sky) {
        setLinePlug6ToSky({
          x1: p6.left + p6.width / 2,
          y1: p6.top + p6.height / 2,
          x2: sky.left + sky.width / 2,
          y2: sky.top + sky.height / 2,
        });
      }

      if (p6 && plug4) {
        setLinePlug6ToPlug4({
          x1: p6.left + p6.width / 2,
          y1: p6.top + p6.height / 2,
          x2: plug4.left + plug4.width / 2,
          y2: plug4.top + plug4.height / 2,
        });
      }

      if (p6 && plug7) {
        setLinePlug6ToPlug7({
          x1: p6.left + p6.width / 2,
          y1: p6.top + p6.height / 2,
          x2: plug7.left + plug7.width / 2,
          y2: plug7.top + plug7.height / 2,
        });
      }

      if (sky && plug3) {
        setLineSkyToPlug3({
          x1: sky.left + sky.width / 2,
          y1: sky.top + sky.height / 2,
          x2: plug3.left + plug3.width / 2,
          y2: plug3.top + plug3.height / 2,
        });
      }

      if (p1 && moon) {
        setLinePlug1ToMoon({
          x1: p1.left + p1.width / 2,
          y1: p1.top + p1.height / 2,
          x2: moon.left + moon.width / 2,
          y2: moon.top + moon.height / 2,
        });
      }

      if (p1 && plug4) {
        setLinePlug1ToPlug4({
          x1: p1.left + p1.width / 2,
          y1: p1.top + p1.height / 2,
          x2: plug4.left + plug4.width / 2,
          y2: plug4.top + plug4.height / 2,
        });
      }

      if (plug4 && plug5) {
        setLinePlug4ToPlug5({
          x1: plug4.left + plug4.width / 2,
          y1: plug4.top + plug4.height / 2,
          x2: plug5.left + plug5.width / 2,
          y2: plug5.top + plug5.height / 2,
        });
      }

      if (plug5 && plug2) {
        setLinePlug5ToPlug2({
          x1: plug5.left + plug5.width / 2,
          y1: plug5.top + plug5.height / 2,
          x2: plug2.left + plug2.width / 2,
          y2: plug2.top + plug2.height / 2,
        });
      }

      if (plug2 && subject) {
        setLinePlug2ToSubject({
          x1: plug2.left + plug2.width / 2,
          y1: plug2.top + plug2.height / 2,
          x2: subject.left + subject.width / 2,
          y2: subject.top + subject.height / 2,
        });
      }

      if (plug7 && plug5_1) {
        setLinePlug7ToPlug5_1({
          x1: plug7.left + plug7.width / 2,
          y1: plug7.top + plug7.height / 2,
          x2: plug5_1.left + plug5_1.width / 2,
          y2: plug5_1.top + plug5_1.height / 2,
        });
      }

      if (plug5_1 && plug4_1) {
        setLinePlug5_1ToPlug4_1({
          x1: plug5_1.left + plug5_1.width / 2,
          y1: plug5_1.top + plug5_1.height / 2,
          x2: plug4_1.left + plug4_1.width / 2,
          y2: plug4_1.top + plug4_1.height / 2,
        });
      }

      if (plug4_1 && land) {
        setLinePlug4_1ToLand({
          x1: plug4_1.left + plug4_1.width / 2,
          y1: plug4_1.top + plug4_1.height / 2,
          x2: land.left + land.width / 2,
          y2: land.top + land.height / 2,
        });
      }

      if (plug3 && bg) {
        setLinePlug3ToBg({
          x1: plug3.left + plug3.width / 2,
          y1: plug3.top + plug3.height / 2,
          x2: bg.left + bg.width / 2,
          y2: bg.top + bg.height / 2,
        });
      }

      if (bg && land) {
        setLineBgToLand({
          x1: bg.left + bg.width / 2,
          y1: bg.top + bg.height / 2,
          x2: land.left + land.width / 2,
          y2: land.top + land.height / 2,
        });
      }
    };

    updateLine();
    window.addEventListener('resize', updateLine);
    window.addEventListener('scroll', updateLine);
    return () => {
      window.removeEventListener('resize', updateLine);
      window.removeEventListener('scroll', updateLine);
    };
  }, []);

  return (
    <div className="ps" style={{ position: 'relative', width: '100%', height: '100vh', marginTop: '20px' }}>
      <svg style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }}>
        <line
          x1={lineMarsToPlug6.x1}
          y1={lineMarsToPlug6.y1}
          x2={lineMarsToPlug6.x2}
          y2={lineMarsToPlug6.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePos.x1}
          y1={linePos.y1}
          x2={linePos.x2}
          y2={linePos.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug6ToSky.x1}
          y1={linePlug6ToSky.y1}
          x2={linePlug6ToSky.x2}
          y2={linePlug6ToSky.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug6ToPlug4.x1}
          y1={linePlug6ToPlug4.y1}
          x2={linePlug6ToPlug4.x2}
          y2={linePlug6ToPlug4.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug6ToPlug7.x1}
          y1={linePlug6ToPlug7.y1}
          x2={linePlug6ToPlug7.x2}
          y2={linePlug6ToPlug7.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={lineSkyToPlug3.x1}
          y1={lineSkyToPlug3.y1}
          x2={lineSkyToPlug3.x2}
          y2={lineSkyToPlug3.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug1ToMoon.x1}
          y1={linePlug1ToMoon.y1}
          x2={linePlug1ToMoon.x2}
          y2={linePlug1ToMoon.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug1ToPlug4.x1}
          y1={linePlug1ToPlug4.y1}
          x2={linePlug1ToPlug4.x2}
          y2={linePlug1ToPlug4.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug4ToPlug5.x1}
          y1={linePlug4ToPlug5.y1}
          x2={linePlug4ToPlug5.x2}
          y2={linePlug4ToPlug5.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug5ToPlug2.x1}
          y1={linePlug5ToPlug2.y1}
          x2={linePlug5ToPlug2.x2}
          y2={linePlug5ToPlug2.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug2ToSubject.x1}
          y1={linePlug2ToSubject.y1}
          x2={linePlug2ToSubject.x2}
          y2={linePlug2ToSubject.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug7ToPlug5_1.x1}
          y1={linePlug7ToPlug5_1.y1}
          x2={linePlug7ToPlug5_1.x2}
          y2={linePlug7ToPlug5_1.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug5_1ToPlug4_1.x1}
          y1={linePlug5_1ToPlug4_1.y1}
          x2={linePlug5_1ToPlug4_1.x2}
          y2={linePlug5_1ToPlug4_1.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug4_1ToLand.x1}
          y1={linePlug4_1ToLand.y1}
          x2={linePlug4_1ToLand.x2}
          y2={linePlug4_1ToLand.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={linePlug3ToBg.x1}
          y1={linePlug3ToBg.y1}
          x2={linePlug3ToBg.x2}
          y2={linePlug3ToBg.y2}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={lineBgToLand.x1}
          y1={lineBgToLand.y1}
          x2={lineBgToLand.x2}
          y2={lineBgToLand.y2}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <img
        ref={marsRef}
        src={`${import.meta.env.BASE_URL}mars.png`}
        alt="mars"
        style={{
          position: 'absolute',
          top: '2vh',
          left: '5vw',
          width: '12vw',
          maxWidth: '180px'
        }}
      />
      <img
        ref={plug6Ref}
        src={`${import.meta.env.BASE_URL}plug6.png`}
        alt="plug6"
        style={{
          position: 'absolute',
          top: '25vh',
          left: '5vw',
          width: '10vw',
          maxWidth: '144px'
        }}
      />
      <img
        ref={skyRef}
        src={`${import.meta.env.BASE_URL}sky.png`}
        alt="sky"
        style={{
          position: 'absolute',
          top: '70vh',
          left: '0vw',
          width: '12vw',
          maxWidth: '180px'
        }}
      />
      <img
        ref={plug3Ref}
        src={`${import.meta.env.BASE_URL}plug3.png`}
        alt="plug3"
        style={{
          position: 'absolute',
          top: '65vh',
          left: '13vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />
      <img
        ref={bgRef}
        src={`${import.meta.env.BASE_URL}bg.png`}
        alt="bg"
        style={{
          position: 'absolute',
          top: '80vh',
          left: '22vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />
      <img
        ref={plug7Ref}
        src={`${import.meta.env.BASE_URL}plug7.png`}
        alt="plug7"
        style={{
          position: 'absolute',
          top: '55vh',
          left: '22vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />
      <img
        ref={plug5Ref}
        src={`${import.meta.env.BASE_URL}plug5.png`}
        alt="plug5"
        style={{
          position: 'absolute',
          top: '50vh',
          left: '32vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />
      <img
        ref={plug4Ref}
        src={`${import.meta.env.BASE_URL}plug4.png`}
        alt="plug4"
        style={{
          position: 'absolute',
          top: '60vh',
          left: '42vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />

      <img
        ref={plug4_1Ref}
        src={`${import.meta.env.BASE_URL}plug4.1.png`}
        alt="plug4"
        style={{
          position: 'absolute',
          top: '10vh',
          left: '42vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />
      <img
        ref={landRef}
        src={`${import.meta.env.BASE_URL}land.png`}
        alt="land"
        style={{
          position: 'absolute',
          top: '70vh',
          left: '52vw',
          width: '12vw',
          maxWidth: '180px'
        }}
      />
      <img
        ref={moonRef}
        src={`${import.meta.env.BASE_URL}moon.png`}
        alt="moon"
        style={{
          position: 'absolute',
          top: '2vh',
          left: '60vw',
          width: '10vw',
          maxWidth: '144px'
        }}
      />
      <img
        ref={plug1Ref}
        src={`${import.meta.env.BASE_URL}plug1.png`}
        alt="plug1"
        style={{
          position: 'absolute',
          top: '25vh',
          left: '60vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />
      <img
        ref={subjectRef}
        src={`${import.meta.env.BASE_URL}subject.png`}
        alt="subject"
        style={{
          position: 'absolute',
          top: '10vh',
          right: '5vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />
      <img
        ref={plug2Ref}
        src={`${import.meta.env.BASE_URL}plug2.png`}
        alt="plug2"
        style={{
          position: 'absolute',
          top: '40vh',
          right: '5vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />
      <img
        ref={plug5_1Ref}
        src={`${import.meta.env.BASE_URL}plug5.1.png`}
        alt="plug5-2"
        style={{
          position: 'absolute',
          top: '45vh',
          left: '48vw',
          width: '8vw',
          maxWidth: '120px'
        }}
      />
    </div>
  );
}

export default ps;