import{e}from"./iframe-BjYhBrjl.js";import{P as c,a as v}from"./PieChart-ipbdtMJ3.js";import{R as f}from"./arrayEqualityCheck-CNWOZzwZ.js";import{S as h}from"./Sector-DDjBm9K3.js";import{C as g}from"./tooltipContext-D3cZlgyd.js";import{L as C}from"./Legend-BWAfmmEj.js";import{T as k}from"./Tooltip-CCnn3vru.js";import{R as y}from"./RechartsHookInspector-BYUxShfd.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CW-CYJ5T.js";import"./Layer-DXlUs9xn.js";import"./Curve-Dsad01Eu.js";import"./types-Cdxv11pV.js";import"./Text-BkZHxLFB.js";import"./DOMUtils-BymtfGut.js";import"./ReactUtils-BfHCN5KQ.js";import"./Label-DVod4zfM.js";import"./PolarUtils-DQj3EbdT.js";import"./ZIndexLayer-DHhRDpk5.js";import"./zIndexSlice-CZl4BXnF.js";import"./RechartsWrapper-kzv9It-X.js";import"./hooks-Ddl0ZTMw.js";import"./axisSelectors-DEfYHCC1.js";import"./ActiveShapeUtils-C0Pv8fnx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-G9VjTpux.js";import"./useAnimationId-Da3IHhB2.js";import"./Trapezoid-dLSghC9y.js";import"./Symbols-Df7Es6QZ.js";import"./RegisterGraphicalItemId-CbyAeKpp.js";import"./SetGraphicalItem-D87xV8bI.js";import"./polarSelectors-B_Uo7QiS.js";import"./PolarChart-Dwj71UuO.js";import"./chartDataContext-BU8YO9rr.js";import"./CategoricalChart-DF3wtmgo.js";import"./useElementOffset-DMz3ZnQd.js";import"./iteratee-DmKJxQnM.js";import"./Cross-DSxx1_Ft.js";import"./index-CwPjVI_1.js";import"./ChartSizeDimensions-D7d_cei-.js";import"./OffsetShower-DpV5TBrr.js";import"./PlotAreaShower-D3NMg3HB.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
