import{e}from"./iframe-BhN7WL5Z.js";import{P as c,a as v}from"./PieChart-BsfOZSWa.js";import{R as f}from"./arrayEqualityCheck-D4vVSxnz.js";import{S as h}from"./Sector-DW4oDqQS.js";import{C as g}from"./tooltipContext-DHhd83Jr.js";import{L as C}from"./Legend-Do489A0F.js";import{T as k}from"./Tooltip-CNEd35QC.js";import{R as y}from"./RechartsHookInspector-DuzZFa2V.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BPD9bTh0.js";import"./Layer-CfPqbk4S.js";import"./Curve-BUxUFTVS.js";import"./types-D2HNEHHU.js";import"./Text-PQiv9oDi.js";import"./DOMUtils-CqVI9jgk.js";import"./ReactUtils-C4jZBCSK.js";import"./Label-DbCyuY2T.js";import"./PolarUtils-DA1Z2LDM.js";import"./ZIndexLayer-C8mR-iMG.js";import"./zIndexSlice-wy9BZePe.js";import"./RechartsWrapper-ngVbXQIL.js";import"./hooks-EmXHGT5T.js";import"./axisSelectors-BCCMRHlB.js";import"./ActiveShapeUtils-rfu0ISSo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXwR0_dr.js";import"./useAnimationId-BWf0K4Q5.js";import"./Trapezoid-CAfSVxJ4.js";import"./Symbols-BSDl9S1a.js";import"./RegisterGraphicalItemId-DQrs3EuT.js";import"./SetGraphicalItem-DwcdpMKU.js";import"./polarSelectors-kYZ-sjfy.js";import"./PolarChart-CPZWWZP5.js";import"./chartDataContext-Dmy6E_I7.js";import"./CategoricalChart-BDJKnV04.js";import"./useElementOffset-Chq47f3C.js";import"./iteratee-DHMA5jED.js";import"./Cross-C5WS2Xdo.js";import"./index-AX7IXW21.js";import"./ChartSizeDimensions-BBuJ0j_U.js";import"./OffsetShower-6CzCe99R.js";import"./PlotAreaShower-CAbHCjr4.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
