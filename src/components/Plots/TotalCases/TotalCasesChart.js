import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, Label } from 'recharts';

import CustomLine from '../CustomLine';

import data from './covid_norm.json';
import country_data from './country_data.json';

class TotalCasesChart extends React.Component{

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
                        margin={{ top: 25, right: 0, left: 30, bottom: 25 }}
                    >

                        
                                                
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" >
                            <Label value="Date" position="bottom"/>
                        </XAxis>
                        <YAxis>
                            <Label value="Total Cases (cumulative)" angle={270} position="left" offset={20} />
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

export default TotalCasesChart;