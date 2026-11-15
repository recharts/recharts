import{R as e}from"./iframe-CuQfx1mh.js";import{R as s}from"./zIndexSlice-DATCiNk-.js";import{C as p}from"./ComposedChart-CT5dqqrP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CQ7ZP3nQ.js";import{X as d}from"./XAxis-DFSmxsEI.js";import{Y as l}from"./YAxis-BKox7kU6.js";import{R as h}from"./ReferenceArea-BqJxiFaM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-xvOlXZtC.js";import"./throttle-SAQUG4vb.js";import"./index-CvvvrEYr.js";import"./index-Bw8PVQ13.js";import"./RechartsWrapper-DE6EtITA.js";import"./axisSelectors-BY0kcEhz.js";import"./polarAxisSelectors-piadlyiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BW1Afi3u.js";import"./index-kT5VmTkQ.js";import"./index-BeCcpORD.js";import"./renderedTicksSlice-Ds69xoXU.js";import"./index-SztJ6oEx.js";import"./fillDefinitions-DUe233lT.js";import"./CartesianChart-BJj5wl32.js";import"./chartDataContext-pjMFjoUW.js";import"./CategoricalChart-DBOXRrXs.js";import"./CartesianAxis-CbXqU-62.js";import"./Layer-YgN4J4tN.js";import"./Text-BgHfu1GZ.js";import"./ZIndexLayer-W76HFIEY.js";import"./Label-GADa0aPm.js";import"./types-D3Hjk8Vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-Dy2GqrdD.js";import"./useAnimationId-tXprvTar.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
