import{e}from"./iframe-Dnh1Ryvb.js";import{a as c,P as v}from"./PieChart-BdRP0Jex.js";import{R as f}from"./arrayEqualityCheck-DCevfetv.js";import{S as h}from"./Sector-CK7LUajO.js";import{C as g}from"./tooltipContext-B6FP9cdT.js";import{L as C}from"./Legend-DNq5AodR.js";import{T as k}from"./Tooltip-DMtaWOlD.js";import{R as y}from"./RechartsHookInspector-DMji7YUm.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Coi4LBhI.js";import"./Layer-CG0lsnsl.js";import"./Curve-CGOZKazJ.js";import"./types-NxPc932w.js";import"./Text-DuqEZ_1u.js";import"./DOMUtils-Bor3dP_R.js";import"./ReactUtils-09bip2qn.js";import"./Label-B-RHJFae.js";import"./PolarUtils-Cgm959MD.js";import"./ZIndexLayer-Bcm3_13n.js";import"./zIndexSlice-BXugI2eB.js";import"./RechartsWrapper-Ch8zJvUN.js";import"./hooks-TRp6kMUA.js";import"./axisSelectors-CwAmoCkz.js";import"./ActiveShapeUtils-oJd1nGJX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-lOgApOPv.js";import"./useAnimationId-DymxHjdh.js";import"./Trapezoid-DqrFuhKX.js";import"./Symbols-Bi-3r2yZ.js";import"./RegisterGraphicalItemId-vvLaBIlf.js";import"./SetGraphicalItem-Dm7xV0AH.js";import"./polarSelectors-DtZ53tpV.js";import"./PolarChart-Cf9hIThN.js";import"./chartDataContext-CqWHnJZ5.js";import"./CategoricalChart-BipcxAVd.js";import"./useElementOffset-JFxjDGnz.js";import"./iteratee-KFvQ-6kW.js";import"./Cross-Cjn-lYng.js";import"./index-BBrJvbdK.js";import"./ChartSizeDimensions-DbCZNQtH.js";import"./OffsetShower-DAcHGjow.js";import"./PlotAreaShower-5JxeAXKY.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
