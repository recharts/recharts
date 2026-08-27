import{R as e}from"./iframe-JTvlYrAE.js";import{R as p}from"./zIndexSlice-D7ZMgfig.js";import{C as s}from"./ComposedChart-dEDwCA-a.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BVS6pee-.js";import{X as d}from"./XAxis-D-RPwoLI.js";import{Y as l}from"./YAxis-CVrRck7n.js";import{R as h}from"./ReferenceArea-4Kts3DBW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CXxUHuO5.js";import"./index-oSnD0z-O.js";import"./index-DIk0NYXt.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BQ8E1HnC.js";import"./isWellBehavedNumber-DZJ-wKuN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxDGjzAu.js";import"./axisSelectors-5nOHG62L.js";import"./d3-scale-CyiZcwJt.js";import"./index-6AYKMmGX.js";import"./index-C7e_DiH0.js";import"./renderedTicksSlice-DqB8pESJ.js";import"./index-C2cjqz89.js";import"./CartesianChart-Car3Atj3.js";import"./chartDataContext-r6ewa5Wc.js";import"./CategoricalChart-Dv8UcXMC.js";import"./CartesianAxis-BCWZ119m.js";import"./Layer-OemeYySJ.js";import"./Text-Dg334Fxc.js";import"./DOMUtils-9u-qTQJC.js";import"./useId-Ddv-MCTo.js";import"./useBackwardsCompatibleTheme-DrI3o7cI.js";import"./Label-DVdjMuKO.js";import"./ZIndexLayer-DRiAaxZ2.js";import"./types-BAT4N-Js.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-C-NwM-8_.js";import"./useAnimationId-B-nvf5O7.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ae=["IfOverflow"];export{t as IfOverflow,ae as __namedExportsOrder,oe as default};
