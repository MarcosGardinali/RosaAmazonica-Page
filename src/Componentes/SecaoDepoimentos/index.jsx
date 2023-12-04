import React from 'react'
import style from './secaodepoimentos.module.css'
import Botao from '../Botao'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import Depoimento1 from '../../assets/images/depoimento1.webp'
import Depoimento2 from '../../assets/images/depoimento2.webp'
import Depoimento3 from '../../assets/images/depoimento3.webp'
import Depoimento4 from '../../assets/images/depoimento4.webp'
import Depoimento5 from '../../assets/images/depoimento5.webp'


export default function SecaoDepoimentos() {

    const imagens = [
        { id: 1, image: Depoimento1 },
        { id: 2, image: Depoimento2 },
        { id: 3, image: Depoimento3 },
        { id: 4, image: Depoimento4 },
        { id: 5, image: Depoimento5 },
    ]

    return (
        <main className={style.conteudo__secao__depoimentos}>
            <h3 className={style.secao__depoimentos__titulo}>Aprovado: Veja alguns resultados reais</h3>
            <h4 className={style.secao__depoimentos__subtitulo}>Mais de 37 mil pessoas já aprovaram Rosa Amazônica!</h4>
            <p className={style.secao__depoimentos__texto}>Arraste pra o lado ➞</p>
            <section className={style.container__slider}>
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    pagination
                    navigation
                    centeredSlides={true}
                    loop={true}
                >
                    {imagens.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt="Imagem Swiper" loading="lazy" className={style.slide__item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <Botao targetId="SecaoComprar" largura={30}>
                Quero Restaurar Minha Pele!
            </Botao>
            <p className={style.secao__ia__texto__satisfacao}>Compra 100% Segura e Satisfação Garantida!</p>
        </main>
    )
}
