import{e}from"./iframe-DmHHE4lP.js";import{a as c,P as v}from"./PieChart-gLe6N1PO.js";import{R as f}from"./arrayEqualityCheck-t0Foyoao.js";import{S as h}from"./Sector-DhfQ1iXA.js";import{C as g}from"./tooltipContext-xBV0Wx8f.js";import{L as C}from"./Legend-Cde7TLMz.js";import{T as k}from"./Tooltip-uUUOr1QD.js";import{R as y}from"./RechartsHookInspector-BtHYkDer.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BLzxoPkq.js";import"./Layer-B8hcK7zD.js";import"./Curve-Dz5aWL22.js";import"./types-BHzH6qVj.js";import"./Text-CR1SXK76.js";import"./DOMUtils-v_MlezWk.js";import"./ReactUtils-ChDQdCA9.js";import"./Label-BJNNtMeT.js";import"./PolarUtils-BW7uHe1I.js";import"./ZIndexLayer-Cu-NSXrz.js";import"./zIndexSlice-hpqEhuIa.js";import"./RechartsWrapper-C1weQJJR.js";import"./hooks-bj9uygVC.js";import"./axisSelectors-Cnyrx2M2.js";import"./ActiveShapeUtils-DlVOZy2E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DV7CNXNv.js";import"./useAnimationId-DURIfTWV.js";import"./Trapezoid-Bb17YseS.js";import"./Symbols-CRlDXm6y.js";import"./RegisterGraphicalItemId-D2_orhVu.js";import"./SetGraphicalItem-CnsK4wo_.js";import"./polarSelectors-BHVGYz7F.js";import"./PolarChart-CMSLjTiw.js";import"./chartDataContext-DxXmJ6_0.js";import"./CategoricalChart-dxXdOniQ.js";import"./useElementOffset-CbKJqfDk.js";import"./iteratee-BlIIsWpB.js";import"./Cross-CbLIuatD.js";import"./index-B2ii1mag.js";import"./ChartSizeDimensions-DBLPZq_x.js";import"./OffsetShower-D9qv0nDO.js";import"./PlotAreaShower-rpYBhLSK.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
