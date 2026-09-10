import{R as e}from"./iframe-BB7QZXLs.js";import{R as i}from"./zIndexSlice-tJAM9iWj.js";import{C as n}from"./ComposedChart-D3UkYazW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Cwrn2LRG.js";import{X as s}from"./XAxis-XcDOkDmd.js";import{Y as c}from"./YAxis-DSzkAjgg.js";import{L as d}from"./Line-DKYrypTN.js";import{R as g}from"./ReferenceLine-CY4BF9ww.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BIPObZtO.js";import"./index-dVHp78rg.js";import"./index-_M8YNH98.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CpmXZA4k.js";import"./isWellBehavedNumber-BJy-JztG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-e66Xzxgl.js";import"./axisSelectors-C9Ww97e2.js";import"./d3-scale-iQiKVngo.js";import"./index-VwBP7ySp.js";import"./index-DhA5-aT4.js";import"./renderedTicksSlice-qkMRB7Jj.js";import"./index-qzDpnTu9.js";import"./CartesianChart-D1IApd6R.js";import"./chartDataContext-CBZ7yVc5.js";import"./CategoricalChart-DG2kQqAq.js";import"./CartesianAxis-ByfKlAGp.js";import"./Layer-07NELy8e.js";import"./Text-CEEsNHtu.js";import"./DOMUtils-C2ZnKXb0.js";import"./useId-BVIeIeeB.js";import"./useBackwardsCompatibleTheme-BKLDWadY.js";import"./Label-ssYRudSZ.js";import"./ZIndexLayer-BnNru_wJ.js";import"./types-D6b6NoLW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-D5V2G3nc.js";import"./step-CzTEwmSX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BHb_g3It.js";import"./useAnimationId-C1x4gWZO.js";import"./ActivePoints-DEZf8Tp_.js";import"./Dot-DKFbKC0m.js";import"./RegisterGraphicalItemId-BrQFxchm.js";import"./ErrorBarContext-Cj0JdL2W.js";import"./GraphicalItemClipPath-DgpfNhEU.js";import"./SetGraphicalItem-BRob5fGw.js";import"./getRadiusAndStrokeWidthFromDot-k1yLnap7.js";import"./ActiveShapeUtils-CHeKF_6U.js";import"./useGraphicalItemIdentity-DsYSBEP4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
