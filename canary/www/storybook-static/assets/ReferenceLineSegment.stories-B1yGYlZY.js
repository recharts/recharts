import{e}from"./iframe-CxI43GLZ.js";import{R as i}from"./arrayEqualityCheck-BfVdm9jV.js";import{C as a}from"./ComposedChart-4DvSTtTI.js";import{C as p}from"./CartesianGrid-DQNW5f0G.js";import{X as n}from"./XAxis-DH2Q1e34.js";import{Y as s}from"./YAxis-C-oWd5yq.js";import{L as c}from"./Line-C6Ka3jci.js";import{R as d}from"./ReferenceLine-DQ7z8NLj.js";import{R as g}from"./RechartsHookInspector-DtRN3lc4.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-UONb-avO.js";import"./PolarUtils-DHQUPcK8.js";import"./RechartsWrapper--eelc2ZG.js";import"./hooks-B1NTMNRK.js";import"./axisSelectors-BTfB0Z1c.js";import"./zIndexSlice-DIL5Sqm1.js";import"./CartesianChart-Dk9gAZsf.js";import"./chartDataContext-VKjrZIk0.js";import"./CategoricalChart-diS0yBUq.js";import"./CartesianAxis-CGSh7ZG4.js";import"./Layer-CmGdcww6.js";import"./Text-DPcraT74.js";import"./DOMUtils-DgzzSI6D.js";import"./Label-B09Q27rq.js";import"./ZIndexLayer-B1TtTzTT.js";import"./types-KA7-71SW.js";import"./ReactUtils-elXAGoBP.js";import"./ActivePoints-BnPOypie.js";import"./Dot-KNUzVwuJ.js";import"./RegisterGraphicalItemId-CrQ7lfko.js";import"./ErrorBarContext-D61wHuQh.js";import"./GraphicalItemClipPath-D5JGy8J4.js";import"./SetGraphicalItem-CwpQjYla.js";import"./useAnimationId-CTE4KFOU.js";import"./getRadiusAndStrokeWidthFromDot-CXjnDYBP.js";import"./ActiveShapeUtils-Cos1S8ib.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bz1Foak7.js";import"./Trapezoid-B_Aa80Lz.js";import"./Sector-BrRXNJ4R.js";import"./Symbols-CSvR9izB.js";import"./Curve-BWaqjCRV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-QQ_t_uQR.js";import"./ChartSizeDimensions-DCRd00II.js";import"./OffsetShower-CdLtWmQh.js";import"./PlotAreaShower-B89fMbPB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
