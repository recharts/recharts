import{e}from"./iframe-HE4l6gpY.js";import{P as c,a as v}from"./PieChart-DY98YfJ6.js";import{R as f}from"./arrayEqualityCheck-zbhzaWLf.js";import{S as h}from"./Sector-CwzJgIqc.js";import{C as g}from"./tooltipContext-BsYYO75B.js";import{L as C}from"./Legend-BRdhBltB.js";import{T as k}from"./Tooltip-nFqpvsrl.js";import{R as y}from"./RechartsHookInspector-JJmqV01h.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ycHCQ38b.js";import"./Layer-BUJF1xKh.js";import"./Curve-B2qa_Fpt.js";import"./types-CN_ngcpa.js";import"./Text-CEFvmxgj.js";import"./DOMUtils-BzGtJFJB.js";import"./ReactUtils-DzgF8jcH.js";import"./Label-D3UA2eyA.js";import"./PolarUtils-DtB8lpuj.js";import"./ZIndexLayer-C9xwCaJR.js";import"./zIndexSlice-CDFEuO1j.js";import"./RechartsWrapper-rscDC45n.js";import"./hooks-CAMR9gDE.js";import"./axisSelectors-BlI41Nqe.js";import"./ActiveShapeUtils-OiiVmCWc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C42JoSoA.js";import"./useAnimationId-CIwDHleW.js";import"./Trapezoid-DAtsx-SU.js";import"./Symbols-DoDZ9cAV.js";import"./RegisterGraphicalItemId-D8pM0yYi.js";import"./SetGraphicalItem-bFi_wPR4.js";import"./polarSelectors-DAFyDZ8F.js";import"./PolarChart-RivhY2cs.js";import"./chartDataContext-HKU5YHU8.js";import"./CategoricalChart-b_wn2d-T.js";import"./useElementOffset-c9br3Dij.js";import"./iteratee-CTXU5arM.js";import"./Cross-te_z7s4G.js";import"./index-CuPLL4UF.js";import"./ChartSizeDimensions-AwnLO8b3.js";import"./OffsetShower-B5Y-lcHm.js";import"./PlotAreaShower-Cx476p9R.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
