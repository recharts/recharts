import{e}from"./iframe-p_UG0KAI.js";import{R as n}from"./arrayEqualityCheck-RFBrzMpT.js";import{C as p}from"./ComposedChart-CkU6p2-M.js";import{C as s}from"./CartesianGrid-DRqphYMG.js";import{X as c}from"./XAxis-zKsPIOo2.js";import{Y as f}from"./YAxis-DEIZfQQv.js";import{L as l}from"./Line-F3MIA8if.js";import{R as d}from"./ReferenceLine-BFzcwX--.js";import{R as h}from"./RechartsHookInspector-DC0vak21.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DGxp3uGd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tEJUk72V.js";import"./hooks-pJuOnib6.js";import"./axisSelectors-PDDTaSk3.js";import"./zIndexSlice-BmIGVCRU.js";import"./CartesianChart-pFigcRMV.js";import"./chartDataContext-CH9fTHhq.js";import"./CategoricalChart-BF8f5Erd.js";import"./CartesianAxis-0r0p8ryQ.js";import"./Layer-JpdK0Yhb.js";import"./Text-D6vjCcrH.js";import"./DOMUtils-CJ8h57fm.js";import"./Label-079Vd-9w.js";import"./ZIndexLayer-CVbpoIAO.js";import"./types-PTj5YW0Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Bi-gzM1a.js";import"./ActivePoints-C5BJV9dv.js";import"./Dot-BYSk7D6p.js";import"./RegisterGraphicalItemId-CYD9ORuF.js";import"./ErrorBarContext-CzGVMKe5.js";import"./GraphicalItemClipPath-QjUTAoiq.js";import"./SetGraphicalItem-JMwAn23t.js";import"./useAnimationId-CNvXWFg0.js";import"./getRadiusAndStrokeWidthFromDot-C_2SwELs.js";import"./ActiveShapeUtils-BrkQD8_s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bxtfu4l2.js";import"./Trapezoid-0x4_ia8j.js";import"./Sector-BYc0giK7.js";import"./Symbols-CtMkMnQW.js";import"./Curve-BzeYL40i.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cmf0vnA4.js";import"./ChartSizeDimensions-IHqJf279.js";import"./OffsetShower-X_nsBUDf.js";import"./PlotAreaShower-BlZaNjOc.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
