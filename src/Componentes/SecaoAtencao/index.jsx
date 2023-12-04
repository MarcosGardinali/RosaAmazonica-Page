import React from 'react'
import style from './secaoatencao.module.css'
import Atencao from '../../assets/images/imagematencao.png'

export default function SecaoAtencao() {
  return (
    <main className={style.conteudo__secao__atencao}>
        <h2 className={style.secao__atencao__titulo}>Atenção</h2>
        <h3 className={style.secao__atencao__texto}>Este Produto Não é Vendido Em Lojas de Marketplace Como Mercado Livre, Shopee, Lojas Americanas, Magazine Luiza, Etc</h3>
        <h2 className={style.secao__atencao__subtitulo}>Cuidado Com a Pirataria!</h2>
        <img src={Atencao} alt="Imagem De Marketplaces Proibidos" loading="lazy" className={style.secao__atencao__imagem}/>
    </main>
  )
}
