import{e}from"./iframe--x23rdHV.js";import{P as c,a as v}from"./PieChart-CtZYgHoE.js";import{R as f}from"./arrayEqualityCheck-BD1qZPxT.js";import{S as h}from"./Sector-En_dyy3k.js";import{C as g}from"./tooltipContext-DeJUwuti.js";import{L as C}from"./Legend-CKghAnm7.js";import{T as k}from"./Tooltip-BpR2HqJx.js";import{R as y}from"./RechartsHookInspector-CS_N4Y-F.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Q3fBKAvl.js";import"./Layer-W9JL67lG.js";import"./Curve-BsoHhr4Y.js";import"./types-DIiwzDHn.js";import"./Text-C7KTYcc4.js";import"./DOMUtils-a1QzPdPR.js";import"./ReactUtils-Bbi28O4z.js";import"./Label-CHtfbXlI.js";import"./PolarUtils-DJ6pmdE6.js";import"./ZIndexLayer-ezCnztm4.js";import"./zIndexSlice-BZ8J8CWC.js";import"./RechartsWrapper-CaVQgtIT.js";import"./hooks-B9glux5h.js";import"./axisSelectors-DmpeXiUd.js";import"./ActiveShapeUtils-Xs79DTHH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZSQAb92H.js";import"./useAnimationId-DUCYZNMW.js";import"./Trapezoid-B1cr3UmX.js";import"./Symbols-DVanmgvf.js";import"./RegisterGraphicalItemId-DjY_2vEh.js";import"./SetGraphicalItem-Ccb8m39o.js";import"./polarSelectors-BxB2bLeT.js";import"./PolarChart-BquZJSg1.js";import"./chartDataContext-CDQnRCpO.js";import"./CategoricalChart-NDapYkGp.js";import"./useElementOffset-B8qSdA4X.js";import"./iteratee-Bd8EGcRe.js";import"./Cross-BC82NsLR.js";import"./index-DL_1z0BC.js";import"./ChartSizeDimensions-wrT4dmYN.js";import"./OffsetShower-CJxOrGxz.js";import"./PlotAreaShower-AHA62Bp0.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
