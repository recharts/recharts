import{R as t}from"./iframe-BZ8dVzH9.js";import{j as a}from"./RechartsWrapper-BUL_ZWsP.js";import{R as p}from"./zIndexSlice-alAuneH8.js";import{C as n}from"./ComposedChart-Bsbx0YHv.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BHPleON2.js";import{X as l}from"./XAxis-CnHMXMmb.js";import{Y as h}from"./YAxis-sJ36Ww1v.js";import{L as c}from"./Legend-CyrLGj5T.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DGRkN7my.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bf9eJXot.js";import"./throttle-Gvesfo2A.js";import"./index-BG6e4aCS.js";import"./index-05PttkMT.js";import"./isWellBehavedNumber-DuT8v1eR.js";import"./d3-scale-BqJh_GJr.js";import"./index-Bh_WxC72.js";import"./index-TQNe-Pfx.js";import"./renderedTicksSlice-CdbAedzg.js";import"./index-1GZEZdCR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPDbtls9.js";import"./chartDataContext-Dooqfk1y.js";import"./CategoricalChart-wlCT99n2.js";import"./Layer-DFGb6VX8.js";import"./Curve-GkKc5FU6.js";import"./types-JZ66y424.js";import"./step-BzQ2FL9y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DFtjNgrp.js";import"./Label-D8Xv73in.js";import"./Text-Sov8IyzM.js";import"./DOMUtils-B5j94FrC.js";import"./useId-Cmc9xIYY.js";import"./useBackwardsCompatibleTheme-mp8lDntE.js";import"./ZIndexLayer-By4t7zGO.js";import"./useAnimationId-CAROHwad.js";import"./ActivePoints-BRuknYci.js";import"./Dot-d3AKepe-.js";import"./RegisterGraphicalItemId-DjZaW0U6.js";import"./ErrorBarContext-Bbbe3Bh6.js";import"./GraphicalItemClipPath-Bqlh9UVi.js";import"./SetGraphicalItem-C_OKi3Rd.js";import"./getRadiusAndStrokeWidthFromDot-BRivEq7U.js";import"./ActiveShapeUtils-DjhXDsDC.js";import"./useGraphicalItemIdentity-DrldTHyX.js";import"./CartesianAxis-ZGFemc86.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C0TFMyrU.js";import"./symbol-qUdoioFN.js";import"./useElementOffset-C2gbVgRM.js";import"./uniqBy-DrWsEjAm.js";import"./iteratee-CHJKpI4A.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
