import{e as r}from"./iframe-h5CV-Rcn.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-B4vqbkYQ.js";import{T as a}from"./Tooltip-DDCw8cHE.js";import{R as c}from"./arrayEqualityCheck-ANgy1i9u.js";import{L as h}from"./LineChart-CuyK9TIZ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-rAk3lmPT.js";import{R as l}from"./RechartsHookInspector-aIveFv2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CtltHNiU.js";import"./clsx-B-dksMZM.js";import"./useAnimationId-DviPtx6L.js";import"./resolveDefaultProps-B2Z0u3RB.js";import"./useElementOffset-nJlWFN_f.js";import"./uniqBy-BwJC88rW.js";import"./iteratee-KuDzFuBm.js";import"./RechartsWrapper-DDGX7JTv.js";import"./index-DX1weHGw.js";import"./hooks-Cj5zxCap.js";import"./axisSelectors-CS0Gz9QT.js";import"./d3-scale-ezQ-I_PQ.js";import"./zIndexSlice-Ca__6ThW.js";import"./renderedTicksSlice-D6PrsZnk.js";import"./PolarUtils-CTnnDHZv.js";import"./types-BA97OiOO.js";import"./Curve-Br2Il0bq.js";import"./step-oPLXy2cm.js";import"./Cross-tmDNwkFl.js";import"./Rectangle-BxYiR-g6.js";import"./Sector-sEDjKq2Y.js";import"./ZIndexLayer-Ca4oOtQE.js";import"./CartesianChart-D92F_vnb.js";import"./chartDataContext-DblKe8Ss.js";import"./CategoricalChart-CjLLFuSG.js";import"./Layer-wxMTYWnZ.js";import"./ReactUtils-BBFoxYe1.js";import"./Label-CVl-fQEc.js";import"./Text-guYC2Xjr.js";import"./DOMUtils-DWY4ljAG.js";import"./ActivePoints-f1PDkhjz.js";import"./Dot-D_8FhM7J.js";import"./RegisterGraphicalItemId-DtcV1RZB.js";import"./ErrorBarContext-BMIPJTH3.js";import"./GraphicalItemClipPath-cwCUl8BP.js";import"./SetGraphicalItem-CaZ4MYuw.js";import"./getRadiusAndStrokeWidthFromDot-ztMYcDbs.js";import"./ActiveShapeUtils-7Gb1tHPG.js";import"./isPlainObject-ByvTdsK-.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CeuEkWeu.js";import"./Symbols-BjDCCe4r.js";import"./symbol-BfwBQG5X.js";import"./index-D_mIMI9F.js";import"./ChartSizeDimensions-BotkTU91.js";import"./OffsetShower-BoyHPNkq.js";import"./PlotAreaShower-DoB2hHNO.js";const vr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(c,{width:"100%",height:o},r.createElement(h,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s}),r.createElement(l,null)))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
