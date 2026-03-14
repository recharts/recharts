import{e}from"./iframe-CxdcV2iU.js";import{P as $,a as N}from"./PieChart-ClQL6tSp.js";import{R as w}from"./arrayEqualityCheck-DE5QCts1.js";import{T as G}from"./Tooltip-qaTO8lo0.js";import{R as K}from"./RechartsHookInspector-Cmn_3oAZ.js";import{S as l}from"./Sector-CTFx0r-m.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./immer-DbqgSjuj.js";import"./Layer-C-TFz9Vn.js";import"./resolveDefaultProps-BPgO4-u0.js";import"./Curve-BibSVypT.js";import"./types-d6h03Wgd.js";import"./step-D4kO6QN2.js";import"./Text-gpiQWITt.js";import"./DOMUtils-C9YYP4cZ.js";import"./tooltipContext-_0hGqBv0.js";import"./hooks-yyrPm8Tk.js";import"./axisSelectors-DYgSuTD7.js";import"./d3-scale-C-pis2q-.js";import"./ReactUtils-BTiU_wBS.js";import"./Label-BgXSQpWc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CWN6c1mH.js";import"./zIndexSlice-DIhuoP2j.js";import"./index-DQ1yjceL.js";import"./ActiveShapeUtils-C1lnMWmS.js";import"./isPlainObject-7KcThv1C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dl57DUUW.js";import"./useAnimationId-LJTPfExM.js";import"./Trapezoid-DT3U4xXZ.js";import"./Symbols-PkBH2_X7.js";import"./symbol-6aewdZ8t.js";import"./RegisterGraphicalItemId-Cdy6MSjO.js";import"./SetGraphicalItem-C9igpr7g.js";import"./RechartsWrapper-xlhT3EQD.js";import"./renderedTicksSlice-DjqA2mFu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-ZTCMVgnD.js";import"./PolarChart-ClbiCq1R.js";import"./chartDataContext-yNk83f89.js";import"./CategoricalChart-3r6RgUng.js";import"./useElementOffset-BJXD0EvZ.js";import"./uniqBy-cYVYf0Ul.js";import"./iteratee-BsxxOKhX.js";import"./Cross-CGcmOFfi.js";import"./index-8erOpdWv.js";import"./ChartSizeDimensions-yUCjMHhs.js";import"./OffsetShower-BFUvvsPo.js";import"./PlotAreaShower-BtFJQ4W6.js";const Ke={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=m=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=m,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return m.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(l,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(l,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(l,{...m})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
