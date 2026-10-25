import{R as e}from"./iframe-BpBItmb8.js";import{R as p}from"./zIndexSlice-Cjb21_4Z.js";import{C as s}from"./ComposedChart-Cz9o1ftP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D3DKDnpA.js";import{X as d}from"./XAxis-tyIX1Ek0.js";import{Y as l}from"./YAxis-ggvkQSih.js";import{R as h}from"./ReferenceArea-BG0I5WhZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cdo2rlHX.js";import"./index-CeEoeaxD.js";import"./index-BHZp9bX2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BIOpi0B9.js";import"./isWellBehavedNumber-Q3FqKNV7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaBorYia.js";import"./axisSelectors-DhTQuZeq.js";import"./d3-scale-B2krDzkw.js";import"./index-B9ogi8SM.js";import"./index-Do7_Vkj1.js";import"./renderedTicksSlice-BqaS8KpG.js";import"./index-C1AeM7Yu.js";import"./CartesianChart-DDWDYlWD.js";import"./chartDataContext-CgZ-KInW.js";import"./CategoricalChart-9xHNb1kz.js";import"./CartesianAxis-BCv_yRQ4.js";import"./Layer-DJh0sOtA.js";import"./Text-BsqzutiJ.js";import"./pageBackground-Dn3J6qJY.js";import"./useId-DaRO87cF.js";import"./useBackwardsCompatibleTheme-CZ-OPOyh.js";import"./Label-D427CKrx.js";import"./ZIndexLayer-8Y_K5uPK.js";import"./dataEntryStyles-CqfS8fAi.js";import"./types-Dpz8_0OY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-Cc2PuLg6.js";import"./useAnimationId-B0lGZ7N8.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ae as __namedExportsOrder,ne as default};
