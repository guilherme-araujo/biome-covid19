import React, { PureComponent } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Label } from 'recharts';

import CustomLine from '../CustomLine';

import data from './covid_norm-plot3.json';
import country_data from './country_data.json';

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

        this.countries = country_data;

        this.state = {
            countryList: this.countries
        }

    }

    render() {
        return (
            <div className="d-flex flex-wrap mt-3">
                {this.state.countryList.map((country, index) => (
                    <ResponsiveContainer height={350} width="33%" key={index} >
                        <LineChart data={data.slice(country.slice)}
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
            </div>
        )
    }

}

export default CasesPer100TestsChart;