import{e}from"./iframe-E6stEF2S.js";import{P as c,a as v}from"./PieChart-Cuk7F6fZ.js";import{R as f}from"./arrayEqualityCheck-CwuTMurj.js";import{S as h}from"./Sector-DQ6bsa91.js";import{C as g}from"./tooltipContext-Cla1oypE.js";import{L as C}from"./Legend-BxsS8-YX.js";import{T as k}from"./Tooltip-BS0GZFLk.js";import{R as y}from"./RechartsHookInspector-DWDZSsYq.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpBS-wta.js";import"./Layer-BegbPFb9.js";import"./Curve-CjjQKwtg.js";import"./types-FSWLiQQw.js";import"./Text-Da_5tIJ5.js";import"./DOMUtils-DelYEp0F.js";import"./ReactUtils-ofTPTzz1.js";import"./Label-rhvib36b.js";import"./PolarUtils-BcxrLtWd.js";import"./ZIndexLayer-CZ3aFF1-.js";import"./zIndexSlice-DWahER7A.js";import"./RechartsWrapper-CZ-4KBI2.js";import"./hooks-B7vED1ex.js";import"./axisSelectors-CGOr44mz.js";import"./ActiveShapeUtils-vlVDSwIy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJCClTE6.js";import"./useAnimationId-jacrtTCV.js";import"./Trapezoid-BRnSAzjS.js";import"./Symbols-BofiGE9Z.js";import"./RegisterGraphicalItemId-RdaYGkCK.js";import"./SetGraphicalItem-CJIPhBZp.js";import"./polarSelectors-Dtnel5I6.js";import"./PolarChart-5ZjNeAZ4.js";import"./chartDataContext-mxEGBICQ.js";import"./CategoricalChart-HONQPrlU.js";import"./useElementOffset-5Bek4vIi.js";import"./iteratee-Dz5Fb5yH.js";import"./Cross-Cd8u4PDt.js";import"./index-D_N7o97v.js";import"./ChartSizeDimensions-Bkhb3coG.js";import"./OffsetShower-C8PKcIaU.js";import"./PlotAreaShower-Tf4T6ETR.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
