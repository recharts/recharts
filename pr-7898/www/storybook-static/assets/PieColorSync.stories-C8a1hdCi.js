import{R as r}from"./iframe-BLIo_1nt.js";import{P as p,a as n}from"./PieChart-DRqo9LNF.js";import{R as s}from"./zIndexSlice-DC3TJ2KH.js";import{L as l}from"./Legend-DcyuktsH.js";import{T as c}from"./Tooltip-DrYX7zBw.js";import{S as d}from"./Sector-B6-NlQbV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVtqo_9X.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./get-CjriyByo.js";import"./fillDefinitions-pQA0VntX.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./Layer-BmO--khP.js";import"./Curve-BVD8Rbav.js";import"./types-C-m9Hr0T.js";import"./step-LFYZ39d8.js";import"./path-BBMZd4YL.js";import"./Text-DGpe4WxS.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./tooltipContext-C8JMsOca.js";import"./RechartsWrapper-DHKT5KBC.js";import"./axisSelectors-zp31unE3.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-0nS9y-pB.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-Cvsm1Tm8.js";import"./activeStyles-CwggIO5e.js";import"./useAnimationId-BgYtx5DV.js";import"./dataEntryStyles-B2sIlIGL.js";import"./Label-CFregkfn.js";import"./ActiveShapeUtils-wxtxdEJ1.js";import"./SetGraphicalItem-DvFjNtUQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./polarSelectors-BmaALK4f.js";import"./PolarChart-adFzhgUz.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./Symbols-DgGyp4Yg.js";import"./symbol-D8T0ODfo.js";import"./useElementOffset-VoZhZIkW.js";import"./uniqBy-D7cU4A4V.js";import"./iteratee-w-RXZ5GP.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";import"./Cross-B4AUhU5f.js";import"./Rectangle-D4nL3Ndu.js";import"./util-Dxo8gN5i.js";const u=[{name:"Group A",value:400,fill:"#0088FE"},{name:"Group B",value:300,fill:"#00C49F"},{name:"Group C",value:300,fill:"#FFBB28"},{name:"Group D",value:200,fill:"#FF8042"}],h=({payload:e,...a})=>r.createElement(d,{...a,fill:e.fill}),dr={component:p},t={render:e=>r.createElement(s,{width:"100%",height:500},r.createElement(n,{width:400,height:400},r.createElement(p,{data:u,dataKey:"value",nameKey:"name",...e,shape:h}),r.createElement(l,null),r.createElement(c,null))),args:{cx:"50%",cy:"50%",fill:"#8884d8",innerRadius:60,outerRadius:80}},ur=["PieColorSync"];var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{t as PieColorSync,ur as __namedExportsOrder,dr as default};
