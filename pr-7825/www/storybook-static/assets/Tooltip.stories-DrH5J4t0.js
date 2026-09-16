import{R as r}from"./iframe-DlBA_NHD.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-TAq2cD4k.js";import{T as a}from"./Tooltip--Y-ls0Bw.js";import{R as h}from"./zIndexSlice-BOYVZGeR.js";import{L as c}from"./LineChart-Dc89kjfO.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-apD60rO_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2M50Q2uq.js";import"./index-CsNZB3UM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8Ozokz2.js";import"./useBackwardsCompatibleTheme-DZYIoyAk.js";import"./throttle-EeT9c_n_.js";import"./useAnimationId-ZOIa2F-P.js";import"./useElementOffset-CqxEVlyX.js";import"./uniqBy-1Xh4LtIK.js";import"./iteratee-D-EbqcpX.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-hVJCe5PM.js";import"./axisSelectors-CON7ryxt.js";import"./isWellBehavedNumber-BHQR8F7C.js";import"./d3-scale-nBoiSLy0.js";import"./index-Bc4bnspn.js";import"./index-BgT2sRhI.js";import"./renderedTicksSlice-BAGWAjRI.js";import"./index-B9Sew5zo.js";import"./PolarUtils-CTnnDHZv.js";import"./types-CqsOLULy.js";import"./Curve-DRH1VSH_.js";import"./step-BzPuQicN.js";import"./path-DyVhHtw_.js";import"./Cross-7WT4Tp6d.js";import"./Rectangle-oI5YaF0F.js";import"./util-Dxo8gN5i.js";import"./Sector-JXpynQLH.js";import"./ZIndexLayer-R1mFVhfI.js";import"./CartesianChart-DNfpc-WW.js";import"./chartDataContext-Dz5AUJl-.js";import"./CategoricalChart-YMws6pgL.js";import"./Layer-DLKMiHzQ.js";import"./AnimatedItems-KG4Q9B6N.js";import"./Label-Bdz7xSee.js";import"./Text-CICH4fLL.js";import"./DOMUtils-B-Y8jIku.js";import"./useId-DfZYzD58.js";import"./ActivePoints-B_ryvrm8.js";import"./Dot-coVzMkTm.js";import"./RegisterGraphicalItemId-DYXz-Xt3.js";import"./ErrorBarContext-ZM-eyTPM.js";import"./GraphicalItemClipPath-CLhUFps9.js";import"./SetGraphicalItem-0kKuUivG.js";import"./getRadiusAndStrokeWidthFromDot-CuoUyQpF.js";import"./ActiveShapeUtils-BF0jq83h.js";import"./useGraphicalItemIdentity-DwrMS_39.js";const Tr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(h,{width:"100%",height:o},r.createElement(c,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s})))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}},Ar=["API"];var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{t as API,Ar as __namedExportsOrder,Tr as default};
