import React from 'react';
import Pixel from './Pixel';

const Row = ({width, color}) => {
  let pix = []
  for(let i = 0; i < width; i++ ) {
    pix.push(<Pixel key={i} color={color} />)
  }
  return (
    <div style={{display: 'flex', width: 'fit-content'}}>{pix}</div>
  )
}

export default Row;