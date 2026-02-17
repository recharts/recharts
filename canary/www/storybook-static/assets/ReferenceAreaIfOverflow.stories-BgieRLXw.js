import{e}from"./iframe-DCHwmqK8.js";import{R as s}from"./arrayEqualityCheck-PCrDa-mZ.js";import{C as p}from"./ComposedChart-cpUGiPkE.js";import{C as c}from"./CartesianGrid-X_8lntYf.js";import{X as f}from"./XAxis-Dy9Xo9z7.js";import{Y as l}from"./YAxis-CKNZXN9_.js";import{R as h}from"./ReferenceArea-C0HZcG-6.js";import{R as d}from"./RechartsHookInspector-DqPpRwC6.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-9mPboPW3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dam48Pnw.js";import"./hooks-C5KjLV4a.js";import"./axisSelectors-tq781mpa.js";import"./zIndexSlice-xa-TURHG.js";import"./renderedTicksSlice-DwhsECxN.js";import"./CartesianChart-BDUX0Tg9.js";import"./chartDataContext-F7_MHoey.js";import"./CategoricalChart-CR27zK7v.js";import"./CartesianAxis-BkIGBz3a.js";import"./Layer-7f0xQXhX.js";import"./Text-riFZx0Ep.js";import"./DOMUtils-BGimDYvY.js";import"./Label-BPyHNFQk.js";import"./ZIndexLayer-B-u8VTE_.js";import"./types-B1B-Xneg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CB4U0IVW.js";import"./useAnimationId-C8JLALld.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DsiXN0IX.js";import"./ChartSizeDimensions-GkZwO762.js";import"./OffsetShower-C96P7rJy.js";import"./PlotAreaShower-9zl_p26K.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
          <RechartsHookInspector />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
