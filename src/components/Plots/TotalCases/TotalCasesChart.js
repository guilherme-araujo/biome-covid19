import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, Label } from 'recharts';

import CustomLine from '../CustomLine';

import country_data from './country_data.json';
import api from '../../../services/api';

class TotalCasesChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            country_data: country_data,
            data: [],
            date: '',
            loading: true
        }
    }

    selectLine(event) {
        let updatedLines = [];
        for (let i = 0; i < this.state.country_data.length; i++) {
            let country = this.state.country_data[i];
            if (country.code !== event.dataKey) {
                updatedLines.push(country)
            } else {
                if (/\s/.test(country.code)) {
                    let newLine = { code: country.code.trim(), stroke: country.stroke, name: country.name }
                    updatedLines.push(newLine);
                } else {
                    let newLine = { code: country.code + " ", stroke: country.stroke, name: country.name }
                    updatedLines.push(newLine);
                }
            }
        }
        this.setState({
            country_data: updatedLines,

        });
    }

    
    componentDidUpdate(previousProps) {
        if (this.props.date !== previousProps.date ) {
            this.setState({
                loading: true
            }, () => {

                api.get('covid_norm/' + this.props.date).then(
                    externalData => {
                        this.setState({
                            data: externalData.data,
                            date: this.props.date,
                            loading: false
                        });
                    }
                );

            })

            
        }

    }

    render() {
        return (
            <>
                {this.state.loading ? (
                    <ResponsiveContainer height={700} >
                        <p>Loading...</p>
                    </ResponsiveContainer>
                    
                ) : (

                        <ResponsiveContainer height={700} >
                            <LineChart
                                data={this.state.data}
                                margin={{ top: 25, right: 0, left: 30, bottom: 25 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" >
                                    <Label value="Date" position="bottom" />
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
                                {this.state.country_data.map((country, index) => (
                                    <CustomLine
                                        dataKey={country.code}
                                        stroke={country.stroke}
                                        name={country.name}
                                        key={index}
                                    />
                                ))}
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    )}
            </>
        )
    }
}

export default TotalCasesChart;