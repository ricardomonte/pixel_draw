import React, { useState } from 'react';
import {Typography, Button} from '@material-ui/core';
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
  const [addColor, setAddColor] = useState(null);

  const initialDrawing = () => {
    setHideOptions(!hideOptions)
    setHideDrawing(!hideDrawing)

    buttonText === 'Draw' ? setButtonText('reset') : setButtonText('Draw')
  }

  const changeColorHandle = (color) => {
    setSelectColor(color.hex)
  }

  const addColorToPallet = () => {
    let transitoryColor = CirclePicker.defaultProps.colors
    transitoryColor.push(addColor)
    CirclePicker.defaultProps.colors = transitoryColor
    setAddColor("")
    // forceUpdate()
  }
  
  return (
    <div className={Style.container}>
      <Typography variant='h3' component="h1" gutterBottom color='secondary'>Pixel Creator</Typography>
      {hideDrawing && <Typography variant='h3' gutterBottom>Enter Dimensions</Typography>}
      {hideDrawing &&      
        <div className={Style.containerInputs}>
          <div className={Style.dimension}>
            <input className={Style.inputs} type='number' defaultValue={panelW} onChange={(e) => setPanelW(e.target.value)} />
            <Typography variant="body1">Width</Typography>
          </div>
          <div className={Style.dimension}>
            <input className={Style.inputs} type='number' defaultValue={panelH} onChange={(e) => setPanelH(e.target.value)} />
            <Typography variant="body1">Heigth</Typography>
          </div>
        </div>
      }
      <Button variant="outlined" color="secondary" size="large" onClick={initialDrawing} className={Style.btn}>{buttonText}</Button>
      {hideOptions && <CirclePicker color={selectColor} onChangeComplete={changeColorHandle} /> }
      {hideOptions && <input type='text' value={addColor} onChange={(e) => setAddColor(e.target.value)} />}
      {hideOptions && <Button type="button" variant="outlined" color="secondary" size="large" onClick={addColorToPallet} className={Style.btn}>Add color</Button>}
      {hideOptions && <Drawing width={panelW} heigth={panelH} color={selectColor} /> }
    </div>
  )
}

export default Editor;