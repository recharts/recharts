import{e}from"./iframe-C1zBrMCd.js";import{R as n}from"./arrayEqualityCheck-Df8r3poz.js";import{C as p}from"./ComposedChart-BvN08KBc.js";import{C as s}from"./CartesianGrid-CcFLJXfP.js";import{X as c}from"./XAxis-DU1SAysF.js";import{Y as f}from"./YAxis-Bcx80oq7.js";import{L as l}from"./Line-Cv9Z5K6p.js";import{R as d}from"./ReferenceLine-crtsAo5U.js";import{R as h}from"./RechartsHookInspector-BISA2G0k.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsIlMHa7.js";import"./PolarUtils-_NKSevVn.js";import"./RechartsWrapper-Cv1tlCaV.js";import"./hooks-WF-Co-wK.js";import"./axisSelectors-DB8TkCkM.js";import"./zIndexSlice-hFBZ82Qc.js";import"./CartesianChart-B5UDYtnc.js";import"./chartDataContext-DI2kF2Ct.js";import"./CategoricalChart-2Vole5cF.js";import"./CartesianAxis-DF9he0a4.js";import"./Layer-D3PE35Mq.js";import"./Text-dJAbnPql.js";import"./DOMUtils-DOdR4DF9.js";import"./Label-6nnLE5h5.js";import"./ZIndexLayer-BetO650l.js";import"./types-HpBDQdg7.js";import"./ReactUtils-D752dz6O.js";import"./ActivePoints-CGgxDnb1.js";import"./Dot-BCpEYGUg.js";import"./RegisterGraphicalItemId-Bok-rErT.js";import"./ErrorBarContext-KwhhmAaQ.js";import"./GraphicalItemClipPath-M-I7Ebzy.js";import"./SetGraphicalItem-ZpSJ1YOV.js";import"./useAnimationId-D3t9NmUg.js";import"./getRadiusAndStrokeWidthFromDot-DliVvnt0.js";import"./ActiveShapeUtils-CdNQy3O6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhdzWbEl.js";import"./Trapezoid-D2TjGKOo.js";import"./Sector-w-WfrIQ8.js";import"./Symbols-PCV2wn4X.js";import"./Curve-BNkJ4mrR.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D7UfPOGu.js";import"./ChartSizeDimensions-Dtypf1Rq.js";import"./OffsetShower-DOhEeiaZ.js";import"./PlotAreaShower-B0-XWkzL.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
