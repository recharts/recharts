import{R as e}from"./iframe-DzEunvJg.js";import{R as p}from"./zIndexSlice-CJoRXBvc.js";import{C as s}from"./ComposedChart-B9Ez2Onq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-1Yhvvtnk.js";import{X as d}from"./XAxis-C3LhqR3k.js";import{Y as l}from"./YAxis-V-QVlkzt.js";import{R as h}from"./ReferenceArea-CqI6sc8S.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-vVnHJdwk.js";import"./index-CVYp0833.js";import"./index-C0Oun7dU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D1VbkECB.js";import"./isWellBehavedNumber-CrPdUCJx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKQAPH3P.js";import"./axisSelectors-BmcAHay7.js";import"./d3-scale-DAMVQCbA.js";import"./index-9AaHNtLQ.js";import"./index-T5bTpYjM.js";import"./renderedTicksSlice-CwBlu1JG.js";import"./index-XWQatYSr.js";import"./CartesianChart-xll3miOv.js";import"./chartDataContext-DrYFcmx6.js";import"./CategoricalChart-Dkc-ZZ1N.js";import"./CartesianAxis-9IOHN060.js";import"./Layer-Cm7XhTpW.js";import"./Text-BLWA_Ab4.js";import"./DOMUtils-BmAhd2hZ.js";import"./useId-BuMWUv2m.js";import"./useBackwardsCompatibleTheme-RcberNo1.js";import"./Label-CI5iW8Hf.js";import"./ZIndexLayer-C6u4DcMx.js";import"./types-BCX_XL2l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-B9EvpGaA.js";import"./useAnimationId-CM641vkV.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
