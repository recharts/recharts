import{R as e}from"./iframe-CLlZb5WL.js";import{R as p}from"./zIndexSlice-C-cLRtN4.js";import{C as s}from"./ComposedChart-S27VwcuA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BNeijhUJ.js";import{X as d}from"./XAxis-DBuW-REH.js";import{Y as l}from"./YAxis-BLqAl2VU.js";import{R as h}from"./ReferenceArea--2oCDzK1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle--RnCkAem.js";import"./index-BdtMEJny.js";import"./index-DCzwXD2o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CUiHCny8.js";import"./isWellBehavedNumber-BwmlGv0Y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEo8N9ka.js";import"./axisSelectors-CGMVEYME.js";import"./d3-scale-ehl80MUm.js";import"./index-BYYf9lpv.js";import"./index-Do3i96_1.js";import"./renderedTicksSlice-DFlg4CzS.js";import"./index-BIUIHb15.js";import"./CartesianChart-CHomC56b.js";import"./chartDataContext-CuhB7l0S.js";import"./CategoricalChart-v23si-Wq.js";import"./CartesianAxis-CxGxQBTe.js";import"./Layer-BuwGQM2R.js";import"./Text-B9EUqwyc.js";import"./pageBackground-2CAg07jP.js";import"./useId-kcUEvBg4.js";import"./useBackwardsCompatibleTheme-Bfo5Qe72.js";import"./Label-yyQZOpZ1.js";import"./ZIndexLayer-Buoz0PG0.js";import"./types-nJd33CGk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-Coa83haY.js";import"./useAnimationId-DDy-DT0X.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
