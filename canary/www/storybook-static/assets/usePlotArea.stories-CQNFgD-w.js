import{R as t}from"./iframe-BUclCYGi.js";import{j as a}from"./RechartsWrapper-DwnYFdtG.js";import{R as p}from"./zIndexSlice-Cw_uenFh.js";import{C as n}from"./ComposedChart-_Z_eYeqh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B5cqUxCo.js";import{X as l}from"./XAxis-BHZhhSq5.js";import{Y as h}from"./YAxis-DpN8u2C4.js";import{L as c}from"./Legend-CHR3AkWJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CDaHLq6V.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D1NJ4aqF.js";import"./throttle-SXE1z9w6.js";import"./index-Bn5su_0t.js";import"./index-BQEsNi1X.js";import"./isWellBehavedNumber-DhRe89GX.js";import"./d3-scale-BmoaGtPl.js";import"./index-ChGyrwHq.js";import"./index-gTT2X1bJ.js";import"./renderedTicksSlice-BS7nbOgQ.js";import"./index-BsSpSNv1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C6YloXmX.js";import"./chartDataContext-RCVSOfKr.js";import"./CategoricalChart-mNhIGUHY.js";import"./Layer-DDGYJVwv.js";import"./Curve--oo5YHjc.js";import"./types-aN_pljKn.js";import"./step-CfDvQFtP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BNylu8US.js";import"./Label-BB58AW_H.js";import"./Text-CMwjB0Gb.js";import"./DOMUtils-CDNaNL9M.js";import"./useId-Cf0k-OMu.js";import"./useBackwardsCompatibleTheme-D2gq_Aw8.js";import"./ZIndexLayer-tXuqEnu1.js";import"./useAnimationId-CydbYcnQ.js";import"./ActivePoints-C2LY5I7a.js";import"./Dot-DxUjT08J.js";import"./RegisterGraphicalItemId-BqK8bbcf.js";import"./ErrorBarContext-CpA0sHX8.js";import"./GraphicalItemClipPath-DAWuVc0K.js";import"./SetGraphicalItem-DrDTFijX.js";import"./getRadiusAndStrokeWidthFromDot-CFQbdYts.js";import"./ActiveShapeUtils-CW3_54sQ.js";import"./useGraphicalItemIdentity-DY8lhZ2G.js";import"./CartesianAxis-NWR4v8N2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CYpWTU4I.js";import"./symbol-C8sQv5zl.js";import"./useElementOffset-Byj6o50B.js";import"./uniqBy-BzsdVyGP.js";import"./iteratee-7-jp9xNG.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
