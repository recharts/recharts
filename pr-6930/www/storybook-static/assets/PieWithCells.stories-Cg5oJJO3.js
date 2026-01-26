import{e}from"./iframe-BUAHB1JE.js";import{P as c,a as v}from"./PieChart-XBjVOkpb.js";import{R as f}from"./arrayEqualityCheck-D5cvBvD0.js";import{S as h}from"./Sector-ZEGPqrgm.js";import{C as g}from"./tooltipContext-CiBBulxM.js";import{L as C}from"./Legend-BtH_8EdQ.js";import{T as k}from"./Tooltip-BFW9R_rs.js";import{R as y}from"./RechartsHookInspector-DyBVLxQ5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DB3crruI.js";import"./Layer-Cm056lbD.js";import"./Curve-U_sOEQqK.js";import"./types-ztb1_leN.js";import"./Text-Cz010pA5.js";import"./DOMUtils-xg92JkXT.js";import"./ReactUtils-kUjnR9HA.js";import"./Label-DycKUeOS.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CvBAZeUB.js";import"./zIndexSlice-DtimrYBU.js";import"./RechartsWrapper-D3Kz3rBL.js";import"./hooks-CLHcqW-j.js";import"./axisSelectors-nwFqxBSg.js";import"./ActiveShapeUtils-IOesA3uZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TZFuIg.js";import"./useAnimationId-Dqqe1r9b.js";import"./Trapezoid-DhqC00At.js";import"./Symbols-B668NUUf.js";import"./RegisterGraphicalItemId-Wzb-45_P.js";import"./SetGraphicalItem-jsgYVNOw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-CDBbcDdV.js";import"./PolarChart-nhKWEC9U.js";import"./chartDataContext-CsNatWbQ.js";import"./CategoricalChart-CgjnwgmC.js";import"./useElementOffset-DeXK_2aY.js";import"./iteratee-ca00GqX-.js";import"./Cross-Oq6lmmzT.js";import"./index-C8QR5MVL.js";import"./ChartSizeDimensions-DxM1dHTb.js";import"./OffsetShower-CLEQK-Rx.js";import"./PlotAreaShower-Xx92qV_c.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
