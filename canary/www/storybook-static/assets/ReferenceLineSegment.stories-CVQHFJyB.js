import{R as e}from"./iframe-C8vQGZXk.js";import{R as i}from"./zIndexSlice-ByprO6Sm.js";import{C as a}from"./ComposedChart-CHNyRbuw.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid--shnmNgT.js";import{X as s}from"./XAxis-CeEiPhih.js";import{Y as c}from"./YAxis-B6tlBAdH.js";import{L as d}from"./Line-ysek8YuF.js";import{R as g}from"./ReferenceLine-Dimez2Q8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-h__ZU4m4.js";import"./index-CPGq0YmD.js";import"./index-DcRT1P9Q.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-V67edAdk.js";import"./isWellBehavedNumber-C0Xo9Op-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8pTUTugH.js";import"./index-DGglMQ8l.js";import"./index-C62uqfyt.js";import"./axisSelectors-QRAfsrXG.js";import"./d3-scale-CtBXoG-U.js";import"./renderedTicksSlice-DsrGsPip.js";import"./CartesianChart-Tp1RpXRt.js";import"./chartDataContext-DHzBZ8lS.js";import"./CategoricalChart-3d5zHnsL.js";import"./CartesianAxis-C_7-gYtt.js";import"./Layer-sgegzG2x.js";import"./Text-4tQX4Uia.js";import"./DOMUtils-CYXp4dKG.js";import"./useId-BhWWyhoE.js";import"./useBackwardsCompatibleTheme-WNjwGM1x.js";import"./Label-CYWEtH1_.js";import"./ZIndexLayer-DTaI93aT.js";import"./types-Cx0FcaGa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BHwHIA5E.js";import"./step-BEmml1DS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-v0KEsWrQ.js";import"./useAnimationId-CCh5p5CL.js";import"./ActivePoints-DpUGItzr.js";import"./Dot-D-cyWkmh.js";import"./RegisterGraphicalItemId-Cui1oLRd.js";import"./ErrorBarContext-BpNPFGVG.js";import"./GraphicalItemClipPath-BrujiRiU.js";import"./SetGraphicalItem-CLgoHfzk.js";import"./getRadiusAndStrokeWidthFromDot-CYNakwFb.js";import"./ActiveShapeUtils-B1Mwe2wI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
