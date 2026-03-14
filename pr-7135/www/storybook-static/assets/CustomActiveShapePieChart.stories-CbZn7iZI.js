import{e}from"./iframe-CRc-flGw.js";import{P as $,a as N}from"./PieChart-CnOdlLTA.js";import{R as w}from"./arrayEqualityCheck-DKsNPC5t.js";import{T as G}from"./Tooltip-D05wqO7m.js";import{R as K}from"./RechartsHookInspector-BfXBIijA.js";import{S as l}from"./Sector-CyV3S5d1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./immer-ByZzKzss.js";import"./Layer-BnBdmezi.js";import"./resolveDefaultProps-Bl3-Fo8N.js";import"./Curve-Bq0CaY0M.js";import"./types-yycQMcyL.js";import"./step-n2b1zRpO.js";import"./Text-BTTbtJ1y.js";import"./DOMUtils-XAHmwwbv.js";import"./tooltipContext-f9vUnAgc.js";import"./hooks-DZKzKpMo.js";import"./axisSelectors-DdTNbtlm.js";import"./d3-scale-BQdhaFkz.js";import"./ReactUtils-CwEELAWD.js";import"./Label-DhveLrm9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D6jxT2Od.js";import"./zIndexSlice-D5r4A9oU.js";import"./index-1w6ajcFg.js";import"./ActiveShapeUtils-CBXTVkGy.js";import"./isPlainObject-CwCpOTqO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DQ2TmgdK.js";import"./useAnimationId-CV3KoLuu.js";import"./Trapezoid-CMdi1mNK.js";import"./Symbols-cTxoNgJ3.js";import"./symbol-uSNG4J3i.js";import"./RegisterGraphicalItemId-DszhlzY0.js";import"./SetGraphicalItem-DLMb23PD.js";import"./RechartsWrapper-BeKC2RVo.js";import"./renderedTicksSlice-Drgf2BHB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-B7F-gjPA.js";import"./PolarChart-DAYGRO86.js";import"./chartDataContext-BxD4B1Fo.js";import"./CategoricalChart-GI1F9wsO.js";import"./useElementOffset-BYI9oXVf.js";import"./uniqBy-BwmkhaPp.js";import"./iteratee-LEn6qRui.js";import"./Cross-BEnbUp2e.js";import"./index-CWAerfFe.js";import"./ChartSizeDimensions-BlHKMCB6.js";import"./OffsetShower-C9-yzuEJ.js";import"./PlotAreaShower-5DxwHxbi.js";const Ke={component:$},L=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],T=()=>null,c={render:C=>{const E=m=>{const p=Math.PI/180,{cx:r=0,cy:o=0,midAngle:d=0,innerRadius:P,outerRadius:t=0,startAngle:u,endAngle:x,fill:i,payload:S,percent:I=0,value:M}=m,h=Math.sin(-p*d),n=Math.cos(-p*d),k=r+(t+10)*n,D=o+(t+10)*h,y=r+(t+30)*n,A=o+(t+30)*h,a=y+(n>=0?1:-1)*22,s=A,R=n>=0?"start":"end";return m.isActive?e.createElement("g",null,e.createElement("text",{x:r,y:o,dy:8,textAnchor:"middle",fill:i},S.name),e.createElement(l,{cx:r,cy:o,innerRadius:P,outerRadius:t,startAngle:u,endAngle:x,fill:i}),e.createElement(l,{cx:r,cy:o,startAngle:u,endAngle:x,innerRadius:t+6,outerRadius:t+10,fill:i}),e.createElement("path",{d:`M${k},${D}L${y},${A}L${a},${s}`,stroke:i,fill:"none"}),e.createElement("circle",{cx:a,cy:s,r:2,fill:i,stroke:"none"}),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,textAnchor:R,fill:"#333"},`PV ${M}`),e.createElement("text",{x:a+(n>=0?1:-1)*12,y:s,dy:18,textAnchor:R,fill:"#999"},`(Rate ${(I*100).toFixed(2)}%)`)):e.createElement(l,{...m})};return e.createElement(w,{width:"100%",height:500},e.createElement(N,{width:400,height:400},e.createElement($,{dataKey:"value",...C,shape:E}),e.createElement(G,{defaultIndex:0,content:T}),e.createElement(K,null)))},args:{cx:"50%",cy:"50%",data:L,dataKey:"value",fill:"#8884d8",innerRadius:60,outerRadius:80}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
