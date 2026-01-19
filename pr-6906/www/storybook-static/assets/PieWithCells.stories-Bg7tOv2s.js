import{e}from"./iframe-DwwP6BDm.js";import{P as c,a as v}from"./PieChart-DjR39oaQ.js";import{R as f}from"./arrayEqualityCheck-CXp0SSuS.js";import{S as h}from"./Sector-CBezTXxj.js";import{C as g}from"./tooltipContext-HXLRqA2y.js";import{L as C}from"./Legend-BfuO8CMF.js";import{T as k}from"./Tooltip-Bmwu7ZEj.js";import{R as y}from"./RechartsHookInspector-CJI_KtjH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-fclRL42w.js";import"./Layer-CFoQxLn1.js";import"./Curve-CYEqd5kN.js";import"./types-B_qGOwmF.js";import"./Text-BQatnNw9.js";import"./DOMUtils-B0inai4d.js";import"./ReactUtils-DUdaZBrS.js";import"./Label-DDS3-7t-.js";import"./PolarUtils-Dg8SPN1d.js";import"./ZIndexLayer-BDklLudV.js";import"./zIndexSlice-B2wHCWq0.js";import"./RechartsWrapper-DfwiyTzK.js";import"./hooks-COs4f3qd.js";import"./axisSelectors-B_EC2kA9.js";import"./ActiveShapeUtils-TYQt8YFp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIC-oKaI.js";import"./useAnimationId-DSGl_EXu.js";import"./Trapezoid-D_UTfuwy.js";import"./Symbols-C6tHIL3l.js";import"./RegisterGraphicalItemId-DERA-43u.js";import"./SetGraphicalItem-BEgWdOjU.js";import"./polarSelectors-B5G57dgg.js";import"./PolarChart-C42JPq6-.js";import"./chartDataContext-GZk7dH94.js";import"./CategoricalChart-LzovMGTR.js";import"./useElementOffset-DWLOui-S.js";import"./iteratee-phGUhboG.js";import"./Cross-r6fTF-i4.js";import"./index-BPFUjSxJ.js";import"./ChartSizeDimensions-Bw79VUZb.js";import"./OffsetShower-BCg2GNSc.js";import"./PlotAreaShower-DXMXrPtG.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
