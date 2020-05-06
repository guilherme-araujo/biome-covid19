import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Breadcrumb } from 'react-bootstrap';


import TotalCases from '../../Plots/TotalCases';
import TotalNewCases from '../../Plots/TotalNewCases';
import CasesPer100Tests from '../../Plots/CasesPer100Tests';
import Deaths from '../../Plots/Deaths';

import img01 from '../../../assets/plots/0504-01.png';
import img02 from '../../../assets/plots/0504-02.png';
import img03 from '../../../assets/plots/0504-03.png';
import img04 from '../../../assets/plots/0504-04.png';

import article_pdf from '../../../assets/MedRvix_covid_figs.pdf';


import './styles.css';

export default function DataVisualizationArticle(props) {

    const [classStaticPlt1, setClassStaticPlt1] = useState('img_article d-lg-none')
    const [classRechartPlt1, setClassRechartPlt1] = useState('d-none d-lg-block')

    const [classStaticPlt2, setClassStaticPlt2] = useState('img_article d-lg-none')
    const [classRechartPlt2, setClassRechartPlt2] = useState('d-none d-lg-block')

    const [classStaticPlt3, setClassStaticPlt3] = useState('img_article d-lg-none')
    const [classRechartPlt3, setClassRechartPlt3] = useState('d-none d-lg-block')

    const [classStaticPlt4, setClassStaticPlt4] = useState('img_article d-lg-none')
    const [classRechartPlt4, setClassRechartPlt4] = useState('d-none d-lg-block')

    function switchPlot1(){
        setClassStaticPlt1(classStaticPlt1 === 'img_article d-lg-none'? 'img_article' : 'img_article d-lg-none');
        setClassRechartPlt1(classRechartPlt1 === 'd-none d-lg-block' ? 'd-none' : 'd-none d-lg-block');
    }

    function switchPlot2(){
        setClassStaticPlt2(classStaticPlt2 === 'img_article d-lg-none'? 'img_article' : 'img_article d-lg-none');
        setClassRechartPlt2(classRechartPlt2 === 'd-none d-lg-block' ? 'd-none' : 'd-none d-lg-block');
    }

    function switchPlot3(){
        setClassStaticPlt3(classStaticPlt3 === 'img_article d-lg-none'? 'img_article' : 'img_article d-lg-none');
        setClassRechartPlt3(classRechartPlt3 === 'd-none d-lg-block' ? 'd-none' : 'd-none d-lg-block');
    }

    function switchPlot4(){
        setClassStaticPlt4(classStaticPlt4 === 'img_article d-lg-none'? 'img_article' : 'img_article d-lg-none');
        setClassRechartPlt4(classRechartPlt4 === 'd-none d-lg-block' ? 'd-none' : 'd-none d-lg-block');
    }

    return (

        <div className="article" >
            <Breadcrumb>
                <Breadcrumb.Item><Link to='/'> Página inicial </Link></Breadcrumb.Item>
                <Breadcrumb.Item active> Considerações sobre a apresentação e interpretação dos dados </Breadcrumb.Item>
                <Breadcrumb.Item><Link to='epidemics'> Epidemiologia </Link></Breadcrumb.Item>
            </Breadcrumb>
            <div>

                <div>
                    <strong>ATUALIZAÇÃO - dia 05/05/20</strong>
                    <br/>
                    <br/>
                    <i>Os gráficos foram atualizados contemplando os dados até 04/05/2020. Os países da Europa continental continuam a sua trajetória descendente (Figuras 2 e 4). Os dados da Figura 4 são particularmente preocupantes para o Brasil visto que o número de mortes continua em um padrão exponencial, ao contrário de Espanha, Itália e Bélgica que já passaram o pico e estão em fase descendente.</i>
                    <br/>
                    <br/>
                </div>

                <div>
                    <strong>ATUALIZAÇÃO - dia 27/04/20</strong>
                    <br/>
                    <br/>
                    <i>Os gráficos foram atualizados contemplando os dados até 26/04/20. As tendências vistas na última atualização foram confirmadas. As taxas para Itália e Espanha continuaram uma trajetória descendente (Figuras 2, 3 e 4). Observa-se também o mesmo padrão para UK, Estados Unidos e Iran.</i>
                    <br/>
                    <br/>
                </div>

                <div>
                    <strong>ATUALIZAÇÃO - dia 20/04/20</strong>
                    <br/>
                    <br/>
                    <i>Os gráficos foram atualizados contemplando os dados até 20/04/20. Algumas tendências anteriormente observadas são agora mais significativas. Por exemplo, os novos dados reforçam a ideia que um pico foi ultrapassado para Itália e Espanha (Figuras 2, 3 e 4 para a Itália e Figuras 2 e 4 para a Espanha).  </i>
                    <br/>
                    <br/>
                </div>

                <p>O impacto social da pandemia do COVID-19 é sem precedentes na história recente da humanidade. Tal impacto é direto no sentido que o nosso dia a dia foi alterado de forma dramática, mas também indireto já que os efeitos se prolongarão por meses ou anos devido à crise econômica que certamente afetará o mundo todo. Nesse momento, a forma como as autoridades comunicam-se com a população é crucial para um eficaz engajamento do público. Isso é ainda mais crítico em relação a como os dados epidemiológicos são mostrados. </p>
                
                
                
                <figure>
                    <TotalCases className={classRechartPlt1} />
                    <img src={img01} alt="figure 1" width={1316} height={840} className={classStaticPlt1} />
                    <i className={classRechartPlt1}>
                        Clique na legenda para mostrar/ocultar os dados do país. 
                        <Button variant="primary" size="sm" onClick={switchPlot1}>Versão original</Button> 
                    </i>
                    <i className={classRechartPlt1 === 'd-none'? 'd-none d-lg-block' : 'd-none'}>
                        Clique no botão ao lado para retornar à versão interativa
                        <Button variant="primary" size="sm" onClick={switchPlot1}>Versão interativa</Button>
                    </i>
                    <i className='img_article d-lg-none'>Acesse em uma tela maior para ter acesso à versão interativa do gráfico.</i>
                    <figcaption>Figura 1. Casos cumulativos de Covid-19 para dez países, de 1º de janeiro a 19 de abril. </figcaption>
                </figure>
            
                <p> Veja, por exemplo, a Figura 1, a qual é a forma mais comumente usada para mostrar a dinâmica da doença na população. Ali, o número cumulativo de casos é mostrado em função do tempo. O problema principal desse tipo de gráfico é que ele não permite conclusões sólidas a respeito da pandemia, visto que uma série de parâmetros não são contemplados (principalmente o número de testes) e ao mesmo tempo causa um impacto negativo, e muitas vezes errado, na percepção pública da pandemia. </p>

                <figure>
                    <TotalNewCases className={classRechartPlt2} />
                    <img src={img02} alt="figure 2" width={1347} height={744} className={classStaticPlt2} />
                    <i className={classRechartPlt2}>
                        Clique na legenda para mostrar/ocultar os dados do país. 
                        <Button variant="primary" size="sm" onClick={switchPlot2}>Versão original</Button> 
                    </i>
                    <i className={classRechartPlt2 === 'd-none'? 'd-none d-lg-block' : 'd-none'}>
                        Clique no botão ao lado para retornar à versão interativa
                        <Button variant="primary" size="sm" onClick={switchPlot2}>Versão interativa</Button>
                    </i>
                    <i className="img_article d-lg-none">Acesse em uma tela maior para ter acesso à versão interativa do gráfico.</i>
                    <figcaption>Figura 2. Novos casos diários de Covid-19 pelo número total de casos, ambos em escala logarítmica.</figcaption>
                </figure>

                <p> Uma forma mais correta é o tipo de gráfico mostrado na Figura 2. Ali, o número de novos casos (eixo Y em escala logarítmica) é plotado contra o número total de casos (eixo X em escala logarítmica). Em uma pandemia que está passando por uma fase de crescimento exponencial, espera-se uma linha diagonal, como pode ser mostrado para os dados da doença no Brasil e nos EUA. Na China, onde a doença está aparentemente controlada, os dados mostram claramente que o número de novos casos é perto de zero (com a consequente curva descendente). Há, porém, problemas com esse gráfico. O mais sério é que o tempo não está contemplado, exceto nos casos onde uma animação está presente.</p>

                <figure>
                    <CasesPer100Tests className={classRechartPlt3} />
                    <img src={img03} alt="figure 3" width={1822} height={1273} className={classStaticPlt3} />
                    <i className={classRechartPlt3}>
                        <Button variant="primary" size="sm" onClick={switchPlot3}>Versão original</Button> 
                    </i>
                    <i className={classRechartPlt3 === 'd-none'? 'd-none d-lg-block' : 'd-none'}>
                        Clique no botão ao lado para retornar à versão interativa
                        <Button variant="primary" size="sm" onClick={switchPlot3}>Versão interativa</Button>
                    </i>
                    <i className="img_article d-lg-none">Acesse em uma tela maior para ter acesso à versão interativa do gráfico.</i>
                    <figcaption>Figura 3. Casos normalizados de Covid-19 (casos por 100 testes) para seis países, de 15 de fevereiro a 19 de abril.</figcaption>
                </figure>

                <p>No entanto, acreditamos que a forma mais correta de mostrar os dados epidemiológicos de uma pandemia como a COVID-19 é a mostrada na Figura 3. Ali, o número de casos é normalizado pelo número de testes executados (e consequentemente mostrado como o número de casos positivos em 100 testes). O gráfico da Figura 3 permite uma análise mais criteriosa e fidedigna da dinâmica do vírus nas populações mostradas. Por exemplo, a curva para a Itália mostra que um pico de casos positivos (normalizados para 100 testes) foi atingido por volta de 18 de março e desde então o número normalizado de casos vem caindo de forma significativa. Observem a curva para os EUA. Lá, há um pico no início de março seguido de uma queda no meio de março e um novo pico desde o final de março. Para países de dimensões continentais como os EUA, se espera que haja várias ondas epidêmicas. O primeiro pico provavelmente corresponde aos primeiros casos na costa oeste americana enquanto o segundo pico envolve os casos mais recentes na costa leste, principalmente Nova York. O principal problema do gráfico mostrado na Figura 3 é a ausência de dados confiáveis sobre o número de testes para maioria dos países. Outro problema é a falta de critérios homogêneos para decidir quem será testado. </p>

                <figure>
                    <Deaths className={classRechartPlt4} />
                    <img src={img04} alt="figure 4" width={1791} height={1798} className={classStaticPlt4} />
                    <i className={classRechartPlt4}>
                        <Button variant="primary" size="sm" onClick={switchPlot4}>Versão original</Button> 
                    </i>
                    <i className={classRechartPlt4 === 'd-none'? 'd-none d-lg-block' : 'd-none'}>
                        Clique no botão ao lado para retornar à versão interativa
                        <Button variant="primary" size="sm" onClick={switchPlot4}>Versão interativa</Button>
                    </i>
                    <i className="img_article d-lg-none">Acesse em uma tela maior para ter acesso à versão interativa do gráfico.</i>
                    <figcaption>Figura 4. Mortes diárias de Covid-19 pelo número total de mortes, ambas em escala logarítmica.</figcaption>
                </figure>

                <p>Um tipo de dado que talvez seja o mais informativo sobre a dinâmica do vírus na população é a taxa de mortes causados pela COVID-19. Esse número é absoluto e menos sujeito a parâmetros mais subjetivos de análise. A Figura 4 mostra um gráfico onde o número de novas mortes (eixo Y em escala logarítmica) é plotado contra o número total de mortes (eixo X em escala logarítmica) para diversos países. Aqui, novamente, vemos que a epidemia parece controlada na China visto a curva descendente a partir de um determinado ponto do gráfico. </p>

                <p>Nesse projeto sobre COVID-19, coordenado pelo BioME, propomos que uma variedade de tipos de gráficos seja usada na comunicação com a sociedade. O objetivo desta página é justamente oferecer tais gráficos. Os mesmos serão atualizados semanalmente até o final da pandemia. </p>

                <p>Para baixar o pdf do paper sobre esse projeto depositado em um repositório público e submetido à publicação, <a className="a-article" href={article_pdf}> clique aqui. </a> </p>

                <p>Para entender melhor alguns conceitos epidemiológicos importantes sobre epidemias e pandemias,<Link className="a-article" to="/epidemics"> clique aqui. </Link>  </p>
                
                <p><strong>Fonte: </strong> <a className="a-article" href="https://ourworldindata.org/coronavirus"> https://ourworldindata.org/coronavirus</a></p>

            </div>

        </div>
    )
}