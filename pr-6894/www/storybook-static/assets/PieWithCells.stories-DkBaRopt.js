import{e}from"./iframe-BMuWxLAr.js";import{P as c,a as v}from"./PieChart-jKlf5qbW.js";import{R as f}from"./arrayEqualityCheck-CqiNO7U9.js";import{S as h}from"./Sector-BljMkyic.js";import{C as g}from"./tooltipContext-D5xQ3oqk.js";import{L as C}from"./Legend-BrJXnRCE.js";import{T as k}from"./Tooltip-gmr6yCdO.js";import{R as y}from"./RechartsHookInspector-zXV2QGE7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-5NLO6c-f.js";import"./Layer-B3GdCeOT.js";import"./Curve-vG_gbHgm.js";import"./types-DTEjZcuz.js";import"./Text-Cd5r0d0D.js";import"./DOMUtils-X92SmXv_.js";import"./ReactUtils-CnoqxUjn.js";import"./Label-BDcobJj_.js";import"./PolarUtils-TfsB6rvw.js";import"./ZIndexLayer-5mbugvqo.js";import"./zIndexSlice-BTEUYv6U.js";import"./RechartsWrapper-DX7_Ztwr.js";import"./hooks-sLtblQr0.js";import"./axisSelectors-DkziLgOX.js";import"./ActiveShapeUtils-DpBW0Bti.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-TwJi8_LR.js";import"./useAnimationId-CV7m1u0T.js";import"./Trapezoid-CkjHCqiS.js";import"./Symbols-BPsutJwu.js";import"./RegisterGraphicalItemId-CCrV6fDN.js";import"./SetGraphicalItem-U0-JS-G0.js";import"./polarSelectors-mh8QFK-7.js";import"./PolarChart-BFE6C_o2.js";import"./chartDataContext-CANLYf-Z.js";import"./CategoricalChart-DViLh9Ev.js";import"./useElementOffset-BIPaTuv8.js";import"./iteratee-D0uxWt8q.js";import"./Cross-cWd-WtQK.js";import"./index-B4xTjkvp.js";import"./ChartSizeDimensions-CDGd01Cb.js";import"./OffsetShower-BqR0syDI.js";import"./PlotAreaShower-C3Up4AFj.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
