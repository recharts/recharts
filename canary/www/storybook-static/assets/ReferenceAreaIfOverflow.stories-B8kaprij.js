import{R as e}from"./iframe-aKV-O9MJ.js";import{R as p}from"./zIndexSlice-BKaqyajB.js";import{C as s}from"./ComposedChart-DApYnnbw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BOcFWEp4.js";import{X as d}from"./XAxis-lhBNyzg_.js";import{Y as l}from"./YAxis-Ch3CqHid.js";import{R as h}from"./ReferenceArea-B6z064oX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Be3j2pw2.js";import"./index-CgdfyZHj.js";import"./index-CpNUBple.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-HqSLYtX8.js";import"./isWellBehavedNumber-DhfM3JhV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CMYKJCfZ.js";import"./axisSelectors-MbFPBavU.js";import"./d3-scale-CsyBOG8O.js";import"./index-D1DeZs1S.js";import"./index-HoQ8qajG.js";import"./renderedTicksSlice-WTymoNbk.js";import"./index-C12TwcvC.js";import"./CartesianChart-C2vgDwW7.js";import"./chartDataContext-DB9-FPl4.js";import"./CategoricalChart-CDZMqsPI.js";import"./CartesianAxis-Dm5On8Gk.js";import"./Layer-07gJ6FIr.js";import"./Text-CopK1C24.js";import"./pageBackground-D0AIP4to.js";import"./useId-CnmqgkQl.js";import"./useBackwardsCompatibleTheme-w5mekw_9.js";import"./Label-zwi5-GQg.js";import"./ZIndexLayer-A9-ipKwv.js";import"./dataEntryStyles-BzKYf-di.js";import"./types-DTpzWv6l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-Bpv-EdUE.js";import"./useAnimationId-Cb-3p2b2.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
