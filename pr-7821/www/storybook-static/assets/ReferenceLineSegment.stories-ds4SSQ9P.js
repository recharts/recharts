import{R as e}from"./iframe-BWKtkC3a.js";import{R as i}from"./zIndexSlice-CJYktc5S.js";import{C as n}from"./ComposedChart-B4E8jNZy.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CvLGgohb.js";import{X as s}from"./XAxis-Beuqpq4u.js";import{Y as c}from"./YAxis-Bjai06eq.js";import{L as d}from"./Line-_xIPfQEK.js";import{R as g}from"./ReferenceLine-EvVj4u0p.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSPVuwv0.js";import"./index-dmgaO9Ns.js";import"./index-DnD7Y3-0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSdxfhaa.js";import"./isWellBehavedNumber-Bx1-jT0B.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXQ1II60.js";import"./axisSelectors-4rRhJnZy.js";import"./d3-scale-BK7khyLD.js";import"./index-2yxEF-zg.js";import"./index-BJ1rhnQo.js";import"./renderedTicksSlice-CkjOXsqY.js";import"./index-BdvYswuq.js";import"./CartesianChart-Ck046iEl.js";import"./chartDataContext-CHsw8eio.js";import"./CategoricalChart-CTjKdKoB.js";import"./CartesianAxis-CjxgM0pW.js";import"./Layer-BW2neL7L.js";import"./Text-D6blVt8R.js";import"./DOMUtils-BR5iDZmA.js";import"./useId-Dtk37enT.js";import"./useBackwardsCompatibleTheme-ChHa43Fb.js";import"./Label-3HnLAq9q.js";import"./ZIndexLayer-CAOggInk.js";import"./types-DVYgZ5G0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DCrUUXgR.js";import"./step-4b6-oj2z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DrPbLth3.js";import"./useAnimationId-DDNvTaoZ.js";import"./ActivePoints-UtB0KfzC.js";import"./Dot-j4FVDpMz.js";import"./RegisterGraphicalItemId-DgdLcRFp.js";import"./ErrorBarContext-CPaf1b78.js";import"./GraphicalItemClipPath-DnbnKIJy.js";import"./SetGraphicalItem-CkEmM5fN.js";import"./getRadiusAndStrokeWidthFromDot-CP4Q4sYB.js";import"./ActiveShapeUtils-BQlodlaC.js";import"./useGraphicalItemIdentity-hpl57a82.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
