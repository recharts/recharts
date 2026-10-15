import{R as e}from"./iframe-DjRBpX_P.js";import{R as m}from"./zIndexSlice-iVSWW5BV.js";import{C as p}from"./ComposedChart-CsK6iTFT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dfbvt5wl.js";import{X as f}from"./XAxis-Y0oUf3sW.js";import{Y as l}from"./YAxis-B51h7pP8.js";import{R as d}from"./ReferenceDot-CZJWkRnp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DnOef0ju.js";import"./index-DZq52GAk.js";import"./index-CzfBY83M.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjSk0Y1m.js";import"./isWellBehavedNumber-CpHNoBah.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ckb52kl2.js";import"./axisSelectors-D79DWiWx.js";import"./d3-scale-FJpOhRlp.js";import"./index-C-_IQ3AX.js";import"./index-ypDDL202.js";import"./renderedTicksSlice-FU13a2Gq.js";import"./index-CvqQYFRa.js";import"./CartesianChart-DZEnNXBj.js";import"./chartDataContext-BtLlHBCM.js";import"./CategoricalChart-CAmdUyZx.js";import"./CartesianAxis-D3pH7M3P.js";import"./Layer-C9YefTas.js";import"./Text-yVr7Mz0m.js";import"./pageBackground-GeoRz0Dn.js";import"./useId-BfPQ7TvO.js";import"./useBackwardsCompatibleTheme-C4WhBG8E.js";import"./Label-CnRbgzX5.js";import"./ZIndexLayer-Dbtf4y40.js";import"./types-BdVZogP6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-C0cfWCUu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
