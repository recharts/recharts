import{e}from"./iframe-BfEeuf29.js";import{P as c,a as v}from"./PieChart-BKqFUJmJ.js";import{R as f}from"./arrayEqualityCheck-CQTYn8oK.js";import{S as h}from"./Sector-Bpai8LVK.js";import{C as g}from"./tooltipContext-GkGaAySd.js";import{L as C}from"./Legend-DV-YA5se.js";import{T as k}from"./Tooltip-2YB9s4AJ.js";import{R as y}from"./RechartsHookInspector-CaAU2h8E.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D5wHr7xB.js";import"./Layer-WUPrCNhO.js";import"./Curve-QDibvidp.js";import"./types-B9h6Osdn.js";import"./Text-Cat3JN_E.js";import"./DOMUtils-kfWXwCLP.js";import"./ReactUtils-Dy1dqhtA.js";import"./Label-BQL_xh_a.js";import"./PolarUtils-B3A4Bn44.js";import"./ZIndexLayer-nNaEVjlH.js";import"./zIndexSlice-DJbSQN7A.js";import"./RechartsWrapper-DsA4AxRI.js";import"./hooks-CshdMEx0.js";import"./axisSelectors-BzW232an.js";import"./ActiveShapeUtils-DAJHbM11.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLgB_eL-.js";import"./useAnimationId-593qmaql.js";import"./Trapezoid-D5AU_-Tp.js";import"./Symbols-DTph50Q3.js";import"./RegisterGraphicalItemId-BNJoKXDB.js";import"./SetGraphicalItem-D6lIAA2e.js";import"./polarSelectors-CLPbUVg1.js";import"./PolarChart-Cq6FWhmg.js";import"./chartDataContext-96TYBSAN.js";import"./CategoricalChart-Dc9eAC4P.js";import"./useElementOffset-C3xH1JMH.js";import"./iteratee-D9HA3Tju.js";import"./Cross-Cx1nVWUe.js";import"./index-n-fO4kHm.js";import"./ChartSizeDimensions-DtODaN3g.js";import"./OffsetShower-usFsQs5P.js";import"./PlotAreaShower-Pa3IuuRb.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
