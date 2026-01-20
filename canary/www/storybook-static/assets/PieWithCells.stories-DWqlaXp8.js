import{e}from"./iframe-BO2lV8Fr.js";import{P as c,a as v}from"./PieChart-DM6jZJBg.js";import{R as f}from"./arrayEqualityCheck-BPZLCCv_.js";import{S as h}from"./Sector-BGeEC3JQ.js";import{C as g}from"./tooltipContext-hiTRuGT_.js";import{L as C}from"./Legend-CUzp1DrD.js";import{T as k}from"./Tooltip-DSLeoLaw.js";import{R as y}from"./RechartsHookInspector-BaEmilk5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DHbskwPQ.js";import"./Layer-IoZ0rL1L.js";import"./Curve-BbZIFp84.js";import"./types-uDYlV2go.js";import"./Text-B2hif4xC.js";import"./DOMUtils-5fMbRa2e.js";import"./ReactUtils-CB6ifrXE.js";import"./Label-4EeKD-N4.js";import"./PolarUtils-CZtkokJH.js";import"./ZIndexLayer-CKe6oR6h.js";import"./zIndexSlice-OMKiStTn.js";import"./RechartsWrapper-CnX2hcx7.js";import"./hooks-CyQEzp2Y.js";import"./axisSelectors-C55ZO64o.js";import"./ActiveShapeUtils-DVU6eaup.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuSLDrEq.js";import"./useAnimationId-B_L243Vk.js";import"./Trapezoid-DXmIi2NN.js";import"./Symbols-BsRtfl74.js";import"./RegisterGraphicalItemId-wG1yfeVq.js";import"./SetGraphicalItem-BSkVMDfa.js";import"./polarSelectors-BN0XFBdv.js";import"./PolarChart-Brj_LgD5.js";import"./chartDataContext-Dtblt1is.js";import"./CategoricalChart-mKGFwIoi.js";import"./useElementOffset-C67P8EXt.js";import"./iteratee-CKVmbhaC.js";import"./Cross-Cw0a3q2D.js";import"./index-Ci4CsAoU.js";import"./ChartSizeDimensions-BEuPB0uv.js";import"./OffsetShower-C3B37-9_.js";import"./PlotAreaShower-Bds63cu3.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
