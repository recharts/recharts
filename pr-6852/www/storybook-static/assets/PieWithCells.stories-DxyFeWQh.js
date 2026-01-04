import{e}from"./iframe-CCMJ-7V4.js";import{a as c,P as v}from"./PieChart-BFs5lWog.js";import{R as f}from"./arrayEqualityCheck-EU51TFpx.js";import{S as h}from"./Sector-CvpK-Ylm.js";import{C as g}from"./tooltipContext-DYxg9AVX.js";import{L as C}from"./Legend-B9rhwJLc.js";import{T as k}from"./Tooltip-BPXKEL5o.js";import{R as y}from"./RechartsHookInspector-CT184sGb.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BNCKdsdg.js";import"./Layer-BEqohIF5.js";import"./Curve-CWiUvZCK.js";import"./types-CfBor7-V.js";import"./Text-DT_EImOw.js";import"./DOMUtils-DS3HDMLJ.js";import"./ReactUtils-CeY657n5.js";import"./Label-DYpMY_OX.js";import"./PolarUtils-JMmyzBBh.js";import"./ZIndexLayer-DTuo7Di4.js";import"./zIndexSlice-D6TWR_2-.js";import"./RechartsWrapper-Dlfj2KI1.js";import"./hooks--Mj4Y-hQ.js";import"./axisSelectors-Bwyl_l9L.js";import"./ActiveShapeUtils-6YQyK9qF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFaFQv7g.js";import"./useAnimationId-C67C_3Vf.js";import"./Trapezoid-iC4EoUjD.js";import"./Symbols-BjLEgnQl.js";import"./RegisterGraphicalItemId-DVKqMQCD.js";import"./SetGraphicalItem-DBanf2OA.js";import"./polarSelectors-BIwzdPst.js";import"./PolarChart-C6d2otV4.js";import"./chartDataContext-BB33_ty3.js";import"./CategoricalChart-Cxiu0ZqS.js";import"./useElementOffset-CesAmAsq.js";import"./iteratee-DuUSmLFC.js";import"./Cross-Cn3uXrmE.js";import"./index-55iJ_lXJ.js";import"./ChartSizeDimensions-DrMr_UaN.js";import"./OffsetShower-0LfR1yxg.js";import"./PlotAreaShower-BAItckLJ.js";const l=[{value:"Luck",percent:10,color:"orange"},{value:"Skill",percent:20,color:"green"},{value:"Concentrated power of will",percent:15,color:"blue"},{value:"Pleasure",percent:50,color:"red"},{value:"Pain",percent:50,color:"indigo"},{value:"Reason to remember the name",percent:100,color:"violet"}],ce={component:c},i={render:s=>{const[m,d]=e.useState([]);return e.createElement(f,{width:"100%",height:500},e.createElement(v,{width:400,height:400},e.createElement(c,{dataKey:"percent",...s,onClick:(t,r)=>{r!=null&&d(o=>o.includes(r)?o.filter(u=>u!==r):[...o,r])},shape:(t,r)=>{const o=m.includes(r);return e.createElement(h,{...t,fill:o?"yellow":t.fill,stroke:"#111"})}},l.map(t=>e.createElement(g,{key:`d-${t.value}`,fill:t.color,stroke:"none"}))),e.createElement(C,null),e.createElement(k,null),e.createElement(y,null)))},args:{cx:"50%",cy:"50%",data:l,dataKey:"percent",nameKey:"value",fill:"#8884d8",label:!0}};var n,a,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
