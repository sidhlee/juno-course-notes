import { useEffect, useState } from 'react';
import MouseTracker from './MouseTracker';
import './useeffect-styles.scss';

const UseEffectAndLifecycle = () => {
  console.log('[App]');
  const [mouseTrackerMounted, setMouseTrackerMounted] = useState(false);
  const [count, setCount] = useState(0);
  const [pictures, setPictures] = useState([]);
  const [oneCoolPic, setOneCoolPic] = useState();

  useEffect(() => {
    console.log('[App] mounted');
    fetch('https://picsum.photos/v2/list?limit=10')
      .then((response) => response.json())
      .then((pictures) => {
        setPictures(pictures);
        const randomIndex = Math.floor(Math.random() * pictures.length);
        setOneCoolPic(pictures[randomIndex]);
      });
    return () => console.log('unmount');
  }, []);

  useEffect(() => {
    console.log('[App] updated: count | loggedIn | pictures');
    const randomIndex = Math.floor(Math.random() * pictures.length);
    setOneCoolPic(pictures[randomIndex]);
  }, [count, mouseTrackerMounted, pictures]);

  return (
    <div>
      <h1>useEffect and Lifecycle </h1>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => setMouseTrackerMounted((v) => !v)}
        >
          {mouseTrackerMounted
            ? 'Unmount Mouse Tracker'
            : 'Mount Mouse Tracker'}
        </button>{' '}
        <button className="btn" onClick={() => setCount((c) => c + 1)}>
          {count} Clicks!
        </button>
      </div>
      {mouseTrackerMounted && <MouseTracker />}
      <div>
        <div className="imgContainer">
          {oneCoolPic ? (
            <img src={oneCoolPic.download_url} alt="" />
          ) : (
            'Loading cool pic...'
          )}
        </div>
      </div>
    </div>
  );
};

export default UseEffectAndLifecycle;
