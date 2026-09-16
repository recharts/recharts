import{R as t}from"./iframe-DlBA_NHD.js";import{j as a}from"./RechartsWrapper-hVJCe5PM.js";import{R as p}from"./zIndexSlice-BOYVZGeR.js";import{C as n}from"./ComposedChart-C_8xlH-x.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-apD60rO_.js";import{X as l}from"./XAxis-CN5TgDqJ.js";import{Y as h}from"./YAxis-B5aZasbZ.js";import{L as c}from"./Legend-CLPSwn_J.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C8Ozokz2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CON7ryxt.js";import"./throttle-EeT9c_n_.js";import"./index-2M50Q2uq.js";import"./index-CsNZB3UM.js";import"./isWellBehavedNumber-BHQR8F7C.js";import"./d3-scale-nBoiSLy0.js";import"./index-Bc4bnspn.js";import"./index-BgT2sRhI.js";import"./renderedTicksSlice-BAGWAjRI.js";import"./index-B9Sew5zo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DNfpc-WW.js";import"./chartDataContext-Dz5AUJl-.js";import"./CategoricalChart-YMws6pgL.js";import"./Layer-DLKMiHzQ.js";import"./Curve-DRH1VSH_.js";import"./types-CqsOLULy.js";import"./step-BzPuQicN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-KG4Q9B6N.js";import"./Label-Bdz7xSee.js";import"./Text-CICH4fLL.js";import"./DOMUtils-B-Y8jIku.js";import"./useId-DfZYzD58.js";import"./useBackwardsCompatibleTheme-DZYIoyAk.js";import"./ZIndexLayer-R1mFVhfI.js";import"./useAnimationId-ZOIa2F-P.js";import"./ActivePoints-B_ryvrm8.js";import"./Dot-coVzMkTm.js";import"./RegisterGraphicalItemId-DYXz-Xt3.js";import"./ErrorBarContext-ZM-eyTPM.js";import"./GraphicalItemClipPath-CLhUFps9.js";import"./SetGraphicalItem-0kKuUivG.js";import"./getRadiusAndStrokeWidthFromDot-CuoUyQpF.js";import"./ActiveShapeUtils-BF0jq83h.js";import"./useGraphicalItemIdentity-DwrMS_39.js";import"./CartesianAxis-C833i1Hp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BgaBOx_k.js";import"./symbol-CzVP89M7.js";import"./useElementOffset-CqxEVlyX.js";import"./uniqBy-1Xh4LtIK.js";import"./iteratee-D-EbqcpX.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
