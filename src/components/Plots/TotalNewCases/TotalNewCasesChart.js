import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, Label } from 'recharts';

import CustomLine from '../CustomLine';

import data from './covid_norm-plot2.json';
import country_data from './country_data.json';

class TotalNewCasesChart extends React.Component{

    constructor(props) {
        super(props);

        this.countries = country_data;

        this.state = {
            countryList: this.countries
        }

    }

    selectLine(event) {
        let updatedLines = [];
        for (let i = 0; i < this.state.countryList.length; i++){
            let country = this.state.countryList[i];
            if (country.code !== event.dataKey) {
                updatedLines.push(country)
            } else {
                if(/\s/.test(country.code)) {
                    let newLine = { code: country.code.trim(), stroke: country.stroke, name: country.name }
                    updatedLines.push(newLine);
                } else {
                    let newLine = { code: country.code + " ", stroke: country.stroke, name: country.name }
                    updatedLines.push(newLine);
                }
            }
        }
        this.setState({
            countryList : updatedLines
        });
    }

    render() {
        return (
            <ResponsiveContainer height={700} >
                
                <LineChart 
                        data={data}
                        margin={{ top: 25, right: 0, left: 30, bottom: 55 }}
                    >

                        
                                                
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="cumulative" domain={[1, 'auto']} scale="log" allowDataOverflow>
                            <Label value="Total Cases (log scale)" position="bottom"/>
                        </XAxis>
                        <YAxis domain={[1, 'auto']} allowDataOverflow scale="log" >
                            <Label value="New cases (log scale)" angle={270} position="left" offset={0} />
                        </YAxis>
                        <Legend 
                            align="right" 
                            layout="vertical" 
                            verticalAlign="middle" 
                            wrapperStyle={{ paddingLeft: "20px" }} 
                            iconType="plainline"
                            iconSize={20}
                            onClick={(e) => this.selectLine(e)}
                        />
                        {this.state.countryList.map((country, index) => (
                            <CustomLine 
                                connectNulls={true}
                                dataKey={ country.code } 
                                stroke={ country.stroke }  
                                name={ country.name } 
                                key={ index } 
                            />
                        ))}
                        <Tooltip />
                </LineChart>
            </ResponsiveContainer>
            
        )
    }
    
}

export default TotalNewCasesChart;