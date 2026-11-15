import{R as e}from"./iframe-CVlx7bU_.js";import{R as a}from"./zIndexSlice-CQ18OEDz.js";import{C as p}from"./ComposedChart-Dp5ziSq3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DZVsdsEg.js";import{X as f}from"./XAxis-DMF0oTJ1.js";import{Y as l}from"./YAxis-Bw2rcCFX.js";import{L as d}from"./Line-coLulIXR.js";import{R as h}from"./ReferenceLine-BDcR3tpE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7sOSs16A.js";import"./throttle-CmXgXLjc.js";import"./index-ERWqFFX0.js";import"./index-CfNfKDTi.js";import"./RechartsWrapper-CV-Y7KZ3.js";import"./axisSelectors-BJrugk6A.js";import"./polarAxisSelectors-DTyI3qGf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkwZs2c8.js";import"./index-2xma1Lio.js";import"./index-Ddvmj82W.js";import"./renderedTicksSlice-AgOWQ12r.js";import"./index-DJ4zrN92.js";import"./fillDefinitions-DW8KGRte.js";import"./CartesianChart-BAhcz4nC.js";import"./chartDataContext-Uf3cfJiw.js";import"./CategoricalChart-DFdLumMg.js";import"./CartesianAxis-BdpTb-nX.js";import"./Layer-CTBEbigF.js";import"./Text-GjS4GngU.js";import"./ZIndexLayer-DRYYNy0H.js";import"./Label-DOtvRCj8.js";import"./types-BMFpEHKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-ByMphQa4.js";import"./step-B-eN0hXo.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CMoIO_lw.js";import"./ActivePoints-DO2U3Unb.js";import"./Dot-CLTLLAqo.js";import"./activeStyles-5RuXhDxF.js";import"./useAnimationId-JkE7TXZo.js";import"./Symbols-Gcx9n-lU.js";import"./symbol-D4b_9FWO.js";import"./ErrorBarContext-DzVhOjsh.js";import"./SetGraphicalItem-voaRHEeZ.js";import"./getRadiusAndStrokeWidthFromDot-BIjWGvqa.js";import"./ActiveShapeUtils-B7UTpWmH.js";import"./useEffectiveDataKey-B4CdAFdU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
