import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assests/images/logo.svg';
import backIcon from '../../assests/images/icons/back.svg';

import './style.css';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FunctionComponent <PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <div>
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                </div>               
                <img src={logoImg} alt="coach4me"/>      
            </div>

            <div className="header-content">
                <strong>{ props.title }</strong>

                {props.children}

            </div>
        </header>        
    );
}

export default PageHeader;