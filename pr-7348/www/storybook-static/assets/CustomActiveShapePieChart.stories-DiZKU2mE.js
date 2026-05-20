import{e}from"./iframe-BExdC6gN.js";import{P as $,a as N}from"./PieChart--4A3R2Nn.js";import{g as w}from"./arrayEqualityCheck-DOMqUAof.js";import{T as G}from"./Tooltip-BgS9wPqC.js";import{R as K}from"./RechartsHookInspector-jedlPGVn.js";import{S as m}from"./Sector-FJVsvN4m.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-Bn8zfoRz.js";import"./resolveDefaultProps-BABy-fAx.js";import"./Curve-BAgcgHZR.js";import"./types-DfAw3uAA.js";import"./step-D4OvHG8Z.js";import"./immer-fLQu0D5z.js";import"./path-DyVhHtw_.js";import"./Text-DprtRutp.js";import"./DOMUtils-DUHeo9eF.js";import"./tooltipContext-Bht36Dkp.js";import"./hooks-f9uoWTfr.js";import"./axisSelectors-G4Ozr4C7.js";import"./d3-scale-CPvJwxK1.js";import"./ReactUtils-Dgl8JF7u.js";import"./Label-BEYaNe1v.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-7iJ9Z1BS.js";import"./zIndexSlice-DqK4zht4.js";import"./index-dnhQRVhY.js";import"./ActiveShapeUtils-BBh91YEI.js";import"./isPlainObject-Eh4Z7yDc.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-CGA7gaf-.js";import"./SetGraphicalItem-DVUCQsv1.js";import"./RechartsWrapper-BFXm4Z4I.js";import"./renderedTicksSlice-Cgs3_pbO.js";import"./useAnimationId-DlRyv4oq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-CT9ZtMWg.js";import"./PolarChart-CUeF2lie.js";import"./chartDataContext-zs3q_52z.js";import"./CategoricalChart-GKia85wb.js";import"./useElementOffset-B0Mp0O5s.js";import"./uniqBy-RnJXqtWx.js";import"./iteratee-BYEtbo7d.js";import"./Cross-BjlkqM3M.js";import"./Rectangle-DUkG5lzX.js";import"./index-Bb8SVNOL.js";import"./ChartSizeDimensions-DVous5ni.js";import"./OffsetShower-DTmFDKEr.js";import"./PlotAreaShower-D_ibhKaV.js";const we={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=l=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=l,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return l.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(m,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(m,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(m,{...l})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ge=["CustomActiveShapePieChart"];export{c as CustomActiveShapePieChart,Ge as __namedExportsOrder,we as default};
