import { useEffect, useState } from 'react';

const MouseTracker = () => {
  console.log('[MouseTracker]');

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('[MouseTracker] mounted');
    const handleMouseMove = (e) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      console.log('[MouseTracker] unmounted');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const { x, y } = coords;

  return (
    <div className="mouseTracker">
      <ul>
        <li>X:{x}</li>
        <li>Y:{y}</li>
      </ul>
      <span
        className="cursor"
        style={{
          transform: `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`,
        }}
      ></span>
    </div>
  );
};

export default MouseTracker;
