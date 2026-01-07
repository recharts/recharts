import{e}from"./iframe-CjnSqbHY.js";import{a as c,P as v}from"./PieChart-CvAKmGyV.js";import{R as f}from"./arrayEqualityCheck-Cu3uzYRG.js";import{S as h}from"./Sector-CCKEyOJh.js";import{C as g}from"./tooltipContext-mSBfX6z_.js";import{L as C}from"./Legend-DJReSB-1.js";import{T as k}from"./Tooltip-CCoxC8s7.js";import{R as y}from"./RechartsHookInspector-Df5OjUd3.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B-Bnboba.js";import"./Layer-BPLY51e7.js";import"./Curve-5ylBOp_W.js";import"./types-BYGLnYta.js";import"./Text-CLMmVwol.js";import"./DOMUtils-Bui7kyZ-.js";import"./ReactUtils-Bdj2Y15E.js";import"./Label-DvPPISHS.js";import"./PolarUtils-Dtm6FADD.js";import"./ZIndexLayer-6i7cawcn.js";import"./zIndexSlice-B31h325U.js";import"./RechartsWrapper-Bjy9O6Bl.js";import"./hooks-z5iYR9uK.js";import"./axisSelectors-2WFqeeny.js";import"./ActiveShapeUtils-B0wPh4Lu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DRbwIDD9.js";import"./useAnimationId-BIU6gnQ_.js";import"./Trapezoid-BpUw0ZK8.js";import"./Symbols-wzrVuNDj.js";import"./RegisterGraphicalItemId-B25edjY0.js";import"./SetGraphicalItem-RCHMBw2A.js";import"./polarSelectors-Bghq-84v.js";import"./PolarChart-Aroz73AE.js";import"./chartDataContext-OrqrGnHW.js";import"./CategoricalChart-CVHNAiHm.js";import"./useElementOffset-CJI6xldx.js";import"./iteratee-DiI7B68t.js";import"./Cross-BEO3jmNv.js";import"./index-BmN97iZD.js";import"./ChartSizeDimensions-BYQzTjU5.js";import"./OffsetShower-BP7aiJM0.js";import"./PlotAreaShower-CvhWYGuu.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
