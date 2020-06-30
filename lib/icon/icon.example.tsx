import React from 'react';
import Icon from './icon';


const IconExample: React.FunctionComponent = () => {
    return (
        <div>
            <Icon name="chart" style={{fontSize:"20px"}}/>
            <Icon name="file"/>
            <Icon name="user"/>
        </div>
    );
};

export default IconExample;