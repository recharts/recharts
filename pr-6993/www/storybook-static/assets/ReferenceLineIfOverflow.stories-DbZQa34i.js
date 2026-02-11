import{e}from"./iframe-B-Dp18cD.js";import{R as n}from"./arrayEqualityCheck-n6VvjF1v.js";import{C as p}from"./ComposedChart-D9f0fHzi.js";import{C as s}from"./CartesianGrid-26YaUCM_.js";import{X as c}from"./XAxis-BEv3sJL0.js";import{Y as f}from"./YAxis-B-v6qizp.js";import{L as l}from"./Line-jDVeOP6X.js";import{R as d}from"./ReferenceLine-BM4gwD9l.js";import{R as h}from"./RechartsHookInspector-CHTp98JP.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ClUavgcZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-uJ7UoaAC.js";import"./hooks-BBxeeore.js";import"./axisSelectors-OuIDnENT.js";import"./zIndexSlice-BzpbxKTs.js";import"./CartesianChart-CJ47btSF.js";import"./chartDataContext-zsQASXZN.js";import"./CategoricalChart-BJqjUyur.js";import"./CartesianAxis-Btb51IPQ.js";import"./Layer-sRK8yL2I.js";import"./Text-B2w_0Ecu.js";import"./DOMUtils-3l5WS7n1.js";import"./Label-GlXCPztW.js";import"./ZIndexLayer-DZaorHCJ.js";import"./types-D_31He_k.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CS1JgmNI.js";import"./ActivePoints-Q3QYZ8_j.js";import"./Dot-C4ZtMf9A.js";import"./RegisterGraphicalItemId-CxTaZDZc.js";import"./ErrorBarContext-BVXjh-mB.js";import"./GraphicalItemClipPath-C0nz93m4.js";import"./SetGraphicalItem-Dgsvv4_3.js";import"./useAnimationId-BP7QGUYe.js";import"./getRadiusAndStrokeWidthFromDot-BWykTpyk.js";import"./ActiveShapeUtils-m1wJj2Q4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B651D3DK.js";import"./Trapezoid-BORovwBS.js";import"./Sector-ByD9psuI.js";import"./Symbols-CnYaDh9V.js";import"./Curve-B9DUpoMg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-GlpghtR4.js";import"./ChartSizeDimensions-DKPKgNfh.js";import"./OffsetShower-vf47GvB5.js";import"./PlotAreaShower-oIrFVBlc.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
