import{e}from"./iframe-CT4QuQ5L.js";import{P as c,a as v}from"./PieChart-9A1hilNS.js";import{R as f}from"./arrayEqualityCheck-CUEtHgfA.js";import{S as h}from"./Sector-BFKxB58R.js";import{C as g}from"./tooltipContext-BarcjW0L.js";import{L as C}from"./Legend-BmzI-m1q.js";import{T as k}from"./Tooltip-D4I9rTHE.js";import{R as y}from"./RechartsHookInspector-lcTlhUAW.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTWHIHtK.js";import"./Layer-BIxjtyeO.js";import"./Curve-CwfbqPR9.js";import"./types-CGMRlxY8.js";import"./Text-ZzNZJtBS.js";import"./DOMUtils-CDXEyiOj.js";import"./ReactUtils-BD8G1aYb.js";import"./Label-CFlrJOC9.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-B4whtcRw.js";import"./zIndexSlice-BbZ3gLFC.js";import"./RechartsWrapper-Dw0rEgTJ.js";import"./hooks-CidIT9Ht.js";import"./axisSelectors-DlMKUcSY.js";import"./ActiveShapeUtils-Pkd70I7I.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJlDY3Tg.js";import"./useAnimationId-ByA7rgvy.js";import"./Trapezoid-C3eKH3hP.js";import"./Symbols-NgG1d1Uj.js";import"./RegisterGraphicalItemId-CxRMjxHS.js";import"./SetGraphicalItem-BrCNGFd6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-B18t-Yzp.js";import"./PolarChart-BMEeFHFL.js";import"./chartDataContext-BO8jZHln.js";import"./CategoricalChart-DmUQY6Sd.js";import"./useElementOffset-B6r2EuKs.js";import"./iteratee-BP4C4rB0.js";import"./Cross-CDfR4P6Z.js";import"./index-DDx2nU6r.js";import"./ChartSizeDimensions-71uSM08s.js";import"./OffsetShower-bHCqATCI.js";import"./PlotAreaShower-DYHCw4lK.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
