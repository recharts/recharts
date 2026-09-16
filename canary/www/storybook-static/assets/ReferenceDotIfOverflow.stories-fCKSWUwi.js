import{R as e}from"./iframe-ZXtfb4yD.js";import{R as m}from"./zIndexSlice-BYWdHlTe.js";import{C as p}from"./ComposedChart-C5IMSRfW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C4JgCHFT.js";import{X as f}from"./XAxis-DLWMZedb.js";import{Y as l}from"./YAxis-CpZ4maZ2.js";import{R as d}from"./ReferenceDot-orLEVdXR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-UQol_oMR.js";import"./index-SIPxA2ka.js";import"./index-Bo6RSdvh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-xIIdHmm9.js";import"./isWellBehavedNumber-DxKoG7Ba.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeOd3865.js";import"./axisSelectors-B-7UnAhK.js";import"./d3-scale-CLk4WDw9.js";import"./index-BxR6IAN7.js";import"./index-CZ8YJbDi.js";import"./renderedTicksSlice-D1lcrg0m.js";import"./index-Bj13Gnlq.js";import"./CartesianChart-yzowS7n9.js";import"./chartDataContext-Vgws8ib_.js";import"./CategoricalChart-DidrDbM3.js";import"./CartesianAxis-DsWhwIZU.js";import"./Layer-BNcbfxWn.js";import"./Text-DV_FynOi.js";import"./DOMUtils-C0C9d7iI.js";import"./useId-0Gl7JyMf.js";import"./useBackwardsCompatibleTheme-C4wl67U3.js";import"./Label-C_XzWtLw.js";import"./ZIndexLayer-Ck2jrevN.js";import"./types-D_Nat2yf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DNV1GHEu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
