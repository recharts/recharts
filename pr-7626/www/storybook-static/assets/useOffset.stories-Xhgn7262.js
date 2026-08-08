import{R as t}from"./iframe-Dl6-w9Rh.js";import{e as p}from"./CategoricalChart-Dp8ZNzIB.js";import{R as a}from"./zIndexSlice-BRejfQU1.js";import{C as s}from"./ComposedChart-D3InBwIY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-Bg3LAjcn.js";import{X as d}from"./XAxis-DZSPPcQS.js";import{Y as h}from"./YAxis-Cc6mYSUk.js";import{L as g}from"./Legend-DCguHXy8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CNKHADrp.js";import"./index-sYG2u-dS.js";import"./index-F3zVu6rR.js";import"./index-LxaBJEYH.js";import"./index-BASt_88m.js";import"./throttle-vxYlNOMT.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BPD60Viv.js";import"./resolveDefaultProps-BxxTDuvn.js";import"./isWellBehavedNumber-65rXtzYC.js";import"./d3-scale-BucTPBl4.js";import"./renderedTicksSlice-UweUcv4l.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFdYz27M.js";import"./chartDataContext-DeefIzKJ.js";import"./Layer-DIMKS5Ou.js";import"./Curve-DhmTjq3U.js";import"./types-Ddok_SrC.js";import"./step-vOQUBbeE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0kip4Wc.js";import"./Label-aNbwXPlv.js";import"./Text-CW2k0BE6.js";import"./DOMUtils-kehL2bh6.js";import"./ZIndexLayer-DkX5oxcl.js";import"./useAnimationId-CYbASTF_.js";import"./ActivePoints-oADU3qVC.js";import"./Dot-uQmPoXZ1.js";import"./RegisterGraphicalItemId-BYzCIqIq.js";import"./ErrorBarContext-BWMuP-dM.js";import"./GraphicalItemClipPath-vJoF-3M2.js";import"./SetGraphicalItem-DMp8jOcz.js";import"./getRadiusAndStrokeWidthFromDot-IVUblMaM.js";import"./ActiveShapeUtils-DNhTZN0e.js";import"./RechartsThemeContext-CVd-MmR3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Dak0cZYo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BXJ_hhZg.js";import"./symbol-D8WWhlr3.js";import"./useElementOffset-Ch2YK_71.js";import"./uniqBy-BEve3nPb.js";import"./iteratee-BGBdQaeY.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const lt=["UseOffset"];export{r as UseOffset,lt as __namedExportsOrder,ct as default};
