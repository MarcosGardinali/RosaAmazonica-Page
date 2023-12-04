import React from 'react'
import style from './secaocomponentes.module.css'
import Botao from '../Botao'
import Rosa from '../../assets/images/rosa-amazonica.png'
import Acido from '../../assets/images/Acidohialuronico.png'
import Colageno from '../../assets/images/Colageno.png'
import Retinol from '../../assets/images/Retinol.png'
import CardComponentes from './CardComponentes'

export default function SecaoComponentes() {
  return (
    <main className={style.conteudo__secao__componentes}>
        <h2 className={style.secao__componentes__titulo}>Desenvolvida e Recomendada Por Especialistas</h2>
      <h3 className={style.secao__componentes__subtitulo}>A fórmula da Rosa Mosqueta contém a exclusiva tecnologia PRO-MOS3D que proporcionam um toque aveludado deixando sua pele mais lisa e revitalizada com uma mega hidratação 3D e resultados já nas primeiras semanas de uso.</h3>
      <section className={style.container__cards__componentes}>
        <CardComponentes imagem={Rosa} alt="Rosa Mosqueta Amazônica" titulo="Rosa Mosqueta Amazônica" descricao="O principal ativo do Rosa Amazonica, é conhecido por suas propriedades cicatrizantes e clareadoras, pelo seu forte poder regenerador e fitoterápico." />
        <CardComponentes imagem={Acido} alt="Ácido Hialurônico" titulo="Ácido Hialurônico" descricao="Responsável por preencher os espaços que surgem entre a derme e a epiderme, ele garanta a hidratação e uniformidade à pele enquanto suaviza as rugas e marcas de expressão." />
        <CardComponentes imagem={Colageno} alt="Colágeno" titulo="Colágeno Verisol" descricao="Muito mais potente, é o único comprovadamente focado em agir somente na pele. Diferente de outros tipos de colágeno que agem nos ossos, cartilagens, cabelo e unha." />
        <CardComponentes imagem={Retinol} alt="Retinol" titulo="Retinol" descricao="O retinol é um derivado da vitamina A que possui a função de estimular a renovação celular, auxiliando na prevenção e no tratamento do envelhecimento." />
      </section>
      <Botao targetId="SecaoComprar" largura={30}>
        Quero Restaurar Minha Pele!
      </Botao>
      <p className={style.secao__ia__texto__satisfacao}>Compra 100% Segura e Satisfação Garantida!</p>
    </main>
  )
}
