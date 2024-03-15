import React from 'react'
import style from './conteudo.module.css'
import SecaoIntroducao from '../SecaoIntroducao'
import SecaoEfeitos from '../SecaoEfeitos'
import SecaoDepoimentos from '../SecaoDepoimentos'
import SecaoComponentes from '../SecaoComponentes'
import SecaoSatisfacao from '../SecaoSatisfacao'
import SecaoAtencao from '../SecaoAtencao'
import SecaoComprar from '../SecaoComprar'
import SecaoDuvidas from '../SecaoDuvidas'
import PrimeiraSecao from '../PrimeiraSecao'
import SecaoClientesSatisfeitas from '../SecaoClientesSatisfeitas'
import SecaoWhats from '../SecaoWhats'

export default function Conteudo() {
  return (
    <main className={style.conteudo}>
      <PrimeiraSecao />
      <SecaoEfeitos />
      <SecaoWhats />
      <SecaoIntroducao />
      <SecaoComponentes />
      <SecaoDepoimentos />
      <SecaoSatisfacao />
      <SecaoClientesSatisfeitas />
      <SecaoAtencao />
      <SecaoComprar />
      <SecaoDuvidas />
    </main>
  )
}
