import React from "react";
import { Line } from 'recharts';


class CustomLine extends Line {
    static defaultProps = {
        ...Line.defaultProps,
        // Customized props
        strokeWidth: 2,
        dot: false,
    };

    
}

export default CustomLine;