import{e}from"./iframe-2t9JIeSz.js";import{a as c,P as v}from"./PieChart-BgOcxGOV.js";import{R as f}from"./arrayEqualityCheck-Ne24Ckb0.js";import{S as h}from"./Sector-BmtUKRUo.js";import{C as g}from"./tooltipContext-DXRb-iKi.js";import{L as C}from"./Legend-BBddR5ra.js";import{T as k}from"./Tooltip-DAiegNE1.js";import{R as y}from"./RechartsHookInspector-l9P1RfFo.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwSOlvvS.js";import"./Layer-CYDA86pH.js";import"./Curve-DIMaTG8J.js";import"./types-D5gHJUP5.js";import"./Text-QtvFI3Y4.js";import"./DOMUtils-BaCwwoZ6.js";import"./ReactUtils-3f6_sZO7.js";import"./Label-D1Z20PQg.js";import"./PolarUtils-Bz6vuuVH.js";import"./ZIndexLayer-B4A1m3pC.js";import"./zIndexSlice-CQpntV3l.js";import"./RechartsWrapper-C_G63Drq.js";import"./hooks-DDv3wssX.js";import"./axisSelectors-ELUvGx1F.js";import"./ActiveShapeUtils-CFUB8TRB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C8Ra0xJ2.js";import"./useAnimationId-BJoNxofQ.js";import"./Trapezoid-BU2FReUY.js";import"./Symbols-CU3qyqsb.js";import"./RegisterGraphicalItemId-DXz7HuqF.js";import"./SetGraphicalItem-BT3CB0sc.js";import"./polarSelectors-CF3HOG2Q.js";import"./PolarChart-B12kjL3e.js";import"./chartDataContext-CjpiQJqz.js";import"./CategoricalChart-f3TADWMW.js";import"./useElementOffset-Dgi8y477.js";import"./iteratee-BMq1dSJo.js";import"./Cross-B8nhDlPB.js";import"./index-DUuuQEHh.js";import"./ChartSizeDimensions-DxYmbnCC.js";import"./OffsetShower-2v-BX8n-.js";import"./PlotAreaShower-D4PK9QSt.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
