import{e}from"./iframe-Bp7wnAMR.js";import{P as c,a as v}from"./PieChart-C00pXNMr.js";import{R as f}from"./arrayEqualityCheck-DxE10Oy_.js";import{S as h}from"./Sector-BGL47Yd8.js";import{C as g}from"./tooltipContext-Cksie6Kp.js";import{L as C}from"./Legend-BaTaG579.js";import{T as k}from"./Tooltip-DUWliZ2b.js";import{R as y}from"./RechartsHookInspector-DHfob8nJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-73ODOPj1.js";import"./Layer-7joqFoN-.js";import"./Curve-C9HH72jI.js";import"./types-7BwnP8OD.js";import"./Text-DwUQNXUe.js";import"./DOMUtils-dKVtaV9j.js";import"./ReactUtils-DrfTY3Od.js";import"./Label-Tu9yek-h.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CSCYRG22.js";import"./zIndexSlice-CRBGxDjV.js";import"./RechartsWrapper-C4djzgpQ.js";import"./hooks-CNofKjzo.js";import"./axisSelectors-hHhjBbva.js";import"./ActiveShapeUtils-B5LL2uEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ck3EAtYG.js";import"./useAnimationId-goMb22IV.js";import"./Trapezoid-eO_srE68.js";import"./Symbols-B3gxOXiD.js";import"./RegisterGraphicalItemId-DL9uxaj9.js";import"./SetGraphicalItem-Bo7sM5w_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-BNTt0d6J.js";import"./PolarChart-lBS6igcJ.js";import"./chartDataContext-nk0Pjs0Z.js";import"./CategoricalChart-CZ-Ak8iT.js";import"./useElementOffset-B1-MS-fR.js";import"./iteratee-C4Py6258.js";import"./Cross-C05zcV3J.js";import"./index-D6AxLi4e.js";import"./ChartSizeDimensions-DwflQZom.js";import"./OffsetShower-B6O-ZqIp.js";import"./PlotAreaShower-B0Yqyt4M.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
