import{R as e}from"./iframe-NVmT8fNw.js";import{R as i}from"./zIndexSlice-oXJaNZSv.js";import{C as a}from"./ComposedChart-Dt5Lfngq.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DKoVBLjh.js";import{X as s}from"./XAxis-hjQAsG8m.js";import{Y as c}from"./YAxis-C2Jyljrh.js";import{L as d}from"./Line-B-bNZ47p.js";import{R as g}from"./ReferenceLine-li5Y5AB3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cfz3FXws.js";import"./index-Q4SQnPgQ.js";import"./index-UDay9_dl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8jEDqKQ.js";import"./isWellBehavedNumber-DXLqj9yd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7AIj6ea.js";import"./index-BpZAOzLQ.js";import"./index-DglhN2t4.js";import"./axisSelectors-tCKXm7jn.js";import"./d3-scale-Brn0HGK7.js";import"./renderedTicksSlice-DjTIRCRN.js";import"./CartesianChart-BKFmyfhg.js";import"./chartDataContext-DZujCsS5.js";import"./CategoricalChart-Dxp6zY9P.js";import"./CartesianAxis-CwxpTfpR.js";import"./Layer-BD2Ls3O_.js";import"./Text-C5xVRdeB.js";import"./DOMUtils-CDTGDYSn.js";import"./RechartsThemeContext-awS4vi70.js";import"./Label-DfDRyr69.js";import"./ZIndexLayer-B6fWtNzq.js";import"./types-DCTQ4Lzc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BPHyzTn-.js";import"./step-CnSikc6K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CytrP_0t.js";import"./useAnimationId-d1ULQyIN.js";import"./ActivePoints-CgHBThkz.js";import"./Dot-CFsdSuNY.js";import"./RegisterGraphicalItemId-twhih18P.js";import"./ErrorBarContext-CABhUjIg.js";import"./GraphicalItemClipPath-BQB0fOYx.js";import"./SetGraphicalItem-B2EMuvtY.js";import"./getRadiusAndStrokeWidthFromDot-D6gL5APH.js";import"./ActiveShapeUtils-0-0F3LMG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
