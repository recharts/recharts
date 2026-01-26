import{e}from"./iframe-DZUAPGWU.js";import{P as c,a as v}from"./PieChart-Cdqf6i-9.js";import{R as f}from"./arrayEqualityCheck-B_Kj_5n3.js";import{S as h}from"./Sector-Bi4APoRd.js";import{C as g}from"./tooltipContext-Bs9JA3NR.js";import{L as C}from"./Legend-Bo6_JZD5.js";import{T as k}from"./Tooltip-CAAh9KsA.js";import{R as y}from"./RechartsHookInspector-CTfD316c.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTBUcsM2.js";import"./Layer-CUM7VYJb.js";import"./Curve-OnMyuRM1.js";import"./types-gnnl7DTW.js";import"./Text-m0PU0Hkx.js";import"./DOMUtils-B-ueGznT.js";import"./ReactUtils-BwhtQEJo.js";import"./Label-BpGSAoxQ.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-48hS6z3u.js";import"./zIndexSlice-Wj6Lqt0c.js";import"./RechartsWrapper-CZEU1xAf.js";import"./hooks-CmVGlUZA.js";import"./axisSelectors-DL2NuUaJ.js";import"./ActiveShapeUtils-DDG505Mz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dm59FMII.js";import"./useAnimationId-eGODZItY.js";import"./Trapezoid-B65I0G_8.js";import"./Symbols-CJWWl_NZ.js";import"./RegisterGraphicalItemId-D7Nyvpen.js";import"./SetGraphicalItem-BexwVPUx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-DQ5gDzHM.js";import"./PolarChart-BdLt9l0H.js";import"./chartDataContext-uOI58bDP.js";import"./CategoricalChart-DjpQG7hJ.js";import"./useElementOffset-BC7wqAzr.js";import"./iteratee-Ct_qYfh9.js";import"./Cross-WyJkKwCu.js";import"./index-R3RI3I7Q.js";import"./ChartSizeDimensions-CMzQU2ij.js";import"./OffsetShower-B5l6vGiv.js";import"./PlotAreaShower-e0vK3Qeg.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
