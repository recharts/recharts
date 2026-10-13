import{R as r}from"./iframe-DuosGyDB.js";import{P as p,a as n}from"./PieChart-ChSjh1YU.js";import{R as s}from"./zIndexSlice-Da09UpSD.js";import{L as l}from"./Legend-eZbVNtkY.js";import{T as c}from"./Tooltip-BrMBPvou.js";import{S as d}from"./Sector-BdKNyDn7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./throttle-BFe2F0jb.js";import"./index-BIKpN8wQ.js";import"./index-CkmA4MDq.js";import"./Layer-kSYl9qai.js";import"./resolveDefaultProps-CFaFAnLx.js";import"./Curve-BLnV7n0Y.js";import"./types-DpRgdAcC.js";import"./isWellBehavedNumber-BR0iKwBs.js";import"./step-BE4SoRR0.js";import"./path-DyVhHtw_.js";import"./Text-ws-7QaY4.js";import"./pageBackground-BOChA0aI.js";import"./useId-5tXA_KMi.js";import"./useBackwardsCompatibleTheme-EzUoSKUQ.js";import"./tooltipContext-CDP0qc2I.js";import"./RechartsWrapper-DqMyJeth.js";import"./axisSelectors-BhFgqUpp.js";import"./d3-scale-BcfysILW.js";import"./index-Bx3uuCHN.js";import"./index-DB6X8Jkp.js";import"./renderedTicksSlice-Bhnw81l8.js";import"./index-C8gr5WFK.js";import"./PolarUtils-CTnnDHZv.js";import"./activeStyles-Cx6m_4O3.js";import"./Label-CD5z-ltE.js";import"./ZIndexLayer-B7YuRzj4.js";import"./useAnimationId-DZvkGEgW.js";import"./dataEntryStyles-BoHQtdtS.js";import"./ActiveShapeUtils-HElctZzh.js";import"./SetGraphicalItem-Cbz0EDFc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./polarSelectors-BJb6NEgT.js";import"./PolarChart-Bzf0Nx9P.js";import"./chartDataContext-Fsi0dBi5.js";import"./CategoricalChart-CnszpMMB.js";import"./Symbols-BB8GDQjJ.js";import"./symbol-2BGeghEi.js";import"./useElementOffset-icNFqDBx.js";import"./uniqBy-Cc00XvmO.js";import"./iteratee-Dr0P3_26.js";import"./isBuffer-BG75eWKN.js";import"./Cross-RcbzNpk6.js";import"./Rectangle-xphMqkoD.js";import"./util-Dxo8gN5i.js";const u=[{name:"Group A",value:400,fill:"#0088FE"},{name:"Group B",value:300,fill:"#00C49F"},{name:"Group C",value:300,fill:"#FFBB28"},{name:"Group D",value:200,fill:"#FF8042"}],h=({payload:e,...a})=>r.createElement(d,{...a,fill:e.fill}),ur={component:p},t={render:e=>r.createElement(s,{width:"100%",height:500},r.createElement(n,{width:400,height:400},r.createElement(p,{data:u,dataKey:"value",nameKey:"name",...e,shape:h}),r.createElement(l,null),r.createElement(c,null))),args:{cx:"50%",cy:"50%",fill:"#8884d8",innerRadius:60,outerRadius:80}},hr=["PieColorSync"];var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{t as PieColorSync,hr as __namedExportsOrder,ur as default};
