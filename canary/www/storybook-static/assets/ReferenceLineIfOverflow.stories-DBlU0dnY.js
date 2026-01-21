import{e}from"./iframe-But0a38P.js";import{R as n}from"./arrayEqualityCheck-CYbCyNsP.js";import{C as p}from"./ComposedChart-da7ff5Gu.js";import{C as s}from"./CartesianGrid-NrKmnmqB.js";import{X as c}from"./XAxis-BAXANk5N.js";import{Y as f}from"./YAxis-DG24jA9M.js";import{L as l}from"./Line-jJQzj9d9.js";import{R as d}from"./ReferenceLine-2wXv6buI.js";import{R as h}from"./RechartsHookInspector-C5Pe1Yuk.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bm0IZKgg.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-PnZQcIU_.js";import"./hooks-CpJdPTaX.js";import"./axisSelectors-C4f3hvSw.js";import"./zIndexSlice-BltV0wsp.js";import"./CartesianChart-Cwa6sqm_.js";import"./chartDataContext-BNuUAnVq.js";import"./CategoricalChart-B2oR5-3x.js";import"./CartesianAxis-C8-lm3EO.js";import"./Layer-afBuC6vE.js";import"./Text-CcNcGCTu.js";import"./DOMUtils-Du126Ke7.js";import"./Label-C7EMJJOB.js";import"./ZIndexLayer-BqdPe-lh.js";import"./types-BORgRnck.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BkpqDUuI.js";import"./ActivePoints-Dnf6qJKf.js";import"./Dot-CcU5UjI7.js";import"./RegisterGraphicalItemId-ByXCQiha.js";import"./ErrorBarContext-C-Z575OG.js";import"./GraphicalItemClipPath-YNxfKYWD.js";import"./SetGraphicalItem-BNXEXR48.js";import"./useAnimationId-DCy88jod.js";import"./getRadiusAndStrokeWidthFromDot-BQ0TWRR4.js";import"./ActiveShapeUtils-CpE5KD3c.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BVahoehG.js";import"./Trapezoid-OOuCLK_Z.js";import"./Sector-BzzDDKvP.js";import"./Symbols-D7e9GUiu.js";import"./Curve-B4UI-EDA.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C00Mu2Jv.js";import"./ChartSizeDimensions-C_cjOMUb.js";import"./OffsetShower-CyyKWRo3.js";import"./PlotAreaShower-LOYVmRHK.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
