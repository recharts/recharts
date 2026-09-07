import{R as e}from"./iframe-vkuvwsVK.js";import{R as i}from"./zIndexSlice-Dv-4_3RD.js";import{C as n}from"./ComposedChart-DmKeLxy2.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-fmAjXW7p.js";import{X as s}from"./XAxis-CpNjxui_.js";import{Y as c}from"./YAxis-BRsD9NZr.js";import{L as d}from"./Line-CP5o0VFe.js";import{R as g}from"./ReferenceLine-ByTHc0O3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BLHvZaft.js";import"./index-D41S2RZq.js";import"./index-Chk0yUZO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B-kKD-dq.js";import"./isWellBehavedNumber-CEhn0nxL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGV5QqYH.js";import"./axisSelectors-BTwgcDWt.js";import"./d3-scale-5XjKmDSJ.js";import"./index-_iLGw6z5.js";import"./index-CowJ9bbH.js";import"./renderedTicksSlice-CkUsoCJX.js";import"./index-BegFXIYu.js";import"./CartesianChart-C28eI56R.js";import"./chartDataContext-D8moszCG.js";import"./CategoricalChart-C__CUkoq.js";import"./CartesianAxis-DxB0GpiS.js";import"./Layer-Bi6vQt34.js";import"./Text-Bzv8HE1I.js";import"./DOMUtils-Bw-pfRF7.js";import"./useId-CkK6agKe.js";import"./useBackwardsCompatibleTheme-DDVT5RRa.js";import"./Label-MPhkREO_.js";import"./ZIndexLayer-Ds3zCArg.js";import"./types-BvD7j9i8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Dio-qnL1.js";import"./step-BXgLPagR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DBPnILuv.js";import"./useAnimationId-DDynUN7k.js";import"./ActivePoints-BpGdn-ZL.js";import"./Dot-DDw4Jjdd.js";import"./RegisterGraphicalItemId-BNZMo2JA.js";import"./ErrorBarContext-BiVVJplW.js";import"./GraphicalItemClipPath-B9JB0AOy.js";import"./SetGraphicalItem-CZfOWNG9.js";import"./getRadiusAndStrokeWidthFromDot-CXXRrtxr.js";import"./ActiveShapeUtils-BdYG65ei.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
