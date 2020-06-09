import React from "react";
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

export default function EpidemicsContent(props) {
       
    return (
        <div className="article" >
            <Breadcrumb>
                <LinkContainer to='/'>
                    <Breadcrumb.Item> Página inicial </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to='/data-visualization'>
                    <Breadcrumb.Item> Considerações sobre a apresentação e interpretação dos dados </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active> Epidemiologia </Breadcrumb.Item>
            </Breadcrumb>
            <div className="article" >
                
                <p>O principal objetivo da epidemiologia é prevenir doenças e promover a saúde. Para que isso seja possível, é necessário conhecer as causas das doenças, os agravos à saúde e as maneiras pelas quais estes podem ser modificados. A epidemiologia, como qualquer outra ciência, se baseia no método científico. A realização de estudos epidemiológicos requer o uso de amostras e a aplicação de análises estatísticas para que sejam feitas inferências sobre uma população. Das várias medidas utilizadas para determinar o impacto dos fatores que afetam saúde da população, dois indicadores básicos são a incidência e a mortalidade.</p>

                <h4>INCIDÊNCIA</h4>

                <p>A <strong>incidência</strong> de uma doença é o número de casos novos da doença que iniciaram no mesmo local, durante um período específico de tempo. A medida da incidência está relacionada à amplitude de uma doença na população e mede a frequência ou probabilidade de ocorrência de casos novos na população. O grupo de pessoas utilizado na medida de incidência é o grupo suscetível à doença e uma alta incidência significa alto risco coletivo de adoecer. A análise da incidência de casos ao longo do tempo permite verificar a dinâmica da doença em determinada população e sua respectiva taxa de crescimento.</p>

                <p>No caso de doenças infecciosas, como o Covid-19,  dois fatores determinam a velocidade de crescimento da epidemia: <strong>o tempo de geração</strong> (tempo entre um indivíduo se infectar e conseguir infectar outro indivíduo) e o <strong>número reprodutivo R</strong> (número de casos causados por um indivíduo infectado). De forma geral, R é igual ao número reprodutivo básico R0 (quando todos os indivíduos são suscetíveis), vezes a porcentagem de indivíduos suscetíveis na população. A medida que o número de indivíduos suscetíveis diminui, R também diminui. </p>

                <p>R apresenta uma relação direta com a forma da curva de uma epidemia. Em epidemias como a do Covid-19, de uma forma bem simplificada, podemos identificar 3 fases: (i) a de crescimento exponencial, onde {`R > 1`}, ou seja, cada indivíduo infectado infecta pelo menos mais uma pessoa; (ii) o pico, com o maior número de casos registrados; e (iii) a fase de regressão,  quando {`R < 1`} e o número de casos inevitavelmente decresce, mesmo que ainda haja alguns indivíduos suscetíveis na população. Portanto, qualquer intervenção que force R ser menor do que 1, como medidas de isolamento, quarentena, vacinação ou outras, terá sucesso no combate à epidemia.</p>

                <p>A taxa de incidência permite também a comparação entre países e pode mostrar onde a doença  está crescendo mais rapidamente. Uma forma de comparar o crescimento da epidemia que pode ter começado em momentos diferentes em diferentes países, é visualizar a curva de indecência a partir do mesmo ponto de partida, como por exemplo, o dia da confirmação do 10º caso registrado em cada país, com as linhas de tendência seguindo o número de dias desde que o mesmo. Alternativamente, gráficos com casos cumulativos apresentam o número de pessoas que já testaram positivo para coronavírus, independentemente de terem se recuperado. </p>

                <p>Por fim, é importante saber que a medida da incidência em uma população pode apresentar grandes variações, dependendo do tipo de sistema de notificação (ativo ou passivo) e sua abrangência. Por exemplo, uma curva de incidência ascendente pode indicar um taxa de crescimento explosiva de casos de coronavírus em um determinado país ou uma alteração na forma como os casos são definidos ou contados. </p>

                <h4>MORTALIDADE</h4>

                <p>Uma importante medida do impacto de uma doença é a <strong>taxa de mortalidade</strong>, ou seja, o número de mortes na população, por unidade de tempo. Representa o risco ou probabilidade que qualquer pessoa poder vir a morrer ou de morrer em decorrência de uma determinada doença. Vários índices de mortalidade são utilizados para determinar a qualidade de vida da população. </p>

                <p>Outra informação importante é a <strong>taxa de letalidade</strong> de determinada doença, ou seja, o número de mortes por casos confirmados, em um determinado período de tempo. A taxa de letalidade indica a gravidade da doença, pois indica o percentual de pessoas que morreram dentre as que foram diagnosticadas por determinada doença e informa sobre a qualidade da assistência médica prestada ao doente.</p>

                <p>Na pandemia causada pelo covid-19 observamos taxas de mortalidade e letalidade bem diferentes entre os diferentes países analisados. Vários fatores influenciam estas taxas e alguns destes apresentam uma forte correlação com o nível de mortalidade causada pelo Covid-19:</p>

                <ul>
                    <li>Demografia: a mortalidade tende a ser maior em populações com maior número de idosos.</li>
                    <li>Sistema de saúde: a mortalidade tende a ser menor em países com sistemas de saúde mais bem equipados e com maior cobertura.</li>
                    <li>Tratamentos e vacinas: a mortalidade tende a ser menor quando há tratamentos ou vacinas aprovados pelas autoridades de saúde competentes.</li>
                    <li>Número de pessoas testadas: a taxa de mortalidade tende a diminuir com o aumento do número de testes.</li>
                </ul>

                <p><strong>Fontes</strong></p>

                <p>R. Bonita, R. Beaglehole, T. Kjellström; [tradução e revisão científica Juraci A. Cesar]. - 2.ed. - São Paulo, Santos. 2010. Disponível em <a className="a-article" href={`https://apps.who.int/iris/bitstream/handle/10665/43541/9788572888394_por.pdf?sequence=5&isAllowed=y`}> {`https://apps.who.int/iris/bitstream/handle/10665/43541/9788572888394_por.pdf?sequence=5&isAllowed=y`}</a>. Acesso em 10/04/2020.</p>

                <p>Material de curso auto-didático produzido pelo CDC: Principles of Epidemiology in Public Health Practice, Third Edition, An Introduction to Applied Epidemiology and Biostatistics. Disponível em <a className="a-article" href="https://www.cdc.gov/csels/dsepd/ss1978/index.html">https://www.cdc.gov/csels/dsepd/ss1978/index.html</a> Acesso em 10/04/2020.</p>

                <p>Para uma visão geral das investigações epidemiológicas, métodos e coleta de dados. <a className="a-article" href="https://www.cdc.gov/publichealth101/epidemiology.html">https://www.cdc.gov/publichealth101/epidemiology.html</a> </p>

                <Link className="a-article" to='/data-visualization'>Voltar ao artigo</Link>

            </div>
        </div>
        
    )
}