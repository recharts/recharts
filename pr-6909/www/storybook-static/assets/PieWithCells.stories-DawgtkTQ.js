import{e}from"./iframe-DvdxI6dC.js";import{P as c,a as v}from"./PieChart-BNPQEunL.js";import{R as f}from"./arrayEqualityCheck-DXUAObl0.js";import{S as h}from"./Sector-DWkTEbbM.js";import{C as g}from"./tooltipContext-D7aHeXgA.js";import{L as C}from"./Legend-ChiCCRwy.js";import{T as k}from"./Tooltip-CYub55gM.js";import{R as y}from"./RechartsHookInspector-B_PrFdYH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DH7aS_Cz.js";import"./Layer-QQplstvs.js";import"./Curve-BRTvsj-M.js";import"./types-8AXfgSIv.js";import"./Text-DcBx6qw-.js";import"./DOMUtils-XQErKiOi.js";import"./ReactUtils-DqWjpCBi.js";import"./Label-zPyZ6EuZ.js";import"./PolarUtils-BY4iZmOi.js";import"./ZIndexLayer-Cnm_-Zvz.js";import"./zIndexSlice-JVJMXPV9.js";import"./RechartsWrapper-BLfZDcOn.js";import"./hooks-DrOmiLx6.js";import"./axisSelectors-4CKM8Xol.js";import"./ActiveShapeUtils-CgduogxH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeQtanoQ.js";import"./useAnimationId-Dy3gyKDZ.js";import"./Trapezoid-BNKT4KGX.js";import"./Symbols-BZsKNNtj.js";import"./RegisterGraphicalItemId-C1Pco6VZ.js";import"./SetGraphicalItem-B3AbHWGd.js";import"./polarSelectors-LrP1sqTM.js";import"./PolarChart-BesRRRis.js";import"./chartDataContext-D9T_3Pfc.js";import"./CategoricalChart-Cx_ZKXH4.js";import"./useElementOffset-B-aJyaAb.js";import"./iteratee-CoefYKPX.js";import"./Cross-BGXGqWaa.js";import"./index-CwHutVPN.js";import"./ChartSizeDimensions-Dk78WGJs.js";import"./OffsetShower-BP3lO1NK.js";import"./PlotAreaShower-DiTB-vHo.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
