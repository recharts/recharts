import{e}from"./iframe-CzId_vMR.js";import{a as $,P as N}from"./PieChart-BOIESW3K.js";import{R as w}from"./arrayEqualityCheck-DSdyV2X5.js";import{T as G}from"./Tooltip-CZcztc67.js";import{R as K}from"./RechartsHookInspector-Co5fk2RP.js";import{S as m}from"./Sector-BzoC5hxT.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CjfObxG9.js";import"./Layer-Cd1nD4kQ.js";import"./Curve-D5USJD5l.js";import"./types-DjXw3wTJ.js";import"./Text-DyrIV_fF.js";import"./DOMUtils-DbOiFokS.js";import"./tooltipContext-CbvQKLwH.js";import"./hooks-C9JnWS43.js";import"./axisSelectors-OGsi9SPN.js";import"./ReactUtils-B9bn4DTf.js";import"./Label-C0ElDb7Z.js";import"./PolarUtils-pvs2WqdL.js";import"./ZIndexLayer-C_SxWHYm.js";import"./zIndexSlice-BwlmGQPJ.js";import"./RechartsWrapper-CN4xlQ0u.js";import"./ActiveShapeUtils-CjNwvE6j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B-Y8RlPT.js";import"./useAnimationId-DOB-FYIq.js";import"./Trapezoid-D5iOXGDe.js";import"./Symbols-BRKfSvcL.js";import"./RegisterGraphicalItemId-CBAG7Y6C.js";import"./SetGraphicalItem-w1vQ_GFV.js";import"./polarSelectors-W2GeAK9p.js";import"./PolarChart-zYRizZNY.js";import"./chartDataContext-bc8aYpmC.js";import"./CategoricalChart-Fsg15egP.js";import"./useElementOffset-DjiMAkTW.js";import"./iteratee-DjtVUf_D.js";import"./Cross-D0wqL9dG.js";import"./index-CS_I0C1E.js";import"./ChartSizeDimensions-DGZWUdPh.js";import"./OffsetShower-b12JY01P.js";import"./PlotAreaShower-BQSWUX-t.js";const Ee={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=l=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=l,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return l.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(m,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(m,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(m,{...l})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Pe=["CustomActiveShapePieChart"];export{c as CustomActiveShapePieChart,Pe as __namedExportsOrder,Ee as default};
