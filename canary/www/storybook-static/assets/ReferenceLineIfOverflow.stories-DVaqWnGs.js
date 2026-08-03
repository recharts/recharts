import{R as e}from"./iframe-ge4_mRTY.js";import{R as n}from"./zIndexSlice-uDWjDJHd.js";import{C as p}from"./ComposedChart-BCRhkK5V.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DC5uGhFE.js";import{X as f}from"./XAxis-DVigS2Vl.js";import{Y as l}from"./YAxis-6Axf8DBL.js";import{L as d}from"./Line-CVLhEgT6.js";import{R as h}from"./ReferenceLine-C4-9A2EW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-5caQeXVN.js";import"./index-DZPpWsc8.js";import"./index-BWkGghDn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-zgTsAR7U.js";import"./isWellBehavedNumber-D2jfZHGG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DrRaVIDn.js";import"./index-DroDtVMI.js";import"./index-C2Y_Hicx.js";import"./renderedTicksSlice-BAzheGmb.js";import"./axisSelectors-Cxx4umpa.js";import"./d3-scale-DAQlT4KL.js";import"./CartesianChart-BuotdUK2.js";import"./chartDataContext-pSMyX_Ym.js";import"./CategoricalChart-Brm-3Wpy.js";import"./CartesianAxis-DfPCf8Ah.js";import"./Layer-CMf1Vf_h.js";import"./Text-D0QrHV93.js";import"./DOMUtils-B5z_Rz2Y.js";import"./Label-DHHP6jol.js";import"./ZIndexLayer-nB6oQ6-0.js";import"./types-BGJIvFfK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Z1jjPkTn.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DgHNdRhX.js";import"./step-DgphAjx2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DTVko9-M.js";import"./useAnimationId-BwVBlHti.js";import"./ActivePoints-D4PeEGz4.js";import"./Dot-CSi-hwhf.js";import"./RegisterGraphicalItemId-uw1PY0zP.js";import"./ErrorBarContext-CqyguIOl.js";import"./GraphicalItemClipPath-B2dCpKux.js";import"./SetGraphicalItem-CNlJ3f0Q.js";import"./graphicalItemIdentity-UY1iR6Cu.js";import"./ActiveShapeUtils-SugLVfR8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
