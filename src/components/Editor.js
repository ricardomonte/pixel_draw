import React, {useState} from 'react';
import { CirclePicker } from 'react-color';
import Drawing from './Drawing';
import Style from '../style/Editor.module.css';

const Editor = () => {
  const [panelW, setPanelW] = useState(16);
  const [panelH, setPanelH] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawing, setHideDrawing] = useState(true);
  const [buttonText, setButtonText] = useState('Draw');
  const [selectColor, setSelectColor] = useState('#f44336');

  const initialDrawing = () => {
    setHideOptions(!hideOptions)
    setHideDrawing(!hideDrawing)

    buttonText === 'Draw' ? setButtonText('reset') : setButtonText('Draw')
  }

  const changeColorHandle = (color) => {
    setSelectColor(color.hex)
  }

  return (
    <div className={Style.container}>
      <h1>Editor</h1>
      {hideDrawing && <h2>Enter Dimensions</h2>}
      {hideDrawing &&      
        <div className={Style.containerInputs}>
          <div className={Style.dimension}>
            <input type='number' defaultValue={panelW} onChange={(e) => setPanelW(e.target.value)} />
            <span>Width</span>
          </div>
          <div className={Style.dimension}>
            <input type='number' defaultValue={panelH} onChange={(e) => setPanelH(e.target.value)} />
            <span>Heigth</span>
          </div>
        </div>
      }
      <button onClick={initialDrawing} className={Style.btn}>{buttonText}</button>
      {hideOptions && <CirclePicker color={selectColor} onChangeComplete={changeColorHandle} /> }
      {hideOptions && <Drawing width={panelW} heigth={panelH} color={selectColor} /> }
    </div>
  )
}

export default Editor;