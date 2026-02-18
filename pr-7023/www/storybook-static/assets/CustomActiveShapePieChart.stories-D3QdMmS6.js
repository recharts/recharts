import{e}from"./iframe-C8rrCX6B.js";import{P as $,a as N}from"./PieChart-HKSzk-91.js";import{R as w}from"./arrayEqualityCheck-B6s-2qWd.js";import{T as G}from"./Tooltip-D7hqfWIw.js";import{R as K}from"./RechartsHookInspector-CRTByZl4.js";import{S as m}from"./Sector-Doajdj9m.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-g0jZ7vdX.js";import"./Layer-D1v-1P4s.js";import"./Curve-ckN9X3mA.js";import"./types-DDBoPPlm.js";import"./Text-CymC-fJp.js";import"./DOMUtils-D6vD6WjU.js";import"./tooltipContext-BXl1HKdK.js";import"./hooks-CpCGF1sd.js";import"./axisSelectors-B7ZWRmd4.js";import"./ReactUtils-B6XfFwTE.js";import"./Label-pD9QpgDQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DFkgVZys.js";import"./zIndexSlice-Df3dbiIE.js";import"./RechartsWrapper-Zx0A2i-h.js";import"./renderedTicksSlice-Chx9DuQU.js";import"./ActiveShapeUtils-BVoBh-mr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk1pBm8g.js";import"./useAnimationId-CljxjOmY.js";import"./Trapezoid-8D3XkRpf.js";import"./Symbols-CojuA_dk.js";import"./RegisterGraphicalItemId-vQCUHIAP.js";import"./SetGraphicalItem-CAPB5Ckj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-reBn6xQG.js";import"./PolarChart-9npbSGxL.js";import"./chartDataContext-CpPK2chg.js";import"./CategoricalChart-D5ZpTP8T.js";import"./useElementOffset-CH7hNxjB.js";import"./iteratee-DFu-rX5d.js";import"./Cross-DHtrsMhv.js";import"./index-CVthgwiF.js";import"./ChartSizeDimensions-CE_McqMG.js";import"./OffsetShower-DFFOsGB0.js";import"./PlotAreaShower-BNzfzgkR.js";const Se={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=l=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=l,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return l.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(m,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(m,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(m,{...l})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ie=["CustomActiveShapePieChart"];export{c as CustomActiveShapePieChart,Ie as __namedExportsOrder,Se as default};
