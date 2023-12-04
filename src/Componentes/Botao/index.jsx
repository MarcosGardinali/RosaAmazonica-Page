import React from 'react';
import style from './botao.module.css';

export default function Botao({ children, link, targetId, largura }) {
  const isMobile = (window.innerWidth <= 768);

  const scrollToSection = (e) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    if (link) {
      window.location.href = link;
    }

  };

  const botaoStyle = isMobile ? { width: '80%' } : { width: `${largura}%` };

  return (
    <a style={botaoStyle} href={link} rel="nofollow" onClick={scrollToSection} className={style.botao}>
      {children}
    </a>
  );
}
