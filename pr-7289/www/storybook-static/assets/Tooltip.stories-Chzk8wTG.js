import{e as r}from"./iframe-BLDR2_i0.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-B4vqbkYQ.js";import{T as a}from"./Tooltip-C2VwN8xA.js";import{R as c}from"./arrayEqualityCheck-CvNQEz9w.js";import{L as h}from"./LineChart-CoUxRJbJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-D-dTaVGT.js";import{R as l}from"./RechartsHookInspector-B1GuqCEe.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BKFNBdyg.js";import"./clsx-B-dksMZM.js";import"./useAnimationId-CuonZP-E.js";import"./resolveDefaultProps-BRIlCLrP.js";import"./useElementOffset-BZPwPb6Z.js";import"./uniqBy-B3VFxQDg.js";import"./iteratee-BJQ0nu2N.js";import"./RechartsWrapper-Ct1BBYFn.js";import"./index-CFbRxLRx.js";import"./hooks-CtJRBtxo.js";import"./axisSelectors-BB17965m.js";import"./d3-scale-BhFvmkin.js";import"./zIndexSlice-yBBB4uSb.js";import"./renderedTicksSlice-BSzl6y0x.js";import"./PolarUtils-CTnnDHZv.js";import"./types-DW7k3YBY.js";import"./Curve-Dso7sD8l.js";import"./step-CJMvDBr8.js";import"./Cross-D3Vs3zNI.js";import"./Rectangle-CFLqOtC4.js";import"./Sector-DJtO2zeV.js";import"./ZIndexLayer-7ToExptV.js";import"./CartesianChart-LlNtHt9D.js";import"./chartDataContext-Bphfe7Jq.js";import"./CategoricalChart-DdO_PfYZ.js";import"./Layer-Bg4znOhy.js";import"./ReactUtils-BZwBYxFJ.js";import"./Label-BeUhNh6s.js";import"./Text-Z-_UHMZw.js";import"./DOMUtils-CzTi80AG.js";import"./ActivePoints-rdhL3F9r.js";import"./Dot-DzHpuORN.js";import"./RegisterGraphicalItemId-BAO_-1Fe.js";import"./ErrorBarContext-DJptcZIz.js";import"./GraphicalItemClipPath-iX6Zf2o8.js";import"./SetGraphicalItem-DTwOd3dX.js";import"./getRadiusAndStrokeWidthFromDot-BdzGGcnE.js";import"./ActiveShapeUtils-Bx3IdaBV.js";import"./isPlainObject-Bgs7IkK4.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DytqB0t5.js";import"./Symbols-BPbqFGSD.js";import"./symbol-BlMgqIva.js";import"./index-CTEoDz69.js";import"./ChartSizeDimensions-CoOcLq9u.js";import"./OffsetShower-C2FYUo8c.js";import"./PlotAreaShower-toIN3X0K.js";const vr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(c,{width:"100%",height:o},r.createElement(h,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s}),r.createElement(l,null)))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
