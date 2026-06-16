import{R as r}from"./iframe-Bd_RatVP.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-g5krDHcT.js";import{T as a}from"./Tooltip-DhtMBVBn.js";import{R as h}from"./zIndexSlice-Bs3cmT56.js";import{L as c}from"./LineChart-C92s6fH5.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-ChcwwI6C.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuMhoHLg.js";import"./index-AIDQn2zy.js";import"./immer-K2Jr_glw.js";import"./get-D2eywazJ.js";import"./resolveDefaultProps-CDT2X36A.js";import"./useAnimationId-WD2dkHdB.js";import"./string-B6fdYHAA.js";import"./useElementOffset-BeZVN4uM.js";import"./uniqBy-ROVpOYmf.js";import"./iteratee-CZJ3xSSv.js";import"./RechartsWrapper-DoiYSoxN.js";import"./index-CtCj_c9U.js";import"./index-KgYFzznq.js";import"./renderedTicksSlice-BaNjR9ZK.js";import"./axisSelectors-iePK0TpX.js";import"./d3-scale-8NOk75ft.js";import"./isWellBehavedNumber-vEzZ_uBL.js";import"./PolarUtils-CTnnDHZv.js";import"./types-B_YM2FYy.js";import"./Curve-BKajUmGn.js";import"./step-D0gWFOvv.js";import"./path-DyVhHtw_.js";import"./Cross-BDN9EJ3q.js";import"./Rectangle-BiRALYrC.js";import"./Sector-DcsfkYNL.js";import"./ZIndexLayer-CW5Q6iO0.js";import"./CartesianChart-BgWder66.js";import"./chartDataContext-2ZBdxPuo.js";import"./CategoricalChart-B7ZdZ9dp.js";import"./Layer-CSKVUvgL.js";import"./AnimatedItems-CTN3MMrY.js";import"./Label-_LaAHgCb.js";import"./Text-CID6qmBG.js";import"./DOMUtils-BvIcVirU.js";import"./ActivePoints-BJ3mN3TL.js";import"./Dot-BDk1ts5p.js";import"./RegisterGraphicalItemId-CSpPBahn.js";import"./ErrorBarContext-CXGw6SKK.js";import"./GraphicalItemClipPath-CqhiUh0n.js";import"./SetGraphicalItem-CCPPdaQB.js";import"./getRadiusAndStrokeWidthFromDot-CrS1vnPP.js";import"./ActiveShapeUtils-CKHNZG0U.js";const cr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(h,{width:"100%",height:o},r.createElement(c,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s})))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
