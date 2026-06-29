import{R as e}from"./iframe-Ce1K7ebi.js";import{R as n}from"./zIndexSlice-8Zo3fsoU.js";import{C as p}from"./ComposedChart-COfY451m.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BOpB_UQw.js";import{X as f}from"./XAxis-3C9aClrU.js";import{Y as l}from"./YAxis-DnjNgR7C.js";import{L as d}from"./Line-Beg62wAW.js";import{R as h}from"./ReferenceLine-lcGK79Kq.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-wBCCevMF.js";import"./index-s0WSFyA7.js";import"./index-AjZPfGGe.js";import"./get-BJIMs5EG.js";import"./resolveDefaultProps-DSV9zLoY.js";import"./isWellBehavedNumber-CQ8pg5Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BrIlX8W1.js";import"./index-BorxIHRi.js";import"./index-gt-wl4xF.js";import"./renderedTicksSlice-GRKlOorj.js";import"./axisSelectors-CwdMfS2t.js";import"./d3-scale-Dx0XyOwO.js";import"./CartesianChart-BDjFqgQH.js";import"./chartDataContext-CPsHUBNm.js";import"./CategoricalChart-CSIi67W8.js";import"./CartesianAxis-vXS1PjkI.js";import"./Layer-B1_feEXA.js";import"./Text-BYOeWYK5.js";import"./DOMUtils-DkFEIDQF.js";import"./Label-CmiiW9da.js";import"./ZIndexLayer-CVK_cW1P.js";import"./types-EmN6t4vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BMLS1vNR.js";import"./step-fKuN5Fcd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DUKSjkGs.js";import"./useAnimationId-BsE4V4Ok.js";import"./ActivePoints-DVEwrhzj.js";import"./Dot-fVsrRUzo.js";import"./RegisterGraphicalItemId-CAijELDs.js";import"./ErrorBarContext-ZtUvHt5X.js";import"./GraphicalItemClipPath-DDqY4rhz.js";import"./SetGraphicalItem-CTmxPNcP.js";import"./getRadiusAndStrokeWidthFromDot-B3GcRvO7.js";import"./ActiveShapeUtils-DLpYpzZO.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
