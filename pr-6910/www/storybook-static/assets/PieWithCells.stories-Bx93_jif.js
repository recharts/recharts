import{e}from"./iframe-Qbvlqe9c.js";import{P as c,a as v}from"./PieChart-DglVFXFp.js";import{R as f}from"./arrayEqualityCheck-B3n_664E.js";import{S as h}from"./Sector-Byha0vVB.js";import{C as g}from"./tooltipContext-CUM_ZwHn.js";import{L as C}from"./Legend-hkD0puSA.js";import{T as k}from"./Tooltip-DNiKyqgP.js";import{R as y}from"./RechartsHookInspector-Bcf65z8s.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-76Pg9xKV.js";import"./Layer-CGD9i9Tv.js";import"./Curve-viWUlKkP.js";import"./types-BIElRGEC.js";import"./Text-BhRNkj8s.js";import"./DOMUtils-D4R1mvUb.js";import"./ReactUtils-DDfXx9yL.js";import"./Label-BjNpzDAS.js";import"./PolarUtils-1Zh54hEc.js";import"./ZIndexLayer-BGnFu8Hz.js";import"./zIndexSlice-Dd4fWTvl.js";import"./RechartsWrapper-j0khHO2J.js";import"./hooks-C__9gfvB.js";import"./axisSelectors-DP3q5L3p.js";import"./ActiveShapeUtils-DIh0EQro.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dq-tt7hT.js";import"./useAnimationId-BMBkTPld.js";import"./Trapezoid-B2gFU9p-.js";import"./Symbols-DUUTByO6.js";import"./RegisterGraphicalItemId-Bl4eT23s.js";import"./SetGraphicalItem-BGT_K21t.js";import"./polarSelectors-d7rnosWA.js";import"./PolarChart-DbNtSmBC.js";import"./chartDataContext-meOOuMw1.js";import"./CategoricalChart-BN7dR1q_.js";import"./useElementOffset-CVTdXMNm.js";import"./iteratee-D8VcXKhk.js";import"./Cross-Bkz5W_Jj.js";import"./index-BFsVO8Up.js";import"./ChartSizeDimensions-DHXLFfdm.js";import"./OffsetShower-CcbpVL0P.js";import"./PlotAreaShower-Bw9dKf0L.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
