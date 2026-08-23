import{R as t}from"./iframe-J2FnkNkN.js";import{u as a}from"./CategoricalChart-Dws3VtHh.js";import{R as p}from"./zIndexSlice-CIfx3dbz.js";import{C as s}from"./ComposedChart-jyhVlhQd.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BrRmSeyv.js";import{X as l}from"./XAxis-9YTS4CGv.js";import{Y as h}from"./YAxis-DtzyVJ31.js";import{L as c}from"./Legend-D-Zhozxt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tuonj_dH.js";import"./index-udl5h_c3.js";import"./index-B1zoM-7H.js";import"./index-DOkoL7Wj.js";import"./index-DRH1Q61C.js";import"./throttle-Dd6uK12C.js";import"./get-C2VjdU0L.js";import"./axisSelectors-XOgqlW54.js";import"./resolveDefaultProps-C36Ti6I7.js";import"./isWellBehavedNumber-Bda2kxwI.js";import"./d3-scale-BnVmKfe4.js";import"./renderedTicksSlice-uiaDKKzv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-7orgvIwE.js";import"./chartDataContext-DsIZ8kzc.js";import"./Layer-B9c44e16.js";import"./Curve-CNSL121i.js";import"./types-cmsIqA-S.js";import"./step-B2sXv2yh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DaE3ZoZL.js";import"./Label-Bl3T8NIS.js";import"./Text-DoArQ2iR.js";import"./DOMUtils-DrtZ7889.js";import"./useId-BqCnyWtn.js";import"./useBackwardsCompatibleTheme-iB5pgxqo.js";import"./ZIndexLayer-BcQVAnhI.js";import"./useAnimationId-B8FTTFdD.js";import"./ActivePoints-Cu9CSGsi.js";import"./Dot-BQU71g_n.js";import"./RegisterGraphicalItemId-4W54GOXR.js";import"./ErrorBarContext-nAJ3rKAi.js";import"./GraphicalItemClipPath-BR02B87f.js";import"./SetGraphicalItem-B2-Omghc.js";import"./getRadiusAndStrokeWidthFromDot-DwBzFWb4.js";import"./ActiveShapeUtils-DbeW4ISg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-yBNynPDV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D6nbCmzg.js";import"./symbol-Cnvzar8t.js";import"./useElementOffset-CcIe0GmH.js";import"./uniqBy-HD7GgsnH.js";import"./iteratee-Bg0tlSUT.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
