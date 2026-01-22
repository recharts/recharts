import{e}from"./iframe-CgKUDY6I.js";import{P as c,a as v}from"./PieChart-Cq1WZtfk.js";import{R as f}from"./arrayEqualityCheck-4uJZ54sz.js";import{S as h}from"./Sector-BF2Rl4dz.js";import{C as g}from"./tooltipContext-BX66OGI4.js";import{L as C}from"./Legend-DDBb85lz.js";import{T as k}from"./Tooltip-B0QSnoqq.js";import{R as y}from"./RechartsHookInspector-BbTYK-9O.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMHVQbHf.js";import"./Layer-DyDQThNB.js";import"./Curve-BuIdVsH6.js";import"./types-DoxvimZ4.js";import"./Text-D7eyVQni.js";import"./DOMUtils-oL5y8gGU.js";import"./ReactUtils-4_OOWgDq.js";import"./Label-Dn5iT33K.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Cm5c_q02.js";import"./zIndexSlice-L1yp4KKu.js";import"./RechartsWrapper-DRtAtWmJ.js";import"./hooks-C-jfEB0O.js";import"./axisSelectors-78x8Dv2Q.js";import"./ActiveShapeUtils-4Z7GGztm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDDRsXYi.js";import"./useAnimationId-BABjQp7J.js";import"./Trapezoid-XOwgAbCO.js";import"./Symbols-Crrpo09o.js";import"./RegisterGraphicalItemId-DTO6cAIg.js";import"./SetGraphicalItem-GcELh7Cs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-DK32eaH5.js";import"./PolarChart-DLqmWhf0.js";import"./chartDataContext-B10HjSyG.js";import"./CategoricalChart-BTXI1VEa.js";import"./useElementOffset-Db-z7mz0.js";import"./iteratee-CbFyJTBX.js";import"./Cross-CmxHccTU.js";import"./index-2ufv7V98.js";import"./ChartSizeDimensions-BloifcJy.js";import"./OffsetShower-BASfXPJZ.js";import"./PlotAreaShower-d7Om0wsj.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
