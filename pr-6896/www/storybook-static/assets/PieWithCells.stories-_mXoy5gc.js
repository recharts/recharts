import{e}from"./iframe-DTjNyuRV.js";import{P as c,a as v}from"./PieChart-BykQDX2x.js";import{R as f}from"./arrayEqualityCheck-C4xGcSTy.js";import{S as h}from"./Sector-DY-WO6-X.js";import{C as g}from"./tooltipContext-DeWM14_N.js";import{L as C}from"./Legend--KVfADKp.js";import{T as k}from"./Tooltip-DHU1_Ngb.js";import{R as y}from"./RechartsHookInspector-euo4g-ug.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SGcnM_aC.js";import"./Layer-Bnob1t-w.js";import"./Curve-OPgUPtNu.js";import"./types-To9Ddb8E.js";import"./Text-Df79kjUu.js";import"./DOMUtils-Ckv5L2Ry.js";import"./ReactUtils-338dS-Qh.js";import"./Label-BLKfXojP.js";import"./PolarUtils-jGr_7wxa.js";import"./ZIndexLayer-DQomkPs4.js";import"./zIndexSlice-DRfn0LKt.js";import"./RechartsWrapper-Buv5ZAi-.js";import"./hooks-BKspSbbk.js";import"./axisSelectors-C5N0FKJg.js";import"./ActiveShapeUtils-DzFlbCdp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-p9Ft26dZ.js";import"./useAnimationId-DyTjjL6a.js";import"./Trapezoid-DDbPynHI.js";import"./Symbols-Bqb-NDkg.js";import"./RegisterGraphicalItemId-DpE9EW2r.js";import"./SetGraphicalItem-B-b4IafD.js";import"./polarSelectors-tftH5yY8.js";import"./PolarChart-B6qUWzo9.js";import"./chartDataContext-_UJlrEtw.js";import"./CategoricalChart-D9AJMhmv.js";import"./useElementOffset-CG9nz9uh.js";import"./iteratee-ZsRreprt.js";import"./Cross-Dp-5al6M.js";import"./index-qnmfyn6T.js";import"./ChartSizeDimensions-C7n2xQzd.js";import"./OffsetShower-NiY8JQK2.js";import"./PlotAreaShower-B9h0VEbL.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
