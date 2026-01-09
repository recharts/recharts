import{e}from"./iframe-DCqI0XZE.js";import{a as c,P as v}from"./PieChart-DUjaTXL2.js";import{R as f}from"./arrayEqualityCheck-HYppUqbL.js";import{S as h}from"./Sector-Cy_aXDIz.js";import{C as g}from"./tooltipContext-6_S7t5GF.js";import{L as C}from"./Legend-yrJaD9yi.js";import{T as k}from"./Tooltip-Cw_iCuSj.js";import{R as y}from"./RechartsHookInspector-fFyRgJJZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DeYA34uT.js";import"./Layer-BuGX0g6x.js";import"./Curve-Y6fdEOBg.js";import"./types-DHuf88Dj.js";import"./Text-CDyXfqgn.js";import"./DOMUtils-B_HAxUS-.js";import"./ReactUtils-B_rBW96b.js";import"./Label-4-POpI1D.js";import"./PolarUtils-CVPwvSfi.js";import"./ZIndexLayer-C1uRVibY.js";import"./zIndexSlice-DaD55gZL.js";import"./RechartsWrapper-CqZMRsqw.js";import"./hooks-D1LIxGLf.js";import"./axisSelectors-fdj65aw8.js";import"./ActiveShapeUtils-BTx5WARf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpPAOcrn.js";import"./useAnimationId-PgeDRpeU.js";import"./Trapezoid-BbcOya6W.js";import"./Symbols-Cxsfovx2.js";import"./RegisterGraphicalItemId-D-lwaZ_v.js";import"./SetGraphicalItem-CD6yUE_R.js";import"./polarSelectors-BI2-_Zlt.js";import"./PolarChart-jKhiye5j.js";import"./chartDataContext-T8I8ugzh.js";import"./CategoricalChart-3Iob9H8U.js";import"./useElementOffset-BRgYYVQV.js";import"./iteratee-BE3nwIgK.js";import"./Cross-Cz5FkvJu.js";import"./index-BSYEM6yU.js";import"./ChartSizeDimensions-lrWbrtxv.js";import"./OffsetShower-bO0_8mku.js";import"./PlotAreaShower-CRs_o2Tz.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
