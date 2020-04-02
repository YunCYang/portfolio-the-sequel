const cursorRing = () => {
  let cursorX = 0;
  let cursorY = 0;
  let ringX = 0;
  let ringY = 0;
  let pageYOffset = 0;
  const ring = document.getElementsByClassName('pointer-ring');

  window.onmousemove = e => {
    cursorX = e.clientX;
    cursorY = e.clientY;
  };

  window.onscroll = () => {
    pageYOffset = window.pageYOffset;
  };

  const updateCursorLocX = () => {
    return cursorX;
  };

  const updateCursorLocY = () => {
    return cursorY + pageYOffset;
  };

  const trace = (ori, pos, per) => (1 - per) * ori + per * pos;

  const renderRing = () => {
    ringX = trace(ringX, updateCursorLocX(), 0.2);
    ringY = trace(ringY, updateCursorLocY(), 0.2);
    ring[0].style.transform = `translate(${ringX - 10}px, ${ringY - 10}px)`;
    if (ringX !== 0 && ringY !== 0) ring[0].style.display = 'block';
    requestAnimationFrame(renderRing);
  };
  requestAnimationFrame(renderRing);
};

export default cursorRing;
