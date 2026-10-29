import{R as e}from"./iframe-B3-vagTW.js";import{R as a}from"./zIndexSlice-ZzyVUAHl.js";import{C as p}from"./ComposedChart-DWsqb0Fg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-WXxHwYMc.js";import{X as f}from"./XAxis-DFfS9226.js";import{Y as l}from"./YAxis-DormNcwM.js";import{L as d}from"./Line-D8DdECJH.js";import{R as h}from"./ReferenceLine-BinHgMEV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-qRvlmwXA.js";import"./throttle-CY8bAEWp.js";import"./index-SDu6d5_I.js";import"./index-DuceAH_t.js";import"./RechartsWrapper-CddNfr5P.js";import"./axisSelectors-HaoK80F7.js";import"./polarAxisSelectors-D6Jg6oqH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4523EFb.js";import"./index-D2TNbHS1.js";import"./index-qrs8hmxN.js";import"./renderedTicksSlice-D2e62elM.js";import"./index-Bf39JYYB.js";import"./CartesianChart-B6mp8hDI.js";import"./ZIndexPortal-C2SecuQr.js";import"./CategoricalChart-xcg0VLQw.js";import"./CartesianAxis-Cwp1aQTy.js";import"./Layer-PmVaLGrp.js";import"./Text-BuzE9c3N.js";import"./DOMUtils-_lgsh9Yh.js";import"./ZIndexLayer-D9XZSYmm.js";import"./Label-vZvIOvi1.js";import"./types-BBjBCtu2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DWZFjGCn.js";import"./step-BN6dVKvX.js";import"./path-DyVhHtw_.js";import"./LabelList-MPu8rBts.js";import"./ActivePoints-DAC4XsL1.js";import"./Dot-D46CiK3O.js";import"./activeStyles-mevkhAS-.js";import"./useAnimationId-mixmWsfB.js";import"./dataEntryStyles-FOCBXEG_.js";import"./Symbols-ETwvKCIL.js";import"./symbol-DMAPBY15.js";import"./ErrorBarContext-B_sCBDRD.js";import"./SetGraphicalItem-CRfd0rzO.js";import"./getRadiusAndStrokeWidthFromDot-DTvCyfLo.js";import"./ActiveShapeUtils-b384wv9G.js";import"./useEffectiveDataKey-pQIYsbLr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
