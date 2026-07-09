import{R as e}from"./iframe-DTfUMuxI.js";import{R as i}from"./zIndexSlice-DgbTd9h0.js";import{C as a}from"./ComposedChart-OGPUNqC6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-9o7tvkHD.js";import{X as s}from"./XAxis-CKFG07JY.js";import{Y as c}from"./YAxis-DiRZk9gW.js";import{L as d}from"./Line-B98wDZe7.js";import{R as g}from"./ReferenceLine-Bud2q9JE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DSBiY2UW.js";import"./index-C6ZCQ8Cr.js";import"./index-dA-GAX4g.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B2iqIMJj.js";import"./isWellBehavedNumber-CJoo6Zl9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-n6ARRQU-.js";import"./index-Cd9XPR7L.js";import"./index-C-gVZ3HS.js";import"./renderedTicksSlice-DsiYN-l1.js";import"./axisSelectors-D0YyYzBU.js";import"./d3-scale-DrphVPA4.js";import"./CartesianChart-b6kMC5fp.js";import"./chartDataContext-DbVx922-.js";import"./CategoricalChart-DjP0Xpt7.js";import"./CartesianAxis-CzVgKTyr.js";import"./Layer-fCILtQSz.js";import"./Text-8vykb6TY.js";import"./DOMUtils-CP4go6fM.js";import"./Label-Sgtp5mjO.js";import"./ZIndexLayer-BhQOtpEj.js";import"./types-CausIaox.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CDLgz_Rx.js";import"./step-D8Xe5eP9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DnEACLZT.js";import"./useAnimationId-BT6QlGBk.js";import"./ActivePoints-1q3Ryxbz.js";import"./Dot-Br2mhGeX.js";import"./RegisterGraphicalItemId-1AKHmh8R.js";import"./ErrorBarContext-4arHz5n6.js";import"./GraphicalItemClipPath-Bk6qs07-.js";import"./SetGraphicalItem-BNqcqmMc.js";import"./getRadiusAndStrokeWidthFromDot-D9ottDdP.js";import"./ActiveShapeUtils-DX8BqYxQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
