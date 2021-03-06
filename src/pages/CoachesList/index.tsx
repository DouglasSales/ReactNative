import React from 'react';
import CoachItem from '../../components/CoachItem';

import PageHeader from '../../components/PageHeader';


import './styles.css';

function CoachList() {
    return (
        <div id="page-coach-list" className="container">
            <PageHeader title="Estes são os coachs disponíveis.">   
                <form action="" id="search-choaches">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
              <CoachItem />   
            </main>

        </div>
    );
}


export default CoachList;