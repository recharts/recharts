import{R as e}from"./iframe-CqZM7-m_.js";import{R as p}from"./zIndexSlice-C2bhYwAU.js";import{C as s}from"./ComposedChart-bZT0Cb13.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Br8mHJsN.js";import{X as d}from"./XAxis-KlRKQHwy.js";import{Y as l}from"./YAxis-ae7SlnFd.js";import{R as h}from"./ReferenceArea-BH4ahy_F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./throttle-BMiHfZwg.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./RechartsWrapper-C-tKczMb.js";import"./axisSelectors-CU7asiQ5.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaJTA9nk.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-DtqG7I3W.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./CartesianAxis-F_8zYdOn.js";import"./Layer--KWigSyO.js";import"./Text-D-XPvK3p.js";import"./DOMUtils-xk6ID9X9.js";import"./pageBackground-Bhwi_Yxq.js";import"./ZIndexLayer-CcqTqnO7.js";import"./Label-CFulNYa4.js";import"./types-vIB-y3qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-CUygaBJV.js";import"./fillDefinitions-1X04y-fM.js";import"./Rectangle-uSuGTrTU.js";import"./useAnimationId-Bff8cv61.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
