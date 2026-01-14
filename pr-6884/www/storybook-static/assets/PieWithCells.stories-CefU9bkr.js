import{e}from"./iframe-CaIgGyHM.js";import{P as c,a as v}from"./PieChart-NDC6leBR.js";import{R as f}from"./arrayEqualityCheck-CjxR2bSj.js";import{S as h}from"./Sector-BJsydvu6.js";import{C as g}from"./tooltipContext-C07Af5tl.js";import{L as C}from"./Legend-DSWW6CjA.js";import{T as k}from"./Tooltip-BSsCpQhd.js";import{R as y}from"./RechartsHookInspector-Dwl6GEES.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWSFOFU9.js";import"./Layer-Bv6QiOXu.js";import"./Curve-9htNi4i5.js";import"./types-8d_H4dY-.js";import"./Text-b4cawV-F.js";import"./DOMUtils-Bp1vNIxR.js";import"./ReactUtils-CsC3O-TD.js";import"./Label-P-OvPLPn.js";import"./PolarUtils-DrqRDweU.js";import"./ZIndexLayer-Dbr8-T8d.js";import"./zIndexSlice-Q7xIp-VY.js";import"./RechartsWrapper-GR6QdmkY.js";import"./hooks-C-Cwfz9Q.js";import"./axisSelectors-CnuhT51I.js";import"./ActiveShapeUtils-BYK5wQE6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaJA74zA.js";import"./useAnimationId-C8_uny94.js";import"./Trapezoid-DwBeZXV_.js";import"./Symbols-Crj6RDt9.js";import"./RegisterGraphicalItemId-BuoGtP2e.js";import"./SetGraphicalItem-ByoAYqMJ.js";import"./polarSelectors-Cj4evHM-.js";import"./PolarChart-Dn2_ZXDl.js";import"./chartDataContext-D2XV3P37.js";import"./CategoricalChart-BosqoloG.js";import"./useElementOffset-HsHwXild.js";import"./iteratee-BXSQ8JUf.js";import"./Cross-lPqrfSfL.js";import"./index-B-tNTan1.js";import"./ChartSizeDimensions-BI1RWPz_.js";import"./OffsetShower-BPLk7P8i.js";import"./PlotAreaShower-CFgftmSD.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
