import{R as e}from"./iframe-CZvBVoM1.js";import{R as a}from"./zIndexSlice-BFsaUhqg.js";import{C as p}from"./ComposedChart-CMms7XdW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B5ew0ies.js";import{X as f}from"./XAxis-BwD_71l-.js";import{Y as l}from"./YAxis-Dm6GJj_u.js";import{L as d}from"./Line-DiOtpcO9.js";import{R as h}from"./ReferenceLine-Sw8esr9z.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKdITuKH.js";import"./index--IdmBhgA.js";import"./index-De4B3ZIK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D-jdsqZa.js";import"./isWellBehavedNumber-DwVpyNCs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DpE83LkU.js";import"./axisSelectors-DObFO88m.js";import"./d3-scale-CYHPrWE0.js";import"./index-B6TkzWSy.js";import"./index-B9F-HAZ2.js";import"./renderedTicksSlice-DZCA8OL1.js";import"./index-WmPIOj3u.js";import"./CartesianChart-BODelrhP.js";import"./chartDataContext-DBey5Kyz.js";import"./CategoricalChart-rBPlq3sD.js";import"./CartesianAxis-BSKOevSQ.js";import"./Layer-BOzNA3ZR.js";import"./Text-N_3Dav1R.js";import"./DOMUtils-GcGnpUs3.js";import"./useId-r81p-TMa.js";import"./useBackwardsCompatibleTheme-CTIdE2S0.js";import"./Label-CXH4SBDp.js";import"./ZIndexLayer-D9FERMeL.js";import"./types-SdWXGAN0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CMGEeLJ1.js";import"./step-BaGdmwmz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-a9Nj57gp.js";import"./useAnimationId-CmzTxAaG.js";import"./ActivePoints-BlDBLjzI.js";import"./Dot-WxQzlPyE.js";import"./RegisterGraphicalItemId-B0jJiuk8.js";import"./ErrorBarContext-B64_fw23.js";import"./GraphicalItemClipPath-X4UZrOjX.js";import"./SetGraphicalItem-CjJbMcaD.js";import"./getRadiusAndStrokeWidthFromDot-Cq0DuT0s.js";import"./ActiveShapeUtils-DBOPu4wl.js";import"./useGraphicalItemIdentity-ftydmPqi.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
