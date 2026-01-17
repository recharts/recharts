import{e}from"./iframe-CLIMsGOZ.js";import{P as c,a as v}from"./PieChart-Dgt-B2a_.js";import{R as f}from"./arrayEqualityCheck-CbYFkYA0.js";import{S as h}from"./Sector-C08coEZ4.js";import{C as g}from"./tooltipContext-BI8Gpz0W.js";import{L as C}from"./Legend-CAXkYAPU.js";import{T as k}from"./Tooltip-nbxtuPQY.js";import{R as y}from"./RechartsHookInspector-B158dvGO.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8mWkwf6.js";import"./Layer-l9L2Sb8o.js";import"./Curve-DXQteT8k.js";import"./types-HWBumAOZ.js";import"./Text-BeJ5iM47.js";import"./DOMUtils-BnxK2rS8.js";import"./ReactUtils-Bk0OFjED.js";import"./Label-QzDxpC8q.js";import"./PolarUtils-BIAYT_Jm.js";import"./ZIndexLayer-5xiPbIim.js";import"./zIndexSlice-DazYr2Iy.js";import"./RechartsWrapper-lPK7Cxev.js";import"./hooks-DenE5nGN.js";import"./axisSelectors-GOM-QLi6.js";import"./ActiveShapeUtils-YEQ3f73b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JG6TvpVB.js";import"./useAnimationId-wMl1lWMr.js";import"./Trapezoid-D79jjH6v.js";import"./Symbols-DbV1O1CF.js";import"./RegisterGraphicalItemId-46GsKK8-.js";import"./SetGraphicalItem-C8e1XdZ2.js";import"./polarSelectors-DkCmjqRE.js";import"./PolarChart-BasrY5QD.js";import"./chartDataContext-B4asjYes.js";import"./CategoricalChart-DAMhxPe3.js";import"./useElementOffset-CLqe_5PL.js";import"./iteratee-Bt0H2n0P.js";import"./Cross-AXdduUCv.js";import"./index-8YxDhDRV.js";import"./ChartSizeDimensions-4XerZwXh.js";import"./OffsetShower-CTodD9i0.js";import"./PlotAreaShower-BoV_Aqat.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
