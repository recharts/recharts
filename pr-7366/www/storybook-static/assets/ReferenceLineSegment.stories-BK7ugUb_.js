import{e}from"./iframe-D1Y9TY-u.js";import{g as i}from"./arrayEqualityCheck-DPvIBees.js";import{C as a}from"./ComposedChart-Dv2kn-Hm.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-qdbsk9vU.js";import{X as s}from"./XAxis-5BMZV76c.js";import{Y as c}from"./YAxis-D2V4IA3o.js";import{L as d}from"./Line-DINGk1Pq.js";import{R as g}from"./ReferenceLine-BiY_5oEQ.js";import{R as f}from"./RechartsHookInspector-DlKiXr8l.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DD8L0n44.js";import"./immer-CxQQPMht.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0rnCwdR.js";import"./index-D5E_lAb8.js";import"./hooks-CFGEq-6u.js";import"./axisSelectors-DhcMUj02.js";import"./d3-scale-BrKRNhi9.js";import"./zIndexSlice-CgFHZos-.js";import"./renderedTicksSlice-W-15kQDb.js";import"./CartesianChart-B6m73if6.js";import"./chartDataContext-C5ZGItfB.js";import"./CategoricalChart-DcwMFRg_.js";import"./CartesianAxis-BWlWM6yy.js";import"./Layer-B3bXBbbL.js";import"./Text-Dd-bZYpK.js";import"./DOMUtils-DyWiHKN-.js";import"./Label-DE2OURwo.js";import"./ZIndexLayer-CfpM-rLj.js";import"./types-BaB5y5-3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-5XiXyCEh.js";import"./step-kC9Mr0-h.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Cn5gX129.js";import"./ActivePoints-B66CzNHK.js";import"./Dot-DAICBiMe.js";import"./RegisterGraphicalItemId-Bn3tPr19.js";import"./ErrorBarContext-BTNYxynC.js";import"./GraphicalItemClipPath-BvycXnEO.js";import"./SetGraphicalItem-B11RgMwt.js";import"./useAnimationId-BZgLvOHt.js";import"./getRadiusAndStrokeWidthFromDot-Ba8qt8Pw.js";import"./ActiveShapeUtils-D80gxDtc.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-twG5rrjJ.js";import"./ChartSizeDimensions-BkxRlTbK.js";import"./OffsetShower-XnxI6Cxg.js";import"./PlotAreaShower-BNnVE1WV.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
