import{e}from"./iframe-cnMzeIJZ.js";import{g as n}from"./arrayEqualityCheck-Diz3n3Hs.js";import{C as p}from"./ComposedChart-DE00tkMR.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-CO8TK7fT.js";import{X as f}from"./XAxis-CwsNG3zV.js";import{Y as l}from"./YAxis-DADsk3iq.js";import{L as d}from"./Line-DNc1zXXh.js";import{R as h}from"./ReferenceLine-CQeckzWQ.js";import{R as w}from"./RechartsHookInspector-z-0196Jh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BJEUNe0z.js";import"./immer-CEVvpJh0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9N_K_8iJ.js";import"./index-DcitoB6s.js";import"./hooks-DbNIViQP.js";import"./axisSelectors-JTUQkC92.js";import"./d3-scale-BBoVmphj.js";import"./zIndexSlice-KCSxBezz.js";import"./renderedTicksSlice-CttqerD-.js";import"./CartesianChart-v4VQpoAp.js";import"./chartDataContext-DuCir45J.js";import"./CategoricalChart-CbexdhNs.js";import"./CartesianAxis-DKEuyvio.js";import"./Layer-C2d9GIhW.js";import"./Text-B1T-uFVD.js";import"./DOMUtils-8Qso1Lek.js";import"./Label-r0BVcH36.js";import"./ZIndexLayer-DgSpDsSo.js";import"./types-CvoSDie4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cvax_Sun.js";import"./ActivePoints-BF7AMWlG.js";import"./Dot-CuCyL62Q.js";import"./RegisterGraphicalItemId-CKB_e_SX.js";import"./ErrorBarContext-UNWUxf6o.js";import"./GraphicalItemClipPath-D7TSUiOR.js";import"./SetGraphicalItem-CHoRTGzo.js";import"./useAnimationId-BIlplKMu.js";import"./getRadiusAndStrokeWidthFromDot-D1rOBQHf.js";import"./ActiveShapeUtils-gcJ89Q36.js";import"./isPlainObject-D33aVf8i.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXYQFJg_.js";import"./Trapezoid-D7-33KRZ.js";import"./Sector-q4gGdICU.js";import"./Symbols-zGmBpapW.js";import"./symbol-CLamLFlr.js";import"./step-CVx5i_lR.js";import"./Curve-BYV27PWl.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CSSLHj9Z.js";import"./ChartSizeDimensions-BiOnGwPS.js";import"./OffsetShower-BBJcAEb8.js";import"./PlotAreaShower-C0UNL5CH.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,ge as default};
