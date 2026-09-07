import{R as e}from"./iframe-CEqSETwy.js";import{R as i}from"./zIndexSlice-CJNe71Mi.js";import{C as n}from"./ComposedChart-C-LRGuZG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B0W_ymZI.js";import{X as s}from"./XAxis-DiGyugB3.js";import{Y as c}from"./YAxis-DZdJE3LC.js";import{L as d}from"./Line-DGuStQPX.js";import{R as g}from"./ReferenceLine-BCQS6gX7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DnGGP0fW.js";import"./index-BNz6dVRa.js";import"./index-BvAe43aE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CbEbpjss.js";import"./isWellBehavedNumber-DDsPS4Vv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7k5lu9l.js";import"./axisSelectors-p_-hiMzG.js";import"./d3-scale-kHCfNVPM.js";import"./index-CKh217UZ.js";import"./index-CcAm8cKQ.js";import"./renderedTicksSlice-Bs5DanIZ.js";import"./index-BHSo_RxK.js";import"./CartesianChart-DDkHhS9o.js";import"./chartDataContext-CtXgelXS.js";import"./CategoricalChart-Cuq3_PiL.js";import"./CartesianAxis-Baoe0UzV.js";import"./Layer-C0D9GKi7.js";import"./Text-DksTiW_2.js";import"./DOMUtils-19Cjbm1E.js";import"./useId-DLOcTRFV.js";import"./useBackwardsCompatibleTheme-C18-49Mr.js";import"./Label-lnqMQjsv.js";import"./ZIndexLayer-0nUyu6n_.js";import"./types-Ddhi9krD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-ByfwLNod.js";import"./step-DaAwVIu6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C2HkT0wg.js";import"./useAnimationId-gLsHzM3f.js";import"./ActivePoints-2KTX-e1O.js";import"./Dot-BHS04fT3.js";import"./RegisterGraphicalItemId-BZYWE3sH.js";import"./ErrorBarContext-4Qyv8RFs.js";import"./GraphicalItemClipPath-B4449nNq.js";import"./SetGraphicalItem-BqGzK2Ro.js";import"./getRadiusAndStrokeWidthFromDot-DMkHG-MO.js";import"./ActiveShapeUtils-BN_cCfJG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
