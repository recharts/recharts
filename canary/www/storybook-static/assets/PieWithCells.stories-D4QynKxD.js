import{e}from"./iframe-_im4GKTL.js";import{P as c,a as v}from"./PieChart-D9-9wJPA.js";import{R as f}from"./arrayEqualityCheck-DQWePApg.js";import{S as h}from"./Sector-BGg8SpOK.js";import{C as g}from"./tooltipContext-BHy7B8jS.js";import{L as C}from"./Legend-CHw6DFha.js";import{T as k}from"./Tooltip-B8xCykt7.js";import{R as y}from"./RechartsHookInspector-2hFEojhh.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CaxhqgES.js";import"./Layer-ojK6bjXb.js";import"./Curve-CjWJcBC1.js";import"./types-CFuB44L5.js";import"./Text-DEtZyA_I.js";import"./DOMUtils-BcupyZUP.js";import"./ReactUtils-CAkOWUwD.js";import"./Label-CTy8eywr.js";import"./PolarUtils-DcWiW1XO.js";import"./ZIndexLayer-DmWCVoEY.js";import"./zIndexSlice-CPIWfeLh.js";import"./RechartsWrapper-DKFQy6Ae.js";import"./hooks-DKOVFqS5.js";import"./axisSelectors-DpIDWeTq.js";import"./ActiveShapeUtils-rIph4crd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ejGTCKcw.js";import"./useAnimationId-iCdU_Q_k.js";import"./Trapezoid-C1OI6suu.js";import"./Symbols-aMSa3fiu.js";import"./RegisterGraphicalItemId-B4K3Ftz3.js";import"./SetGraphicalItem-fuqPKC-n.js";import"./polarSelectors-CNgXYZ9V.js";import"./PolarChart-lLbyzrcI.js";import"./chartDataContext-DX2vSSsK.js";import"./CategoricalChart-CQUZMGEq.js";import"./useElementOffset-C2SIKvmg.js";import"./iteratee-CjrhkTpo.js";import"./Cross-D1pWve48.js";import"./index-B3zuwbjl.js";import"./ChartSizeDimensions-Db8YW_qh.js";import"./OffsetShower-C0adziBs.js";import"./PlotAreaShower-BEBglPgm.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
