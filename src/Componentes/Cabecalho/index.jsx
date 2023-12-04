import React from 'react'
import style from './cabecalho.module.css'
import logo from '../../assets/images/logo-rosa-amazonica.png'

export default function Cabecalho() {
  return (
    <header className={style.cabecalho}>
       <img src={logo} alt="Logo" loading="lazy"/>     
    </header>
  )
}
