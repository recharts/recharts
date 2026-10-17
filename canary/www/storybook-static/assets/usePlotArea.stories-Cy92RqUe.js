import{R as t}from"./iframe-BaK-xze-.js";import{e as a}from"./RechartsWrapper-DZM6L-T3.js";import{R as p}from"./zIndexSlice-DrFw0t7C.js";import{C as n}from"./ComposedChart-DhdbIgqC.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bw8HAxQR.js";import{X as l}from"./XAxis-CTevCFW7.js";import{Y as h}from"./YAxis-CUt8Xelm.js";import{L as c}from"./Legend-B6lWfqzL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cil0S8B-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CnfYSHLW.js";import"./throttle-CYt85Ar6.js";import"./index-CnYYSSY1.js";import"./index-CtznlYAS.js";import"./isWellBehavedNumber-Bo5UiCAJ.js";import"./d3-scale-_8yp9yQE.js";import"./index-Dlm-5Ij4.js";import"./index-Dw-ed78r.js";import"./renderedTicksSlice-CNPiGgUW.js";import"./index-B4hxfgtn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGaTNHvY.js";import"./chartDataContext-DqcmhhuQ.js";import"./CategoricalChart-MBo-iukw.js";import"./Layer-C6rljEkC.js";import"./Curve-sUBaLFrc.js";import"./types-DSy0pRW3.js";import"./step-BZZY1s9U.js";import"./path-DyVhHtw_.js";import"./activeStyles-CZlzjGsD.js";import"./Label-cKDNSGIr.js";import"./Text-CdbyXNxn.js";import"./pageBackground-CV09xolb.js";import"./useId-s-O1vSWD.js";import"./useBackwardsCompatibleTheme-B3pLDlIF.js";import"./ZIndexLayer-Byqn6KnA.js";import"./useAnimationId-B-391LIn.js";import"./dataEntryStyles-IDu762UD.js";import"./ActivePoints-Bf2N-qWJ.js";import"./Dot-DhzFrZOP.js";import"./ErrorBarContext-DndDD6DE.js";import"./GraphicalItemClipPath-BvdkjIlE.js";import"./SetGraphicalItem-BAL-rDyp.js";import"./getRadiusAndStrokeWidthFromDot-SwZ9tKTP.js";import"./ActiveShapeUtils-DuzIRyyx.js";import"./useEffectiveDataKey-lq0ydW3i.js";import"./CartesianAxis-CSk3G5Bd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BqROoHzJ.js";import"./symbol-BXhlSx3K.js";import"./useElementOffset-DuSny-9b.js";import"./uniqBy-FpCdKt82.js";import"./iteratee-COMggJ3D.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
