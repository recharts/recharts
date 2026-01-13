import{e}from"./iframe-Cwpfa-aU.js";import{a as c,P as v}from"./PieChart-qXqvGnsP.js";import{R as f}from"./arrayEqualityCheck-4s7O9CHw.js";import{S as h}from"./Sector-DE839nPA.js";import{C as g}from"./tooltipContext-Bd7ebjWJ.js";import{L as C}from"./Legend-CDhhebxP.js";import{T as k}from"./Tooltip-i_abJ7x2.js";import{R as y}from"./RechartsHookInspector-RngvJaov.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bl1VkIJn.js";import"./Layer-C5Up6lye.js";import"./Curve-Bv3AqiO6.js";import"./types-C0n05tvQ.js";import"./Text-DG71k7CA.js";import"./DOMUtils-DpdULDT0.js";import"./ReactUtils-DiD0pNfa.js";import"./Label-BkH8bmvn.js";import"./PolarUtils-D6OsdRao.js";import"./ZIndexLayer-MboeMBT5.js";import"./zIndexSlice-IilHGL9E.js";import"./RechartsWrapper-DV1HqoPP.js";import"./hooks-Bu64bUH6.js";import"./axisSelectors-CkO9segl.js";import"./ActiveShapeUtils-CwrCrcpP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpUAVjZ.js";import"./useAnimationId-BNxZGCVU.js";import"./Trapezoid-DIkxpdcS.js";import"./Symbols-4LuKRow4.js";import"./RegisterGraphicalItemId-BzYcbqE1.js";import"./SetGraphicalItem-CnrbgEG2.js";import"./polarSelectors-C7B6mjoI.js";import"./PolarChart-CKpP2ief.js";import"./chartDataContext-BoIsIy8h.js";import"./CategoricalChart-yeCIXBUW.js";import"./useElementOffset-D4wGVCo_.js";import"./iteratee-eijgeMa6.js";import"./Cross-D4h0k0sg.js";import"./index-KilI1ssy.js";import"./ChartSizeDimensions-BzGykHcH.js";import"./OffsetShower-uqw3cQhV.js";import"./PlotAreaShower-DvkDcG7R.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const se=["PieWithCells"];export{i as PieWithCells,se as __namedExportsOrder,ce as default};
