import{e}from"./iframe-CxI43GLZ.js";import{P as c,a as v}from"./PieChart-BCmn5tb8.js";import{R as f}from"./arrayEqualityCheck-BfVdm9jV.js";import{S as h}from"./Sector-BrRXNJ4R.js";import{C as g}from"./tooltipContext-BEJZa1vO.js";import{L as C}from"./Legend-p5ihkFuo.js";import{T as k}from"./Tooltip-DqOvky8-.js";import{R as y}from"./RechartsHookInspector-DtRN3lc4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-UONb-avO.js";import"./Layer-CmGdcww6.js";import"./Curve-BWaqjCRV.js";import"./types-KA7-71SW.js";import"./Text-DPcraT74.js";import"./DOMUtils-DgzzSI6D.js";import"./ReactUtils-elXAGoBP.js";import"./Label-B09Q27rq.js";import"./PolarUtils-DHQUPcK8.js";import"./ZIndexLayer-B1TtTzTT.js";import"./zIndexSlice-DIL5Sqm1.js";import"./RechartsWrapper--eelc2ZG.js";import"./hooks-B1NTMNRK.js";import"./axisSelectors-BTfB0Z1c.js";import"./ActiveShapeUtils-Cos1S8ib.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bz1Foak7.js";import"./useAnimationId-CTE4KFOU.js";import"./Trapezoid-B_Aa80Lz.js";import"./Symbols-CSvR9izB.js";import"./RegisterGraphicalItemId-CrQ7lfko.js";import"./SetGraphicalItem-CwpQjYla.js";import"./polarSelectors-DBy2yEdI.js";import"./PolarChart-BAnV0lXZ.js";import"./chartDataContext-VKjrZIk0.js";import"./CategoricalChart-diS0yBUq.js";import"./useElementOffset-iAMlLSj3.js";import"./iteratee-BhYORJq7.js";import"./Cross-DIFk52zL.js";import"./index-QQ_t_uQR.js";import"./ChartSizeDimensions-DCRd00II.js";import"./OffsetShower-CdLtWmQh.js";import"./PlotAreaShower-B89fMbPB.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
