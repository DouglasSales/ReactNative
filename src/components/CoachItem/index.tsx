import React from 'react';

import whatsappIcon from '../../assests/images/icons/whatsapp.svg';

import './styles.css';

function CoachItem() {
    return( 
    <article className="coach-item">
    <header>
        <img src="https://avatars.githubusercontent.com/u/64711565?s=460&u=2faaca196b1ed111c061d1422be563024eaa8f37&v=4" alt="Douglas"/>                        
        <div>
            <strong>Douglas Sales de Araújo</strong>
            <span>Desenvolvimento Mobile</span>
        </div>
    </header>
    <p>
        Entusiasta das novas tecnologias de programção mobile.
        <br /><br />
        Apaixonado por dar aulas e passar algum conhecimento, além de trocar ideias. 
    </p>

    <footer>
        <button type='button'>
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
    </footer>
</article>

    );
}

export default CoachItem;
