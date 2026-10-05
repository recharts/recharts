import{R as t}from"./iframe-DzEunvJg.js";import{j as a}from"./RechartsWrapper-DKQAPH3P.js";import{R as p}from"./zIndexSlice-CJoRXBvc.js";import{C as n}from"./ComposedChart-B9Ez2Onq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DMXo8AlH.js";import{X as l}from"./XAxis-C3LhqR3k.js";import{Y as h}from"./YAxis-V-QVlkzt.js";import{L as c}from"./Legend-CMUI5vkx.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D1VbkECB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BmcAHay7.js";import"./throttle-vVnHJdwk.js";import"./index-CVYp0833.js";import"./index-C0Oun7dU.js";import"./isWellBehavedNumber-CrPdUCJx.js";import"./d3-scale-DAMVQCbA.js";import"./index-9AaHNtLQ.js";import"./index-T5bTpYjM.js";import"./renderedTicksSlice-CwBlu1JG.js";import"./index-XWQatYSr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xll3miOv.js";import"./chartDataContext-DrYFcmx6.js";import"./CategoricalChart-Dkc-ZZ1N.js";import"./Layer-Cm7XhTpW.js";import"./Curve-DBPbpDEM.js";import"./types-BCX_XL2l.js";import"./step-BomzFh0-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-yUKoBMYs.js";import"./Label-CI5iW8Hf.js";import"./Text-BLWA_Ab4.js";import"./DOMUtils-BmAhd2hZ.js";import"./useId-BuMWUv2m.js";import"./useBackwardsCompatibleTheme-RcberNo1.js";import"./ZIndexLayer-C6u4DcMx.js";import"./useAnimationId-CM641vkV.js";import"./ActivePoints-c4_lMKBx.js";import"./Dot-Dusyebbr.js";import"./RegisterGraphicalItemId-Yhhjp8dw.js";import"./ErrorBarContext-8mGbl9GN.js";import"./GraphicalItemClipPath-D_Kf5-kj.js";import"./SetGraphicalItem-XUxLk492.js";import"./getRadiusAndStrokeWidthFromDot-dltGhGap.js";import"./ActiveShapeUtils-1PCMWfFs.js";import"./useGraphicalItemIdentity-CP3wmpOS.js";import"./CartesianAxis-9IOHN060.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C_2PPLeo.js";import"./symbol-BAde79R5.js";import"./useElementOffset-BZZg8P8y.js";import"./uniqBy-U5OVK8cg.js";import"./iteratee-2YRKRIXZ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
