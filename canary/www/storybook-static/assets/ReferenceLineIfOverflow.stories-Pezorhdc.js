import{e}from"./iframe-5nyyyA4e.js";import{R as n}from"./arrayEqualityCheck-DhH-5wr2.js";import{C as p}from"./ComposedChart-Cxl5hqIP.js";import{C as s}from"./CartesianGrid-DUzzKbKn.js";import{X as c}from"./XAxis-CpInK2W7.js";import{Y as f}from"./YAxis-D9arQ46Y.js";import{L as l}from"./Line-Bd-6aEXe.js";import{R as d}from"./ReferenceLine-CU_FdDSv.js";import{R as h}from"./RechartsHookInspector-Bic4nxDU.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeTTuEfb.js";import"./immer-2somCEQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbfL-s84.js";import"./index-DrSxOYtm.js";import"./hooks-CdfksvpZ.js";import"./axisSelectors-CobE02gZ.js";import"./d3-scale-puoPpyC3.js";import"./zIndexSlice-C6txXD1x.js";import"./renderedTicksSlice-Cm-fMS3n.js";import"./CartesianChart-CFvpoJB5.js";import"./chartDataContext-SxjdhjDb.js";import"./CategoricalChart-DI7k_Lzd.js";import"./CartesianAxis-D47MJU_E.js";import"./Layer-DviFQGNi.js";import"./Text-CE1WfcL6.js";import"./DOMUtils-Dq_WTVX1.js";import"./Label-CduFeyI1.js";import"./ZIndexLayer-OUT57C2H.js";import"./types-BpXzUYak.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BrfFtQHh.js";import"./ActivePoints-C08M__J8.js";import"./Dot-YnFnwCT3.js";import"./RegisterGraphicalItemId-Co9Ixth9.js";import"./ErrorBarContext-CfPRQDi6.js";import"./GraphicalItemClipPath-4mU8FIdV.js";import"./SetGraphicalItem-YjHvOXLE.js";import"./useAnimationId-C32uUUSq.js";import"./getRadiusAndStrokeWidthFromDot-BSz_BA2S.js";import"./ActiveShapeUtils-DGjL05Fk.js";import"./isPlainObject-BQonFNMT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJXxZxcM.js";import"./Trapezoid-BDtTj6J0.js";import"./Sector-STsIidKv.js";import"./Symbols-CXSqTNLX.js";import"./symbol-DYTo8Fkb.js";import"./step-CMCDVxPb.js";import"./Curve-CtxNRaVC.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-ltgFEkuv.js";import"./ChartSizeDimensions-CHqoYXte.js";import"./OffsetShower-pvxB70aB.js";import"./PlotAreaShower-CC7NhsKv.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
