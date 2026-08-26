import{R as e}from"./iframe-Bzmu5HIk.js";import{R as n}from"./zIndexSlice-DOqwIOxM.js";import{C as p}from"./ComposedChart-CmElcfxT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-5aOGU1_u.js";import{X as f}from"./XAxis-jQ_CxXuQ.js";import{Y as l}from"./YAxis-CurDeKAa.js";import{L as d}from"./Line-Dy4VpV_O.js";import{R as h}from"./ReferenceLine-DOTqDC1w.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-By1_Q0f1.js";import"./index-CS9ypgyw.js";import"./index-BU2ca08W.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRF5GxOI.js";import"./isWellBehavedNumber-DCtTU4mD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCfV64tZ.js";import"./index-Bs5Y62tp.js";import"./index-DuAK0LiD.js";import"./axisSelectors-CQE5C8Tc.js";import"./d3-scale-mcjvwMyE.js";import"./renderedTicksSlice-aIMhvrWq.js";import"./CartesianChart-D9cj75Uw.js";import"./chartDataContext-6ylcQe-7.js";import"./CategoricalChart-CH9SVF8Q.js";import"./CartesianAxis-ByUKa2Ph.js";import"./Layer-BIAwX0Ug.js";import"./Text-DqoobI6S.js";import"./DOMUtils-dt_U2Js1.js";import"./useId-CJJMgP-t.js";import"./useBackwardsCompatibleTheme-CmmFKQCY.js";import"./Label-BnPFFEHB.js";import"./ZIndexLayer-CHgZKeoE.js";import"./types-CP805D0F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CKwGe3YB.js";import"./step-BOb3jDRZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C8pcPfP0.js";import"./useAnimationId-pFMJHbYK.js";import"./ActivePoints-Bg1bvRXN.js";import"./Dot-B390M5o3.js";import"./RegisterGraphicalItemId-9b4sSDvA.js";import"./ErrorBarContext-BwVhmXYH.js";import"./GraphicalItemClipPath-DpslvBV-.js";import"./SetGraphicalItem-Xipmdhp5.js";import"./getRadiusAndStrokeWidthFromDot-C9axG9oY.js";import"./ActiveShapeUtils-ByjLSOPq.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
