import{R as r}from"./iframe-seguPege.js";import{P as a,a as n}from"./PieChart-BILv9f0_.js";import{R as s}from"./zIndexSlice-Cb-1bZoU.js";import{L as l}from"./Legend-BHk_R86n.js";import{T as c}from"./Tooltip-Db5hZzcb.js";import{S as d}from"./Sector-Ir-ziIqp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BPoksESJ.js";import"./Layer-D0gi-KwG.js";import"./resolveDefaultProps-BPZN0bld.js";import"./Curve-Dy50jrXo.js";import"./types-Dh_7L2tU.js";import"./isWellBehavedNumber-B-pqTWs3.js";import"./step-CXbb4GLS.js";import"./immer-Ae2GGYT-.js";import"./index-xMrsE0KA.js";import"./index-BwRhAzA0.js";import"./path-DyVhHtw_.js";import"./Text-DMr88uBj.js";import"./DOMUtils-CAhJeY0i.js";import"./tooltipContext-AqtE9cuC.js";import"./RechartsWrapper-DyL4MUL1.js";import"./index-DLDg1yAI.js";import"./index-BwbDEThZ.js";import"./renderedTicksSlice-Di3U0Cl0.js";import"./axisSelectors-B65K-pjL.js";import"./d3-scale-EL9kUTP1.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./AnimatedItems-BjEmPeVW.js";import"./Label-Bj9fNTdt.js";import"./ZIndexLayer-E8T2jKop.js";import"./useAnimationId-Bb_iGYOg.js";import"./ActiveShapeUtils-YVVmXP9O.js";import"./RegisterGraphicalItemId-C1rgLQS7.js";import"./SetGraphicalItem-QZ64RzpK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./polarSelectors-BtD5y1BG.js";import"./PolarChart-DGUjWNZD.js";import"./chartDataContext-ZOJ8ES_m.js";import"./CategoricalChart-DsfEFljg.js";import"./Symbols-O3P2Efnq.js";import"./symbol-CTLlWJ_7.js";import"./useElementOffset-Bd0nUEN2.js";import"./uniqBy-PllRjql5.js";import"./iteratee-CGB8lHH8.js";import"./Cross-bh_WB7gE.js";import"./Rectangle-ByDmPg9d.js";const u=[{name:"Group A",value:400,fill:"#0088FE"},{name:"Group B",value:300,fill:"#00C49F"},{name:"Group C",value:300,fill:"#FFBB28"},{name:"Group D",value:200,fill:"#FF8042"}],h=({payload:e,...p})=>r.createElement(d,{...p,fill:e.fill}),sr={component:a},t={render:e=>r.createElement(s,{width:"100%",height:500},r.createElement(n,{width:400,height:400},r.createElement(a,{data:u,dataKey:"value",nameKey:"name",...e,shape:h}),r.createElement(l,null),r.createElement(c,null))),args:{cx:"50%",cy:"50%",fill:"#8884d8",innerRadius:60,outerRadius:80}};var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" nameKey="name" {...args} shape={renderSectorWithCustomShapeColor} />
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: '50%',
    cy: '50%',
    fill: '#8884d8',
    innerRadius: 60,
    outerRadius: 80
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const lr=["PieColorSync"];export{t as PieColorSync,lr as __namedExportsOrder,sr as default};
