import{e}from"./iframe-DKGTY5BH.js";import{P as c,a as v}from"./PieChart-BTSYrZdQ.js";import{R as f}from"./arrayEqualityCheck-a5J2QiQR.js";import{S as h}from"./Sector-wwquBaDN.js";import{C as g}from"./tooltipContext-BovvOkHK.js";import{L as C}from"./Legend-DZl4DhGe.js";import{T as k}from"./Tooltip-DKgLZy4h.js";import{R as y}from"./RechartsHookInspector-ltFkNW4M.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYnJQ9Tz.js";import"./Layer-BMyAm0Vh.js";import"./Curve-B8K-f9lF.js";import"./types-BBKXijxu.js";import"./Text-DzT2f_9r.js";import"./DOMUtils-DUCvdtk_.js";import"./ReactUtils-_yo6pVT0.js";import"./Label-8CsqNV_S.js";import"./PolarUtils-BgS5trn7.js";import"./ZIndexLayer-ChxBgnpv.js";import"./zIndexSlice-BN50EdKr.js";import"./RechartsWrapper-C4nUVXRx.js";import"./hooks-l5gEcxv4.js";import"./axisSelectors-BRnicQ57.js";import"./ActiveShapeUtils-BwLCOH5f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiI1dnIo.js";import"./useAnimationId-Br5iK6pF.js";import"./Trapezoid-ClVeJ0sq.js";import"./Symbols-Bske3hMz.js";import"./RegisterGraphicalItemId-M1wxD3TO.js";import"./SetGraphicalItem-BCvWrM_W.js";import"./polarSelectors-BF0iTdk1.js";import"./PolarChart-L7LqXaWJ.js";import"./chartDataContext-D-E7lauC.js";import"./CategoricalChart-Q4yJ_XVO.js";import"./useElementOffset-CjeVi0cr.js";import"./iteratee-CG0POyWm.js";import"./Cross-BsmR19tV.js";import"./index-DpSNf8hh.js";import"./ChartSizeDimensions-CHWSVwWw.js";import"./OffsetShower-fEjtwpJv.js";import"./PlotAreaShower-TADFRiun.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
