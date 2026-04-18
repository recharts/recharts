import{e}from"./iframe-Bs9ufhmU.js";import{P as $,a as N}from"./PieChart-DSc4L3ia.js";import{R as w}from"./arrayEqualityCheck-bNviqcqR.js";import{T as G}from"./Tooltip-DwY1pg8y.js";import{R as K}from"./RechartsHookInspector-BLOzRcf9.js";import{S as l}from"./Sector-mpY_PZJM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./immer-7dvTdnME.js";import"./Layer-BeNhTzXz.js";import"./resolveDefaultProps-CGjn5uwQ.js";import"./Curve-B9iYmKCN.js";import"./types-iG6YPFqe.js";import"./step-Egwu_prR.js";import"./Text-hajrhHnl.js";import"./DOMUtils-DooEv1Ok.js";import"./tooltipContext-BemE5Utq.js";import"./hooks-DNTcenQI.js";import"./axisSelectors-B6DmQDXD.js";import"./d3-scale-QYSZWFrh.js";import"./ReactUtils-DhI6Oe1E.js";import"./Label-DU0nM-QI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BNfspdHK.js";import"./zIndexSlice-B-DHuVWa.js";import"./index-Dj-F8bgJ.js";import"./ActiveShapeUtils-BF7TNpr9.js";import"./isPlainObject-DsuLoG7m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUsMUIL7.js";import"./useAnimationId-B97gwkv5.js";import"./Trapezoid-5VBN_EIn.js";import"./Symbols-D0Ncjn54.js";import"./symbol-BG2oG_xM.js";import"./RegisterGraphicalItemId-_wgk5kOH.js";import"./SetGraphicalItem-DGPcT5tY.js";import"./RechartsWrapper-BZIvkK7Y.js";import"./renderedTicksSlice-D4shqqjC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-BxSIROLc.js";import"./PolarChart-Blq3tFzF.js";import"./chartDataContext-pLUBtclw.js";import"./CategoricalChart-jwpeEM8k.js";import"./useElementOffset-Bjx5_Ell.js";import"./uniqBy-qpDPjGbK.js";import"./iteratee-lQHxSBe4.js";import"./Cross-tlbE3IuY.js";import"./index-bM7E3l5J.js";import"./ChartSizeDimensions-SAcKlyRY.js";import"./OffsetShower-BK-2MEQe.js";import"./PlotAreaShower-BHBQx0G4.js";const Ke={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=m=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=m,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return m.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(l,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(l,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(l,{...m})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
