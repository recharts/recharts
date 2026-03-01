import{e}from"./iframe-DjYpiCK1.js";import{P as $,a as N}from"./PieChart-D8rTh-u2.js";import{R as w}from"./arrayEqualityCheck-ChWij-6b.js";import{T as G}from"./Tooltip-HCEgroYu.js";import{R as K}from"./RechartsHookInspector-ycUhMjsN.js";import{S as l}from"./Sector-lipzQdUB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./immer-Q7LYndgz.js";import"./Layer-DTpB7dpX.js";import"./resolveDefaultProps-BKyQYHPq.js";import"./Curve-CcdovDiP.js";import"./types-uugzObvO.js";import"./step-e2Z4FnHn.js";import"./Text-tzBe5md3.js";import"./DOMUtils-C_4MXzyf.js";import"./tooltipContext-AAl5ihZW.js";import"./hooks-DA7ZLRAz.js";import"./axisSelectors-DRA31YxA.js";import"./d3-scale-D4J-_PMg.js";import"./ReactUtils-Bc2S-2Ko.js";import"./Label-BjhhnV9x.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPHhTAxg.js";import"./zIndexSlice-DD29w02m.js";import"./index-Dcc_DcJs.js";import"./ActiveShapeUtils-BB_vNw8U.js";import"./isPlainObject-COujrb7r.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJnZMjz6.js";import"./useAnimationId-DKdTeHc-.js";import"./Trapezoid-ljRWXtqg.js";import"./Symbols-CkWT8iKr.js";import"./symbol-CHsY7JKe.js";import"./RegisterGraphicalItemId-CzheeRaZ.js";import"./SetGraphicalItem-DCV_XwVp.js";import"./RechartsWrapper-BsT6E87M.js";import"./renderedTicksSlice-CQl_TKKG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-BCw-tPjl.js";import"./PolarChart-Dzwj5yAy.js";import"./chartDataContext-A4NUbCSz.js";import"./CategoricalChart-DDH3jH2P.js";import"./useElementOffset-CFnM-Vwx.js";import"./uniqBy-C94NeD_o.js";import"./iteratee-BJG9ItkJ.js";import"./Cross-BVsg5qn1.js";import"./index-DQOJXr3R.js";import"./ChartSizeDimensions-Bar3NlUL.js";import"./OffsetShower-EZRykoXG.js";import"./PlotAreaShower-BUEMDiZc.js";const Ke={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=m=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=m,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return m.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(l,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(l,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(l,{...m})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
