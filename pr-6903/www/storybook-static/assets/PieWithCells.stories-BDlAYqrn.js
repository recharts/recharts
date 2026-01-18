import{e}from"./iframe-Bn_7jga7.js";import{P as c,a as v}from"./PieChart-lGMJ7W0d.js";import{R as f}from"./arrayEqualityCheck-CSuBYCWj.js";import{S as h}from"./Sector-CuwRjw3S.js";import{C as g}from"./tooltipContext-BkkKQoXo.js";import{L as C}from"./Legend-D1Nunbxs.js";import{T as k}from"./Tooltip-DQIXZzn5.js";import{R as y}from"./RechartsHookInspector-B4H5Lyo-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCdxs1iD.js";import"./Layer-COTxk2h3.js";import"./Curve-qns-9S5i.js";import"./types-SXh4X6nB.js";import"./Text-BQI8M-tq.js";import"./DOMUtils-CRyukOD8.js";import"./ReactUtils-GlbSvDIy.js";import"./Label-CS-Zhu5a.js";import"./PolarUtils-CBWSHxoJ.js";import"./ZIndexLayer-BXCJNtZK.js";import"./zIndexSlice-usP7cHtF.js";import"./RechartsWrapper-DSmS8nVp.js";import"./hooks-BL6pVXml.js";import"./axisSelectors-B3n8BDRj.js";import"./ActiveShapeUtils-BF53wkQd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Wjj6MIuU.js";import"./useAnimationId-id_mTj1h.js";import"./Trapezoid-BCX-j7xi.js";import"./Symbols-DCEXw1ah.js";import"./RegisterGraphicalItemId-BEPfbN5x.js";import"./SetGraphicalItem-BWnuaPkJ.js";import"./polarSelectors-CAI4kWrf.js";import"./PolarChart-wy0UEx9-.js";import"./chartDataContext-CGN_dwZ0.js";import"./CategoricalChart-C3CVYlbu.js";import"./useElementOffset-B0onx-6f.js";import"./iteratee-UAJrQy9o.js";import"./Cross-D4gM0r3o.js";import"./index-wlSGh2Q3.js";import"./ChartSizeDimensions-C28_hYOe.js";import"./OffsetShower-BxoubtuL.js";import"./PlotAreaShower-Czw-Abfi.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
