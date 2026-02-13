import{e}from"./iframe-KPAXLOLU.js";import{R as n}from"./arrayEqualityCheck-C56QUJ1f.js";import{C as p}from"./ComposedChart-DeZSIAh0.js";import{C as s}from"./CartesianGrid-YuL8M4DH.js";import{X as c}from"./XAxis-C4HchdwG.js";import{Y as f}from"./YAxis-CAPsonmh.js";import{L as l}from"./Line-CBxA7gKU.js";import{R as d}from"./ReferenceLine-r1EaeuRO.js";import{R as h}from"./RechartsHookInspector-kpgbJjbF.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DoONYDR5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbDiUXBh.js";import"./hooks-BSsx0bCA.js";import"./axisSelectors-BryM1FYj.js";import"./zIndexSlice-BZZRXwbi.js";import"./CartesianChart-DFX2Z7FU.js";import"./chartDataContext-T6w2KyJs.js";import"./CategoricalChart-Dk9GNXPU.js";import"./CartesianAxis-Fwh7n2FF.js";import"./Layer-Da82H4oD.js";import"./Text-bc5Wvmbt.js";import"./DOMUtils-tqc8lMYW.js";import"./Label-BCITgdoX.js";import"./ZIndexLayer-DGM-MLqc.js";import"./types-Bf6Uuk4n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DU0YFNnG.js";import"./ActivePoints-Be3meqdm.js";import"./Dot-Bzj5Rswh.js";import"./RegisterGraphicalItemId-DhvOJqxy.js";import"./ErrorBarContext-DSh5xxoF.js";import"./GraphicalItemClipPath-CMapYqoy.js";import"./SetGraphicalItem-DnuvD-SA.js";import"./useAnimationId-CcLJkYYw.js";import"./getRadiusAndStrokeWidthFromDot-HFeMNqJA.js";import"./ActiveShapeUtils-CGbu2e04.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BzpXjes6.js";import"./Trapezoid-CVMTG_aU.js";import"./Sector-2YnOnij-.js";import"./Symbols-B8OFT3tL.js";import"./Curve-DKnP5GEK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DScL8g0g.js";import"./ChartSizeDimensions-DvlPtCXc.js";import"./OffsetShower-DO6TyZAZ.js";import"./PlotAreaShower-Cm4MMGxs.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
