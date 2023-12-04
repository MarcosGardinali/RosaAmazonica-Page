import React from 'react'
import style from './secaocomprar.module.css'
import Dezfrascos from '../../assets/images/1frasco.png'
import Cincofrascos from '../../assets/images/3frascos.png'
import Tresfrascos from '../../assets/images/5frascos.png'
import Umfrasco from '../../assets/images/12frascos.png'
import CompraInternet from '../../assets/images/comprainternet.png'
import CompraSegura from '../../assets/images/seloscomprasegura.png'

export default function SecaoComprar() {
  return (
    <main className={style.conteudo__secao__comprar} id='SecaoComprar'>
      <h3 className={style.secao__comprar__titulo}>Dúvidas sobre comprar pela internet?</h3>
      <p className={style.secao__comprar__texto}>Comprar o Rosa Amazônica é fácil, pratico e totalmente seguro.</p>
      <img className={style.imagem__compra__internet} src={CompraInternet} alt="Imagem Compra Segura Pela Internet" />
      <p className={style.secao__comprar__texto}>Recomendamos de 3 a 8 frascos para melhores resultados!</p>
      <section className={style.container__valores}>
        <a href='https://bit.ly/3uC1xnS' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={Dezfrascos} alt="Dez Frascos" loading="lazy"/>
        </a>
        <a href='https://bit.ly/3t4c5f7' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={Cincofrascos} alt="Cinco Frascos" loading="lazy"/>
        </a>
        <a href='https://bit.ly/3NzAmB1' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={Tresfrascos} alt="Três Frascos" loading="lazy"/>
        </a>
        <a href='https://bit.ly/3GqMMqI' className={style.card__valores}> 
          <img className={style.card__valores__imagem} src={Umfrasco} alt="Um Frasco" loading="lazy"/>
        </a>
      </section>
      <p className={style.secao__comprar__texto}>Conquiste uma pele incrível enquanto você descansa, use Rosa Amazônica!</p>
      <img style={{width: '25%'}} src={CompraSegura} alt="Imagem Compra Segura" />
    </main>
  )
}
