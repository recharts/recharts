import{e}from"./iframe-D4XW71qE.js";import{R as n}from"./arrayEqualityCheck-Ct0H2J7-.js";import{C as p}from"./ComposedChart-F9p-LUMw.js";import{C as s}from"./CartesianGrid-7yO0-lso.js";import{X as c}from"./XAxis-B7adFIe7.js";import{Y as f}from"./YAxis-BzXwxAD2.js";import{L as l}from"./Line-Ds1mFxVO.js";import{R as d}from"./ReferenceLine-CzJVInIC.js";import{R as h}from"./RechartsHookInspector-9aXKf5pi.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BtLFSBo9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0DDkfJP.js";import"./hooks-B5BtkbT7.js";import"./axisSelectors-DIlwx-_h.js";import"./zIndexSlice-DRfQm_zr.js";import"./CartesianChart-DkcK7QB-.js";import"./chartDataContext-6vD_4ehm.js";import"./CategoricalChart-CiMFuwJC.js";import"./CartesianAxis-8-c0TmU5.js";import"./Layer-_WbjJ9WY.js";import"./Text-B9RQv17s.js";import"./DOMUtils-CsdAV10D.js";import"./Label-B64y4UV8.js";import"./ZIndexLayer-uUtlF8oG.js";import"./types-CVucT5VX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dt1V4s2Z.js";import"./ActivePoints-Dec3rykj.js";import"./Dot-xgW2ThBu.js";import"./RegisterGraphicalItemId-c0aUNxuE.js";import"./ErrorBarContext-CYBrSxT_.js";import"./GraphicalItemClipPath-sDej9Lnv.js";import"./SetGraphicalItem-BB8zeoY-.js";import"./useAnimationId-BXlO72m4.js";import"./getRadiusAndStrokeWidthFromDot-CmN5e2Eb.js";import"./ActiveShapeUtils-BcGwy2uj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CSkUH-X3.js";import"./Trapezoid-BC7P1jMa.js";import"./Sector-AFsZXlCO.js";import"./Symbols-CZhPoTol.js";import"./Curve-BM6HUAhp.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-r8aHoL1L.js";import"./ChartSizeDimensions-YAYg9XQP.js";import"./OffsetShower-D_rHwW7U.js";import"./PlotAreaShower-BEJsFdI1.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
