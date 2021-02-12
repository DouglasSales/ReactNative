import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assests/images/logo.svg';
import landingImg from '../../assests/images/landing.svg';
import studyIcon from '../../assests/images/icons/study.svg';
import giveClassesIcon from '../../assests/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assests/images/icons/purple-heart.svg';

import './styles.css';
import CoachList from '../CoachesList';
import CoachForm from '../CoachForm';

function Landing() {
    return (
    <div id="page-landing">
        <div id="page-langing-content" className="container">
            <div className='logo-container'>
                <img src={logoImg} alt="coach4me"/>
                <h2>Encontre monitores online facilmente.</h2>
            </div>        
            <img src={landingImg} alt="Plataforma de estudos" className="coach-image"/>
        
        <div className="buttons-container">
            <Link to="/study" className="study">
                <img src={studyIcon} alt="Estudar"/>
                Estudar
            </Link>
            <Link to="/give-classes" className="give-classes">
                <img src={giveClassesIcon} alt="Dar aulas"/>
                Dar aulas
            </Link>
        </div>        
        <span className="total-connections">
            Total de 1000 conexões já realizadas
            <img src={purpleHeartIcon} alt="coração roxo"/>
        </span>
      </div>
    </div>               
    )
}

export default Landing;