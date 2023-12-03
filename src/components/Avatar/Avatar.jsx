import React from 'react'

const Avatar = ( { children, backgroundColor, color, px, py, borderRadius, fontSize, textAlign} ) => {
  const style = {
    backgroundColor,
    color : color || 'black',
    padding : `${px} ${py}`,
    borderRadius,
    fontSize,
    textAlign : 'center',
    margin : '0px 10px'
  }


  return (
    <div style={style}> { children } </div>
  )
}

export default Avatar