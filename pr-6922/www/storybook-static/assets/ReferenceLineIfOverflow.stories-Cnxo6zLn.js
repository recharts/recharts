import{e}from"./iframe-3ssOB91Q.js";import{R as n}from"./arrayEqualityCheck-RWElLsK2.js";import{C as p}from"./ComposedChart-4-taPps0.js";import{C as s}from"./CartesianGrid-r34ttTM3.js";import{X as c}from"./XAxis-B0PHajli.js";import{Y as f}from"./YAxis-CCiXb5zT.js";import{L as l}from"./Line-C4lbmCvW.js";import{R as d}from"./ReferenceLine-DUsZnIbs.js";import{R as h}from"./RechartsHookInspector-DHP-9GZN.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ctxcgNcU.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-8idYzD5u.js";import"./hooks-6a0TNfIB.js";import"./axisSelectors-DTH02zf7.js";import"./zIndexSlice-ho1ylgk9.js";import"./CartesianChart-D-chxrPJ.js";import"./chartDataContext-CBnI5hri.js";import"./CategoricalChart-CW0qn3M9.js";import"./CartesianAxis-B8B5j-ea.js";import"./Layer-W17HINYn.js";import"./Text-BvProlO0.js";import"./DOMUtils-DJ-ugNhO.js";import"./Label-DzudoiWU.js";import"./ZIndexLayer-CTlKz5-T.js";import"./types-CfIL69ww.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DVrxVJVb.js";import"./ActivePoints-CGehM9Vx.js";import"./Dot-BXBhG_dq.js";import"./RegisterGraphicalItemId-K0GLMkuF.js";import"./ErrorBarContext-Btf7Lyk8.js";import"./GraphicalItemClipPath-BNmYXfJz.js";import"./SetGraphicalItem-D9Cn0Thc.js";import"./useAnimationId-C6CpCegT.js";import"./getRadiusAndStrokeWidthFromDot-NOrRJQ9f.js";import"./ActiveShapeUtils-D4XQIZp-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrCnLm7V.js";import"./Trapezoid-bVA-uN3w.js";import"./Sector-2W0uOEF9.js";import"./Symbols-CXbAeeaq.js";import"./Curve-D5W7Bwp2.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cewrc6A2.js";import"./ChartSizeDimensions-BSxBFCsp.js";import"./OffsetShower-BDSx3j6G.js";import"./PlotAreaShower-DLNjbvna.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
