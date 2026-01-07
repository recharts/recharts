import{e}from"./iframe-Cr3T7ZdA.js";import{a as c,P as v}from"./PieChart-BbGjXnxm.js";import{R as f}from"./arrayEqualityCheck-DqF1T4jr.js";import{S as h}from"./Sector-CoMH23ZQ.js";import{C as g}from"./tooltipContext-BC9AwLMx.js";import{L as C}from"./Legend-C40qRgVH.js";import{T as k}from"./Tooltip-Bv5lo6sl.js";import{R as y}from"./RechartsHookInspector-ClBCFl3l.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-QfAcHL3W.js";import"./Layer-BFmFB8To.js";import"./Curve-vdkFq02R.js";import"./types-CSmgv1ek.js";import"./Text-DbGQ3XiU.js";import"./DOMUtils-zL1z85r6.js";import"./ReactUtils-DZO-5FXB.js";import"./Label-DztQJaU2.js";import"./PolarUtils-Bmm-pqPZ.js";import"./ZIndexLayer-CX1hwCrz.js";import"./zIndexSlice-DMIprIZ-.js";import"./RechartsWrapper-Cofc_HNc.js";import"./hooks-jzijfY0b.js";import"./axisSelectors-DxNzAaef.js";import"./ActiveShapeUtils-DPbFIg-T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrfuL_Gq.js";import"./useAnimationId-2lKqmsIN.js";import"./Trapezoid-BeG4Metg.js";import"./Symbols-DxVRzyBt.js";import"./RegisterGraphicalItemId-IPVqF7Vn.js";import"./SetGraphicalItem-CtAyZH4_.js";import"./polarSelectors-CU6vepwJ.js";import"./PolarChart-CEHbYCeg.js";import"./chartDataContext-DYJ71PQb.js";import"./CategoricalChart-BUJ2-En9.js";import"./useElementOffset-Cq6eEjaE.js";import"./iteratee-ZYwUAU3v.js";import"./Cross-wUbNU5eO.js";import"./index-ClJsMHvI.js";import"./ChartSizeDimensions-BmiXy0Af.js";import"./OffsetShower-SLhoxg8F.js";import"./PlotAreaShower-CKe-EEVm.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
