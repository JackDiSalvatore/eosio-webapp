import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography';


const Track = styled.div`
    width: 15em;
    height: 30px;
    
    border: 1px solid #fff;
    border-radius: 10px;
    
    background-color: 'transparent',
`;

const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-image: ${props => props.theme.backgroundImage};
    border-radius: 8px;
    display: flex;
    transition: width: 0.3s ease-in-out;
`;


export default class ProgressBar extends React.Component {

    clamp = (min, value, max) => {
        return Math.min(Math.max(min, value), max)
    }

    render() {
        
        return (
            <Track>
                <Thumb percentage={this.clamp(0, this.props.percentage, 100)}>
                
                    <Typography style={{color:  "#FFF", margin: 'auto'}}>
                        {this.props.percentage}%
                    </Typography>
                
                </Thumb>

            </Track>
        )
    }
}

ProgressBar.propTypes = {
    percentage: PropTypes.number,
}