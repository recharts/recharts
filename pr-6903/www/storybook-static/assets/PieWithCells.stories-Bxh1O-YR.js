import{e}from"./iframe-oKMzB0d-.js";import{P as c,a as v}from"./PieChart-BcKizkBy.js";import{R as f}from"./arrayEqualityCheck-Caoo2I2E.js";import{S as h}from"./Sector-DAIlPrp3.js";import{C as g}from"./tooltipContext-CIiVfwCR.js";import{L as C}from"./Legend-CLhSxZ7W.js";import{T as k}from"./Tooltip-B8PD1RTL.js";import{R as y}from"./RechartsHookInspector-BzEUDXeW.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTiWYe8E.js";import"./Layer-Drq4I3c8.js";import"./Curve-C8ob2FQq.js";import"./types-Bjx9mdsH.js";import"./Text-BAYt6EI9.js";import"./DOMUtils-xOASrBrw.js";import"./ReactUtils-BHQlFXLR.js";import"./Label-CUg786Ba.js";import"./PolarUtils-BvDSiGX_.js";import"./ZIndexLayer-pfpD2pdJ.js";import"./zIndexSlice-BjyYTZgT.js";import"./RechartsWrapper-CTDVW_mD.js";import"./hooks-CriE4jYz.js";import"./axisSelectors-igA0S6xv.js";import"./ActiveShapeUtils-r0uOmI_9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CfUKIL1Q.js";import"./useAnimationId-D0v972Sk.js";import"./Trapezoid-D0zfblCG.js";import"./Symbols-mKBUz55k.js";import"./RegisterGraphicalItemId-Bt6_4oI2.js";import"./SetGraphicalItem-BmLbSZv4.js";import"./polarSelectors-DfbQ8dsI.js";import"./PolarChart-DiKJ2Rqk.js";import"./chartDataContext-CTkSsRq2.js";import"./CategoricalChart-CKuwRZ5o.js";import"./useElementOffset-CKxTytD_.js";import"./iteratee-DGg97fx9.js";import"./Cross-Dk50kqQk.js";import"./index-Bw063qfE.js";import"./ChartSizeDimensions-BmK2dJEG.js";import"./OffsetShower-B2D8CtyY.js";import"./PlotAreaShower-DVDhbnca.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
