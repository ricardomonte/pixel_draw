import React, {useRef} from 'react';
import Row from './Row';
import { exportComponentAsPNG } from 'react-component-export-image';

const Drawing = ({width, heigth, color}) => {
  const panelRef = useRef();
  let rows = []
  for(let i = 0; i < heigth; i++) {
    rows.push(<Row key={i} width={width} color={color} />)
  }
  return(
    <>
      <div ref={panelRef}>
        {rows}
      </div>
      <button onClick={() => exportComponentAsPNG(panelRef)}>Export PNG</button>
    </>
  )
}

export default Drawing;