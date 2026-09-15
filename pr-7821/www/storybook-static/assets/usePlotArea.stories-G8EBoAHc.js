import{R as t}from"./iframe-BWKtkC3a.js";import{j as a}from"./RechartsWrapper-BXQ1II60.js";import{R as p}from"./zIndexSlice-CJYktc5S.js";import{C as n}from"./ComposedChart-B4E8jNZy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-_xIPfQEK.js";import{X as l}from"./XAxis-Beuqpq4u.js";import{Y as h}from"./YAxis-Bjai06eq.js";import{L as c}from"./Legend-DO3vjskf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BSdxfhaa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-4rRhJnZy.js";import"./throttle-CSPVuwv0.js";import"./index-dmgaO9Ns.js";import"./index-DnD7Y3-0.js";import"./isWellBehavedNumber-Bx1-jT0B.js";import"./d3-scale-BK7khyLD.js";import"./index-2yxEF-zg.js";import"./index-BJ1rhnQo.js";import"./renderedTicksSlice-CkjOXsqY.js";import"./index-BdvYswuq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ck046iEl.js";import"./chartDataContext-CHsw8eio.js";import"./CategoricalChart-CTjKdKoB.js";import"./Layer-BW2neL7L.js";import"./Curve-DCrUUXgR.js";import"./types-DVYgZ5G0.js";import"./step-4b6-oj2z.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DrPbLth3.js";import"./Label-3HnLAq9q.js";import"./Text-D6blVt8R.js";import"./DOMUtils-BR5iDZmA.js";import"./useId-Dtk37enT.js";import"./useBackwardsCompatibleTheme-ChHa43Fb.js";import"./ZIndexLayer-CAOggInk.js";import"./useAnimationId-DDNvTaoZ.js";import"./ActivePoints-UtB0KfzC.js";import"./Dot-j4FVDpMz.js";import"./RegisterGraphicalItemId-DgdLcRFp.js";import"./ErrorBarContext-CPaf1b78.js";import"./GraphicalItemClipPath-DnbnKIJy.js";import"./SetGraphicalItem-CkEmM5fN.js";import"./getRadiusAndStrokeWidthFromDot-CP4Q4sYB.js";import"./ActiveShapeUtils-BQlodlaC.js";import"./useGraphicalItemIdentity-hpl57a82.js";import"./CartesianAxis-CjxgM0pW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CFGGSQbZ.js";import"./symbol-C9rnqtm1.js";import"./useElementOffset-Dl9OEUY7.js";import"./uniqBy-jfG8v9oK.js";import"./iteratee-CcJpQkl8.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
