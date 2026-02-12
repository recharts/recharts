import{e}from"./iframe-CFT77Gxv.js";import{R as n}from"./arrayEqualityCheck-D0woyLdN.js";import{C as p}from"./ComposedChart-_mVvbmGs.js";import{C as s}from"./CartesianGrid-CWZ25BdI.js";import{X as c}from"./XAxis-iSjPfIVk.js";import{Y as f}from"./YAxis-AxMvucM_.js";import{L as l}from"./Line-CEYHVSem.js";import{R as d}from"./ReferenceLine-CKKbZ8HE.js";import{R as h}from"./RechartsHookInspector-BcoRzUX4.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfLi8adI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C06tio3K.js";import"./hooks-yAz6J_Nf.js";import"./axisSelectors-DOMws57m.js";import"./zIndexSlice-Czz78II2.js";import"./CartesianChart-8phVSf5K.js";import"./chartDataContext-yQ3flajw.js";import"./CategoricalChart-BnvwGt9I.js";import"./CartesianAxis-BbU1esix.js";import"./Layer-MeOR0S7X.js";import"./Text-Bq7B7F5n.js";import"./DOMUtils-DtvoLBHD.js";import"./Label-BG9DvreX.js";import"./ZIndexLayer-uKRagXxd.js";import"./types-CpsEOU-X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BfhnJY8u.js";import"./ActivePoints-CpG8Wxyr.js";import"./Dot-DdlNMwed.js";import"./RegisterGraphicalItemId-C7MUsBLo.js";import"./ErrorBarContext-TG4W3Nt0.js";import"./GraphicalItemClipPath-hpTG4Orq.js";import"./SetGraphicalItem-Bnzd430s.js";import"./useAnimationId-DgcLlBvC.js";import"./getRadiusAndStrokeWidthFromDot-dEU-vJCv.js";import"./ActiveShapeUtils-CyY8Lu1y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxDot7kp.js";import"./Trapezoid-DpyS5tZu.js";import"./Sector-DYvzTYWt.js";import"./Symbols-Cng0_jSU.js";import"./Curve-D6lAkyMf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-9FfrM9hg.js";import"./ChartSizeDimensions-DP7onZPk.js";import"./OffsetShower-BQl_FUQS.js";import"./PlotAreaShower-kI7aZSrk.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
