import{e}from"./iframe-C9kyXynm.js";import{a as c,P as v}from"./PieChart-DQ70AMAd.js";import{R as f}from"./arrayEqualityCheck-BdbBdFIu.js";import{S as h}from"./Sector-D1DtIzuz.js";import{C as g}from"./tooltipContext-C1hlJFvg.js";import{L as C}from"./Legend-DgLj4nAF.js";import{T as k}from"./Tooltip-DWE8kPry.js";import{R as y}from"./RechartsHookInspector-CKajdCMN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCZIpR14.js";import"./Layer-LG3hnzpE.js";import"./Curve-WEIhibNB.js";import"./types-BfqR7E8K.js";import"./Text-BcrXlrdS.js";import"./DOMUtils-CQZn70zK.js";import"./ReactUtils-D_EEBxyT.js";import"./Label-C-oa8ua5.js";import"./PolarUtils-B_1hBJ6O.js";import"./ZIndexLayer-7ELyukPI.js";import"./zIndexSlice-cJxKJ8ug.js";import"./RechartsWrapper-ultCJT0w.js";import"./hooks-BzniDeZ2.js";import"./axisSelectors-50fqgJ0X.js";import"./ActiveShapeUtils-CGirhXo2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSM7deum.js";import"./useAnimationId-XLZTjrUv.js";import"./Trapezoid-91tzOikz.js";import"./Symbols-DR9F1KQK.js";import"./RegisterGraphicalItemId-oP_vlkHV.js";import"./SetGraphicalItem-DyyRaUbx.js";import"./polarSelectors-DhxH5_oW.js";import"./PolarChart-Cy7acTEp.js";import"./chartDataContext-CZ4PAiww.js";import"./CategoricalChart-5uqkh1gH.js";import"./useElementOffset-CMzOGP_X.js";import"./iteratee-DoJqJKsx.js";import"./Cross-GDyFEfaG.js";import"./index-DVm8rubF.js";import"./ChartSizeDimensions-COOovYk2.js";import"./OffsetShower-D9P9ThB2.js";import"./PlotAreaShower-B7fr2_CT.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
