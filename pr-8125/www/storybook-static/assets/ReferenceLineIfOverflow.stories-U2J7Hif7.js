import{R as e}from"./iframe-C9f0XnT9.js";import{R as a}from"./zIndexSlice-CHa-NfW0.js";import{C as p}from"./ComposedChart-ta3a0B_A.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C2FtvAJs.js";import{X as f}from"./XAxis-C5bj5GgQ.js";import{Y as l}from"./YAxis-D9OAInhW.js";import{L as d}from"./Line-DpXuZWHU.js";import{R as h}from"./ReferenceLine-DC5uruNO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-OglZgdvE.js";import"./throttle-KQYU95ys.js";import"./index-lRcOI8Cy.js";import"./index-Dd8czCIR.js";import"./RechartsWrapper-DtDu-9p6.js";import"./axisSelectors-DJl001RI.js";import"./polarAxisSelectors-DnDsCJfT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRci95pZ.js";import"./index-Bf7Rq1hF.js";import"./index-C_QD7AAh.js";import"./renderedTicksSlice-CaUdmayY.js";import"./index-DJqYT1Am.js";import"./CartesianChart-CjAW9dlX.js";import"./ZIndexPortal-DsfmsICI.js";import"./CategoricalChart-C4AmyGV7.js";import"./CartesianAxis-C2y0lK-Z.js";import"./Layer-BGqt9quM.js";import"./Text-BBa2fCF5.js";import"./DOMUtils-CkdhxU4H.js";import"./ZIndexLayer-Dk9V8YH1.js";import"./Label-HDB1mOS9.js";import"./types-Cq0tVQAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BuH0ARbV.js";import"./step-D2_GuXTT.js";import"./path-DyVhHtw_.js";import"./LabelList-CjS5fbS8.js";import"./ActivePoints-CjTQST-x.js";import"./Dot-Dha_7IA1.js";import"./activeStyles-BitiIAzx.js";import"./useAnimationId-BNUZJ-Q8.js";import"./dataEntryStyles-Bof1DRSv.js";import"./Symbols-CSFO1ejf.js";import"./symbol-BFxxKdiv.js";import"./ErrorBarContext-BjUzcwSB.js";import"./SetGraphicalItem-BKb40hJg.js";import"./getRadiusAndStrokeWidthFromDot-B1pkRXwd.js";import"./ActiveShapeUtils-IcXhTV6f.js";import"./useEffectiveDataKey-B2_fgQbM.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
