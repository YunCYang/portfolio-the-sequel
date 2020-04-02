import React from 'react';

const Intro = () => {
  const text = [
    'I am a web developer',
    'I am a software engineer',
    'I design and develope full stack applications',
    'I design and develope websites'
  ];
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [isReadyForNextText, setIsReadyForNextText] = React.useState(true);
  const [currentText, setCurrentText] = React.useState(text[0]);
  const [textMode, setTextMode] = React.useState(true);
  const [minText, setMinText] = React.useState('');

  const generateRandomNum = () => Math.floor(Math.random() * (text.length - 1));

  const chooseNextText = (index, arr) => {
    const randomNum = generateRandomNum();
    if (index + randomNum >= arr.length) return index + randomNum - arr.length;
    else return index + randomNum;
  };

  const generateMinText = (arr1, arr2) => {
    const minArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) break;
      else minArr.push(arr1[i]);
    }
    return minArr;
  };

  React.useEffect(
    () => {
      let option = null;
      if (isReadyForNextText) {
        const nextIndex = chooseNextText(currentTextIndex, text);
        setCurrentTextIndex(nextIndex);
        setIsReadyForNextText(false);
        setMinText(generateMinText(currentText, text[nextIndex]));
        setTextMode(false);
      } else {
        if (!textMode) {
          if (currentText.length === minText.length) {
            setTextMode(true);
            option = 0;
          } else option = 1;
        } else {
          if (currentText.length === text[currentTextIndex].length) option = 2;
          else option = 3;
        }
      }
      if (option) {
        const timer = setTimeout(
          () => {
            if (option === 1) {
              const tempArr = [...currentText];
              tempArr.pop();
              setCurrentText(tempArr);
            } else if (option === 2) {
              setIsReadyForNextText(true);
            } else if (option === 3) {
              const tempArr = [...currentText];
              tempArr.push(text[currentTextIndex][tempArr.length]);
              setCurrentText(tempArr);
            }
          }, option % 2 === 1 ? 60 : 3500
        );
        return () => clearTimeout(timer);
      }
    }
  );

  return (
    <div className='intro'>
      <div className="intro-name">
        <h1>YUN C YANG</h1>
        <span>{currentText}</span>
      </div>
    </div>
  );
};

export default Intro;
