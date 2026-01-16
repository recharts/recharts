import{e}from"./iframe-BESbJ0y8.js";import{P as c,a as v}from"./PieChart-CQly3o6Z.js";import{R as f}from"./arrayEqualityCheck-BJiY8zR4.js";import{S as h}from"./Sector-DR905TlL.js";import{C as g}from"./tooltipContext-D7tZ70Gw.js";import{L as C}from"./Legend-Bkm0uCP1.js";import{T as k}from"./Tooltip-D7AQBugG.js";import{R as y}from"./RechartsHookInspector-BIrUgBA6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BrHDmjV-.js";import"./Layer-C8CJBWmq.js";import"./Curve-9nr7VYb2.js";import"./types-CGrtFV1P.js";import"./Text-CP99-Bit.js";import"./DOMUtils-DhuQhbbK.js";import"./ReactUtils-CdwmpjBo.js";import"./Label-qXVAmmrb.js";import"./PolarUtils-BLb-h-71.js";import"./ZIndexLayer-Dn-3v6xq.js";import"./zIndexSlice-Ce7G6X37.js";import"./RechartsWrapper-DRe6KgwL.js";import"./hooks-DB8ea1bc.js";import"./axisSelectors-C-Xtojaz.js";import"./ActiveShapeUtils-Cfdp6Sqn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0B57kHB.js";import"./useAnimationId-XfKJYBN0.js";import"./Trapezoid-BCkjDT6c.js";import"./Symbols-D6ejZ83Z.js";import"./RegisterGraphicalItemId-BqzerM7D.js";import"./SetGraphicalItem-DKXgGvLt.js";import"./polarSelectors-L5NLLtWk.js";import"./PolarChart-PUoxWWVM.js";import"./chartDataContext-CNhS_Wxw.js";import"./CategoricalChart-DLR87Qgk.js";import"./useElementOffset-BAA_29pq.js";import"./iteratee-YMYAzx6R.js";import"./Cross-B3vlJZI-.js";import"./index-CUJCh7cc.js";import"./ChartSizeDimensions-DCOrE4X1.js";import"./OffsetShower-BYHO7i_w.js";import"./PlotAreaShower-CfCRjkmu.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
