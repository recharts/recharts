import{e}from"./iframe-ZneQOoj5.js";import{P as c,a as v}from"./PieChart-CuPfyJrb.js";import{R as f}from"./arrayEqualityCheck-BNajb9_C.js";import{S as h}from"./Sector-CIuTmDEF.js";import{C as g}from"./tooltipContext-8ILqyGXc.js";import{L as C}from"./Legend-DoAaJ_6N.js";import{T as k}from"./Tooltip-QREByfUs.js";import{R as y}from"./RechartsHookInspector-o16may3G.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ca5bm1S2.js";import"./Layer-CxIF_InE.js";import"./Curve-D5OcxVms.js";import"./types-D_7qF1fe.js";import"./Text-BSmPk6IU.js";import"./DOMUtils-CY6Iwyv6.js";import"./ReactUtils-Bw9y5ciT.js";import"./Label-s2gAZUId.js";import"./PolarUtils-kb3Ynomj.js";import"./ZIndexLayer-DbAXPfU_.js";import"./zIndexSlice-D_yw_EwD.js";import"./RechartsWrapper-Cti5RU63.js";import"./hooks-f5tcO63K.js";import"./axisSelectors-Bn4oM41D.js";import"./ActiveShapeUtils-DknnfoXI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-gyHsx_3Q.js";import"./useAnimationId-qX2h62Hn.js";import"./Trapezoid-aiu3Rixu.js";import"./Symbols-DOSg8I_W.js";import"./RegisterGraphicalItemId-GDWraSC2.js";import"./SetGraphicalItem-xtvvD71Q.js";import"./polarSelectors-CWFw3C9R.js";import"./PolarChart-BctdjSlw.js";import"./chartDataContext-B0ByfYA8.js";import"./CategoricalChart-Dsfzrp1E.js";import"./useElementOffset-DFO0Z8DN.js";import"./iteratee-BC097ozc.js";import"./Cross-Ce4LtU96.js";import"./index-BhzpkJlR.js";import"./ChartSizeDimensions-DcPBcGoe.js";import"./OffsetShower-D0qLOk-K.js";import"./PlotAreaShower-kc5kHvIr.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
