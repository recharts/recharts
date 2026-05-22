import{e}from"./iframe-BzghaLEp.js";import{g as n}from"./arrayEqualityCheck-CS3de1t5.js";import{C as p}from"./ComposedChart-CN0B5sck.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-CYCVH740.js";import{X as f}from"./XAxis-CsBkluNM.js";import{Y as l}from"./YAxis-BRrP9GqR.js";import{L as d}from"./Line-LDEjBea-.js";import{R as h}from"./ReferenceLine-DscMVWFc.js";import{R as w}from"./RechartsHookInspector-BuYwcCb3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BVZsWnmP.js";import"./immer-BXETI75S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DR3m1DYe.js";import"./index-DQ335CG7.js";import"./hooks-BRSXFpN3.js";import"./axisSelectors-aIIB8FuD.js";import"./d3-scale-qhwlSf_5.js";import"./zIndexSlice-DCGzB6PO.js";import"./renderedTicksSlice-STF43WXb.js";import"./CartesianChart-DcVmos4e.js";import"./chartDataContext-D4_qA_s_.js";import"./CategoricalChart-BnPKkEWG.js";import"./CartesianAxis-C9tacUHl.js";import"./Layer-BJAfo-lt.js";import"./Text-B8a7yFIp.js";import"./DOMUtils-Du7GfFqb.js";import"./Label-DpeHQT41.js";import"./ZIndexLayer-Bqel3NP6.js";import"./types-DUQUBotY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DBC2v7ce.js";import"./step-Cb7NJXQj.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DCWlBgg2.js";import"./ActivePoints-B-bDqxYx.js";import"./Dot-DOp6zc7l.js";import"./RegisterGraphicalItemId-BXJ3uWYw.js";import"./ErrorBarContext-D8hJtv3V.js";import"./GraphicalItemClipPath-CjgICd57.js";import"./SetGraphicalItem-c7OZec2D.js";import"./useAnimationId-DtC5i2fv.js";import"./getRadiusAndStrokeWidthFromDot-r9y5eo4i.js";import"./ActiveShapeUtils-DC8wyXqX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BG2QvuV2.js";import"./ChartSizeDimensions-hfJquHEG.js";import"./OffsetShower-_lbWu0gQ.js";import"./PlotAreaShower-CKhzQKyo.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
