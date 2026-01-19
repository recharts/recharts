import{e}from"./iframe-CsUpRRwn.js";import{P as c,a as v}from"./PieChart-CJd31LeZ.js";import{R as f}from"./arrayEqualityCheck-Df4uzLw-.js";import{S as h}from"./Sector-B6CpJ8fc.js";import{C as g}from"./tooltipContext-CLzHhvJj.js";import{L as C}from"./Legend-BQzNsk6O.js";import{T as k}from"./Tooltip-Cci384Tu.js";import{R as y}from"./RechartsHookInspector-D2kAWSRM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ZLsJ9Xuo.js";import"./Layer-DS1Wp5Ew.js";import"./Curve-qa4VelFY.js";import"./types-B0LA1FfJ.js";import"./Text-5TnWPMA2.js";import"./DOMUtils-CimXgsHI.js";import"./ReactUtils-BcCnPuvu.js";import"./Label-B_KIKWwL.js";import"./PolarUtils-B4KHlE6s.js";import"./ZIndexLayer-VR9NNsxL.js";import"./zIndexSlice-Cey6hWeC.js";import"./RechartsWrapper-zi21JKPF.js";import"./hooks-DRsri2Tq.js";import"./axisSelectors-DgM-VaIw.js";import"./ActiveShapeUtils-BaTMfdg_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BbT4XfPo.js";import"./useAnimationId-LktXmMrZ.js";import"./Trapezoid-BXYnhgSX.js";import"./Symbols-DiPp8IeL.js";import"./RegisterGraphicalItemId-CxpIkg19.js";import"./SetGraphicalItem-6nFc_yGt.js";import"./polarSelectors-OER347r-.js";import"./PolarChart-DpXYNOy7.js";import"./chartDataContext-DdVHUCw_.js";import"./CategoricalChart-dx0iu6Gx.js";import"./useElementOffset-nroK-080.js";import"./iteratee-DLO5uZfD.js";import"./Cross-F5wBhIgo.js";import"./index-DOefsbVi.js";import"./ChartSizeDimensions-DjP1Vw_U.js";import"./OffsetShower-C5pOpIAI.js";import"./PlotAreaShower-wVtzUP4L.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
