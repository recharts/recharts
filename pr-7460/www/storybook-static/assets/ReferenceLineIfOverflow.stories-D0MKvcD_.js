import{R as e}from"./iframe-C7jIZL6o.js";import{R as n}from"./zIndexSlice-BnlSqkDK.js";import{C as p}from"./ComposedChart-BKTk_vyX.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CZbDpfb8.js";import{X as f}from"./XAxis-CTYxjOVZ.js";import{Y as l}from"./YAxis-w5VbFl9t.js";import{L as d}from"./Line-Bf1usTbh.js";import{R as h}from"./ReferenceLine-BcWsWTv_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BOr4g5Y7.js";import"./index-B3xQbeZu.js";import"./index-Bovuavvd.js";import"./get-H_VCaiK7.js";import"./resolveDefaultProps-DUb7sDlC.js";import"./isWellBehavedNumber-C3vUk83l.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dl0_CiQp.js";import"./index-B-BRc6T6.js";import"./index-B9TBnend.js";import"./renderedTicksSlice-Birh5NDk.js";import"./axisSelectors-EwOPdfxu.js";import"./d3-scale-CRcY7xoU.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DrR5EsNs.js";import"./chartDataContext-CAMuJJ0l.js";import"./CategoricalChart-CUzYs4pg.js";import"./CartesianAxis-iRUdZDvI.js";import"./Layer-BCVE1kDT.js";import"./Text-olerkQs4.js";import"./DOMUtils-yTKptuJ8.js";import"./Label-D0um-vtH.js";import"./ZIndexLayer-BRAdfR1Z.js";import"./types-DLi_I9qn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DLQx7WJH.js";import"./step-oAYWHCKP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CcF7dW3l.js";import"./useAnimationId-B6ozUAwY.js";import"./ActivePoints-DpiODVVc.js";import"./Dot-BZQ0SxYM.js";import"./RegisterGraphicalItemId-D1djZTUZ.js";import"./ErrorBarContext-B42jzrUJ.js";import"./GraphicalItemClipPath-CFgBJqlA.js";import"./SetGraphicalItem-DKs6sIFw.js";import"./getRadiusAndStrokeWidthFromDot-BZg86y5o.js";import"./ActiveShapeUtils-E8cq6prr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
