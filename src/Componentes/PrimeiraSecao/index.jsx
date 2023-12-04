import React from 'react'
import style from './primeirasecao.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import rosaAmazonica from '../../assets/images/rosaamazonica.png'
import compraSegura from '../../assets/images/seloscomprasegurapreto.png'
import Botao from '../Botao'

export default function PrimeiraSecao() {
    return (
        <main className={style.conteudo__primeira__secao}>
            <section className={style.primeira__container__textos__imagem}>
                <article className={style.container__textos}>
                    <h1 className={style.primeira__titulo}>Descubra o poder da Rosa Mosqueta Amazônica!</h1>
                    <h2 className={style.primeira__subtitulo}>A tecnologia americana que devolve a beleza da sua pele!</h2>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> Reduz a aparência das rugas instantaneamente</p>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> Hidratação 24 horas</p>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> Clareia e Uniformiza a Pele</p>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> Clareador de Manchas</p>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> Elimina o “Pé de Galinha” e “Bigode Chinês”</p>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> Devolve a Firmeza e Elasticidade a sua Pele</p>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> Combate Estrias e Foliculite</p>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> Alívio das irritações</p>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> 11 efeitos em 1 sérum</p>
                    <p className={style.primeira__textos}><BsFillCheckCircleFill className={style.icone__check} /> Rosa Mosqueta + Ácido Hialurônico + Verisol</p>
                    <Botao targetId="SecaoComprar" largura={70}>
                        Quero Restaurar Minha Pele!
                    </Botao>
                    <img width={'60%'} className={style.imagem__compra__segura} src={compraSegura} alt="Compra segura" />
                </article>
                <img className={style.primeira__imagem} src={rosaAmazonica} alt="Imagem do produto Rosa Amazonica" />
            </section>
        </main>
    )
}
