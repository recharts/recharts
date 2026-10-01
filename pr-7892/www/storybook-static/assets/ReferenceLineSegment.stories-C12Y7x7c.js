import{R as e}from"./iframe-C9psKz5H.js";import{R as i}from"./zIndexSlice-DpmGRp-Q.js";import{C as n}from"./ComposedChart-DVW7IlRi.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D3n5VgzI.js";import{X as s}from"./XAxis-7TSk_dxf.js";import{Y as c}from"./YAxis-hQp9fU0j.js";import{L as d}from"./Line-DANxSI-f.js";import{R as g}from"./ReferenceLine-BBC-q6Jj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ybqMtWK8.js";import"./index-D90R4_Ry.js";import"./index-DO4kgVpb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DXpX2jzi.js";import"./isWellBehavedNumber-DtoestQf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DBEUhNwk.js";import"./axisSelectors-BVR1qW5C.js";import"./d3-scale-DOPiKI9I.js";import"./index-Boed59-W.js";import"./index-C0Ds42Ok.js";import"./renderedTicksSlice-C81k7Y0M.js";import"./index-C4HmYpYK.js";import"./CartesianChart-DqQaN6li.js";import"./chartDataContext-C8FZLZVj.js";import"./CategoricalChart-oiLx-c2-.js";import"./CartesianAxis-QX-AYICp.js";import"./Layer-D1lf7NaI.js";import"./Text-CxmkIGJJ.js";import"./DOMUtils-5QLcrI6X.js";import"./useId-BmRjTouL.js";import"./useBackwardsCompatibleTheme-u-6iGz_C.js";import"./Label-tLoAdhBg.js";import"./ZIndexLayer-Dp6mI4S2.js";import"./types-Bo9cWGoI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-ejO9vv5H.js";import"./step-Ba-sjoMn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CEzVE_qf.js";import"./useAnimationId-NO-aRC2z.js";import"./ActivePoints-DV3QsG_s.js";import"./Dot-CoxDYTLK.js";import"./RegisterGraphicalItemId-Bou02MzC.js";import"./ErrorBarContext-C0X-i2LX.js";import"./GraphicalItemClipPath-BiRBEzG3.js";import"./SetGraphicalItem-DbUk56bY.js";import"./getRadiusAndStrokeWidthFromDot-D95GFJQd.js";import"./ActiveShapeUtils-B_bGVHtn.js";import"./useGraphicalItemIdentity-CFJPU_4U.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
