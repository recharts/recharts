import{R as e}from"./iframe-uEKx9k1N.js";import{R as i}from"./zIndexSlice-DY2SAwlF.js";import{C as a}from"./ComposedChart-wuX6tP4V.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B5l8Wvsy.js";import{X as s}from"./XAxis-DqNwoQQz.js";import{Y as c}from"./YAxis-tAwATeqy.js";import{L as d}from"./Line-BSIz3Wv8.js";import{R as g}from"./ReferenceLine-m-fdw_Zw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BszORo1S.js";import"./index-CSsm5ETf.js";import"./index-DPeMAw3v.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-ht_nEGGy.js";import"./isWellBehavedNumber-DQ4HTAG3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8Jh4kUL.js";import"./index-Du90D5xv.js";import"./index-CgS1QQ0H.js";import"./renderedTicksSlice-DY-iZALX.js";import"./axisSelectors-w7ZWZmhc.js";import"./d3-scale-CoMxsikp.js";import"./CartesianChart-BzS97Wq2.js";import"./chartDataContext-w4FL8Pti.js";import"./CategoricalChart-ablhttF3.js";import"./CartesianAxis-StFKOZ7o.js";import"./Layer-BH5XLyL8.js";import"./Text-B8QKaTlG.js";import"./DOMUtils-CMP-Fz_P.js";import"./Label-CitoXnqP.js";import"./ZIndexLayer-ClIbinrc.js";import"./types-BnkDZvgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DneOA6Ls.js";import"./step-F10w8TN4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B35P9OvY.js";import"./useAnimationId-ZeyHjL0b.js";import"./ActivePoints-BymWNzxJ.js";import"./Dot-F2Exn6rv.js";import"./RegisterGraphicalItemId-CTEk8rED.js";import"./ErrorBarContext-YXBGRjgp.js";import"./GraphicalItemClipPath-BIARRVEG.js";import"./SetGraphicalItem-CwhlaQHa.js";import"./getRadiusAndStrokeWidthFromDot-DTQnNiya.js";import"./ActiveShapeUtils-BahjRs48.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
