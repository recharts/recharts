import{R as e}from"./iframe-CCedNpIL.js";import{R as i}from"./zIndexSlice-FaVG8kHH.js";import{C as n}from"./ComposedChart-CuixBgtF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CigQqjXR.js";import{X as s}from"./XAxis-BXe8rtVd.js";import{Y as c}from"./YAxis-C1dIb0Dq.js";import{L as d}from"./Line-Nm4xoA8b.js";import{R as g}from"./ReferenceLine-E6_HwblD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BU47eI4H.js";import"./throttle-Br1C3UWP.js";import"./index-a9wrUunR.js";import"./index-B1OaBK8_.js";import"./RechartsWrapper-B3okQ-B8.js";import"./axisSelectors-BoL5XRtd.js";import"./polarAxisSelectors-Bk6LJwmt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-EyFZEVUo.js";import"./index-DKQhzlop.js";import"./index-CL5Xa_TG.js";import"./renderedTicksSlice-BWK-8Wbg.js";import"./index-D4SSZ3m3.js";import"./CartesianChart-CaGoIdwh.js";import"./ZIndexPortal-Bmj6fCDQ.js";import"./CategoricalChart-C8fCaDAg.js";import"./CartesianAxis-CVTWbWdI.js";import"./Layer-Cr1LK46x.js";import"./Text-B0ZPk73p.js";import"./pageBackground-pCtx7B-s.js";import"./ZIndexLayer-BPlzci0x.js";import"./Label-CBEI3-wb.js";import"./types-D0KlXew0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CPRSU3Na.js";import"./step-BxzXSqS7.js";import"./path-DyVhHtw_.js";import"./LabelList-cRyR8A9p.js";import"./ActivePoints-xoEQqRpP.js";import"./Dot-Dkc7CiNw.js";import"./activeStyles-DICcYqor.js";import"./useAnimationId-CcrjU78K.js";import"./dataEntryStyles-B3jzja7w.js";import"./Symbols-B_HwlHbC.js";import"./symbol-CpsCxClc.js";import"./ErrorBarContext-BMxzBjzC.js";import"./SetGraphicalItem-CeKorW8q.js";import"./getRadiusAndStrokeWidthFromDot-B1LY2Lwz.js";import"./ActiveShapeUtils-DzHDFOYU.js";import"./useEffectiveDataKey-Lst-3VK9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
