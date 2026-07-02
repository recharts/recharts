import{R as r}from"./iframe-BNNSts13.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-g5krDHcT.js";import{T as a}from"./Tooltip-DHW7ZYPz.js";import{R as h}from"./zIndexSlice-B_0Vu2Ew.js";import{L as c}from"./LineChart-DM01mPe0.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-DHXYmqa3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./throttle-CBpSFV7b.js";import"./get-C9gxS0ZW.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./useAnimationId-CPqzTwnW.js";import"./useElementOffset-CXz0UZGA.js";import"./uniqBy-BiCSeEHe.js";import"./iteratee-CLp7QRBG.js";import"./RechartsWrapper-CxhgYL0g.js";import"./index-D3L22MUx.js";import"./index-DZAGR4_4.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./isWellBehavedNumber-Cd8BT25E.js";import"./PolarUtils-CTnnDHZv.js";import"./types-CMjaNGyL.js";import"./Curve-ByI9xGCG.js";import"./step-Brv0yDTW.js";import"./path-DyVhHtw_.js";import"./Cross-BHUS_DrE.js";import"./Rectangle-L3OxoeXe.js";import"./util-Dxo8gN5i.js";import"./Sector-DQ8c-GNj.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./Layer-BUN3jU8m.js";import"./AnimatedItems-u006QBg6.js";import"./Label-B9RstaAA.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./ActivePoints-z37_g_gd.js";import"./Dot-GJcUxxVA.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";import"./getRadiusAndStrokeWidthFromDot-WWzyayAr.js";import"./ActiveShapeUtils-CnkeP5Du.js";const cr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(h,{width:"100%",height:o},r.createElement(c,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s})))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const dr=["API"];export{t as API,dr as __namedExportsOrder,cr as default};
