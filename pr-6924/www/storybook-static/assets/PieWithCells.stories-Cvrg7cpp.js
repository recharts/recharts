import{e}from"./iframe-BMCIaxKG.js";import{P as c,a as v}from"./PieChart-C8QMgt3R.js";import{R as f}from"./arrayEqualityCheck--GVOH9-X.js";import{S as h}from"./Sector-DluXzhdl.js";import{C as g}from"./tooltipContext-DbQ4U6Ut.js";import{L as C}from"./Legend-DFnGiCNO.js";import{T as k}from"./Tooltip-CGifnB1H.js";import{R as y}from"./RechartsHookInspector-BEE5VJHB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DYzg8zSB.js";import"./Layer-MWXbZbYh.js";import"./Curve-B-WNVokC.js";import"./types-CjLOz-vL.js";import"./Text-C3pNOBoN.js";import"./DOMUtils-Bqla5JdC.js";import"./ReactUtils-5tDB8KCJ.js";import"./Label-DX5r6J7L.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-D3DglK0F.js";import"./zIndexSlice-B9Z5B7ke.js";import"./RechartsWrapper-Bb1gDQXi.js";import"./hooks-DebnH94a.js";import"./axisSelectors-cgl3VJbu.js";import"./ActiveShapeUtils-DtnCQ-cg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1cropaK.js";import"./useAnimationId-BmU-cqjD.js";import"./Trapezoid-CAvOGSEj.js";import"./Symbols-DwSHOnga.js";import"./RegisterGraphicalItemId-oN7HBHom.js";import"./SetGraphicalItem-CcB6KXss.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-DxXyiMqe.js";import"./PolarChart-CQFInvhL.js";import"./chartDataContext-oBen9I8F.js";import"./CategoricalChart-epx7zaIT.js";import"./useElementOffset-CqP1o4V0.js";import"./iteratee-C2T4gNsh.js";import"./Cross-CMeEtOq-.js";import"./index-a6yAW-au.js";import"./ChartSizeDimensions-B-pVWfha.js";import"./OffsetShower--s29U8Jg.js";import"./PlotAreaShower-CsN0ehbx.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
