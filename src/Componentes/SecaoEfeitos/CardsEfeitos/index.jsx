import React from 'react'
import style from './cardsefeitos.module.css'

export default function CardsEfeitos({imagem, alt, titulo, descricao}) {
  return (
    <section className={style.card__efeitos}>
        <img src={imagem} alt={alt} loading="lazy" className={style.card__efeitos__imagem}/>
        <h4 className={style.card__efeitos__titulo}>{titulo}</h4>
        <p className={style.card__efeitos__descricao}>{descricao}</p>
    </section>
  )
}
