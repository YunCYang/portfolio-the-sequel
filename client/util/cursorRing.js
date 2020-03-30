const cursorRing = () => {
  let cursorX = 0;
  let cursorY = 0;
  let ringX = 0;
  let ringY = 0;
  // let mouseDown = false;
  const ring = document.getElementsByClassName('pointer-ring');

  window.onmousemove = e => {
    cursorX = e.clientX;
    cursorY = e.clientY;
  };

  // window.onmousedown = e => {
  //   mouseDown = true;
  // };

  // window.onmouseup = e => {
  //   mouseDown = false;
  // };

  const trace = (ori, pos, per) => (1 - per) * ori + per * pos;

  const renderRing = () => {
    ringX = trace(ringX, cursorX, 0.15);
    ringY = trace(ringY, cursorY, 0.15);
    ring[0].style.transform = `translate(${ringX - 10}px, ${ringY - 10}px)`;
    if (ringX !== 0 && ringY !== 0) ring[0].style.display = 'block';
    // console.log(ring[0].style.cursor);
    requestAnimationFrame(renderRing);
  };
  requestAnimationFrame(renderRing);
};

export default cursorRing;
