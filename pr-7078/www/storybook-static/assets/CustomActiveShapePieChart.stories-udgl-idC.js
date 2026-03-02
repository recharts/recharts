import{e}from"./iframe-VPJyTU3C.js";import{P as $,a as N}from"./PieChart-C4UbB_w-.js";import{R as w}from"./arrayEqualityCheck-CXN3l8IH.js";import{T as G}from"./Tooltip-BzCxYluY.js";import{R as K}from"./RechartsHookInspector-vDuc6y-U.js";import{S as l}from"./Sector-CrGccqha.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./immer-BfJiACOe.js";import"./Layer-7CDZtGSl.js";import"./resolveDefaultProps-BvWNwQsu.js";import"./Curve-C7OUetYn.js";import"./types-CXB2nDIk.js";import"./step-AwB8z33l.js";import"./Text-DR-p8moo.js";import"./DOMUtils-CEVaRraF.js";import"./tooltipContext-BKAt1yN3.js";import"./hooks-nSftgnTX.js";import"./axisSelectors-saXNBwIQ.js";import"./d3-scale-DGhAz-7E.js";import"./ReactUtils-DXFU76qs.js";import"./Label-9AdH7Mzz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bu1rH0K3.js";import"./zIndexSlice-Dq9melht.js";import"./index-DQ7yK4Y3.js";import"./ActiveShapeUtils-BDCuCLeM.js";import"./isPlainObject-Cb28tfBr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cpr74bo7.js";import"./useAnimationId-83t5rQCc.js";import"./Trapezoid-CegYn91N.js";import"./Symbols-ByNtTTT8.js";import"./symbol-DppUUTIu.js";import"./RegisterGraphicalItemId-Ba6mil3n.js";import"./SetGraphicalItem-Dq4tocaN.js";import"./RechartsWrapper-BCl2bEfe.js";import"./renderedTicksSlice-Eh1g0N0V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-DK6n0yNL.js";import"./PolarChart-DRJAttRh.js";import"./chartDataContext-cb_R-PX2.js";import"./CategoricalChart-Cn-cyvDx.js";import"./useElementOffset-BpCcqtji.js";import"./uniqBy-BL8b2woc.js";import"./iteratee-DStFB318.js";import"./Cross-Q_a0JLSZ.js";import"./index-C07bsWnd.js";import"./ChartSizeDimensions-CmjLLHly.js";import"./OffsetShower-3s1Vs-j5.js";import"./PlotAreaShower-B0po3Iq4.js";const Ke={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=m=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=m,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return m.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(l,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(l,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(l,{...m})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Le=["CustomActiveShapePieChart"];export{c as CustomActiveShapePieChart,Le as __namedExportsOrder,Ke as default};
