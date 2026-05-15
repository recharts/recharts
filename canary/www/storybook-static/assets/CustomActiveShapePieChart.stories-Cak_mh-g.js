import{e}from"./iframe-DLKusaH2.js";import{P as $,a as N}from"./PieChart-BZ-D_Y4q.js";import{R as w}from"./arrayEqualityCheck-OSXbFffx.js";import{T as G}from"./Tooltip-BTu9VEAI.js";import{R as K}from"./RechartsHookInspector-twmg_15g.js";import{S as l}from"./Sector-BwEeuI-t.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./immer-DopQgQur.js";import"./Layer-CRYoZDBs.js";import"./resolveDefaultProps-CDQxtKgJ.js";import"./Curve-DxlUhp1s.js";import"./types-9gVu3p3S.js";import"./step-jIStQ4yh.js";import"./Text-BOg1Bx7_.js";import"./DOMUtils-BHhU0voP.js";import"./tooltipContext-CV96zHQs.js";import"./hooks-BDR2OTLs.js";import"./axisSelectors-DmwBGoOF.js";import"./d3-scale-D-d_ip1o.js";import"./ReactUtils-Bgb6ualA.js";import"./Label-BolsaftX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BNchc-lc.js";import"./zIndexSlice-DwCBvGVu.js";import"./index-DY64JRGf.js";import"./ActiveShapeUtils-CwYLB_hF.js";import"./isPlainObject-DqS4h4Cl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZVl3FJ9j.js";import"./useAnimationId-BcRo8icb.js";import"./Trapezoid-IVY3pKxT.js";import"./Symbols-D_ER3HkZ.js";import"./symbol-CW5_VIgV.js";import"./RegisterGraphicalItemId-Co2yDXiB.js";import"./SetGraphicalItem-f0Wubofs.js";import"./RechartsWrapper-CJ9yMdSa.js";import"./renderedTicksSlice-CLJGAcv7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-CbSKn9e7.js";import"./PolarChart-Dkz-515I.js";import"./chartDataContext-DetDLZ8r.js";import"./CategoricalChart-CYNzwdSP.js";import"./useElementOffset-BDsoNk_l.js";import"./uniqBy-DkXBDuym.js";import"./iteratee-n0s9Zbyc.js";import"./Cross-BMD5jBrY.js";import"./index-D68W2HqG.js";import"./ChartSizeDimensions-t4E4BRLz.js";import"./OffsetShower-KjsHbNXS.js";import"./PlotAreaShower-D_C1tqvZ.js";const Ke={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=m=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=m,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return m.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(l,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(l,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(l,{...m})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
