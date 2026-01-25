import{e}from"./iframe-zYnk8EOr.js";import{P as c,a as v}from"./PieChart-DoZIo0-O.js";import{R as f}from"./arrayEqualityCheck-R2aAAI7x.js";import{S as h}from"./Sector-CRX25Q97.js";import{C as g}from"./tooltipContext-C_ibJ9CU.js";import{L as C}from"./Legend-WNA_odee.js";import{T as k}from"./Tooltip-DO15xDOs.js";import{R as y}from"./RechartsHookInspector-BM6dBg77.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV8ibCPI.js";import"./Layer-B9ovT-3z.js";import"./Curve-BERjiOgY.js";import"./types-BQ3BmiiK.js";import"./Text-BKKp-XNT.js";import"./DOMUtils-BOegbNur.js";import"./ReactUtils-TEkJxkkD.js";import"./Label-GsPpBxAc.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-DbRKS04n.js";import"./zIndexSlice-BvNEMV0a.js";import"./RechartsWrapper-CuXPMym5.js";import"./hooks-B3MKPDpU.js";import"./axisSelectors-DsIocnZB.js";import"./ActiveShapeUtils-B-4Mqq4H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWuLgpNw.js";import"./useAnimationId-C9zF9Z14.js";import"./Trapezoid-Ciecc0SZ.js";import"./Symbols-CvhTj7bZ.js";import"./RegisterGraphicalItemId-Xtx5eZl0.js";import"./SetGraphicalItem-CghMnI1R.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-DApwA96p.js";import"./PolarChart-ChokoVfr.js";import"./chartDataContext-93hSB1i9.js";import"./CategoricalChart-B_Ua5Q7Q.js";import"./useElementOffset-DCTaxlc8.js";import"./iteratee-Ci7OymFI.js";import"./Cross-aT4hd7BR.js";import"./index-C4mhfMdJ.js";import"./ChartSizeDimensions-DqnYIWpL.js";import"./OffsetShower-BnqP058z.js";import"./PlotAreaShower-Bzo9Sf9-.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],se={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const me=["PieWithCells"];export{i as PieWithCells,me as __namedExportsOrder,se as default};
