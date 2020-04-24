import React from 'react';


export default function CustomYAxis(props) {
    return (
        <div className="y-axis-wrapper">
        <svg  width={110} height={700} viewBox="0 0 110 700">
        <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
            <line className="recharts-cartesian-axis-line" width="60" height="620" x="50" y="25" stroke="#666" fill="none" x1="110" y1="25" x2="110" y2="645"></line>
            <g className="recharts-cartesian-axis-ticks">
                <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line className="recharts-cartesian-axis-tick-line" width="60" height="620" x="50" y="25" stroke="#666" fill="none" x1="104" y1="645" x2="110" y2="645"></line>
                    <text width="60" height="620" x="102" y="645" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                        <tspan x="102" dy="0.355em">0</tspan>
                    </text>
                </g>
                <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line className="recharts-cartesian-axis-tick-line" width="60" height="620" x="50" y="25" stroke="#666" fill="none" x1="104" y1="490" x2="110" y2="490"></line>
                    <text width="60" height="620" x="102" y="490" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                        <tspan x="102" dy="0.355em">100000</tspan>
                    </text>
                </g>
                <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line className="recharts-cartesian-axis-tick-line" width="60" height="620" x="50" y="25" stroke="#666" fill="none" x1="104" y1="335" x2="110" y2="335"></line>
                    <text width="60" height="620" x="102" y="335" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                        <tspan x="102" dy="0.355em">200000</tspan>
                    </text>
                </g>
                <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line className="recharts-cartesian-axis-tick-line" width="60" height="620" x="50" y="25" stroke="#666" fill="none" x1="104" y1="180" x2="110" y2="180"></line>
                    <text width="60" height="620" x="102" y="180" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                        <tspan x="102" dy="0.355em">300000</tspan>
                    </text>
                </g>
                <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line className="recharts-cartesian-axis-tick-line" width="60" height="620" x="50" y="25" stroke="#666" fill="none" x1="104" y1="25" x2="110" y2="25"></line>
                    <text width="60" height="620" x="102" y="25" stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end">
                        <tspan x="102" dy="0.355em">400000</tspan>
                    </text>
                </g>
            </g>
            <text x="30" y="335" transform="rotate(270, 30, 335)" className="recharts-text recharts-label" textAnchor="end">
                <tspan x="30" dy="0.355em">Total Cases (cumulative)</tspan>
            </text>
        </g>
        </svg>
        </div>
    );
}