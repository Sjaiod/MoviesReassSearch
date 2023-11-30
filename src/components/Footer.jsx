import React from 'react'

const Footer = () => {
    let copyright = String.fromCodePoint(0x00A9)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"50px 0"}}>
      <p>{copyright} This web was developed by Sajid Hossain</p>
    </div>
  )
}

export default Footer
