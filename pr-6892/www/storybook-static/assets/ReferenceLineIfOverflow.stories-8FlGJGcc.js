import{e}from"./iframe-BfbK0YnM.js";import{R as n}from"./arrayEqualityCheck-DNFpTLKx.js";import{C as p}from"./ComposedChart-CxQMJJ37.js";import{C as s}from"./CartesianGrid-DByKPwMu.js";import{X as c}from"./XAxis-C98xK6t1.js";import{Y as f}from"./YAxis-BIVxSChd.js";import{L as l}from"./Line-DzpsIfMt.js";import{R as d}from"./ReferenceLine-D6fjqSES.js";import{R as h}from"./RechartsHookInspector-hJ2wORVM.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-1x2577Vl.js";import"./PolarUtils-D7VIOQ5-.js";import"./RechartsWrapper-CneYaVm0.js";import"./hooks-C3PasfZ_.js";import"./axisSelectors-B0fcML92.js";import"./zIndexSlice-C2nD2lty.js";import"./CartesianChart-DvEdRfkB.js";import"./chartDataContext-BgZQ9X9l.js";import"./CategoricalChart-bjsre3s0.js";import"./CartesianAxis-BYWnjPPG.js";import"./Layer-CgE-ub3Y.js";import"./Text-CnAgZ5uJ.js";import"./DOMUtils-ed8aeX9h.js";import"./Label-DahQkxIF.js";import"./ZIndexLayer-aH4ZpYgD.js";import"./types-Bmf6Pun4.js";import"./ReactUtils-CcajNckk.js";import"./ActivePoints-DV5Nx3pw.js";import"./Dot-Dpbc4XUr.js";import"./RegisterGraphicalItemId-CqePIzFp.js";import"./ErrorBarContext-CY5jd0h0.js";import"./GraphicalItemClipPath-MsgVJj5Y.js";import"./SetGraphicalItem-C-oQkIvQ.js";import"./useAnimationId-D-pFcM5J.js";import"./getRadiusAndStrokeWidthFromDot-BH3TeMiB.js";import"./ActiveShapeUtils-C7AgwxsO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BHHp3Xwt.js";import"./Trapezoid-CzxVEg4f.js";import"./Sector-BlKZ7V0w.js";import"./Symbols-sbw_CJaX.js";import"./Curve-DDb4cbsk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DXUjyqxC.js";import"./ChartSizeDimensions-Cp6ZFz8t.js";import"./OffsetShower-C9W4p0Nm.js";import"./PlotAreaShower-Bs9OF-cp.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
