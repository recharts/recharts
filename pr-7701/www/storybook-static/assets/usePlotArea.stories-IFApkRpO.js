import{R as t}from"./iframe-B6gM4DBh.js";import{j as a}from"./RechartsWrapper-D2vZVe4g.js";import{R as p}from"./zIndexSlice-B4H70akx.js";import{C as s}from"./ComposedChart-DAUNCbv-.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DR958mka.js";import{X as l}from"./XAxis-BPzJdn5a.js";import{Y as h}from"./YAxis-d65xn9J2.js";import{L as c}from"./Legend-qAXQw7-7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-HOpiV2UA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D78GfHI7.js";import"./throttle-CinY1Cg6.js";import"./index-CaHvefGu.js";import"./index-DbvGR5AH.js";import"./isWellBehavedNumber-oWfLE68q.js";import"./d3-scale-CI-CA5sR.js";import"./index-kpSUoDvk.js";import"./index-8y1uh0JJ.js";import"./renderedTicksSlice-C9ov5r2C.js";import"./index-CgCBhtWH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHo5twJf.js";import"./chartDataContext-SMCrbflL.js";import"./CategoricalChart-COvMpWfW.js";import"./Layer-BvISteiU.js";import"./Curve-BJ4EcGmY.js";import"./types-B56u5L7u.js";import"./step-hz5YCF7J.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoXh_8P-.js";import"./Label-uI-6_naX.js";import"./Text-D8H4cfwv.js";import"./DOMUtils-BD82E1of.js";import"./useId-DmdpXOpx.js";import"./useBackwardsCompatibleTheme-9Vtrcjiv.js";import"./ZIndexLayer-C4neE0Nt.js";import"./useAnimationId-B9APFvDh.js";import"./ActivePoints-Dyp1po5C.js";import"./Dot-DPENikpb.js";import"./RegisterGraphicalItemId-Bqoy6nT5.js";import"./ErrorBarContext-BH6HTwRn.js";import"./GraphicalItemClipPath-BlpQx9et.js";import"./SetGraphicalItem-CtntmLYm.js";import"./getRadiusAndStrokeWidthFromDot-B_TRGaiU.js";import"./ActiveShapeUtils-DnLJRiwf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BQyu91wk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B96vx3HZ.js";import"./symbol-DjIioEey.js";import"./useElementOffset-B_AujER3.js";import"./uniqBy-gLmjoiP9.js";import"./iteratee-DAM7e3NH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
