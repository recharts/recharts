import{e}from"./iframe-BGOJmNjB.js";import{P as c,a as v}from"./PieChart-DKQX1hLj.js";import{R as f}from"./arrayEqualityCheck-BjRvnt0s.js";import{S as h}from"./Sector-Bdq99Tgd.js";import{C as g}from"./tooltipContext-cVTwqAl2.js";import{L as C}from"./Legend-DeXNp1Dk.js";import{T as k}from"./Tooltip-B2ll3XkK.js";import{R as y}from"./RechartsHookInspector-Cgn96sot.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BSJBVX4C.js";import"./Layer-LxxzUP-k.js";import"./Curve-Bf5GHIVx.js";import"./types-DLAnyyDj.js";import"./Text-BhvB3_o-.js";import"./DOMUtils-CB_Ew6lr.js";import"./ReactUtils-BB1AONhv.js";import"./Label-Bv9s524x.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-4QAOL5IQ.js";import"./zIndexSlice-DAfFf7yA.js";import"./RechartsWrapper-h16g3EQQ.js";import"./hooks-Nz6DJ1YN.js";import"./axisSelectors-Lz_2OI8_.js";import"./ActiveShapeUtils-DNGFFUmc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChTFz8xc.js";import"./useAnimationId-G8K3lY41.js";import"./Trapezoid-DXqtA9Y7.js";import"./Symbols-NLXHxAGu.js";import"./RegisterGraphicalItemId-BpPOmR2M.js";import"./SetGraphicalItem-CMM_HPdn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-D1Sg60VR.js";import"./PolarChart-oO5bNZQp.js";import"./chartDataContext-aYFPQGqf.js";import"./CategoricalChart-DgJaNq2v.js";import"./useElementOffset-Dfmg7vr2.js";import"./iteratee-BGQoj0hh.js";import"./Cross-D-yVJccV.js";import"./index-CbiKP7W2.js";import"./ChartSizeDimensions-DlrFd0zO.js";import"./OffsetShower-CQ-BgPhh.js";import"./PlotAreaShower-C5FoW2lp.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
