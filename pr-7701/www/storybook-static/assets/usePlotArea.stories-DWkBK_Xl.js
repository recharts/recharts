import{R as t}from"./iframe-JTvlYrAE.js";import{j as a}from"./RechartsWrapper-DxDGjzAu.js";import{R as p}from"./zIndexSlice-D7ZMgfig.js";import{C as s}from"./ComposedChart-dEDwCA-a.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BHsO2LXO.js";import{X as l}from"./XAxis-D-RPwoLI.js";import{Y as h}from"./YAxis-CVrRck7n.js";import{L as c}from"./Legend-bHHty92c.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BQ8E1HnC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-5nOHG62L.js";import"./throttle-CXxUHuO5.js";import"./index-oSnD0z-O.js";import"./index-DIk0NYXt.js";import"./isWellBehavedNumber-DZJ-wKuN.js";import"./d3-scale-CyiZcwJt.js";import"./index-6AYKMmGX.js";import"./index-C7e_DiH0.js";import"./renderedTicksSlice-DqB8pESJ.js";import"./index-C2cjqz89.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Car3Atj3.js";import"./chartDataContext-r6ewa5Wc.js";import"./CategoricalChart-Dv8UcXMC.js";import"./Layer-OemeYySJ.js";import"./Curve-D4vRDLjT.js";import"./types-BAT4N-Js.js";import"./step-8zevn7on.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtaNoYLp.js";import"./Label-DVdjMuKO.js";import"./Text-Dg334Fxc.js";import"./DOMUtils-9u-qTQJC.js";import"./useId-Ddv-MCTo.js";import"./useBackwardsCompatibleTheme-DrI3o7cI.js";import"./ZIndexLayer-DRiAaxZ2.js";import"./useAnimationId-B-nvf5O7.js";import"./ActivePoints-ox6ksdpi.js";import"./Dot-CrFaSuhf.js";import"./RegisterGraphicalItemId-5DR47K5z.js";import"./ErrorBarContext-C1DfV54u.js";import"./GraphicalItemClipPath-BqO5vOXC.js";import"./SetGraphicalItem-3AS-SEti.js";import"./getRadiusAndStrokeWidthFromDot-BDnKC9y1.js";import"./ActiveShapeUtils-BXOO9Xzj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BCWZ119m.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-tWRjxaQS.js";import"./symbol-BTwm-ytb.js";import"./useElementOffset-DZ6FTXmj.js";import"./uniqBy-CY-58Mlk.js";import"./iteratee-ByQfU6mD.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
