import{R as e}from"./iframe-CCZR7NAh.js";import{R as p}from"./zIndexSlice-RhYtObCh.js";import{C as s}from"./ComposedChart-B5KY41wA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-JOf8V8Ln.js";import{X as d}from"./XAxis-BRz9nr_h.js";import{Y as l}from"./YAxis-r76EBGup.js";import{R as h}from"./ReferenceArea-DSjndnhw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ZP6rSZKd.js";import"./index-tWW1_YSW.js";import"./index-B_5iXp8A.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DBU-kSsr.js";import"./isWellBehavedNumber-Csif_Eh7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wkc56maS.js";import"./axisSelectors-BSioHzmv.js";import"./d3-scale-CU88JBPJ.js";import"./index-CQgQjfRf.js";import"./index-Cn7KliQr.js";import"./renderedTicksSlice-D9smLeXW.js";import"./index-1iFFgL5n.js";import"./CartesianChart-BL5MVgQu.js";import"./chartDataContext-DSMzrBHe.js";import"./CategoricalChart-thtv_Ll2.js";import"./CartesianAxis-DqSvII5H.js";import"./Layer-B2yEt3nd.js";import"./Text-BNhIgYfP.js";import"./DOMUtils-BDfLWNCh.js";import"./useId-BL2vel-5.js";import"./useBackwardsCompatibleTheme-DIkjfI7E.js";import"./Label-A6NnUU-m.js";import"./ZIndexLayer-RJSSngl5.js";import"./types-BX41f3Nu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CQGbjjmX.js";import"./useAnimationId-DJLlQPal.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
