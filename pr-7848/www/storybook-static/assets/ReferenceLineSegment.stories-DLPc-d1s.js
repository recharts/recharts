import{R as e}from"./iframe-DyNflmpD.js";import{R as i}from"./zIndexSlice-DcbzUDl1.js";import{C as n}from"./ComposedChart-DK3vhTkG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CEkKYNp6.js";import{X as s}from"./XAxis-BRq0uwwt.js";import{Y as c}from"./YAxis-DRbcnQBN.js";import{L as d}from"./Line-BGuS8g8Y.js";import{R as g}from"./ReferenceLine-B-DZveF2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JOKyqjkh.js";import"./index-CXOSBmJF.js";import"./index-b5COxMAZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEGyXQoP.js";import"./isWellBehavedNumber-Du2TBwtB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcT-g24f.js";import"./axisSelectors-D8oAfUCo.js";import"./d3-scale-rIUPnSoV.js";import"./index-CUSxx8_g.js";import"./index-D1o802DX.js";import"./renderedTicksSlice-D5roUEnp.js";import"./index-wtd-kRKG.js";import"./CartesianChart-SvhUL1zG.js";import"./chartDataContext-CccchDo-.js";import"./CategoricalChart-BmCM1Kvw.js";import"./CartesianAxis-FmtEoT3c.js";import"./Layer-BAK3mXOF.js";import"./Text-DubbQCtu.js";import"./DOMUtils-CnMp_f2C.js";import"./useId-CCFKlxj2.js";import"./useBackwardsCompatibleTheme-1TKRF9_G.js";import"./Label-8baFJ3SD.js";import"./ZIndexLayer-BkImCK5k.js";import"./types-BmhrOP68.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-tt8V9XJv.js";import"./step-Cw2SmsXu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bg7iXKcU.js";import"./useAnimationId-B6Hjzqdy.js";import"./ActivePoints-CZJUt6u2.js";import"./Dot-DiXQ237y.js";import"./RegisterGraphicalItemId-I1F5nEAR.js";import"./ErrorBarContext-0wgmY52F.js";import"./GraphicalItemClipPath-C6FvMp3W.js";import"./SetGraphicalItem-DjVLiBcR.js";import"./getRadiusAndStrokeWidthFromDot-D8_lJPIV.js";import"./ActiveShapeUtils-7Ik4Y1iY.js";import"./useGraphicalItemIdentity-BUorwys7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
