import{R as e}from"./iframe-B5lEY8zD.js";import{R as s}from"./zIndexSlice-BgROAb6p.js";import{C as p}from"./ComposedChart-Bet3bhVW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DEJZ4SeJ.js";import{X as d}from"./XAxis-DFQPNyZu.js";import{Y as l}from"./YAxis-B84b5tRH.js";import{R as h}from"./ReferenceArea-fjWNL5or.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./throttle-B3jfQssg.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./RechartsWrapper-Dry7ZWQ8.js";import"./axisSelectors-BghrQiEU.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Be2MBhun.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./CartesianAxis-C5RmfnOa.js";import"./Layer-DvqCln2S.js";import"./Text-Bpx0HJU1.js";import"./ZIndexLayer-BKjofHlF.js";import"./Label-BcoGvPAa.js";import"./types-DtlUuq-f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-DrSOMoM_.js";import"./useAnimationId-BR63270P.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
