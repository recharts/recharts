import{R as e}from"./iframe-BnZHUF9X.js";import{R as a}from"./zIndexSlice-ONbH2CMm.js";import{C as p}from"./ComposedChart-B4o4gtm7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-m_0SQtv7.js";import{X as f}from"./XAxis-CRqJ7xsJ.js";import{Y as l}from"./YAxis-C5pkUNB3.js";import{L as d}from"./Line-cVcFSyJN.js";import{R as h}from"./ReferenceLine-CtDu9YYS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DYWyyBD4.js";import"./index-DwyAhWM9.js";import"./index-Ck__QTcD.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CS-Gahor.js";import"./isWellBehavedNumber-Bn5kvLQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ztAk4E9P.js";import"./axisSelectors-DSOG4fe3.js";import"./d3-scale-hcynQqTx.js";import"./index-ksKJqe-L.js";import"./index-BrEYDHSM.js";import"./renderedTicksSlice-CKzVsDw2.js";import"./index-CVXi-tnN.js";import"./CartesianChart-a0B_k2pR.js";import"./chartDataContext-CxsSdioC.js";import"./CategoricalChart-CSXyHKQE.js";import"./CartesianAxis-CnqpkBi3.js";import"./Layer-D4LkPBUk.js";import"./Text-CPiy7pnu.js";import"./DOMUtils-C0afjJmd.js";import"./useId-nraStDaz.js";import"./useBackwardsCompatibleTheme-CLSYsBSa.js";import"./Label-hOa9Xaax.js";import"./ZIndexLayer-CIa5rzLp.js";import"./types-CA0d64vS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-SQL-HHnd.js";import"./step-BHb_S66N.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bxt2Mhs_.js";import"./useAnimationId-CuFFFGhn.js";import"./ActivePoints-CIdvMm3W.js";import"./Dot-CjRUlFgj.js";import"./RegisterGraphicalItemId-eknPVKNp.js";import"./ErrorBarContext-DNaI9-CH.js";import"./GraphicalItemClipPath-DFiiV3dA.js";import"./SetGraphicalItem-BS2ba3Ul.js";import"./getRadiusAndStrokeWidthFromDot-6T9qPj9L.js";import"./ActiveShapeUtils-nVjPub3k.js";import"./useGraphicalItemIdentity-esDnMWhm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
