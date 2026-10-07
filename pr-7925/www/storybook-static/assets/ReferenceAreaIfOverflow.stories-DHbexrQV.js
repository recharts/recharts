import{R as e}from"./iframe-B-iIRDdh.js";import{R as p}from"./zIndexSlice-xTQiy-H7.js";import{C as s}from"./ComposedChart-aKLJJf8H.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DIyhJCQ8.js";import{X as d}from"./XAxis-CndG3lfF.js";import{Y as l}from"./YAxis-D6Burg2S.js";import{R as h}from"./ReferenceArea-De3AMYC4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMKMego8.js";import"./index-o1PLWRMQ.js";import"./index-DFxGa3DU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKBNf2xS.js";import"./isWellBehavedNumber-B6qwBi4A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3KdvU5vS.js";import"./axisSelectors-C60OKlJ4.js";import"./d3-scale-AYUreAhG.js";import"./index-NNc_ZKUS.js";import"./index-D_yufyJF.js";import"./renderedTicksSlice-DkP6y5za.js";import"./index-BazpKZZl.js";import"./CartesianChart-CmApzcJx.js";import"./chartDataContext-CX0jNdXw.js";import"./CategoricalChart-BfBkFmEt.js";import"./CartesianAxis-D-jVFU-k.js";import"./Layer-Dt4jm0MX.js";import"./Text-CBbsNly8.js";import"./DOMUtils-CixgR7ku.js";import"./useId-D2WPaoHG.js";import"./useBackwardsCompatibleTheme-C-V51dQO.js";import"./Label-CwIrwy70.js";import"./ZIndexLayer-CbH1OgN0.js";import"./types-zJ8KfHt8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BOjsrKl9.js";import"./useAnimationId-CcMpnWIs.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
