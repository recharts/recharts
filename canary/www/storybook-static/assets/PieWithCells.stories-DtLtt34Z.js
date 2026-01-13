import{e}from"./iframe-bYFtU2gB.js";import{P as c,a as v}from"./PieChart-bzAY0yaF.js";import{R as f}from"./arrayEqualityCheck-BHNF6PA7.js";import{S as h}from"./Sector-CLRLJGPS.js";import{C as g}from"./tooltipContext-BoUwqDRy.js";import{L as C}from"./Legend-TMZ8htuv.js";import{T as k}from"./Tooltip-j6c6h1po.js";import{R as y}from"./RechartsHookInspector-Cgqq1XBh.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RCRz3E4-.js";import"./Layer-BBEIeca0.js";import"./Curve-CtUoNekQ.js";import"./types-rMmo8sSI.js";import"./Text-DGNM2np6.js";import"./DOMUtils-BRFWW1JK.js";import"./ReactUtils-C_A_edxl.js";import"./Label-CFtnFUI6.js";import"./PolarUtils-BwgqFbq3.js";import"./ZIndexLayer-BgNsQjiU.js";import"./zIndexSlice-UFbR30dZ.js";import"./RechartsWrapper-Cr_qDhUZ.js";import"./hooks-ZDdJpBw-.js";import"./axisSelectors-Bz_L1ZR6.js";import"./ActiveShapeUtils-CJjJYwGu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhTN5tPV.js";import"./useAnimationId-DJ17eyu2.js";import"./Trapezoid-DSgAJSbG.js";import"./Symbols-CNah5pWh.js";import"./RegisterGraphicalItemId-BrxUTcxA.js";import"./SetGraphicalItem-nU2Wrmlo.js";import"./polarSelectors-CgrbjR9t.js";import"./PolarChart-D_2iH-Hp.js";import"./chartDataContext-CbNClMtX.js";import"./CategoricalChart-ByKQIpLz.js";import"./useElementOffset-roU2yyo7.js";import"./iteratee-B1tiXU94.js";import"./Cross-CEC05q7E.js";import"./index-DOxosQgk.js";import"./ChartSizeDimensions-RFkmb5Zl.js";import"./OffsetShower-CjBekQlW.js";import"./PlotAreaShower-DwHvcBqq.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
