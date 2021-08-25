import React, {useState} from 'react';
import Style from '../style/Pixels.module.css';

const Pixel = ({color}) => {
  const [pixelColor, setPixelColor] = useState('#fff');
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);
  const applyColorHandler = () => {
    setPixelColor(color);
    setCanChangeColor(false);
  }

  const onChangeColorHandler = () => {
    setOldColor(pixelColor);
    setPixelColor(color);
  }

  const resetHandler = () => {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true)
  }
  return (
    <div className={Style.pixel} style={{backgroundColor: pixelColor}} onClick={applyColorHandler} onMouseEnter={onChangeColorHandler} onMouseLeave={resetHandler}></div>
  )
}

export default Pixel;