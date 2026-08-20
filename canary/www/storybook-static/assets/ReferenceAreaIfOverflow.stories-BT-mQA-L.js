import{R as e}from"./iframe-BMoFzqLG.js";import{R as p}from"./zIndexSlice-D2eW6ynO.js";import{C as s}from"./ComposedChart--18maMFA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BD5heoZs.js";import{X as d}from"./XAxis-CPrZIqhG.js";import{Y as l}from"./YAxis-DTyCZ8Eb.js";import{R as h}from"./ReferenceArea-Afsv7bUI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMa4JKLf.js";import"./index-DNJh02LB.js";import"./index-CSdHnYZf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-NXPPdTlK.js";import"./isWellBehavedNumber-Cv3QLhUl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMT8ka8g.js";import"./index-DW75A43Y.js";import"./index-CCv9Fz61.js";import"./axisSelectors-DYuvxT8H.js";import"./d3-scale-CdpdmGXg.js";import"./renderedTicksSlice-DvPuc11_.js";import"./CartesianChart-C7RJi03t.js";import"./chartDataContext-CDnovleA.js";import"./CategoricalChart-e4TDW-CP.js";import"./CartesianAxis-DOx4dBf7.js";import"./Layer-BF07rJeJ.js";import"./Text-CWW6I1yN.js";import"./DOMUtils-zP2FF411.js";import"./useId-Cuy8o_CS.js";import"./useBackwardsCompatibleTheme-CT0hL_b9.js";import"./Label-C2sliePj.js";import"./ZIndexLayer-Bb4jsnOQ.js";import"./types-DnNtWK32.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-B-0Efefj.js";import"./useAnimationId-DECqttvr.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
