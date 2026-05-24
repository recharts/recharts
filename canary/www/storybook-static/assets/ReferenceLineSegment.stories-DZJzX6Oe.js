import{e}from"./iframe-CxCywqzA.js";import{g as i}from"./arrayEqualityCheck-yVNwB6mW.js";import{C as a}from"./ComposedChart-CX5jdlg2.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-CEtYYjUH.js";import{X as s}from"./XAxis-_gXpBYMm.js";import{Y as c}from"./YAxis-DxVfrwf5.js";import{L as d}from"./Line-ZzkhjeKR.js";import{R as g}from"./ReferenceLine-DaHkFdYE.js";import{R as f}from"./RechartsHookInspector-DGOvaE6a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyFfO_sZ.js";import"./immer-B8hoAty4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ReU4AUnJ.js";import"./index-Pf0lqjAZ.js";import"./hooks-bOP2AOQf.js";import"./axisSelectors-DhlA5n5_.js";import"./d3-scale-CxndOeQp.js";import"./zIndexSlice-DVQoyP0x.js";import"./renderedTicksSlice-D6OwKyas.js";import"./CartesianChart-DzAU9ZU1.js";import"./chartDataContext-DIpKw8P8.js";import"./CategoricalChart-Bsvtk9Il.js";import"./CartesianAxis-CJvJrEPT.js";import"./Layer-BIf3cKek.js";import"./Text-D9QqhyNw.js";import"./DOMUtils-C_VBv5EQ.js";import"./Label-C7vnjRze.js";import"./ZIndexLayer-DP6IzTUW.js";import"./types-ou1XrYCh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BRrh0cMa.js";import"./step-IqpDGeuN.js";import"./path-DyVhHtw_.js";import"./ReactUtils-9u_I1YpW.js";import"./ActivePoints-C96qswx6.js";import"./Dot-D7kdX87a.js";import"./RegisterGraphicalItemId-BpFbTFO3.js";import"./ErrorBarContext-CRsTDduf.js";import"./GraphicalItemClipPath-vFOoMVO7.js";import"./SetGraphicalItem-CwSOO4xE.js";import"./useAnimationId-C-vOWrwQ.js";import"./getRadiusAndStrokeWidthFromDot-cuaaV9XU.js";import"./ActiveShapeUtils-sPKYOUtI.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DGGA_IR8.js";import"./ChartSizeDimensions-CFycJ4k1.js";import"./OffsetShower-BkZVXWFE.js";import"./PlotAreaShower-BM-3w1mr.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
