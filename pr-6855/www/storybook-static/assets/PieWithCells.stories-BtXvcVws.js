import{e}from"./iframe-DLhPWxyK.js";import{a as c,P as v}from"./PieChart-3O78o2HT.js";import{R as f}from"./arrayEqualityCheck-m1RhjOmx.js";import{S as h}from"./Sector-tN30gQok.js";import{C as g}from"./tooltipContext-YFR452HV.js";import{L as C}from"./Legend-dB7LAjtZ.js";import{T as k}from"./Tooltip-DUsq4-kv.js";import{R as y}from"./RechartsHookInspector-HNjcmSsy.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8e_3mlR.js";import"./Layer-T-_zDyRj.js";import"./Curve-DeIwtCC2.js";import"./types-DGdi1KYp.js";import"./Text-1NI18g4k.js";import"./DOMUtils-DXMqjRDX.js";import"./ReactUtils-CkbQi9iw.js";import"./Label-Cfm9uiYS.js";import"./PolarUtils-C6JBvuC0.js";import"./ZIndexLayer-CE4rF1P8.js";import"./zIndexSlice-CkjTQxGc.js";import"./RechartsWrapper-DgQpMTik.js";import"./hooks-CPfFhdP1.js";import"./axisSelectors-H2aLd2HR.js";import"./ActiveShapeUtils-BWgEW_58.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFsdprJS.js";import"./useAnimationId-CcCb5ZgY.js";import"./Trapezoid-C-EY4dJQ.js";import"./Symbols-CNkEhL1u.js";import"./RegisterGraphicalItemId-BfrmZf1G.js";import"./SetGraphicalItem-FkCdxtAh.js";import"./polarSelectors-BFC8z_xJ.js";import"./PolarChart-BsKUwi07.js";import"./chartDataContext-DLN8QOpK.js";import"./CategoricalChart-B42UgGES.js";import"./useElementOffset-CebiNadU.js";import"./iteratee-B5VvVAP5.js";import"./Cross-B3vZI2Mu.js";import"./index-DdNKA2qu.js";import"./ChartSizeDimensions-2_L3pVFL.js";import"./OffsetShower-Bubd5l8I.js";import"./PlotAreaShower-DZzXcMEl.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
