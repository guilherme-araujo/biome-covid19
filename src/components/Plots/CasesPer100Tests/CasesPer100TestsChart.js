import React, { PureComponent } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Label } from 'recharts';

import CustomLine from '../CustomLine';

import country_data from './country_data.json';
import api from '../../../services/api';

import './styles.css'

class CustomizedAxisTick extends PureComponent {
    render() {
        const {
            x, y, payload,
        } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-60)">{payload.value}</text>
            </g>
        );
    }
}

class CasesPer100TestsChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            country_data: country_data,
            data: [],
            date: '',
            loading: true
        }
    }

    componentDidUpdate(previousProps) {
        if (this.props.date !== previousProps.date) {
            this.setState({
                loading: true
            }, () => {
                api.get('covid_norm-plot3/' + this.props.date).then(
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
            <div className="d-flex flex-wrap mt-3">
                {this.state.loading ? (
                    <ResponsiveContainer height={700} >
                        <p>Loading...</p>
                    </ResponsiveContainer>

                ) : (
                        <>
                            {this.state.country_data.map((country, index) => (
                                <ResponsiveContainer height={350} width="50%" key={index} >
                                    <LineChart data={this.state.data.slice(country.slice)}
                                        margin={{ top: 35, right: 8, left: 30, bottom: 55 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" allowDataOverflow tick={<CustomizedAxisTick />} interval={country.interval}>
                                            <Label value={country.name} position="top" offset={250} />
                                        </XAxis>
                                        <YAxis allowDataOverflow  >

                                        </YAxis>
                                        <CustomLine
                                            connectNulls={true}
                                            dataKey={country.name}
                                            stroke={country.stroke}
                                            name={country.name}
                                        />
                                        <Tooltip />
                                    </LineChart>
                                </ResponsiveContainer>
                            ))}
                        </>
                    )}
            </div>
        )
    }

}

export default CasesPer100TestsChart;