import{R as t}from"./iframe-DKDUQR4e.js";import{j as a}from"./RechartsWrapper-CFbHWja9.js";import{R as p}from"./zIndexSlice-aRYQG5Yn.js";import{C as n}from"./ComposedChart-CCmbfoN3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BsvL8Xz1.js";import{X as l}from"./XAxis-CjF_jX-F.js";import{Y as h}from"./YAxis-CBJKZQVh.js";import{L as c}from"./Legend-B29jf7g8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CoYFUk2l.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CByMsFVX.js";import"./throttle-CZQWytra.js";import"./index-aMLVbRVP.js";import"./index-DFSigqQi.js";import"./isWellBehavedNumber-CmolPL3d.js";import"./d3-scale-D08aSlXl.js";import"./index-DYLqyLpB.js";import"./index-DKbxb5pM.js";import"./renderedTicksSlice-C672n-_-.js";import"./index-gqnOst7j.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3BMrTr-.js";import"./chartDataContext-BTH-lGko.js";import"./CategoricalChart-DNyG6Cdr.js";import"./Layer-4AR486QQ.js";import"./Curve-CN5kBDOi.js";import"./types-D2xbrN5O.js";import"./step-C6ZJXuGC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsWKOVBJ.js";import"./Label-CIwsUObl.js";import"./Text-BiZmy8Q_.js";import"./DOMUtils-DdCdIfAV.js";import"./useId-CIh7gguH.js";import"./useBackwardsCompatibleTheme-CrqKBooM.js";import"./ZIndexLayer-Cdmw8GXd.js";import"./useAnimationId-DdSCrHov.js";import"./ActivePoints-CCt2MIZg.js";import"./Dot-D2dES3Mc.js";import"./RegisterGraphicalItemId-DuhR9Fep.js";import"./ErrorBarContext-BEPlSBFO.js";import"./GraphicalItemClipPath-BZD6-JFP.js";import"./SetGraphicalItem-BnsQpP5e.js";import"./getRadiusAndStrokeWidthFromDot-RqSgqbxV.js";import"./ActiveShapeUtils-DNb4gSFX.js";import"./useGraphicalItemIdentity-Dy2kZYij.js";import"./CartesianAxis-8Yu2eTD6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CaXitiSD.js";import"./symbol-Dsi6RYMH.js";import"./useElementOffset-Cff6A36e.js";import"./uniqBy-DiNvI5qK.js";import"./iteratee-Bk_n-BJ4.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
