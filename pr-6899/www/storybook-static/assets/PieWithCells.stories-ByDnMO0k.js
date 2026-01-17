import{e}from"./iframe-DVbcaGEk.js";import{P as c,a as v}from"./PieChart-DYkMFkLJ.js";import{R as f}from"./arrayEqualityCheck-D_Ccs7mG.js";import{S as h}from"./Sector-D5CuENkF.js";import{C as g}from"./tooltipContext-7-acIv96.js";import{L as C}from"./Legend-D8WJHscn.js";import{T as k}from"./Tooltip-COhbepB5.js";import{R as y}from"./RechartsHookInspector-CNkljFSC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BvhwmIy1.js";import"./Layer-CTeRo74K.js";import"./Curve-DRY3YzYB.js";import"./types-glyr-q7x.js";import"./Text-BnUgu-YX.js";import"./DOMUtils-C3Nevwge.js";import"./ReactUtils-PeKnJ7eE.js";import"./Label-Vy4t0U1x.js";import"./PolarUtils-BCmS2GQK.js";import"./ZIndexLayer-DQcVBq3k.js";import"./zIndexSlice-C3Z2iJoi.js";import"./RechartsWrapper-CI_kVB3D.js";import"./hooks-DrJQ9o1U.js";import"./axisSelectors-Dq8ysKg7.js";import"./ActiveShapeUtils-CQxGvOB9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDg01dVF.js";import"./useAnimationId-BsgPO1Qj.js";import"./Trapezoid-_bdwRMqG.js";import"./Symbols-D0zgYynQ.js";import"./RegisterGraphicalItemId-sqkoY2pX.js";import"./SetGraphicalItem-CMkDLn5I.js";import"./polarSelectors-DlaChXlI.js";import"./PolarChart-ngfna9hq.js";import"./chartDataContext-BHEPpTwp.js";import"./CategoricalChart-DaQkrRKt.js";import"./useElementOffset-BihE1waz.js";import"./iteratee-BDIycRH5.js";import"./Cross-C3FT44Tn.js";import"./index-BAtGFOnL.js";import"./ChartSizeDimensions-B0rnWoCy.js";import"./OffsetShower-DI4Pwzeh.js";import"./PlotAreaShower-CPYGkOSs.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
