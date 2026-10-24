import{R as e}from"./iframe-CQih25KR.js";import{R as p}from"./zIndexSlice-BBwd9R4A.js";import{C as s}from"./ComposedChart-D2Az0r5B.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BFGaGNCw.js";import{X as d}from"./XAxis-DatML6Vr.js";import{Y as l}from"./YAxis-D92DpTLx.js";import{R as h}from"./ReferenceArea-CHyk5W42.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CYod_o09.js";import"./index-lk52KXx5.js";import"./index-DdtFl0i3.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DZXiBHxq.js";import"./isWellBehavedNumber-BZsUlmxg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCMHJsHG.js";import"./axisSelectors-gqm50JPH.js";import"./d3-scale-C8349dF6.js";import"./index-83zVEPqI.js";import"./index-BX29BXND.js";import"./renderedTicksSlice-TriIcOtn.js";import"./index-DY8NIj0D.js";import"./CartesianChart-D5IyTQPM.js";import"./chartDataContext-SrRPyl9F.js";import"./CategoricalChart-dLpz1ZCk.js";import"./CartesianAxis-B8Q7lXls.js";import"./Layer-BzMCwaud.js";import"./Text-ByeKnFJN.js";import"./pageBackground-B-dTuZL1.js";import"./useId-BUhtjdKT.js";import"./useBackwardsCompatibleTheme-Cv0bY4c1.js";import"./Label-DtKjJWj0.js";import"./ZIndexLayer-C0V9Q93e.js";import"./dataEntryStyles-BMnqm0mo.js";import"./types-NMZqXy0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-DwxPMwLi.js";import"./useAnimationId-BuSk-bLT.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
