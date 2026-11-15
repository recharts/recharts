import{R as r}from"./iframe-r3x3_yf4.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-Df-PoQrY.js";import{T as a}from"./Tooltip-6IxPy6gq.js";import{R as h}from"./zIndexSlice-NMb2vrpT.js";import{L as c}from"./LineChart-Bw5WcD6h.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-DTsRfFau.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DCzxVT24.js";import"./index-BmCC5OWu.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D1EJxC7c.js";import"./ZIndexLayer-U0OKF9Zk.js";import"./throttle-8hacI6eE.js";import"./useAnimationId-EE0FjekO.js";import"./useElementOffset-Bty5qG4M.js";import"./uniqBy-B7Rcd-R6.js";import"./iteratee-Bw3PE4p8.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-_voIQt-f.js";import"./axisSelectors-vmwSvweQ.js";import"./polarAxisSelectors-jpdu1VNr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dyg5lSMz.js";import"./index-CXlPhSWr.js";import"./index-Br7b2-_x.js";import"./renderedTicksSlice-Bwv1Ycq-.js";import"./index-XR02wMNZ.js";import"./fillDefinitions-6lmPyfb7.js";import"./types-C8JZdNIX.js";import"./Curve-D6X3Km74.js";import"./step-iF2C6urg.js";import"./path-DyVhHtw_.js";import"./Cross-D-GxHVeh.js";import"./Rectangle-BHZ7OtoD.js";import"./util-Dxo8gN5i.js";import"./Sector-C2_QhYTT.js";import"./CartesianChart-Cu7l70fA.js";import"./chartDataContext-ZH5Padeo.js";import"./CategoricalChart-B9Dtz71g.js";import"./Layer-Bgw_1AH_.js";import"./dataEntryStyles-CPsjZ3pD.js";import"./Label-C--_kXjw.js";import"./Text-BJw7R8d_.js";import"./ActivePoints-Cjc4G9GK.js";import"./Dot-CLqyjgQR.js";import"./activeStyles-TIYUw2JD.js";import"./Symbols-C3Jeo7wF.js";import"./symbol-BJuLtVcg.js";import"./ErrorBarContext-U5wRur_B.js";import"./SetGraphicalItem-C13buv2r.js";import"./getRadiusAndStrokeWidthFromDot-Bt8N-NmA.js";import"./ActiveShapeUtils-Dpt4d3xT.js";import"./useEffectiveDataKey-CUQD41kZ.js";const Tr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(h,{width:"100%",height:o},r.createElement(c,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s})))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}},Ar=["API"];var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
