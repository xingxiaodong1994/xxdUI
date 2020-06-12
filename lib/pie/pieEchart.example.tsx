import React, {Fragment} from 'react';
import PieEchartIndex from './pieEchart';


const PieEchartExample: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div >
        <PieEchartIndex style={{width:400,height:300,border:'1px solid red'}} />
      </div>
    </Fragment>

  );
};

export default PieEchartExample;