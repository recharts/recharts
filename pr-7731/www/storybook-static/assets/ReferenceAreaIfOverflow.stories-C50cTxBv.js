import{R as e}from"./iframe-BxrJSuEo.js";import{R as p}from"./zIndexSlice-BT09z8vD.js";import{C as s}from"./ComposedChart-7h-py7CY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DbFBg48z.js";import{X as d}from"./XAxis-BWu3iNn9.js";import{Y as l}from"./YAxis-CH4Eo4Zq.js";import{R as h}from"./ReferenceArea-CX8DWe1g.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CoaYbzsD.js";import"./index-BhD1rzMR.js";import"./index-DGAZ_OJd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-vU4RggVs.js";import"./isWellBehavedNumber-CpUOh-vc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWFnbdFS.js";import"./axisSelectors-JUmVyq34.js";import"./d3-scale-B5WK_JhK.js";import"./index-BHq5Sa6E.js";import"./index-CLaZmg3F.js";import"./renderedTicksSlice-CAPgIIpT.js";import"./index-Dd2r1808.js";import"./CartesianChart-D1XAoGxw.js";import"./chartDataContext-BsAxXToq.js";import"./CategoricalChart-Clhvfpfg.js";import"./CartesianAxis-rK53amZo.js";import"./Layer-NfsQLk-M.js";import"./Text-ChzbpadS.js";import"./DOMUtils-BV3IXFQQ.js";import"./useId-D7n7M89L.js";import"./useBackwardsCompatibleTheme-BBdb5Xlh.js";import"./Label-DaJavsxU.js";import"./ZIndexLayer-K4qh24Ap.js";import"./types-DWdcB5KA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-f27aWKX5.js";import"./useAnimationId-BTkxH0KN.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
