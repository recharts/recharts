import{e}from"./iframe-DTIyp44P.js";import{P as c,a as v}from"./PieChart-DfGvoEbB.js";import{R as f}from"./arrayEqualityCheck-CROVUPPr.js";import{S as h}from"./Sector-BVwTJui3.js";import{C as g}from"./tooltipContext-BWhsucN3.js";import{L as C}from"./Legend-Cz3fWYcj.js";import{T as k}from"./Tooltip-jrOn7pW9.js";import{R as y}from"./RechartsHookInspector-D8bdCWM1.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEVdASN5.js";import"./Layer-CNvBRmF0.js";import"./Curve-QqkAraw2.js";import"./types-CLTao0pZ.js";import"./Text-oi_VPtbj.js";import"./DOMUtils-51XpcVVM.js";import"./ReactUtils-BtxPFKgx.js";import"./Label-CM6isse0.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-J9Ech39_.js";import"./zIndexSlice-CpP_hw3f.js";import"./RechartsWrapper-CMatZq67.js";import"./hooks-BoTdYeVb.js";import"./axisSelectors-DKeWHk_r.js";import"./ActiveShapeUtils-rB0qGo-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99nylwM.js";import"./useAnimationId-cUd_sss9.js";import"./Trapezoid-C-AINK0-.js";import"./Symbols-BXEo6yiB.js";import"./RegisterGraphicalItemId-Bq2lDHMm.js";import"./SetGraphicalItem-BpKNPEn8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-Bb-Y6iDX.js";import"./PolarChart-Dwqvmht_.js";import"./chartDataContext-DEKYo5U6.js";import"./CategoricalChart-DBE0EroA.js";import"./useElementOffset-D30Ax_lm.js";import"./iteratee-Dn7no0dn.js";import"./Cross-Bg-nihvf.js";import"./index-DH6qoWff.js";import"./ChartSizeDimensions-AlgeFMWv.js";import"./OffsetShower-Ytqxw96A.js";import"./PlotAreaShower-IGOsRXvZ.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
