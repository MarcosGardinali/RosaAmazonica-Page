import React, { useState } from 'react'
import style from './secaoduvidas.module.css'

export default function SecaoDuvidas() {

    const [um, setUm] = useState(false);
    const [dois, setDois] = useState(false);
    const [tres, setTres] = useState(false);
    const [quatro, setQuatro] = useState(false);
    const [cinco, setCinco] = useState(false);
    const [seis, setSeis] = useState(false);
    const [sete, setSete] = useState(false);
    const [oito, setOito] = useState(false);
    const [nove, setNove] = useState(false);
    const [dez, setDez] = useState(false);
    const [onze, setOnze] = useState(false);
    const [doze, setDoze] = useState(false);

    const toggleUm = () => {
        setUm(!um);
    };

    const toggleDois = () => {
        setDois(!dois);
    };

    const toggleTres = () => {
        setTres(!tres);
    };

    const toggleQuatro = () => {
        setQuatro(!quatro);
    };

    const toggleCinco = () => {
        setCinco(!cinco);
    };

    const toggleSeis = () => {
        setSeis(!seis);
    };

    const toggleSete = () => {
        setSete(!sete);
    };

    const toggleOito = () => {
        setOito(!oito);
    };

    const toggleNove = () => {
        setNove(!nove);
    };

    const toggleDez = () => {
        setDez(!dez);
    };

    const toggleOnze = () => {
        setOnze(!onze);
    };

    const toggleDoze = () => {
        setDoze(!doze);
    };

    return (
        <main className={style.conteudo__secao__duvidas}>
            <h2>Dúvidas Frequentes</h2>
            <section className={style.container__duvidas}>
                <section className={style.duvidas} onClick={toggleUm}>
                    <h3 className={style.duvidas__titulo}>Qual estoque mais vendido?</h3>
                    {um && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                        <p><span style="color: rgb(68, 68, 68);">O estoque mais vendido e o mais recomendado é para 6 meses, porque apesar de você ter resultados imediatos com o Sérum, os melhores benefícios vem com o uso contínuo do produto. Além disso, você recebe até 50% de desconto quando você faz um estoque para 6 meses e se protege para quando a gente ficar sem produto."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleDois}>
                    <h3 className={style.duvidas__titulo}>Tem contra-indicação e efeito colateral?</h3>
                    {dois && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Não há contra-indicações ou efeitos colaterais, qualquer pessoa pode passar e aproveitar os benefícios do Sérum Rosa Amazônica. Entretanto é necessário observar se existe alguma alergia aos ingredientes do composto."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleTres}>
                    <h3 className={style.duvidas__titulo}>A composição é natural?</h3>
                    {tres && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">A composição dele é em parte natural e em parte sintética. A Amazony acredita que existem ativos/ingredientes sintéticos (não naturais), que são muito bons e benéficos para a pele, como por exemplo, o Progeline™. Não é porque é artificial que é ruim, portanto não há com o que se preocupar. Natural ou sintético, toda a composição do Sérum Rosa Amazônica tem uma coisa em comum: ela faz maravilhas para sua pele sem agredir sua saúde."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleQuatro}>
                    <h3 className={style.duvidas__titulo}>O produto é vegano ou cruelty-free?</h3>
                    {quatro && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Sim, na verdade, todos os produtos da Amazony são veganos e cruelty-free!"</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleCinco}>
                    <h3 className={style.duvidas__titulo}>O produto contém parabenos?</h3>
                    {cinco && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Não, o Sérum Rosa Amazônica é livre de parabenos, sulfatos e ftalatos. Sua saúde está protegida ao usar nossos produtos!"</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleSeis}>
                    <h3 className={style.duvidas__titulo}>Como fazer uso do produto?</h3>
                    {seis && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">
                    Primeiro, lave o rosto com água e sabonete anti-oleosidade. Com o rosto limpo, coloque uma pequena quantidade na ponta do dedo indicador. Aplique com leves toques sem depositar muito produto em uma única região. Aguarde de 3 a 5 minutos enquanto o produto seca e age na pele. O recomendado é que você aplique pela manhã antes da maquiagem ou protetor solar devido ao efeito instantâneo.
                    "</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleSete}>
                    <h3 className={style.duvidas__titulo}>O sérum pode funcionar para o meu caso?</h3>
                    {sete && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Sim! O Sérum Rosa Amazônica é feito com compostos que têm efeitos no curto e no longo prazo, funcionando em qualquer tipo de pele."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleOito}>
                    <h3 className={style.duvidas__titulo}>Em quanto tempo posso ver os resultados?</h3>
                    {oito && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Dentro de 10 minutos você já poderá perceber o efeito instantâneo do Sérum. As rugas, linhas de expressão e imperfeições ficarão praticamente invisíveis ao mesmo tempo em que você perceberá um efeito “lifting” na área aplicada. Esse efeito pode durar entre 4 a 6 horas. Ao longo prazo, a recomendação é que você utilize o produto por no mínimo 4 meses para os resultados serem melhores, mas logo no primeiro mês você já poderá notar suas linhas mais finas e a pele mais firme."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleNove}>
                    <h3 className={style.duvidas__titulo}>Quanto produto vem no frasco?</h3>
                    {nove && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Cada frasco contém 30 ml, o suficiente para um mês de tratamento."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleDez}>
                    <h3 className={style.duvidas__titulo}>Qual prazo de entrega?</h3>
                    {dez && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">O prazo médio de entrega para o Brasil é de até 12 dias úteis. O produto só é enviado após a confirmação do seu pagamento pela administradora do seu cartão de crédito ou após a confirmação do pagamento do boleto."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleOnze}>
                    <h3 className={style.duvidas__titulo}>Tem garantia de resultados?</h3>
                    {onze && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Adquira o produto hoje e seja protegido automaticamente pela Garantia Incondicional Amazony, onde você tem 90 dias para testar nosso produto sem risco algum. Se por algum motivo, dentro do prazo de 90 dias, você achar que seu investimento não valeu a pena, nós não vamos deixar você ficar com o produto. Apenas nos avise por e-mail (contato@rosaamazonica.com.br) que nós compraremos todos os frascos de volta de você, pelo mesmo valor que você pagou. Simples assim!"</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleDoze}>
                    <h3 className={style.duvidas__titulo}>Amazony Rosa Amazônica é aprovado pela Anvisa?</h3>
                    {doze && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Sim, o sérum da Amazony – Rosa amazonica possui o registro na Anvisa sob o número de registro 25351.105771/2023-38"</p>
                    ` }} />
                    )}
                </section>
            </section>

        </main>
    )
}
