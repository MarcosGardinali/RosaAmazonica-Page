import React from 'react'
import style from './secaosatisfacao.module.css'
import Selo from '../../assets/images/Selosatisfacao.png'
import Botao from '../Botao'

export default function SecaoSatisfacao() {
    return (
        <main className={style.conteudo__secao__satisfacao}>
            <h3 className={style.secao__satisfacao__titulo}>Satisfação Garantida Ou Seu Dinheiro De Volta</h3>
            <img src={Selo} alt="Selo de Satisfação" loading="lazy" className={style.secao__satisfacao__imagem} />
            <p className={style.secao__satisfacao__texto}>Confiamos tanto na eficácia do <strong className={style.secao__satisfacao__texto__strong}>Rosa Amazônica</strong> que caso você utilize ele durante 90 dias e não tenha resultados, devolvemos o seu dinheiro. Isso mesmo! Resultados em 90 Dias ou seu dinheiro de volta.</p>
            <Botao targetId="SecaoComprar">
                Quero Restaurar Minha Pele!
            </Botao>
            <p className={style.secao__ia__texto__satisfacao}>Compra 100% Segura e Satisfação Garantida!</p>
        </main>
    )
}
