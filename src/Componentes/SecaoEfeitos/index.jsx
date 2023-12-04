import React from 'react'
import style from './secaoefeitos.module.css'
import Botao from '../Botao'
import CardsEfeitos from './CardsEfeitos'
import Efeito1 from '../../assets/images/efeito1.png'
import Efeito2 from '../../assets/images/efeito2.png'
import Efeito3 from '../../assets/images/efeito3.png'
import Efeito4 from '../../assets/images/efeito4.png'
import Efeito5 from '../../assets/images/efeito5.png'
import Efeito6 from '../../assets/images/efeito6.png'
import compraSegura from '../../assets/images/seloscomprasegurapreto.png'


export default function SecaoEfeitos() {
  return (
    <main className={style.conteudo__secao__efeitos}>
      <h2 className={style.secao__efeitos__titulo}>Veja o poder da Rosa Amazônica na sua pele!</h2>
      <h3 className={style.secao__efeitos__subtitulo}>Um produto rico em vitaminas que traz maciez, firmeza, rejuvenescimento e hidratação profunda!</h3>
      <section className={style.container__cards__efeitos}>
        <CardsEfeitos imagem={Efeito1} alt="Efeito 1" titulo="Reduz a aparência das rugas instantaneamente" descricao="A Rosa Mosqueta Amazônica cria um efeito lifting que pode remover anos, senão décadas de rugas do seu rosto… na hora! Imagine o controle que você vai ter em suas mãos ao saber que, sempre que você quiser, você poderá aparentar ser anos mais jovem. Imagine poder ter um controle assim sobre sua aparência." />
        <CardsEfeitos imagem={Efeito2} alt="Efeito 2" titulo="Sua pele hidratada, viçosa, com aspecto saudável na hora" descricao="O Epidermosil do Sérum Rosa Amazônica devolve instantaneamente a hidratação à sua pele, a deixando mais viçosa e com muito mais brilho! Quando você tocar sua pele, ela estará aveludada e lisinha como pêssego." />
        <CardsEfeitos imagem={Efeito3} alt="Efeito 3" titulo="Você envelhece mais devagar" descricao="O Progeline do Sérum Rosa Amazônica vai acelerar a Renovação Celular, para que as células velhas da sua pele sejam trocadas por células jovens, novinhas em folha! Imagine perceber que você está envelhecendo apenas 1 ano a cada 5? Imagine saber que sua pele não ficará cada vez pior com o tempo, muito pelo contrário! A cada dia você se sentirá mais confiante ao olhar no espelho e se ver mais linda, mais atraente." />
        <CardsEfeitos imagem={Efeito4} alt="Efeito 4" titulo="Combate rugas e bigode chinês" descricao="O Rosa Amazônica possui exclusivo sistema PROSIM3D que combina Rosa Mosqueta + Ácido Hialurônico + Verisol, tecnologia que diminue a aparência das rugas deixando a pele do seu rosto mais lisa e sem as marcas do tempo." />
        <CardsEfeitos imagem={Efeito5} alt="Efeito 5" titulo="Rejuvenesce seu organismo" descricao="Graças ao Ácido Hialurônico que traz moléculas de água para células da derme, o Sérum Rosa Amazônica age como preenchedor, suaviza e rejuvenesce todo seu organismo." />
        <CardsEfeitos imagem={Efeito6} alt="Efeito 6" titulo="Antioxidante e combate os radicais livres" descricao="Volte a ostentar uma pele Jovem, livre dos efeitos de radicais livre e do envelhecimento!" />
      </section>
      <Botao targetId="SecaoComprar" largura={40}>
        Quero Restaurar Minha Pele!
      </Botao>
      <img width={'25%'} className={style.imagem__compra__segura} src={compraSegura} alt="Selo compra segura" />
    </main>
  )
}
