import{e}from"./iframe-3ssOB91Q.js";import{P as c,a as v}from"./PieChart-HkNBJD9o.js";import{R as f}from"./arrayEqualityCheck-RWElLsK2.js";import{S as h}from"./Sector-2W0uOEF9.js";import{C as g}from"./tooltipContext-CpkpOP-2.js";import{L as C}from"./Legend-DWHGT8GN.js";import{T as k}from"./Tooltip-CPd0XiLQ.js";import{R as y}from"./RechartsHookInspector-DHP-9GZN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ctxcgNcU.js";import"./Layer-W17HINYn.js";import"./Curve-D5W7Bwp2.js";import"./types-CfIL69ww.js";import"./Text-BvProlO0.js";import"./DOMUtils-DJ-ugNhO.js";import"./ReactUtils-DVrxVJVb.js";import"./Label-DzudoiWU.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CTlKz5-T.js";import"./zIndexSlice-ho1ylgk9.js";import"./RechartsWrapper-8idYzD5u.js";import"./hooks-6a0TNfIB.js";import"./axisSelectors-DTH02zf7.js";import"./ActiveShapeUtils-D4XQIZp-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrCnLm7V.js";import"./useAnimationId-C6CpCegT.js";import"./Trapezoid-bVA-uN3w.js";import"./Symbols-CXbAeeaq.js";import"./RegisterGraphicalItemId-K0GLMkuF.js";import"./SetGraphicalItem-D9Cn0Thc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-CnPrFJ8o.js";import"./PolarChart-BpTU69tj.js";import"./chartDataContext-CBnI5hri.js";import"./CategoricalChart-CW0qn3M9.js";import"./useElementOffset-c5AEGGC8.js";import"./iteratee-2ynVNmH8.js";import"./Cross-VUoSz3Oz.js";import"./index-Cewrc6A2.js";import"./ChartSizeDimensions-BSxBFCsp.js";import"./OffsetShower-BDSx3j6G.js";import"./PlotAreaShower-DLNjbvna.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
