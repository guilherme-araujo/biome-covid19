import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, Label } from 'recharts';


import data from './covid_norm-plot4.json';
import country_data from './country_data.json';

class Deaths extends React.Component{

    constructor(props) {
        super(props);

        this.countries = country_data;

        this.state = {
            countryList: this.countries,
            chartData: []
        }

        this.countries.map((country) => {
            this.state.chartData[country.code] = []
        })

        data.map( (line) => {
            this.countries.map( (country) => {
                if(line[country.code] !== null && line.cumulative !==0){
                    this.state.chartData[country.code].push({
                        "cumulative": line["cumulative"],
                        "daily": line[country.code]
                    })
                }
                
            })
        })

    }


    render() {
        return (
            <div className="d-flex flex-wrap mt-3">
                { this.state.countryList.map( (country, index) => (              
                         
                <ResponsiveContainer height={350} width="33%" >
                        
                        <ScatterChart                                 
                                margin={{ top: 35, right: 8, left: 30, bottom: 55 }}
                            >
                        
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="cumulative" domain={[1, Math.max(...this.state.chartData[country.code].map(o => o.cumulative), 0)*1.2 ]} scale="log" type="number" allowDataOverflow >
                                    <Label value={ country.name } position="top" offset={250}/>
                                </XAxis>
                                <YAxis dataKey="daily" scale="log" domain={[1, Math.max(...this.state.chartData[country.code].map(o => o.daily), 0)*1.2 ]} type="number" allowDataOverflow >
                                   
                                </YAxis>
                                
                                <Tooltip />
                                <Scatter data={this.state.chartData[country.code]} fill={country.stroke} />
                        </ScatterChart>   

                                         
                    
                </ResponsiveContainer>
                )) }
            </div>
        )
    }
    
}

export default Deaths;