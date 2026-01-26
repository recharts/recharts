import{e}from"./iframe-CWA75x6f.js";import{P as c,a as v}from"./PieChart-A89HgDZ5.js";import{R as f}from"./arrayEqualityCheck-BbPHrIiT.js";import{S as h}from"./Sector-CjAZzh8K.js";import{C as g}from"./tooltipContext-CcLmKiM8.js";import{L as C}from"./Legend-5u77eCaZ.js";import{T as k}from"./Tooltip-CxSt-rF6.js";import{R as y}from"./RechartsHookInspector-SnjudCfW.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./Layer-Dyb8NBHJ.js";import"./Curve-DzqGeZIr.js";import"./types-ieTTG77J.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./ReactUtils-BsQxKoDK.js";import"./Label-QjXIZu_1.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-C1tQmmyV.js";import"./zIndexSlice-BxnMOy2T.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./ActiveShapeUtils-DPDphSQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQ_yE-B.js";import"./useAnimationId-CiXad0CX.js";import"./Trapezoid-xMIIQ6Hu.js";import"./Symbols-BfpcWYyT.js";import"./RegisterGraphicalItemId-BrDDbYpn.js";import"./SetGraphicalItem-ERR7406L.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-BSpCS3G3.js";import"./PolarChart-BFGkBFJZ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./useElementOffset-Xph5u3Ao.js";import"./iteratee-YaRpC3LM.js";import"./Cross-CyOmNZiN.js";import"./index-rMQlUXxN.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./OffsetShower-ra48L2at.js";import"./PlotAreaShower-DRjHdJ_p.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
