import{e}from"./iframe-Daa7gVLq.js";import{P as c,a as v}from"./PieChart-BrcUcP_z.js";import{R as f}from"./arrayEqualityCheck-DHiMbEr4.js";import{S as h}from"./Sector-BNry3-1y.js";import{C as g}from"./tooltipContext-CiX2yvNE.js";import{L as C}from"./Legend-8Lsn4QIr.js";import{T as k}from"./Tooltip-DmXRg1lA.js";import{R as y}from"./RechartsHookInspector-5CuZ5Ttw.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CqeH2zdA.js";import"./Layer-CGvX8Aev.js";import"./Curve-CWMRaKtl.js";import"./types-C4ZPTuLr.js";import"./Text-WZTWBxCY.js";import"./DOMUtils-CqCd1ysC.js";import"./ReactUtils-DBjM8e5X.js";import"./Label-Czm8SDG7.js";import"./PolarUtils-BgeQKPj6.js";import"./ZIndexLayer-BpC0cLWO.js";import"./zIndexSlice-DRH3Lnc3.js";import"./RechartsWrapper-DHnB2RYt.js";import"./hooks-DRpX0LFg.js";import"./axisSelectors-BSy2Ei6Q.js";import"./ActiveShapeUtils-BKnbDBiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdCOnFsR.js";import"./useAnimationId-ahZSEp8i.js";import"./Trapezoid-BpmoHtq5.js";import"./Symbols-Ct_d7yT0.js";import"./RegisterGraphicalItemId-C9_vaDSC.js";import"./SetGraphicalItem-SUpveLj9.js";import"./polarSelectors-b9eHNmAY.js";import"./PolarChart-Dj1HQy5v.js";import"./chartDataContext-C9HoDYmp.js";import"./CategoricalChart-B6hlTMds.js";import"./useElementOffset-BEi6rhn-.js";import"./iteratee-C1MLwHnw.js";import"./Cross-kvNgnX-L.js";import"./index-hu5OYDiu.js";import"./ChartSizeDimensions-b43WqGvd.js";import"./OffsetShower-11IB6J7X.js";import"./PlotAreaShower-B0b4w-E6.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
