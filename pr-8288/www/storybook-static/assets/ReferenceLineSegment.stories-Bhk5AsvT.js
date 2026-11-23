import{R as e}from"./iframe-Cwhg5Alw.js";import{R as i}from"./zIndexSlice-Fv3NhYWW.js";import{C as n}from"./ComposedChart-BUfd6mLX.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CQF9KBlo.js";import{X as s}from"./XAxis-DysdhPMn.js";import{Y as c}from"./YAxis-DmjTZE4U.js";import{L as d}from"./Line-BWipIdmr.js";import{R as g}from"./ReferenceLine-VBC-RHes.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CkDxtqDz.js";import"./throttle-Du5pgiUX.js";import"./index-B9mn7cyH.js";import"./index-BEds7S3I.js";import"./RechartsWrapper-BxNvZ3mc.js";import"./axisSelectors-BXhIMUYz.js";import"./polarAxisSelectors-Dj6PmZ2B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-buNRHlZ7.js";import"./index-Ce6E5z2B.js";import"./index-Dq-nqpA7.js";import"./renderedTicksSlice-DNRadS3G.js";import"./index-DS0QJhYL.js";import"./fillDefinitions-zsPlWl9g.js";import"./CartesianChart-dk4HvrTk.js";import"./chartDataContext-plFejdmf.js";import"./CategoricalChart-DmZKpDkp.js";import"./CartesianAxis-lC9jf5Zn.js";import"./Layer-Cvk4I16t.js";import"./Text-Cv-7zpF9.js";import"./ZIndexLayer-Zh5FqFCx.js";import"./Label-DOhfAK-3.js";import"./types-B4BwHuKZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CzKUA028.js";import"./Curve-D9P_AzdW.js";import"./step-BizBXnVe.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Dl4kQBD7.js";import"./ActivePoints-SiU-4rgE.js";import"./Dot-DINU8znu.js";import"./activeStyles-C2N6Ab6e.js";import"./useAnimationId-B8-WGiI8.js";import"./Symbols-C1fO_1Gx.js";import"./symbol-D2NP4cwA.js";import"./ErrorBarContext-C5GJMenk.js";import"./SetGraphicalItem-BZTwfoQJ.js";import"./ActiveShapeUtils-NTKJrLNa.js";import"./useEffectiveDataKey-EnHAhUcJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
