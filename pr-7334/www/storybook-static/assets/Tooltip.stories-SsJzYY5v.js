import{e as r}from"./iframe-IedaLeal.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-B4vqbkYQ.js";import{T as a}from"./Tooltip-B6TvM8k9.js";import{R as c}from"./arrayEqualityCheck-CDeFCuAt.js";import{L as h}from"./LineChart-BXojSIOU.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-QYm9FiCp.js";import{R as l}from"./RechartsHookInspector-5qOOtg04.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dd6dXjxy.js";import"./clsx-B-dksMZM.js";import"./useAnimationId-D3Yn3hG9.js";import"./resolveDefaultProps-DinctDfH.js";import"./useElementOffset-XMbgmZkO.js";import"./uniqBy-CZ5FVlWP.js";import"./iteratee-DYAmoIVS.js";import"./RechartsWrapper-0o5SV0j_.js";import"./index-YtVhwzFk.js";import"./hooks-C5y3PU4C.js";import"./axisSelectors-Bx341r0C.js";import"./d3-scale-BX13yOxW.js";import"./zIndexSlice-BZ8DgwR3.js";import"./renderedTicksSlice-DOzQfNkA.js";import"./PolarUtils-CTnnDHZv.js";import"./types-Ci9gDE8O.js";import"./Curve-BzqwREyl.js";import"./step-CR-qwJGd.js";import"./Cross-vdltQL2q.js";import"./Rectangle-D0StcwZN.js";import"./Sector-BSwgLZD3.js";import"./ZIndexLayer-JYekqGDv.js";import"./CartesianChart-DtUsH4ee.js";import"./chartDataContext-DqUMO5tY.js";import"./CategoricalChart-DAXIc6R-.js";import"./Layer-COpu_kTm.js";import"./ReactUtils-De7AqaLg.js";import"./Label-NwC3LlsS.js";import"./Text-ko_k4IV7.js";import"./DOMUtils-BYFJFnuE.js";import"./ActivePoints-Dn2oKCMT.js";import"./Dot-CXXTrQ7H.js";import"./RegisterGraphicalItemId-wI9lHTwH.js";import"./ErrorBarContext-C7FVOsru.js";import"./GraphicalItemClipPath-B96rVctv.js";import"./SetGraphicalItem-BzrdUKT-.js";import"./getRadiusAndStrokeWidthFromDot-B2hN5pbW.js";import"./ActiveShapeUtils-cikzdunu.js";import"./isPlainObject-BBCFg2tK.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DD2FtYjE.js";import"./Symbols-ncFIdchy.js";import"./symbol-BiWopP6m.js";import"./index-sBYFadDc.js";import"./ChartSizeDimensions-DwT6nbul.js";import"./OffsetShower-RAcVZiZd.js";import"./PlotAreaShower-DRI9galD.js";const vr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(c,{width:"100%",height:o},r.createElement(h,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s}),r.createElement(l,null)))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Line dataKey="uv" />
          {/* The target component */}
          <Tooltip {...args} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const yr=["API"];export{t as API,yr as __namedExportsOrder,vr as default};
