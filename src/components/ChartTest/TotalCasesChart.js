import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, Label } from 'recharts';

import CustomLine from './CustomLine';

import data from './covid_norm.json';

class TotalCasesChart extends React.Component{

    

    constructor(props) {
        super(props);

        this.countries = [
            {
                code: "AUS",
                stroke: "#1f77b4",
                name: "Australia",
            },
            {
                code: "USA",
                stroke: "#17becf",
                name: "United States",
            },
            {
                code: "CHN",
                stroke: "#d62728",
                name: "China",
            },
            {
                code: "BRA",
                stroke: "#2ca02c",
                name: "Brazil",
            },
            {
                code: "BEL",
                stroke: "#ff7f0e",
                name: "Belgium",
            },
            {
                code: "IRN",
                stroke: "#9467bd",
                name: "Iran",
            },
            {
                code: "ITA",
                stroke: "#8c564b",
                name: "Italy",
            },
            {
                code: "ZAF",
                stroke: "#e377c2",
                name: "South Africa",
            },
            {
                code: "ESP",
                stroke: "#7f7f7f",
                name: "Spain",
            },
            {
                code: "GBR",
                stroke: "#bcbd22",
                name: "United Kingdom",
            },

        ]

        

    }

    render() {
        return (
            <ResponsiveContainer height={700}>
                <LineChart 
                        data={data}
                        margin={{ top: 25, right: 0, left: 50, bottom: 25 }}
                    >

                        {this.countries.map((country, index) => (
                            <CustomLine dataKey={ country.code } stroke={ country.stroke }  name={ country.name }/>
                        ))}
                                                
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" >
                            <Label value="Date" position="bottom"/>
                        </XAxis>
                        <YAxis >
                            <Label value="Total Cases (cumulative)" angle={270} position="left" offset={20} />
                        </YAxis>
                        <Legend 
                            align="right" 
                            layout="vertical" 
                            verticalAlign="middle" 
                            wrapperStyle={{ paddingLeft: "20px" }} 
                            iconType="plainline"
                            iconSize={20}
                        />
                        <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        )
    }
    
}

export default TotalCasesChart;