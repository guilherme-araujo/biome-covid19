import { Line } from 'recharts';

class CustomLine extends Line {
    static defaultProps = {
        ...Line.defaultProps,
        // Customized props
        strokeWidth: 2,
        dot: false,
        isAnimationActive: false
    };

    
}

export default CustomLine;