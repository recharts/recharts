import{e}from"./iframe-qFyPNvi_.js";import{P as c,a as v}from"./PieChart-BFJcmSDJ.js";import{R as f}from"./arrayEqualityCheck-BR44KOOG.js";import{S as h}from"./Sector-CLe_yWi6.js";import{C as g}from"./tooltipContext-DIG8Ieoj.js";import{L as C}from"./Legend-DeSJqrBc.js";import{T as k}from"./Tooltip-CMoU0mbE.js";import{R as y}from"./RechartsHookInspector-Ce3qLbRt.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CiVGu3Bt.js";import"./Layer-B9wfXqHf.js";import"./Curve-Bf-6f0us.js";import"./types-BhYGGyZO.js";import"./Text-icE1XF3t.js";import"./DOMUtils-EYrslgiu.js";import"./ReactUtils-Dn42083y.js";import"./Label-CaGvlJzM.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-B3rHEP_M.js";import"./zIndexSlice-yXhSr7sB.js";import"./RechartsWrapper-DM4_tnRN.js";import"./hooks-aCDbeiPX.js";import"./axisSelectors-De9afnke.js";import"./ActiveShapeUtils-m1fmtbZZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4WR-Qi1.js";import"./useAnimationId-CBoODHVq.js";import"./Trapezoid-hMqWhzEj.js";import"./Symbols-CPIOcRRv.js";import"./RegisterGraphicalItemId-Dwao3Q82.js";import"./SetGraphicalItem-C4lKL51b.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-B6PnmjFx.js";import"./PolarChart-B8o5P2BW.js";import"./chartDataContext-byZU3wA9.js";import"./CategoricalChart-Bg7JUw0R.js";import"./useElementOffset-DOXz1Ew0.js";import"./iteratee-CbT9mAc7.js";import"./Cross-Cx9wV6KX.js";import"./index-CxM5gQIi.js";import"./ChartSizeDimensions-QfvN_Ah7.js";import"./OffsetShower-BUMougLk.js";import"./PlotAreaShower-CjC9fWZt.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [activeIndices, setActiveIndices] = React.useState<number[]>([]);
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="percent" {...args} onClick={(_, index) => {
          if (index != null) {
            setActiveIndices(prev => {
              if (prev.includes(index)) {
                return prev.filter(i => i !== index);
              }
              return [...prev, index];
            });
          }
        }} shape={(props, index) => {
          const isActive = activeIndices.includes(index);
          return <Sector {...props} fill={isActive ? 'yellow' : props.fill} stroke="#111" />;
        }}>
            {data.map(d => <Cell key={\`d-\${d.value}\`} fill={d.color} stroke="none" />)}
          </Pie>
          <Legend />
          <Tooltip />
          <RechartsHookInspector />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: '50%',
    cy: '50%',
    data,
    dataKey: 'percent',
    nameKey: 'value',
    fill: '#8884d8',
    label: true
  }
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const me=["PieWithCells"];export{i as PieWithCells,me as __namedExportsOrder,se as default};
