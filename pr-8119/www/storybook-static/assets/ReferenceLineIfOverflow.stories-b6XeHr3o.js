import{R as e}from"./iframe-FiuXs261.js";import{R as a}from"./zIndexSlice-D8yz0c_i.js";import{C as p}from"./ComposedChart-SOQGKxcc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-dHl__5UF.js";import{X as f}from"./XAxis-Bb3iEGS4.js";import{Y as l}from"./YAxis-CQrrt2_W.js";import{L as d}from"./Line-M2EO-pwK.js";import{R as h}from"./ReferenceLine-CQvKfqEH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BihUq3X9.js";import"./throttle-CYeAiCIk.js";import"./index-LYf9fdMT.js";import"./index-CrJ_p8tR.js";import"./RechartsWrapper-PYqIov25.js";import"./axisSelectors-C9DIlOnm.js";import"./polarAxisSelectors-C8b7BSTM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CtDFr3v-.js";import"./index-I95GPJkK.js";import"./index-CGxDoIWw.js";import"./renderedTicksSlice-B2WUnf26.js";import"./index-C5CBIWPP.js";import"./CartesianChart-BGhHw0Sw.js";import"./ZIndexPortal-a8T82K_T.js";import"./CategoricalChart-C7XeD-rb.js";import"./CartesianAxis-pVZ2WZ4j.js";import"./Layer-BMNQgcyM.js";import"./Text-CNbe1Pgb.js";import"./DOMUtils-DMtknFU5.js";import"./ZIndexLayer-BuK4cbp4.js";import"./Label-DgCFchF-.js";import"./types-CG6SsZFp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CjJsHvFZ.js";import"./step-AV-3KlMf.js";import"./path-DyVhHtw_.js";import"./LabelList-DRqt9mVh.js";import"./ActivePoints-Ddv2UM3f.js";import"./Dot-BFh-_60U.js";import"./activeStyles-DrCvysIi.js";import"./useAnimationId-DgiqBF0b.js";import"./dataEntryStyles-BABJdaaS.js";import"./Symbols-vnM3HbbD.js";import"./symbol-DlnVlajL.js";import"./ErrorBarContext-GrhwdkVF.js";import"./SetGraphicalItem-CXpshRR6.js";import"./getRadiusAndStrokeWidthFromDot-4di0vwKC.js";import"./ActiveShapeUtils-D11w1Cqa.js";import"./useEffectiveDataKey-BS1bhAcI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
