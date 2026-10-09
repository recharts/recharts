import{R as e}from"./iframe-BPYH2WpS.js";import{R as m}from"./zIndexSlice-CRIY2DI-.js";import{C as p}from"./ComposedChart-DPayCZiQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CzabeShO.js";import{X as f}from"./XAxis-Cp4YLkQ5.js";import{Y as l}from"./YAxis-CEufsP3h.js";import{R as d}from"./ReferenceDot-cpHZuplO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-xyVQD3_H.js";import"./index-BlMmEtsK.js";import"./index-DJpd9u5l.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGvNj-Ia.js";import"./isWellBehavedNumber-CF5FkEe7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CeSqC8qM.js";import"./axisSelectors-BixSNhmq.js";import"./d3-scale-C1nlw5KN.js";import"./index-CWtZ8b1U.js";import"./index-B4bTdLCM.js";import"./renderedTicksSlice-6vdJGY0j.js";import"./index-BPYK78er.js";import"./CartesianChart-CvYs98y7.js";import"./chartDataContext-kSMgmHGF.js";import"./CategoricalChart-Biw_xsj3.js";import"./CartesianAxis-CGCKig2C.js";import"./Layer-C2LXKbkN.js";import"./Text-zynwh62u.js";import"./DOMUtils-BPeWtLKN.js";import"./useId-BE8oxSSZ.js";import"./useBackwardsCompatibleTheme-D75GrB32.js";import"./Label-DVwS1qXs.js";import"./ZIndexLayer-BSe5AwCg.js";import"./types-CqopvqdC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-b-Hlrxis.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
