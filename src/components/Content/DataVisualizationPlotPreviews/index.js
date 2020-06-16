import React, { useState, useEffect } from "react";
import { Button, Breadcrumb, DropdownButton, Dropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


import TotalCases from '../../Plots/TotalCases';
import TotalNewCases from '../../Plots/TotalNewCases';
import CasesPer100Tests from '../../Plots/CasesPer100Tests';
import Deaths from '../../Plots/Deaths';

import api from '../../../services/api';

import './styles.css';

const imgBaseUrl = 'https://bioinfo.imd.ufrn.br/covid19-api/v1/plot-img';

export default function DataVisualizationArticle(props) {

    const [classStaticPlt1, setClassStaticPlt1] = useState('img_article d-lg-none')
    const [classRechartPlt1, setClassRechartPlt1] = useState('d-none d-lg-block')

    const [classStaticPlt2, setClassStaticPlt2] = useState('img_article d-lg-none')
    const [classRechartPlt2, setClassRechartPlt2] = useState('d-none d-lg-block')

    const [classStaticPlt3, setClassStaticPlt3] = useState('img_article d-lg-none')
    const [classRechartPlt3, setClassRechartPlt3] = useState('d-none d-lg-block')

    const [classStaticPlt4, setClassStaticPlt4] = useState('img_article d-lg-none')
    const [classRechartPlt4, setClassRechartPlt4] = useState('d-none d-lg-block')

    const [img01, setImg01] = useState(imgBaseUrl+'/01/');
    const [img02, setImg02] = useState(imgBaseUrl+'/02/');
    const [img03, setImg03] = useState(imgBaseUrl+'/03/');
    const [img04, setImg04] = useState(imgBaseUrl+'/04/');

    const [dateList, setDateList] = useState([]);
    const [activeDate, setActiveDate] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    function switchPlot1() {
        setClassStaticPlt1(classStaticPlt1 === 'img_article d-lg-none' ? 'img_article' : 'img_article d-lg-none');
        setClassRechartPlt1(classRechartPlt1 === 'd-none d-lg-block' ? 'd-none' : 'd-none d-lg-block');
    }

    function switchPlot2() {
        setClassStaticPlt2(classStaticPlt2 === 'img_article d-lg-none' ? 'img_article' : 'img_article d-lg-none');
        setClassRechartPlt2(classRechartPlt2 === 'd-none d-lg-block' ? 'd-none' : 'd-none d-lg-block');
    }

    function switchPlot3() {
        setClassStaticPlt3(classStaticPlt3 === 'img_article d-lg-none' ? 'img_article' : 'img_article d-lg-none');
        setClassRechartPlt3(classRechartPlt3 === 'd-none d-lg-block' ? 'd-none' : 'd-none d-lg-block');
    }

    function switchPlot4() {
        setClassStaticPlt4(classStaticPlt4 === 'img_article d-lg-none' ? 'img_article' : 'img_article d-lg-none');
        setClassRechartPlt4(classRechartPlt4 === 'd-none d-lg-block' ? 'd-none' : 'd-none d-lg-block');
    }

    function SwitchDate(date) {
        setSelectedDate(date)
        setImg01(imgBaseUrl+'/01/'+date);
        setImg02(imgBaseUrl+'/02/'+date);
        setImg03(imgBaseUrl+'/03/'+date);
        setImg04(imgBaseUrl+'/04/'+date);
    }

    /*useEffect(() =>{

        console.log('eff '+selectedDate);
    },[selectedDate])*/

    useEffect(() => {
        if (dateList.length === 0) {
            api.get('dates').then(
                externalDates => {
                    setDateList(externalDates.data);
                }
            );
        }

        if (activeDate === '') {
            api.get('active-date/').then(
                externalData => {
                    setActiveDate(externalData.data);
                    setSelectedDate(externalData.data);
                }

            );
        }

    }, [])

    

    return (

        <div className="article" >

            <Breadcrumb>
                <LinkContainer to='/'>
                    <Breadcrumb.Item> Página inicial </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active> Pré-visualização dos dados </Breadcrumb.Item>
                <LinkContainer to='/epidemics'>
                    <Breadcrumb.Item> Epidemiologia </Breadcrumb.Item>
                </LinkContainer>
            </Breadcrumb>
            <div>
                <div className="d-flex">
                

                <DropdownButton id="dropdown-basic-button" title="Selecionar data" disabled={activeDate===''} >
                    {dateList.map((date, index) => (
                        <>
                            <Dropdown.Item key={index} as="button" active={date === activeDate} onSelect={() => SwitchDate(date)} >{date}</Dropdown.Item>

                        </>

                    ))}
                </DropdownButton>


                {activeDate === selectedDate ? (
                    <Button disabled>Selecionado</Button>
                ) : (
                        <Button>Selecionar</Button>
                    )}

                <h4>Selecionado: {selectedDate}</h4>

                    </div>


                <figure>
                    <TotalCases className={classRechartPlt1} date={selectedDate} />
                    <img src={img01} alt="figure 1" width={1316} height={840} className={classStaticPlt1} />
                    <i className={classRechartPlt1}>
                        Clique na legenda para mostrar/ocultar os dados do país.
                        <Button variant="primary" size="sm" onClick={switchPlot1}>Versão original</Button>
                    </i>
                    <i className={classRechartPlt1 === 'd-none' ? 'd-none d-lg-block' : 'd-none'}>
                        Clique no botão ao lado para retornar à versão interativa
                        <Button variant="primary" size="sm" onClick={switchPlot1}>Versão interativa</Button>
                    </i>
                    <i className='img_article d-lg-none'>Acesse em uma tela maior para ter acesso à versão interativa do gráfico.</i>
                    <figcaption>Figura 1. Casos cumulativos de Covid-19 para dez países, de 1º de janeiro a 19 de maio. </figcaption>
                </figure>

                <figure>
                    <TotalNewCases className={classRechartPlt2} date={selectedDate} />
                    <img src={img02} alt="figure 2" width={1347} height={744} className={classStaticPlt2} />
                    <i className={classRechartPlt2}>
                        Clique na legenda para mostrar/ocultar os dados do país.
                        <Button variant="primary" size="sm" onClick={switchPlot2}>Versão original</Button>
                    </i>
                    <i className={classRechartPlt2 === 'd-none' ? 'd-none d-lg-block' : 'd-none'}>
                        Clique no botão ao lado para retornar à versão interativa
                        <Button variant="primary" size="sm" onClick={switchPlot2}>Versão interativa</Button>
                    </i>
                    <i className="img_article d-lg-none">Acesse em uma tela maior para ter acesso à versão interativa do gráfico.</i>
                    <figcaption>Figura 2. Novos casos diários de Covid-19 pelo número total de casos, ambos em escala logarítmica.</figcaption>
                </figure>

                <figure>
                    <CasesPer100Tests className={classRechartPlt3} date={selectedDate} />
                    <img src={img03} alt="figure 3" width={1822} height={1273} className={classStaticPlt3} />
                    <i className={classRechartPlt3}>
                        <Button variant="primary" size="sm" onClick={switchPlot3}>Versão original</Button>
                    </i>
                    <i className={classRechartPlt3 === 'd-none' ? 'd-none d-lg-block' : 'd-none'}>
                        Clique no botão ao lado para retornar à versão interativa
                        <Button variant="primary" size="sm" onClick={switchPlot3}>Versão interativa</Button>
                    </i>
                    <i className="img_article d-lg-none">Acesse em uma tela maior para ter acesso à versão interativa do gráfico.</i>
                    <figcaption>Figura 3. Casos normalizados de Covid-19 (casos por 100 testes) para seis países, de 15 de fevereiro a 19 de maio.</figcaption>
                </figure>

                <figure>
                    <Deaths className={classRechartPlt4} date={selectedDate} />
                    <img src={img04} alt="figure 4" width={1791} height={1798} className={classStaticPlt4} />
                    <i className={classRechartPlt4}>
                        <Button variant="primary" size="sm" onClick={switchPlot4}>Versão original</Button>
                    </i>
                    <i className={classRechartPlt4 === 'd-none' ? 'd-none d-lg-block' : 'd-none'}>
                        Clique no botão ao lado para retornar à versão interativa
                        <Button variant="primary" size="sm" onClick={switchPlot4}>Versão interativa</Button>
                    </i>
                    <i className="img_article d-lg-none">Acesse em uma tela maior para ter acesso à versão interativa do gráfico.</i>
                    <figcaption>Figura 4. Mortes diárias de Covid-19 pelo número total de mortes, ambas em escala logarítmica.</figcaption>
                </figure>

            </div>

        </div>
    )
}