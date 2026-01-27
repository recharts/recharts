import{e}from"./iframe-CpBR2FD-.js";import{R as n}from"./arrayEqualityCheck-DfVEXElD.js";import{C as p}from"./ComposedChart-B6g7a6-n.js";import{C as s}from"./CartesianGrid-BAFAxm3s.js";import{X as c}from"./XAxis-Cmud21dv.js";import{Y as f}from"./YAxis-CYDXfh77.js";import{L as l}from"./Line-CNjCQiDV.js";import{R as d}from"./ReferenceLine-DukKtOLq.js";import{R as h}from"./RechartsHookInspector-C3421ru3.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DmMqjKPI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CoeBe9ik.js";import"./hooks-DedpoqIJ.js";import"./axisSelectors-BrZ6G91_.js";import"./zIndexSlice-BCiKU99h.js";import"./CartesianChart-B1Icaiih.js";import"./chartDataContext-XtQC6I5E.js";import"./CategoricalChart-Bb8UD5I8.js";import"./CartesianAxis-DIWnau3l.js";import"./Layer-DEK88535.js";import"./Text-Dhmw9EGu.js";import"./DOMUtils-BBsKE3Cz.js";import"./Label-DWBk7fhM.js";import"./ZIndexLayer-fbfZmhXg.js";import"./types-D4KZK8k1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-VfTt9PFz.js";import"./ActivePoints-B3LyVgYO.js";import"./Dot-DiU-b5Rw.js";import"./RegisterGraphicalItemId-C5HCX42f.js";import"./ErrorBarContext-D_KmDbtZ.js";import"./GraphicalItemClipPath-VjF6EdyN.js";import"./SetGraphicalItem-BgcHabrg.js";import"./useAnimationId-CFZ1kX6W.js";import"./getRadiusAndStrokeWidthFromDot-Br3Pzfii.js";import"./ActiveShapeUtils-oHT1Tkw8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPCbtxXK.js";import"./Trapezoid-gv9uLae-.js";import"./Sector-UZPxualI.js";import"./Symbols-9dW_oll9.js";import"./Curve-DWHqQWsG.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dknhq_uL.js";import"./ChartSizeDimensions-BjsHMoDH.js";import"./OffsetShower-D-sUEdFp.js";import"./PlotAreaShower-BP-Vy4Nm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
