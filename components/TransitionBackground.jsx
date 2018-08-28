import React from 'react'

const Background = () => (
  <div
    style={{
      // height: height,
      display: 'flex',
      minWidth: '100vw',
      minHeight: '100vh',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(/static/Seal_Blue.jpg)`,
      backgroundRepeat: 'no-repeat',
      zIndex: -1000,
    }}
  />
)

export default Background