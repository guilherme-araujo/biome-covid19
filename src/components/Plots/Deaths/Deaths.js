import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Label } from 'recharts';

import country_data from './country_data.json';
import api from '../../../services/api';

class Deaths extends React.Component {

    constructor(props) {
        super(props);

        this.countries = country_data;
        this.chartData = {};

        this.countries.forEach((country) => {
            this.chartData[country.code] = []
        })

        this.state = {
            chartData: this.chartData,
            date: '',
            loading: true
        }
    }

    componentDidUpdate(previousProps) {
        if (this.props.date !== previousProps.date) {
            this.setState({
                loading: true
            }, () => {
                api.get('covid_norm-plot4/' + this.props.date).then(
                    externalData => {

                        let _chartData = {}

                        this.countries.forEach((country) => {
                            _chartData[country.code] = []
                        })

                        externalData.data.forEach((line) => {
                            this.countries.forEach((country) => {
                                if (line[country.code] !== null && line.cumulative !== 0) {
                                    _chartData[country.code].push({
                                        "cumulative": line["cumulative"],
                                        "daily": line[country.code]
                                    })
                                }
                            })
                        })

                        this.setState({
                            chartData: _chartData,
                            date: this.props.date,
                            loading: false
                        })
                    }
                );
            })
        }
    }

    render() {
        return (
            <div className="d-flex flex-wrap mt-3">
                {this.state.loading ? (
                    <ResponsiveContainer height={700} >
                        <p>Loading...</p>
                    </ResponsiveContainer>

                ) : (
                        <>
                            {this.countries.map((country, index) => (
                                <ResponsiveContainer height={350} width="33%" key={index}>
                                    <ScatterChart
                                        margin={{ top: 35, right: 8, left: 30, bottom: 55 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="cumulative" domain={[1, Math.max(...this.state.chartData[country.code].map(o => o.cumulative), 0) * 1.2]} scale="log" type="number" allowDataOverflow >
                                            <Label value={country.name} position="top" offset={250} />
                                        </XAxis>
                                        <YAxis dataKey="daily" scale="log" domain={[1, Math.max(...this.state.chartData[country.code].map(o => o.daily), 0) * 1.2]} type="number" allowDataOverflow >

                                        </YAxis>

                                        <Tooltip />
                                        <Scatter data={this.state.chartData[country.code]} fill={country.stroke} />
                                    </ScatterChart>
                                </ResponsiveContainer>
                            ))}
                        </>
                    )}
            </div>
        )
    }
}

export default Deaths;