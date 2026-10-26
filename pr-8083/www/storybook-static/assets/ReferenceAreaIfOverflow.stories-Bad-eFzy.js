import{R as e}from"./iframe-xm0njxpX.js";import{R as p}from"./zIndexSlice-BXJXmFQu.js";import{C as s}from"./ComposedChart-CTFFybCq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-95dpm8eo.js";import{X as d}from"./XAxis-BO1QGjPl.js";import{Y as l}from"./YAxis-NECyBpPr.js";import{R as h}from"./ReferenceArea-ywJt6R3m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B61AogRi.js";import"./throttle-CQYnjh9B.js";import"./index-sPTpvkxI.js";import"./index-BJuRFged.js";import"./RechartsWrapper-B8IVe3Ss.js";import"./axisSelectors-CvRpVDMX.js";import"./polarAxisSelectors-DQe6GYeu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DRKVpWRJ.js";import"./index--0VHY1xY.js";import"./index-A2yfNmgu.js";import"./renderedTicksSlice-BXAMy43b.js";import"./index-BwWTg3c5.js";import"./CartesianChart-BJCMshR7.js";import"./chartDataContext-Dzgvzmie.js";import"./CategoricalChart-CF01fl7y.js";import"./CartesianAxis-C-JfYURt.js";import"./Layer-BK3cybNP.js";import"./Text-B0-TExiI.js";import"./pageBackground-DWSrNR00.js";import"./useId-BgEUuOn0.js";import"./ZIndexLayer-DyZHr2FP.js";import"./Label-S9WiqPCG.js";import"./dataEntryStyles-6HljWj9B.js";import"./types-dJ8tHIrH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-y41hMVV_.js";import"./useAnimationId-CEkjnsp2.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
