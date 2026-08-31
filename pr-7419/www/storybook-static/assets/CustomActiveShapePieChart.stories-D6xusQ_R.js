import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./Tooltip-tAkHHdqP.js";import{n as s,t as c}from"./Sector-BQTbrNsB.js";import{i as l,n as u,r as d,t as f}from"./PieChart-BjXr2j_9.js";var p,m,h,g,_,v;function y(){return(y=t((()=>{p=e(n()),l(),u(),i(),s(),a(),m={component:d},h=[{name:`Group A`,value:400},{name:`Group B`,value:300},{name:`Group C`,value:300},{name:`Group D`,value:200}],g=()=>null,_={render:e=>{let t=e=>{let t=Math.PI/180,{cx:n=0,cy:r=0,midAngle:i=0,innerRadius:a,outerRadius:o=0,startAngle:s,endAngle:l,fill:u,payload:d,percent:f=0,value:m}=e,h=Math.sin(-t*i),g=Math.cos(-t*i),_=n+(o+10)*g,v=r+(o+10)*h,y=n+(o+30)*g,b=r+(o+30)*h,x=y+(g>=0?1:-1)*22,S=b,C=g>=0?`start`:`end`;return e.isActive?p.createElement(`g`,null,p.createElement(`text`,{x:n,y:r,dy:8,textAnchor:`middle`,fill:u},d.name),p.createElement(c,{cx:n,cy:r,innerRadius:a,outerRadius:o,startAngle:s,endAngle:l,fill:u}),p.createElement(c,{cx:n,cy:r,startAngle:s,endAngle:l,innerRadius:o+6,outerRadius:o+10,fill:u}),p.createElement(`path`,{d:`M${_},${v}L${y},${b}L${x},${S}`,stroke:u,fill:`none`}),p.createElement(`circle`,{cx:x,cy:S,r:2,fill:u,stroke:`none`}),p.createElement(`text`,{x:x+(g>=0?1:-1)*12,y:S,textAnchor:C,fill:`#333`},`PV ${m}`),p.createElement(`text`,{x:x+(g>=0?1:-1)*12,y:S,dy:18,textAnchor:C,fill:`#999`},`(Rate ${(f*100).toFixed(2)}%)`)):p.createElement(c,e)};return p.createElement(r,{width:`100%`,height:500},p.createElement(f,{width:400,height:400},p.createElement(d,{dataKey:`value`,...e,shape:t}),p.createElement(o,{defaultIndex:0,content:g})))},args:{cx:`50%`,cy:`50%`,data:h,dataKey:`value`,fill:`#8884d8`,innerRadius:60,outerRadius:80}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const renderActiveShape = (props: PieSectorDataItem & {
      isActive: boolean;
    }) => {
      const RADIAN = Math.PI / 180;
      const {
        cx = 0,
        cy = 0,
        midAngle = 0,
        innerRadius,
        outerRadius = 0,
        startAngle,
        endAngle,
        fill,
        payload,
        percent = 0,
        value
      } = props;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + (outerRadius + 10) * cos;
      const sy = cy + (outerRadius + 10) * sin;
      const mx = cx + (outerRadius + 30) * cos;
      const my = cy + (outerRadius + 30) * sin;
      const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      const ey = my;
      const textAnchor = cos >= 0 ? 'start' : 'end';
      return props.isActive ? <g>
          <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
            {payload.name}
          </text>
          <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
          <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
          <path d={\`M\${sx},\${sy}L\${mx},\${my}L\${ex},\${ey}\`} stroke={fill} fill="none" />
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{\`PV \${value}\`}</text>
          <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
            {\`(Rate \${(percent * 100).toFixed(2)}%)\`}
          </text>
        </g> : <Sector {...props} />;
    };
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="value" {...args} shape={renderActiveShape} />
          <Tooltip defaultIndex={0} content={NoContent} />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: '50%',
    cy: '50%',
    data,
    dataKey: 'value',
    fill: '#8884d8',
    innerRadius: 60,
    outerRadius: 80
  }
}`,..._.parameters?.docs?.source}}},v=[`CustomActiveShapePieChart`]})))()}y();export{_ as CustomActiveShapePieChart,v as __namedExportsOrder,m as default};