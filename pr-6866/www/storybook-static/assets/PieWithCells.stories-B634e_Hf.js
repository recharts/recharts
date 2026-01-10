import{e}from"./iframe-tCRQIxYB.js";import{a as c,P as v}from"./PieChart-DMbxtneo.js";import{R as f}from"./arrayEqualityCheck-DFgE1twh.js";import{S as h}from"./Sector-DQ482-FH.js";import{C as g}from"./tooltipContext-C5mjD3mc.js";import{L as C}from"./Legend-CKbr3K0E.js";import{T as k}from"./Tooltip-CFzd-RiE.js";import{R as y}from"./RechartsHookInspector-bM2S9Z_N.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D2e6YxB0.js";import"./Layer-Okfcyfin.js";import"./Curve-NiEgXiq2.js";import"./types-CbdV4-dc.js";import"./Text-DOFY9JIO.js";import"./DOMUtils-fQQV3uNK.js";import"./ReactUtils-CF2khIYu.js";import"./Label-JD75mQPI.js";import"./PolarUtils-BLxmkcH1.js";import"./ZIndexLayer-DZ5tWnEb.js";import"./zIndexSlice-IJ_zl8YN.js";import"./RechartsWrapper-Bp9yhMvy.js";import"./hooks-Simc1mEI.js";import"./axisSelectors-DzjYUh9I.js";import"./ActiveShapeUtils-B61GuIrI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BUsvopn3.js";import"./useAnimationId-D2oVQKnr.js";import"./Trapezoid-hUxVvC3O.js";import"./Symbols-DwIizSNL.js";import"./RegisterGraphicalItemId-CFqAxJ1Q.js";import"./SetGraphicalItem-DozJQrmf.js";import"./polarSelectors-DgebIrq8.js";import"./PolarChart-DR2t3OFP.js";import"./chartDataContext-NlnzkvR2.js";import"./CategoricalChart-BbdLegKy.js";import"./useElementOffset-D0-uD3Uj.js";import"./iteratee-QAA3_HSJ.js";import"./Cross-B215_L-1.js";import"./index-CkWn_0P6.js";import"./ChartSizeDimensions-BUG6iQR7.js";import"./OffsetShower-B78P8GFz.js";import"./PlotAreaShower-R2kW5Azb.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
