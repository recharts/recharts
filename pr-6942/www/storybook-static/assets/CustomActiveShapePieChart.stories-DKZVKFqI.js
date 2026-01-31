import{e}from"./iframe-BsuuU2ac.js";import{P as $,a as N}from"./PieChart-CF9fDozL.js";import{R as w}from"./arrayEqualityCheck-BjO3Er2E.js";import{T as G}from"./Tooltip-Cku2Xirq.js";import{R as K}from"./RechartsHookInspector-BGkLBTS7.js";import{S as m}from"./Sector-CZIlwJfI.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-saNtUn-1.js";import"./Layer-DM57kvBs.js";import"./Curve-C6_JEQin.js";import"./types-DmRJx57M.js";import"./Text-Bg2YicUS.js";import"./DOMUtils-oSkPNF4I.js";import"./tooltipContext-D4mwNmDm.js";import"./hooks-k3ZaWThG.js";import"./axisSelectors-jwf3irWh.js";import"./ReactUtils-D7uw0LSD.js";import"./Label-DXc_GGWc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DAoCiEXG.js";import"./zIndexSlice-Bir2u6Kx.js";import"./RechartsWrapper-BH32z_Kk.js";import"./ActiveShapeUtils-Drd0OeIB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D5Cka5hS.js";import"./useAnimationId-WGg8-jRM.js";import"./Trapezoid-Ds5p844S.js";import"./Symbols-CcIdb3bs.js";import"./RegisterGraphicalItemId-DrCtvza9.js";import"./SetGraphicalItem-asJ_Ikn_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-Cd6Z-Y1o.js";import"./PolarChart-CZsrQYX7.js";import"./chartDataContext-C2F3ksi1.js";import"./CategoricalChart-nOJreIrp.js";import"./useElementOffset-HAHdxBZO.js";import"./iteratee-DhvHonxm.js";import"./Cross-y83n1l5B.js";import"./index-BhAql3N3.js";import"./ChartSizeDimensions-DrD8f1Su.js";import"./OffsetShower-BRn6lv3J.js";import"./PlotAreaShower-C1V0JDKa.js";const Pe={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=l=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=l,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return l.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(m,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(m,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(m,{...l})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Se=["CustomActiveShapePieChart"];export{c as CustomActiveShapePieChart,Se as __namedExportsOrder,Pe as default};
