import{R as e}from"./iframe-Dl6-w9Rh.js";import{R as n}from"./zIndexSlice-BRejfQU1.js";import{C as p}from"./ComposedChart-D3InBwIY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-inIx_fGG.js";import{X as f}from"./XAxis-DZSPPcQS.js";import{Y as l}from"./YAxis-Cc6mYSUk.js";import{L as d}from"./Line-Bg3LAjcn.js";import{R as h}from"./ReferenceLine-Cgu85B_K.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-vxYlNOMT.js";import"./index-LxaBJEYH.js";import"./index-BASt_88m.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BxxTDuvn.js";import"./isWellBehavedNumber-65rXtzYC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CNKHADrp.js";import"./index-sYG2u-dS.js";import"./index-F3zVu6rR.js";import"./axisSelectors-BPD60Viv.js";import"./d3-scale-BucTPBl4.js";import"./renderedTicksSlice-UweUcv4l.js";import"./CartesianChart-BFdYz27M.js";import"./chartDataContext-DeefIzKJ.js";import"./CategoricalChart-Dp8ZNzIB.js";import"./CartesianAxis-Dak0cZYo.js";import"./Layer-DIMKS5Ou.js";import"./Text-CW2k0BE6.js";import"./DOMUtils-kehL2bh6.js";import"./Label-aNbwXPlv.js";import"./ZIndexLayer-DkX5oxcl.js";import"./types-Ddok_SrC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CVd-MmR3.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DhmTjq3U.js";import"./step-vOQUBbeE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0kip4Wc.js";import"./useAnimationId-CYbASTF_.js";import"./ActivePoints-oADU3qVC.js";import"./Dot-uQmPoXZ1.js";import"./RegisterGraphicalItemId-BYzCIqIq.js";import"./ErrorBarContext-BWMuP-dM.js";import"./GraphicalItemClipPath-vJoF-3M2.js";import"./SetGraphicalItem-DMp8jOcz.js";import"./getRadiusAndStrokeWidthFromDot-IVUblMaM.js";import"./ActiveShapeUtils-DNhTZN0e.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
