import React from 'react'
import Style from './Foto.module.css'
function Foto(props) {
  return (
    <div className={Style.logo}>
        <img className={Style.foto} src={props.foto} alt=''/>
    </div>
  )
}

export default Foto;