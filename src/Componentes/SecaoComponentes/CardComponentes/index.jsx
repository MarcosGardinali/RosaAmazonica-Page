import React from 'react'
import style from './cardcomponentes.module.css'

export default function CardComponentes({imagem, alt, titulo, descricao}) {
  return (
    <section className={style.card__componentes}>
        <img src={imagem} alt={alt} loading="lazy" className={style.card__componentes__imagem}/>
        <h4 className={style.card__componentes__titulo}>{titulo}</h4>
        <p className={style.card__componentes__descricao}>{descricao}</p>
    </section>
  )
}
