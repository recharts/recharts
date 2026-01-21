import{e}from"./iframe-B3JCtExw.js";import{P as c,a as v}from"./PieChart-BBGEzmmA.js";import{R as f}from"./arrayEqualityCheck-BI5ikbve.js";import{S as h}from"./Sector-zNAlF0WR.js";import{C as g}from"./tooltipContext-b-HqDcfL.js";import{L as C}from"./Legend-D5r5RWGJ.js";import{T as k}from"./Tooltip-BmkvFz22.js";import{R as y}from"./RechartsHookInspector-B6PrNXux.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-HcHTA_b-.js";import"./Layer-m9bU_GMN.js";import"./Curve-CrR1QL9p.js";import"./types-CzJtAzjL.js";import"./Text-DN2HTHOh.js";import"./DOMUtils-k31lOHZq.js";import"./ReactUtils-YAdCW6ic.js";import"./Label-DjeP5w8o.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-BuYvVcNP.js";import"./zIndexSlice-CzadPF-N.js";import"./RechartsWrapper-D9I6VAiu.js";import"./hooks-Cf16Eb3m.js";import"./axisSelectors-Bj5LT4A-.js";import"./ActiveShapeUtils-B5WBZ39Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D23yRLTV.js";import"./useAnimationId-YJOXYlAT.js";import"./Trapezoid-54tzhOdh.js";import"./Symbols-CjdLCsX8.js";import"./RegisterGraphicalItemId-DL15PSpi.js";import"./SetGraphicalItem-CgnveGex.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-7vjJvmoV.js";import"./PolarChart-C9jPtQ1F.js";import"./chartDataContext-B7pD_95p.js";import"./CategoricalChart-HwleueHs.js";import"./useElementOffset-BoaozXpF.js";import"./iteratee-Cz7oSf5Y.js";import"./Cross-B0CbIQuP.js";import"./index-DqnQGlGG.js";import"./ChartSizeDimensions-CMi2DnfJ.js";import"./OffsetShower-DLnhG5IQ.js";import"./PlotAreaShower-CnaAKLan.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
