import React from 'react'
import style from './secaoclientessatisfeitas.module.css'
import Botao from '../Botao'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import Cliente1 from '../../assets/images/cliente1.png'
import Cliente2 from '../../assets/images/cliente2.png'
import Cliente3 from '../../assets/images/cliente3.png'
import Cliente4 from '../../assets/images/cliente4.png'
import Cliente5 from '../../assets/images/cliente5.png'

export default function SecaoClientesSatisfeitas() {

  const imagens = [
    { id: 1, image: Cliente1 },
    { id: 2, image: Cliente2 },
    { id: 3, image: Cliente3 },
    { id: 4, image: Cliente4 },
    { id: 5, image: Cliente5 },
  ]


  return (
    <main className={style.conteudo__secao__clientes}>
      <h3 className={style.secao__clientes__titulo}>Clientes Satisfeitas!</h3>
      <h4 className={style.secao__clientes__subtitulo}>Nossas clientes recebem o produto no conforto de suas casas!</h4>
      <p className={style.secao__clientes__texto}>Arraste pra o lado ➞</p>
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
