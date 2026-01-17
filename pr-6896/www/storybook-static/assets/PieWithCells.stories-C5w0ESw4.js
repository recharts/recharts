import{e}from"./iframe-C7dv0yNH.js";import{P as c,a as v}from"./PieChart-Uq0gsQPs.js";import{R as f}from"./arrayEqualityCheck-DyqdVI3P.js";import{S as h}from"./Sector-DHOItzHM.js";import{C as g}from"./tooltipContext-CjDRDyLu.js";import{L as C}from"./Legend-BplvOCRR.js";import{T as k}from"./Tooltip-Cr7o5Sde.js";import{R as y}from"./RechartsHookInspector-lhW0mFdD.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_lLZ5sY.js";import"./Layer-BTAEH97T.js";import"./Curve-DWNdd9EU.js";import"./types-CjrwKJ5w.js";import"./Text-c0T3JDCh.js";import"./DOMUtils-C38PLAG9.js";import"./ReactUtils-Jbry0BUC.js";import"./Label-pLuTDL7t.js";import"./PolarUtils-Cz9TAlOj.js";import"./ZIndexLayer-DHYRzIS_.js";import"./zIndexSlice-BInAuLle.js";import"./RechartsWrapper-C9EYdUpz.js";import"./hooks-sLNaPpHz.js";import"./axisSelectors-C_30vZFc.js";import"./ActiveShapeUtils-BhYBD1tZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BknPpfrj.js";import"./useAnimationId-y4GFPobY.js";import"./Trapezoid-B8NGdIRJ.js";import"./Symbols-CWjjEhVI.js";import"./RegisterGraphicalItemId-DhjtTH4e.js";import"./SetGraphicalItem-dcgdauaK.js";import"./polarSelectors-DWA31lty.js";import"./PolarChart-CT11ja7j.js";import"./chartDataContext-BIHEfK7s.js";import"./CategoricalChart-CHqTaTxC.js";import"./useElementOffset-DtZiECmb.js";import"./iteratee-D7nR1KAQ.js";import"./Cross-Dk-4-KwN.js";import"./index-CtbSRCbY.js";import"./ChartSizeDimensions-DjjqF_40.js";import"./OffsetShower-CNtlgBc5.js";import"./PlotAreaShower-DP2LRcem.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
