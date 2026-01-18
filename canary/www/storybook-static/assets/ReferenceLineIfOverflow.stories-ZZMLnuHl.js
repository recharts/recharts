import{e}from"./iframe-DZy4Dead.js";import{R as n}from"./arrayEqualityCheck-ApBChTfQ.js";import{C as p}from"./ComposedChart-B1Kc7L3U.js";import{C as s}from"./CartesianGrid-CsqV1Iwf.js";import{X as c}from"./XAxis-B-yW469b.js";import{Y as f}from"./YAxis-CetTQXLx.js";import{L as l}from"./Line-gll_RWLu.js";import{R as d}from"./ReferenceLine-DDwFT6UU.js";import{R as h}from"./RechartsHookInspector-BQ2LFFE8.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bf5GaSqV.js";import"./PolarUtils-Dc-YJkTz.js";import"./RechartsWrapper-nPRv-TTN.js";import"./hooks-ajKNzoip.js";import"./axisSelectors-CNnm75NT.js";import"./zIndexSlice-BHURSyYA.js";import"./CartesianChart-C9Umwsg3.js";import"./chartDataContext-C_SJIf2I.js";import"./CategoricalChart-Da7z_ebg.js";import"./CartesianAxis-CJ1CYBzd.js";import"./Layer-Bpoel1Lp.js";import"./Text-68IXtrlK.js";import"./DOMUtils-DwLev0Y8.js";import"./Label-BnGgD6KR.js";import"./ZIndexLayer-DncsytRr.js";import"./types-BfEpf9p_.js";import"./ReactUtils-MfSKnK6Q.js";import"./ActivePoints-Kh0sgV9R.js";import"./Dot-DpvXwtTp.js";import"./RegisterGraphicalItemId-DFrBVe2X.js";import"./ErrorBarContext-Du58iR9d.js";import"./GraphicalItemClipPath-DT3FtvpA.js";import"./SetGraphicalItem-6vLNF4l0.js";import"./useAnimationId-C4mX0K92.js";import"./getRadiusAndStrokeWidthFromDot-BGEPQyal.js";import"./ActiveShapeUtils-BmYdORD-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DS0sw2g4.js";import"./Trapezoid-C-7zXkUX.js";import"./Sector-Cjw5cIeP.js";import"./Symbols-BE9qwwFU.js";import"./Curve-ChmxEyvD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-SrSy7NGQ.js";import"./ChartSizeDimensions-DagnIVtO.js";import"./OffsetShower-C8_o4Gkp.js";import"./PlotAreaShower-CJCyQCMM.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
