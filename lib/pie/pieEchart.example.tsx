import React, {Fragment} from 'react';
import PieEchartIndex from './pieEchart';
import PieEchart from './pieBorderEchart';


const PieEchartExample: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div >
        <PieEchartIndex style={{width:400,height:300,border:'1px solid red'}} />
      </div>
      <div style={{display:'flex'}}>
        <PieEchart
          style={{width:400,height:300,border:'1px solid red'}}
        />
        <PieEchart
          style={{width:400,height:300,border:'1px solid red'}}
          condition={{
            titlePosition:"left",
            hasClockWise:true, // 是否顺时针
            hasLegend:true, // 是否展示图例
            isRosePie:false, // 是否南丁格尔图
            hasBorder:true, // 是否有边框
            showLabel:true,
            centerData:["50%","50%"],
            colors:[
            "#5CD5E3",
            "#DC69AB",
            "#61ADDD",
            "#DE9462",
            "#91C7AE",
            "#919BC6",
            "#C391C6",
            "#DC6868",
            "#B6DC6B",
            "#D0C862"],
            styleSize:{}
          }}
        />
        <PieEchart
          style={{width:400,height:300,border:'1px solid red'}}
          condition={{
            titlePosition:"left",
            hasClockWise:true, // 是否顺时针
            hasLegend:true, // 是否展示图例
            isRosePie:true, // 是否南丁格尔图
            hasBorder:false, // 是否有边框
            showLabel:true,
            centerData:["50%","50%"],
            colors:[
              "#5CD5E3",
              "#DC69AB",
              "#61ADDD",
              "#DE9462",
              "#91C7AE",
              "#919BC6",
              "#C391C6",
              "#DC6868",
              "#B6DC6B",
              "#D0C862"],
            styleSize:{}
          }}
        />
      </div>
      <div>
        <p>饼图引用方法如下</p>
        <code>
          xxx
        </code>
      </div>
    </Fragment>

  );
};

export default PieEchartExample;