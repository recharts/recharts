import{e}from"./iframe-Bnj2hik-.js";import{P as c,a as v}from"./PieChart-C55_Fdrw.js";import{R as f}from"./arrayEqualityCheck-CvUuuvKy.js";import{S as h}from"./Sector-DCA192jN.js";import{C as g}from"./tooltipContext-C91HkTF6.js";import{L as C}from"./Legend-Bb-V3Rnn.js";import{T as k}from"./Tooltip-5z-9ouH6.js";import{R as y}from"./RechartsHookInspector-C_AeFs2E.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CPe3qGY9.js";import"./Layer-CTa4OydD.js";import"./Curve-DmusCa7H.js";import"./types-BDwtxhLH.js";import"./Text-CZ97J0qN.js";import"./DOMUtils-JoNXkoCv.js";import"./ReactUtils-Df0RtsJl.js";import"./Label-CGAHaC0Q.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-AOmKG0iq.js";import"./zIndexSlice-CXHmHRtI.js";import"./RechartsWrapper-B0Rp0hND.js";import"./hooks-Bya6Ssf9.js";import"./axisSelectors-DFI1wFeY.js";import"./ActiveShapeUtils--kZjLfXB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBR3U7HU.js";import"./useAnimationId-APU2l9w6.js";import"./Trapezoid-CztQNmuh.js";import"./Symbols-DhIIpi5f.js";import"./RegisterGraphicalItemId-DiJF1Hfp.js";import"./SetGraphicalItem-DzQbpKu1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-wnc8ZR9y.js";import"./PolarChart-BFJqQ0Cp.js";import"./chartDataContext-DBEZcAkK.js";import"./CategoricalChart-6PDUcg0C.js";import"./useElementOffset-Cs4N1beZ.js";import"./iteratee-hXzJyvq3.js";import"./Cross-g1_l6O_A.js";import"./index-BXTK0ASf.js";import"./ChartSizeDimensions-fd2MIhjM.js";import"./OffsetShower-h-8uohRc.js";import"./PlotAreaShower-BfrbL-Yz.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
