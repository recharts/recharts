import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{E as r,Rt as i,Vn as a,t as o,vt as s,yn as c}from"./iframe-BqVvK_R4.js";var l,u,d,f,p,m;e((()=>{l=t(n()),o(),u={component:s},d=[{name:`Group A`,value:400},{name:`Group B`,value:300},{name:`Group C`,value:300},{name:`Group D`,value:200}],f=()=>null,p={render:e=>{let t=e=>{let t=Math.PI/180,{cx:n=0,cy:r=0,midAngle:i=0,innerRadius:a,outerRadius:o=0,startAngle:s,endAngle:u,fill:d,payload:f,percent:p=0,value:m}=e,h=Math.sin(-t*i),g=Math.cos(-t*i),_=n+(o+10)*g,v=r+(o+10)*h,y=n+(o+30)*g,b=r+(o+30)*h,x=y+(g>=0?1:-1)*22,S=b,C=g>=0?`start`:`end`;return e.isActive?l.createElement(`g`,null,l.createElement(`text`,{x:n,y:r,dy:8,textAnchor:`middle`,fill:d},f.name),l.createElement(c,{cx:n,cy:r,innerRadius:a,outerRadius:o,startAngle:s,endAngle:u,fill:d}),l.createElement(c,{cx:n,cy:r,startAngle:s,endAngle:u,innerRadius:o+6,outerRadius:o+10,fill:d}),l.createElement(`path`,{d:`M${_},${v}L${y},${b}L${x},${S}`,stroke:d,fill:`none`}),l.createElement(`circle`,{cx:x,cy:S,r:2,fill:d,stroke:`none`}),l.createElement(`text`,{x:x+(g>=0?1:-1)*12,y:S,textAnchor:C,fill:`#333`},`PV ${m}`),l.createElement(`text`,{x:x+(g>=0?1:-1)*12,y:S,dy:18,textAnchor:C,fill:`#999`},`(Rate ${(p*100).toFixed(2)}%)`)):l.createElement(c,e)};return l.createElement(a,{width:`100%`,height:500},l.createElement(r,{width:400,height:400},l.createElement(s,{dataKey:`value`,...e,shape:t}),l.createElement(i,{defaultIndex:0,content:f})))},args:{cx:`50%`,cy:`50%`,data:d,dataKey:`value`,fill:`#8884d8`,innerRadius:60,outerRadius:80}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`CustomActiveShapePieChart`]}))();export{p as CustomActiveShapePieChart,m as __namedExportsOrder,u as default};