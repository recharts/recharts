import React, {PropTypes} from 'react';
import {BarChart, Bar, Brush, CartesianGrid, ReferenceLine, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import ColorUtil from 'recharts-color-utils';

let colors = ColorUtil.Palette('#ffc658', 'rectangle');

const CustomLabel = React.createClass({
  render() {
    const { payload, x, y } = this.props;
    return <text x={x} y={y} fill="#666" textAnchor="middle" dy={-4}>{payload.province}</text>;
  }
});
const CustomAxisLabel = React.createClass({
  render() {
    const {x, y, payload} = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
});

const CustomBar = React.createClass({
  getPath () {
    const {x, y, width, height} = this.props;

    return `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
            Z`;
  },
  render () {
    const {fill} = this.props;

    return <path d={this.getPath()} stroke='none' fill={fill}/>;
  }
});
const BarTwo = React.createClass({
  getPath () {
    const {x, y, width, height} = this.props;
    const extend = width * 0.2;

    return `M${x - extend},${y + height}
            C${x - extend + width / 3},${y + height} ${x + width / 6},${y} ${x + width / 2}, ${y}
            C${x + 5 * width / 6},${y} ${x + extend + 2 * width / 3},${y + height} ${x + width + extend}, ${y + height}
            Z`;
  },
  render () {
    const {fill, fillOpacity} = this.props;

    return <path d={this.getPath()} stroke='none' fillOpacity={fillOpacity} fill={fill}/>;
  }
});

const CustomAxis = React.createClass({
  getIcon () {
    const {x, y, payload} = this.props;
    let icon;

    switch(payload.value) {
      case 'food':
        icon = (
          <svg x={x - 10} y={y} width={20} height={20} version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024">
            <path fill="#387908" d="M960 682.666667c-8.533333 0-21.333333 0-21.333333 0l-85.333333 0c-23.466667 0-42.666667-19.2-42.666667-42.666667 0-8.533333 0-21.333333 0-21.333333 0-6.4 0-14.933333 0-21.333333 0-164.266667-134.4-298.666667-298.666667-298.666667s-298.666667 134.4-298.666667 298.666667c0 6.4 0 14.933333 2.133333 21.333333 0 0-2.133333 12.8-2.133333 21.333333 0 23.466667-19.2 42.666667-42.666667 42.666667L85.333333 682.666667c0 0-12.8 0-21.333333 0-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667c8.533333 0 21.333333 0 21.333333 0l42.666667 0c0-189.866667 138.666667-347.733333 320-377.6 0-2.133333 0-4.266667 0-6.4 0-36.266667 27.733333-64 64-64s64 27.733333 64 64c0 2.133333 0 4.266667 0 6.4 181.333333 29.866667 320 187.733333 320 377.6l42.666667 0c0 0 12.8 0 21.333333 0 23.466667 0 42.666667 19.2 42.666667 42.666667S983.466667 682.666667 960 682.666667zM469.333333 384 469.333333 384c0 0 6.4 0 10.666667 0 17.066667 0 32 14.933333 32 32S497.066667 448 480 448c-4.266667 0-10.666667 0-10.666667 0l0 0c-70.4 0-128 57.6-128 128 0 0 0 6.4 0 10.666667 0 17.066667-14.933333 32-32 32S277.333333 603.733333 277.333333 586.666667c0-4.266667 0-10.666667 0-10.666667C277.333333 469.333333 362.666667 384 469.333333 384zM64 789.333333l896 0c23.466667 0 42.666667 19.2 42.666667 42.666667s-19.2 42.666667-42.666667 42.666667L64 874.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667S40.533333 789.333333 64 789.333333z" />
          </svg>
        );
        break;
      case 'cosmetic':
        icon = (
          <svg x={x - 10} y={y} width={20} height={20} version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024">
            <path fill="#387908" d="M874.666667 940.8 149.333333 940.8c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667l42.666667 0 0-170.666667c0-23.466667 19.2-42.666667 42.666667-42.666667l64 0 0-512c0-23.466667 17.066667-42.666667 38.4-46.933333 8.533333-2.133333 19.2 2.133333 19.2 2.133333S680.533333 256 682.666667 258.133333c25.6 8.533333 42.666667 25.6 42.666667 42.666667l0 341.333333 64 0c23.466667 0 42.666667 19.2 42.666667 42.666667l0 170.666667 42.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667S898.133333 940.8 874.666667 940.8zM640 334.933333 384 196.266667l0 445.866667 256 0L640 334.933333zM746.666667 727.466667l-21.333333 0-85.333333 0L384 727.466667l-85.333333 0-21.333333 0 0 128 469.333333 0L746.666667 727.466667z" />
          </svg>
        );
        break;
      case 'storage':
        icon = (
          <svg x={x - 10} y={y} width={20} height={20} version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024">
            <path fill="#387908" d="M896 928.234667 128 928.234667C104.426667 928.234667 85.333333 909.141333 85.333333 885.568L85.333333 629.568C85.333333 605.994667 104.426667 586.901333 128 586.901333L163.52 586.901333 434.837333 116.970667C446.613333 96.554667 472.704 89.578667 493.12 101.354667L714.816 229.354667C735.232 241.130667 742.208 267.221333 730.432 287.637333L714.176 315.797333 864.426667 402.56C884.842667 414.336 891.84 440.426667 880.042667 460.842667L807.274667 586.901333 896 586.901333C919.573333 586.901333 938.666667 605.994667 938.666667 629.568L938.666667 885.568C938.666667 909.141333 919.573333 928.234667 896 928.234667ZM487.402667 196.586667 262.058667 586.901333 459.114667 586.901333 635.2 281.92 487.402667 196.586667ZM557.653333 586.901333 708.736 586.901333 784.810667 455.125333 671.509333 389.696 557.653333 586.901333ZM853.333333 672.234667 170.666667 672.234667 170.666667 842.901333 853.333333 842.901333 853.333333 672.234667Z" />
          </svg>
        );
        break;
      case 'digital':
        icon = (
          <svg x={x - 10} y={y} width={20} height={20} version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024">
            <path fill="#387908" d="M896 896 128 896C104.426667 896 85.333333 876.906667 85.333333 853.333333L85.333333 298.666667C85.333333 275.093333 104.426667 256 128 256L896 256C919.573333 256 938.666667 275.093333 938.666667 298.666667L938.666667 853.333333C938.666667 876.906667 919.573333 896 896 896ZM853.333333 341.333333 170.666667 341.333333 170.666667 810.666667 853.333333 810.666667 853.333333 341.333333ZM512 405.333333C606.250667 405.333333 682.666667 481.749333 682.666667 576 682.666667 670.250667 606.250667 746.666667 512 746.666667 417.749333 746.666667 341.333333 670.250667 341.333333 576 341.333333 481.749333 417.749333 405.333333 512 405.333333ZM512 661.333333C559.125333 661.333333 597.333333 623.125333 597.333333 576 597.333333 528.874667 559.125333 490.666667 512 490.666667 464.874667 490.666667 426.666667 528.874667 426.666667 576 426.666667 623.125333 464.874667 661.333333 512 661.333333ZM448 213.333333 234.666667 213.333333C211.093333 213.333333 192 194.24 192 170.666667 192 147.093333 211.093333 128 234.666667 128L448 128C471.573333 128 490.666667 147.093333 490.666667 170.666667 490.666667 194.24 471.573333 213.333333 448 213.333333Z" />
          </svg>
        );
        break;
    }

    return icon;
  },

  render () {
    const {x, y, payload} = this.props;

    return (
      <g>
        {this.getIcon()}
        <text textAnchor='middle' x={x} y={y} dy={34}>{payload.value}</text>
      </g>
    )
  }
});

export default React.createClass({
  displayName: 'BarChartDemo',

  render () {
    const data = [
      {name: 'food', uv: 400, pv: 2400},
      {name: 'cosmetic', uv: 300, pv: 4567},
      {name: 'storage', uv: 300, pv: 1398},
      {name: 'digital', uv: 200, pv: 9800}
    ];
    const data2 = [
      {name: '201102', uv: -6.11, pv: 0},
      {name: '201103', uv: 0.39, pv: 0},
      {name: '201104', uv: -1.37, pv: 0},
      {name: '201105', uv: 1.16, pv: 0},
      {name: '201106', uv: 1.29, pv: 0},
      {name: '201107', uv: 0.09, pv: 0},
      {name: '201108', uv: 0.53, pv: 0},
      {name: '201109', uv: 2.52, pv: 0},
      {name: '201110', uv: 0.79, pv: 0},
      {name: '201111', uv: 2.94, pv: 0},
      {name: '201112', uv: 4.3, pv: 0},
      {name: '201201', uv: 7.41, pv: 14.21},
      {name: '201202', uv: -7.1, pv: 13.01},
      {name: '201203', uv: -1.17, pv: 11.26},
      {name: '201204', uv: -1.86, pv: 10.7},
      {name: '201205', uv: -0.16, pv: 9.26},
      {name: '201206', uv: -1.25, pv: 6.53},
      {name: '201207', uv: 0.22, pv: 6.66},
      {name: '201208', uv: 0.72, pv: 6.86},
      {name: '201209', uv: 1.82, pv: 6.12},
      {name: '201210', uv: 1.64, pv: 7.02},
      {name: '201211', uv: 3.16, pv: 7.25},
      {name: '201212', uv: 1.31, pv: 4.17},
      {name: '201301', uv: 2.91, pv: -0.19},
      {name: '201302', uv: -0.47, pv: 6.94},
      {name: '201303', uv: -4.15, pv: 3.71},
      {name: '201304', uv: -1.82, pv: 3.76},
      {name: '201305', uv: -0.93, pv: 2.95},
      {name: '201306', uv: -0.99, pv: 3.22},
      {name: '201307', uv: -0.52, pv: 2.46},
      {name: '201308', uv: 1.54, pv: 3.3},
      {name: '201309', uv: 2.05, pv: 3.54},
      {name: '201310', uv: 0.7, pv: 2.58},
      {name: '201311', uv: 2.25, pv: 1.59},
      {name: '201312', uv: 3.59, pv: 3.92},
      {name: '201401', uv: 3.63, pv: 4.64},
      {name: '201402', uv: -4.91, pv: -0.02},
      {name: '201403', uv: -2.66, pv: 1.54},
      {name: '201404', uv: -1.50, pv: 1.86},
      {name: '201405', uv: -0.19, pv: 2.62},
      {name: '201406', uv: -0.22, pv: 3.42},
      {name: '201407', uv: -0.58, pv: 3.35},
      {name: '201408', uv: 0.89, pv: 2.69},
      {name: '201409', uv: 2.22, pv: 2.86},
      {name: '201410', uv: 0.61, pv: 2.77},
      {name: '201411', uv: 2.37, pv: 2.97},
      {name: '201412', uv: 3.06, pv: 2.41},
      {name: '201501', uv: 1.07, pv: -0.13},
      {name: '201502', uv: 4.04, pv: 9.27},
      {name: '201503', uv: -5.14, pv: 6.48},
      {name: '201504', uv: -1.69, pv: 6.28},
      {name: '201505', uv: 0.51, pv: 7.03},
      {name: '201506', uv: 1.03, pv: 8.37},
      {name: '201507', uv: -1.14, pv: 7.76},
      {name: '201508', uv: 0.53, pv: 7.38},
      {name: '201509', uv: 1.51, pv: 6.63},
      {name: '201510', uv: -0.16, pv: 5.81},
      {name: '201511', uv: 3.27, pv: 6.74},
    ];

    const seller = [{
      cate: '山核桃/坚果/炒货',
      province: '安徽省',
      searchIndex: 1839109.93076351,
    }, {
      cate: '饼干/膨化',
      province: '广东省',
      searchIndex: 622982.275649824,
    }, {
      cate: '巧克力',
      province: '上海',
      searchIndex: 585272.377090585,
    }, {
      cate: '蜜饯/枣类/梅/果干',
      province: '浙江省',
      searchIndex: 481116.468800108,
    }, {
      cate: '牛肉干/猪肉脯/卤味零食',
      province: '浙江省',
      searchIndex: 461574.227199966,
    }, {
      cate: '糖果零食/果冻/布丁',
      province: '广东省',
      searchIndex: 427609.867599949,
    }, {
      cate: '糕点/点心',
      province: '浙江省',
      searchIndex: 415203.625121803,
    }, {
      cate: '鱿鱼丝/鱼干/海味即食',
      province: '山东省',
      searchIndex: 269468.365197646,
    }, {
      cate: '巧克力/DIY巧克力',
      province: '上海',
      searchIndex: 254133.555933591,
    }, {
      cate: '奶酪/乳制品',
      province: '内蒙古',
      searchIndex: 189697.819664556,
    }, {
      cate: '豆干制品/蔬菜干',
      province: '湖南省',
      searchIndex: 187087.48618712,
    }];
    const buyer = [{
      cate: '山核桃/坚果/炒货',
      province: '浙江省',
      searchIndex: 1023646.28804588,
    }, {
      cate: '蜜饯/枣类/梅/果干',
      province: '广东省',
      searchIndex: 509964.815068001,
    }, {
      cate: '饼干/膨化',
      province: '广东省',
      searchIndex: 505761.351335363,
    }, {
      cate: '牛肉干/猪肉脯/卤味零食',
      province: '浙江省',
      searchIndex: 498318.907475999,
    }, {
      cate: '糕点/点心',
      province: '广东省',
      searchIndex: 400880.029483245,
    }, {
      cate: '糖果零食/果冻/布丁',
      province: '广东省',
      searchIndex: 389512.213887801,
    }, {
      cate: '巧克力',
      province: '广东省',
      searchIndex: 273812.534948759,
    }, {
      cate: '鱿鱼丝/鱼干/海味即食',
      province: '广东省',
      searchIndex: 219422.496761267,
    }, {
      cate: '巧克力/DIY巧克力',
      province: '广东省',
      searchIndex: 159591.6597615,
    }, {
      cate: '豆干制品/蔬菜干',
      province: '江苏省',
      searchIndex: 156907.075080761,
    }, {
      cate: '奶酪/乳制品',
      province: '福建省',
      searchIndex: 61395.5046967385,
    }];

    const gender = [{
      cate: '山核桃/坚果/炒货',
      female: 4424855,
      male: 2125194,
      total: 6550049,
    }, {
      cate: '蜜饯/枣类/梅/果干',
      female: 3074885,
      male: 1286577,
      total: 4361462,
    }, {
      cate: '饼干/膨化',
      female: 2361883,
      male: 988327,
      total: 3350210,
    }, {
      cate: '糕点/点心',
      female: 2052923,
      male: 927169,
      total: 2980092,
    }, {
      cate: '牛肉干/猪肉脯/卤味零食',
      female: 1757580,
      male: 897722,
      total: 2655302,
    }, {
      cate: '糖果零食/果冻/布丁',
      female: 1700489,
      male: 712896,
      total: 2413385,
    }, {
      cate: '鱿鱼丝/鱼干/海味即食',
      female: 940808,
      male: 408618,
      total: 1349426,
    }, {
      cate: '豆干制品/蔬菜干',
      female: 857907,
      male: 389851,
      total: 1247758,
    }, {
      cate: '巧克力',
      female: 701143,
      male: 341501,
      total: 1042644,
    }, {
      cate: '巧克力/DIY巧克力',
      female: 355727,
      male: 166773,
      total: 522500,
    }, {
      cate: '奶酪/乳制品',
      female: 96403,
      male: 41512,
      total: 137915,
    }];


    return (
      <div className='bar-charts'>
        <p>Simple BarChart</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={740} height={340} data={seller} margin={{top: 20, right: 20, bottom: 100, left: 80}}>
            <XAxis dataKey='cate' interval={0} label={<CustomAxisLabel/>}/>
            <YAxis label={false} hide/>
            <CartesianGrid stroke="#f5f5f5"/>
            <Bar dataKey='searchIndex' barSize={30} fill='#8884d8' label={<CustomLabel/>}/>
          </BarChart>
        </div>

        <p>Simple BarChart</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={740} height={340} data={buyer} margin={{top: 20, right: 20, bottom: 100, left: 80}}>
            <XAxis dataKey='cate' interval={0} label={<CustomAxisLabel/>}/>
            <YAxis label={false} hide/>
            <CartesianGrid stroke="#f5f5f5"/>
            <Bar dataKey='searchIndex' barSize={30} fill='#8884d8' label={<CustomLabel/>}/>
          </BarChart>
        </div>

        <p>Simple BarChart</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={740} height={340} data={gender} margin={{top: 20, right: 20, bottom: 100, left: 80}}>
            <XAxis dataKey='cate' interval={0} label={<CustomAxisLabel/>}/>
            <YAxis label={false} hide/>
            <CartesianGrid stroke="#f5f5f5"/>
            <Bar dataKey='male' name="男" fill='#8884d8' stackId={0}/>
            <Bar dataKey='female' name="女" fill='#82ca9d' stackId={0}/>
            <Legend layout="vertical" wrapperStyle={{right: 30, bottom: 120}} verticalAlign="top"/>
          </BarChart>
        </div>

        <p>Simple BarChart</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={400} height={400} data={data}>
            <XAxis dataKey='name'/>
            <YAxis/>
            <CartesianGrid vertical={false}/>
            <Bar dataKey='uv' fill='#ff7300' label/>
            <Bar dataKey='pv' fill='#387908' label/>
          </BarChart>
        </div>

        <p>BarChart of layout vertical</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={400} height={400} data={data} layout='vertical'>
            <XAxis type='number'/>
            <YAxis dataKey='name' type='category'/>
            <CartesianGrid horizontal={false}/>
            <Bar dataKey='uv' fill='#ff7300'/>
            <Bar dataKey='pv' fill='#387908'/>
          </BarChart>
        </div>

        <p>Tiny BarChart</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey='uv' fill='#ff7300'/>
          </BarChart>
        </div>

        <p>BarChart of positive and negative values</p>
        <div className='bar-chart-wrapper' style={{userSelect: "none", WebkitUserSelect: "none"}}>
          <BarChart width={1100} height={250} barGap={2} barSize={6} data={data2} margin={{top: 20, right: 60, bottom: 0, left: 20}}>
            <XAxis dataKey='name'/>
            <YAxis tickCount={7}/>
            <Bar dataKey='uv' fill='#ff7300'/>
            <Bar dataKey='pv' fill='#387908'/>
            <Tooltip />
            <CartesianGrid/>
            <Brush dataKey='name' height={30}/>
            <ReferenceLine type='horizontal' value={0} stroke='#666'/>
          </BarChart>
        </div>

        <p>BarChart of custom bar (1)</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={500} height={250} barCategoryGap={0} data={data}  margin={{top: 20, right: 20, bottom: 0, left: 20}}>
            <XAxis dataKey='name'/>
            <Bar dataKey='uv' barGap={0} fill='#ff7300' customContent={<CustomBar/>}/>
          </BarChart>
        </div>

        <p>BarChart of custom bar (2)</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={500} height={250} barCategoryGap={0} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis axisLine={false} tickLine={false} dataKey='name' label={<CustomAxis />}/>
            <Bar dataKey='uv' barGap={0} fill="#387908" customContent={<BarTwo/>} label/>
          </BarChart>
        </div>
      </div>
    );
  }
});

