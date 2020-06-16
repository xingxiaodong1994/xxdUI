import echarts from 'echarts'
import  React from 'react';
import isEqual from 'lodash/isEqual';
import EchartFontSize from './echartFontSize'
import './pieEchart.scss'
import EChartOption = echarts.EChartOption;
import {fixClass} from '../helpers/classNames';


const sc=fixClass('xxdui-pie');
interface EchartFontSizeType {
  titleSize?: number;
  xAxisSize?: number;
  legendSize?: number;
  yAxisSize?: number;
  tooltipSize?: number;
  pietextSize?: number;
  downloadSize?: string;
  titleWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400';
}

interface chartType {
  name: string;
  data: Array<string>;
  unit: string;
}

interface Props extends React.HTMLAttributes<HTMLElement> {
  "chart-data": {
    title: string;
    chartX: Array<string>;
    chart: Array<chartType>;
    example: Array<string>;
  };
}

interface State {

}
class PieEchartIndex extends React.PureComponent<Props,State>{
  public chartDom: React.RefObject<any>;
  static defaultProps: Props = {
    'chart-data': {
      title: '多层堆积图',
      chartX: ['2019年1月', '2019年02月'],
      chart: [
        {
          name: '邮件营销',
          data: ['230', '210'],
          unit: '%',
        },
        {
          name: '联盟广告',
          data: ['330', '310'],
          unit: '%',
        },
        {
          name: '邮件营销1',
          data: ['230', '210'],
          unit: '%',
        },
        {
          name: '联盟广告1',
          data: ['330', '310'],
          unit: '%',
        },
      ],
      example: ['邮件营销', '联盟广告', '邮件营销1', '联盟广告1'],
    },
  };

  constructor(props:Props){
    super(props);
    this.state={};
    this.chartDom = React.createRef();

  }

  componentDidMount(): void {
    const  chartData  = this.props['chart-data'];
    if (chartData) {
      this.createChart(chartData);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const  chartData  = this.props['chart-data'];
    if (chartData && !isEqual(prevProps['chart-data'], chartData)) {
      this.createChart(chartData);
    }
  }

  // 处理数据格式
  formatData = (data: string) => {
    return data.indexOf(',') === -1 ? parseFloat(data) : parseFloat(data.replace(/,/g, ''));
  };

  createChart: (chartData: Props['chart-data']) => void = data => {
    if (data && data.chartX) {
      const color = ['#FDB984', '#D47279', '#B6A3DC', '#59B0ED'];
      const fontsize = EchartFontSize();
      const {
        titleSize,
        titleWeight,
        yAxisSize,
        tooltipSize,
        legendSize,
      }: EchartFontSizeType = fontsize;
      const newChart = data.chart.map((item)=> ({
        name: item.name,
        value: item.data.map(item1 => ({
          value: this.formatData(item1),
          normalData: item1,
          unit: item.unit,
        })),
      }));
      const seriesData = newChart.map(item => ({
        name: item.name,
        data: item.value,
        stack: 'one',
        type: 'bar',
      }));
      const chartXData = data.chartX;
      const legendData = data.example;
      const { title } = data;
      const option: EChartOption = {
        color, // 柱状图颜色
        title: {
          text: title,
          top: 5,
          left: 'center',
          textStyle: {
            fontSize: titleSize,
            fontWeight: titleWeight,
            align: 'center',
          },
        },
        grid: {
          top: 60,
          left: '10%',
          right: '10%',
          bottom: 60,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          confine: true, // 限制在图标区域内
          show: true,
          textStyle: {
            fontSize: tooltipSize,
          },
          axisPointer: {
            lineStyle: {
              color: 'rgba(86,84,86,0.2)',
            },
          },
          formatter(params) {
            let showTip = '';
            (params as [any]).forEach(par => {
              if (par.axisDim === 'x') {
                showTip += `${par.marker} ${par.seriesName} : ${par.data.normalData}  ${
                  par.data.normalData === '-' ? '' : par.data.unit
                  }  <br/>`;
              }
            });
            return `${(params as Array<any>)[0].axisValue} <br/> ${showTip}`;
          },
        },
        legend: {
          data: legendData,
          textStyle: {
            color: '#999999',
            fontSize: legendSize,
          },
          orient: 'horizontal',
          selectedMode: false, // 图例不可点击
          left: 'center',
          bottom: 0,
          padding: [1, 0, 5, 0],
        },
        xAxis: {
          type: 'category',
          data: chartXData,
          axisLine: {
            show: true, // x轴坐标轴线不展示
            lineStyle: {
              color: '#2F9DD4',
            },
          },
          axisTick: {
            show: false, // x轴坐标刻度不展示
          },
          axisLabel: {
            color: '#333',
          },
        },
        yAxis: {
          type: 'value',
          splitNumber: 3,
          // data: { textStyle: { fontSize: yAxisSize } },
          splitLine: {
            show: false, // y轴分割线展示
          },
          axisLine: {
            show: true, // y轴坐标轴线不展示
            lineStyle: {
              color: '#2F9DD4',
            },
          },
          axisTick: {
            show: false, // y轴坐标刻度不展示
          },
          axisLabel: {
            show: true, // y轴坐标标签展示
            fontSize: yAxisSize,
            color: '#333',
          },
        },
        series: seriesData,
      };
      const myChart = echarts.init(this.chartDom.current);
      myChart.clear();
      myChart.setOption(option);
    }
  };

  render(): React.ReactNode {
    const {className,...rest}=this.props;
    return (
      <div className={sc('',{extra:className})} {...rest}>
        <div className={sc('chart')} ref={this.chartDom} />
      </div>
    )
  };

}

export default PieEchartIndex