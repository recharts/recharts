import{R as e}from"./iframe-BZt9gdNh.js";import{R as p}from"./zIndexSlice-XuBBmNUo.js";import{C as s}from"./ComposedChart-j-NLk7cw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CqrZqBfx.js";import{X as d}from"./XAxis-C8XTecZS.js";import{Y as l}from"./YAxis-B6iDX6TN.js";import{R as h}from"./ReferenceArea-CxGxzUly.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B4vKrVKm.js";import"./index-Dp5cLYAc.js";import"./index-CaEFKWj4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D9AqqL0J.js";import"./isWellBehavedNumber-Br3w71g0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cay7o2ht.js";import"./axisSelectors-Cl7dH9vF.js";import"./d3-scale-GcIZdCoT.js";import"./index-B_o6Jv3Z.js";import"./index-B5FMXu9L.js";import"./renderedTicksSlice-CswugCrI.js";import"./index-DjzlGcMj.js";import"./CartesianChart-B0JWnvwa.js";import"./chartDataContext-DfJ9Dq10.js";import"./CategoricalChart-qRJJqTbq.js";import"./CartesianAxis-Cv8lslC5.js";import"./Layer-DrcPzbE2.js";import"./Text-CeEgQkK1.js";import"./DOMUtils-CENtu6Ky.js";import"./useId-BpCkPPis.js";import"./useBackwardsCompatibleTheme-B33DH1wF.js";import"./Label-CgKCxMe1.js";import"./ZIndexLayer-BUepW3qO.js";import"./types-Rk0FsTZp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DP-CYR2k.js";import"./useAnimationId-DFFh1fwK.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
