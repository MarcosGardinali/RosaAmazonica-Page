import React from 'react'
import style from './secaointroducao.module.css'
import antesDepois from '../../assets/images/antes-e-depois.webp'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Botao from '../Botao';

export default function SecaoIntroducao() {
  return (
    <main className={style.secao__introducao}>
      <h2 className={style.introducao__titulo}>Renove a beleza da sua pele e recupere sua auto estima!</h2>
      <h3 className={style.introducao__subtitulo}>Você também merece ter uma pele maravilhosa todos os dias!</h3>
      <section className={style.introducao__container__imagem__textos}>
        <img className={style.introducao__imagem} src={antesDepois} alt="Antes e Depois" />
        <section className={style.container__textos__botao}>
          <p className={style.introducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Revitaliza a pele</p>
          <p className={style.introducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Combate as rugas</p>
          <p className={style.introducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Combate as rugas</p>
          <p className={style.introducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Ação preenchedora e anti-flacidez</p>
          <p className={style.introducao__textos}><BsFillCheckCircleFill className={style.icone__check} /> Estimula a renovação diária da pele</p>
          <Botao className={style.componente__botao} targetId="SecaoComprar" largura={60}>
            Quero Restaurar Minha Pele!
          </Botao>
        </section>
      </section>
    </main>
  )
}
