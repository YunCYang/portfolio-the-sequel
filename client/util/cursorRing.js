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
    ringX = trace(ringX, cursorX, 0.2);
    ringY = trace(ringY, cursorY, 0.2);
    ring[0].style.transform = `translate(${ringX - 21}px, ${ringY - 21}px)`;
    requestAnimationFrame(renderRing);
  };
  requestAnimationFrame(renderRing);
};

export default cursorRing;
