import{R as t}from"./iframe-Dl6-w9Rh.js";import{u as a}from"./CategoricalChart-Dp8ZNzIB.js";import{R as p}from"./zIndexSlice-BRejfQU1.js";import{C as s}from"./ComposedChart-D3InBwIY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bg3LAjcn.js";import{X as l}from"./XAxis-DZSPPcQS.js";import{Y as h}from"./YAxis-Cc6mYSUk.js";import{L as c}from"./Legend-DCguHXy8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CNKHADrp.js";import"./index-sYG2u-dS.js";import"./index-F3zVu6rR.js";import"./index-LxaBJEYH.js";import"./index-BASt_88m.js";import"./throttle-vxYlNOMT.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BPD60Viv.js";import"./resolveDefaultProps-BxxTDuvn.js";import"./isWellBehavedNumber-65rXtzYC.js";import"./d3-scale-BucTPBl4.js";import"./renderedTicksSlice-UweUcv4l.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFdYz27M.js";import"./chartDataContext-DeefIzKJ.js";import"./Layer-DIMKS5Ou.js";import"./Curve-DhmTjq3U.js";import"./types-Ddok_SrC.js";import"./step-vOQUBbeE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0kip4Wc.js";import"./Label-aNbwXPlv.js";import"./Text-CW2k0BE6.js";import"./DOMUtils-kehL2bh6.js";import"./ZIndexLayer-DkX5oxcl.js";import"./useAnimationId-CYbASTF_.js";import"./ActivePoints-oADU3qVC.js";import"./Dot-uQmPoXZ1.js";import"./RegisterGraphicalItemId-BYzCIqIq.js";import"./ErrorBarContext-BWMuP-dM.js";import"./GraphicalItemClipPath-vJoF-3M2.js";import"./SetGraphicalItem-DMp8jOcz.js";import"./getRadiusAndStrokeWidthFromDot-IVUblMaM.js";import"./ActiveShapeUtils-DNhTZN0e.js";import"./RechartsThemeContext-CVd-MmR3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Dak0cZYo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BXJ_hhZg.js";import"./symbol-D8WWhlr3.js";import"./useElementOffset-Ch2YK_71.js";import"./uniqBy-BEve3nPb.js";import"./iteratee-BGBdQaeY.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
