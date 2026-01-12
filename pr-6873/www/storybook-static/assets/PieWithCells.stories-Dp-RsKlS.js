import{e}from"./iframe-CnJUGyj2.js";import{a as c,P as v}from"./PieChart-Br2QE6bn.js";import{R as f}from"./arrayEqualityCheck-DS-98WmY.js";import{S as h}from"./Sector-CiIkZPTJ.js";import{C as g}from"./tooltipContext-DNUYsW3p.js";import{L as C}from"./Legend-Bicnpt6O.js";import{T as k}from"./Tooltip-Di2CZLYp.js";import{R as y}from"./RechartsHookInspector-D9NSExUN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BzjH9Fll.js";import"./Layer-BsUJcQkF.js";import"./Curve-B_FGldsa.js";import"./types-D9HbD0yL.js";import"./Text-sLuusAcx.js";import"./DOMUtils-CjNSxgDj.js";import"./ReactUtils-BNR-lOsN.js";import"./Label-DpPDMM47.js";import"./PolarUtils-DUXYMnUd.js";import"./ZIndexLayer-Dc_RcEv2.js";import"./zIndexSlice-BtlphbRl.js";import"./RechartsWrapper-CvN69gVe.js";import"./hooks-DtPou_4w.js";import"./axisSelectors-B3UBVlXk.js";import"./ActiveShapeUtils-DTauRdeB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DAmamxSx.js";import"./useAnimationId-CPv9iP46.js";import"./Trapezoid-B9_fPQiM.js";import"./Symbols-kQyDCWDP.js";import"./RegisterGraphicalItemId-BM4OoSas.js";import"./SetGraphicalItem-BuXMx1_s.js";import"./polarSelectors-BcYpYJCL.js";import"./PolarChart-C-CDLDFL.js";import"./chartDataContext-BL3jGdF-.js";import"./CategoricalChart-3iTekVlo.js";import"./useElementOffset-D0YfL9KH.js";import"./iteratee-DiQ7weWT.js";import"./Cross-9Jtk4bAQ.js";import"./index-CeIzyUzp.js";import"./ChartSizeDimensions-CoD815Xi.js";import"./OffsetShower-QmDVJyKt.js";import"./PlotAreaShower-CTJ4RF1E.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
