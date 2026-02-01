import{e}from"./iframe-BJ3b3BfY.js";import{R as n}from"./arrayEqualityCheck-Bo2Wnkh3.js";import{C as p}from"./ComposedChart-BcbIeTEo.js";import{C as s}from"./CartesianGrid-DzBAtk5H.js";import{X as c}from"./XAxis-DGMxd97y.js";import{Y as f}from"./YAxis-CF3zWZoV.js";import{L as l}from"./Line-B0J8rKMr.js";import{R as d}from"./ReferenceLine-C1xtiFEN.js";import{R as h}from"./RechartsHookInspector-ORt5Hm4G.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BwYlSIqL.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CKiG0ykq.js";import"./hooks-C3LIgo6e.js";import"./axisSelectors-CqG3KyC6.js";import"./zIndexSlice-CWsPu_90.js";import"./CartesianChart-dQ-XbzLC.js";import"./chartDataContext-CMXdzaII.js";import"./CategoricalChart-Bg2hOV4d.js";import"./CartesianAxis-LraHpKTU.js";import"./Layer-B4_ys6we.js";import"./Text-Ch5Da2lM.js";import"./DOMUtils-UovAGbSR.js";import"./Label-DeB84C01.js";import"./ZIndexLayer-CUGD5-lC.js";import"./types-mvH4HYXR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-zwc7yRgu.js";import"./ActivePoints-BlpW6YCS.js";import"./Dot-C_Q3jwW2.js";import"./RegisterGraphicalItemId-DQUBtM_I.js";import"./ErrorBarContext-C1pIVCq0.js";import"./GraphicalItemClipPath-DbsTfdnw.js";import"./SetGraphicalItem-MDKWBLr9.js";import"./useAnimationId-PYCZu_AY.js";import"./getRadiusAndStrokeWidthFromDot-CafT4P9y.js";import"./ActiveShapeUtils-CxNZmNtv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B2kMW3VJ.js";import"./Trapezoid-DF2tlYWx.js";import"./Sector-BHT4ZWAz.js";import"./Symbols-DMZSC_-N.js";import"./Curve-Kded-2mW.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-vodQRtzb.js";import"./ChartSizeDimensions-C-iWuIdI.js";import"./OffsetShower-CldxxWXJ.js";import"./PlotAreaShower-CYDRIz5k.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
