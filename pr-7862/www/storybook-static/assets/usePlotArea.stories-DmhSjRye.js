import{R as t}from"./iframe-DaQbgwSM.js";import{j as a}from"./RechartsWrapper-BMsAihAT.js";import{R as p}from"./zIndexSlice-GtlpPVbP.js";import{C as n}from"./ComposedChart-Bbu2Bio2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BQic4Z5R.js";import{X as l}from"./XAxis-Dwi6B5gb.js";import{Y as h}from"./YAxis-DJNfgCPe.js";import{L as c}from"./Legend-DzwOaoA_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C03kBNGe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DiPrK3uM.js";import"./throttle-D86JN7dt.js";import"./index-fR-dYqAy.js";import"./index-pcae8h2v.js";import"./isWellBehavedNumber-CF6bOuRt.js";import"./d3-scale-C28Mr6C_.js";import"./index-B9PrDzsD.js";import"./index-C_QxJfjv.js";import"./renderedTicksSlice-BBiwG0aF.js";import"./index-DVT6pdU4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DWDjryZ8.js";import"./chartDataContext-C5kvJ464.js";import"./CategoricalChart-D9AKOXtI.js";import"./Layer-Dy562RhS.js";import"./Curve-_5Fn1COl.js";import"./types-BrU75Oof.js";import"./step-C8sn29Vk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BlzsOhEO.js";import"./Label-BMF2NwhK.js";import"./Text-6pf8QaaJ.js";import"./DOMUtils-B-aaPPhR.js";import"./useId-C9TE6S2g.js";import"./useBackwardsCompatibleTheme-jIXNHWAs.js";import"./ZIndexLayer-e1DF3LHV.js";import"./useAnimationId-BjF9VJ68.js";import"./ActivePoints-oBCdZOS2.js";import"./Dot-C7TPiZG8.js";import"./RegisterGraphicalItemId-Clsr70g_.js";import"./ErrorBarContext-B2kb74U-.js";import"./GraphicalItemClipPath-D0ATNOOi.js";import"./SetGraphicalItem-HJSDm9m5.js";import"./getRadiusAndStrokeWidthFromDot-3aetdsat.js";import"./ActiveShapeUtils-CrKaudC-.js";import"./useGraphicalItemIdentity-CLitx1ml.js";import"./CartesianAxis-Dd7LPnIK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C4k0V28S.js";import"./symbol-D1P_EmQR.js";import"./useElementOffset-D2-2eyIk.js";import"./uniqBy-Bqm10COm.js";import"./iteratee-CZBTSYNz.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
