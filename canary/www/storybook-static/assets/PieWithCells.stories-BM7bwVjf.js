import{e}from"./iframe-0lTGunMW.js";import{P as c,a as v}from"./PieChart-D6lJyoMt.js";import{R as f}from"./arrayEqualityCheck-BcVHM6kB.js";import{S as h}from"./Sector-Doli5igL.js";import{C as g}from"./tooltipContext-PVr3o7WU.js";import{L as C}from"./Legend-Dhq_oTRt.js";import{T as k}from"./Tooltip-D5BWDrFR.js";import{R as y}from"./RechartsHookInspector-Dk1C8jj5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Hv7UJc4Y.js";import"./Layer-BnXp22uo.js";import"./Curve-DZsm4o-J.js";import"./types-WsTRE19v.js";import"./Text-bhqNXfXh.js";import"./DOMUtils-B5DHQ51j.js";import"./ReactUtils-CXVPwG-V.js";import"./Label-CODe3zwa.js";import"./PolarUtils-mWliNy-S.js";import"./ZIndexLayer-DWGlhSed.js";import"./zIndexSlice-D-YSqdMJ.js";import"./RechartsWrapper-CnzobKYl.js";import"./hooks-CXPWyfRe.js";import"./axisSelectors-Djz2yXUi.js";import"./ActiveShapeUtils-CKfXoaq0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BCh8wZqF.js";import"./useAnimationId-D9Wpr36K.js";import"./Trapezoid-Tsb3ohUM.js";import"./Symbols-DWUe3itn.js";import"./RegisterGraphicalItemId-BjD0GJz1.js";import"./SetGraphicalItem-j4NHyBYf.js";import"./polarSelectors-D6pM3MO4.js";import"./PolarChart-C8tGuB3y.js";import"./chartDataContext-Cyqtlzkq.js";import"./CategoricalChart-CV-slYuT.js";import"./useElementOffset-CU9yJrDm.js";import"./iteratee-Bod8Xpm-.js";import"./Cross-DDNArpcM.js";import"./index-DjmMVEJp.js";import"./ChartSizeDimensions-C9nZfRd3.js";import"./OffsetShower-ZX4tabc8.js";import"./PlotAreaShower-BEMT4keu.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
