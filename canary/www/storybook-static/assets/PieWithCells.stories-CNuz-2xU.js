import{e}from"./iframe-C2m-yPM5.js";import{a as c,P as v}from"./PieChart-CkPI-yZ1.js";import{R as f}from"./arrayEqualityCheck-TbGkdOW0.js";import{S as h}from"./Sector-DFUU7h0Y.js";import{C as g}from"./tooltipContext-Dk1JFYuD.js";import{L as C}from"./Legend-Bl5gozJt.js";import{T as k}from"./Tooltip-CASLOoZ8.js";import{R as y}from"./RechartsHookInspector-hZPAuXLN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BmyS9k2s.js";import"./Layer-Iud-sCq9.js";import"./Curve-Bma3Kx5X.js";import"./types-8dUwYk5q.js";import"./Text-DUKp4QGC.js";import"./DOMUtils-CU85nTnD.js";import"./ReactUtils-DmzHw7gD.js";import"./Label-BXoaurZ0.js";import"./PolarUtils-CURfmLFn.js";import"./ZIndexLayer-Cl-H5N7h.js";import"./zIndexSlice-C6669BzF.js";import"./RechartsWrapper-Cw8RxtHF.js";import"./hooks-DAeXdWPb.js";import"./axisSelectors-DcRH2ohT.js";import"./ActiveShapeUtils-BOZBV2Pi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQHai8ZT.js";import"./useAnimationId-Du8Fxdxx.js";import"./Trapezoid-CwALKVJk.js";import"./Symbols-vGEzJ5HY.js";import"./RegisterGraphicalItemId-DCftStFv.js";import"./SetGraphicalItem-qvQ4SGUj.js";import"./polarSelectors-DKpHX5UX.js";import"./PolarChart-BsZI1VWN.js";import"./chartDataContext-BYudZTMM.js";import"./CategoricalChart-DyutkFbX.js";import"./useElementOffset-CEtPZLws.js";import"./iteratee-C4HdVpvy.js";import"./Cross-C4JN4moc.js";import"./index-Dd7KOolC.js";import"./ChartSizeDimensions-DjDyxBi1.js";import"./OffsetShower-DXH-cEhk.js";import"./PlotAreaShower-lLRwtmjO.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
