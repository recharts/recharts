import{R as e}from"./iframe-Dt7VmJVd.js";import{R as i}from"./zIndexSlice-CsJRlQGe.js";import{C as n}from"./ComposedChart-BEVdjL9z.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-1C1JJ-8V.js";import{X as s}from"./XAxis-6DHVILmw.js";import{Y as c}from"./YAxis-BGz_S1YP.js";import{L as d}from"./Line-NbDON0kK.js";import{R as g}from"./ReferenceLine-kSEWVRiP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./throttle-DKLEp5Cv.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./RechartsWrapper-DmetyJsw.js";import"./axisSelectors-DsQjGGXt.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DKSFl2hd.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./CartesianAxis-D2lewiOd.js";import"./Layer-CKqAbqeS.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";import"./Label-DBOYMKjR.js";import"./types-D6xyOnmX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-Gis92voa.js";import"./Curve-zF9ULVmH.js";import"./step-C8vG3ka0.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BTAsZYzb.js";import"./ActivePoints-rxDVwUzw.js";import"./Dot-BNusXcbA.js";import"./activeStyles-CXzu6olF.js";import"./useAnimationId-CZxgU6AP.js";import"./Symbols-CEcN4H71.js";import"./symbol-BNyIiosb.js";import"./ErrorBarContext-BfQEnsTO.js";import"./SetGraphicalItem-meI4aCtS.js";import"./ActiveShapeUtils-Boj2HH09.js";import"./useEffectiveDataKey-DfkEl2f7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
