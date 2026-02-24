import{e}from"./iframe-zwlZ9sO1.js";import{R as n}from"./arrayEqualityCheck-CJjag0zJ.js";import{C as p}from"./ComposedChart-B-ZDBPB-.js";import{C as s}from"./CartesianGrid-B642OziP.js";import{X as c}from"./XAxis-CnAuA4rg.js";import{Y as f}from"./YAxis-Dth2njTV.js";import{L as l}from"./Line-CfwUAClX.js";import{R as d}from"./ReferenceLine-mmgk1dtE.js";import{R as h}from"./RechartsHookInspector-DHSpqDma.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQQGnYzX.js";import"./immer-BiA4uk1x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3nGIabu.js";import"./index-eUA2bMWQ.js";import"./hooks-DVdpADFp.js";import"./axisSelectors-B00kI0GG.js";import"./d3-scale-5RI03Ty3.js";import"./zIndexSlice-oDtJWVOP.js";import"./renderedTicksSlice-DgjXgpF0.js";import"./CartesianChart-DC-pRf_l.js";import"./chartDataContext-7-VMSKg2.js";import"./CategoricalChart-BEqoCUOW.js";import"./CartesianAxis--bPf-qQg.js";import"./Layer-BoZ3FYfy.js";import"./Text-tkFuu0zo.js";import"./DOMUtils-p8GgN5aM.js";import"./Label-IHkKI2op.js";import"./ZIndexLayer-DApcsQWW.js";import"./types-B9pmE4ka.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-KsuQNZ47.js";import"./ActivePoints-DGPPefSL.js";import"./Dot-D8W5fYzP.js";import"./RegisterGraphicalItemId-HxfmjJrU.js";import"./ErrorBarContext-D80HzYFV.js";import"./GraphicalItemClipPath-DA28tNWG.js";import"./SetGraphicalItem-BCd9_sGO.js";import"./useAnimationId-BwEUZfoI.js";import"./getRadiusAndStrokeWidthFromDot-DJU7uBWj.js";import"./ActiveShapeUtils-DJB4inM1.js";import"./isPlainObject-DWYFOBoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsLE6Qwo.js";import"./Trapezoid-Dh6fdRWC.js";import"./Sector-1S-nbggX.js";import"./Symbols-ChQBVl9-.js";import"./symbol-By180QeN.js";import"./step-DUUdO3U1.js";import"./Curve-D-syDesq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CfDL0XYd.js";import"./ChartSizeDimensions-DUwgzJDd.js";import"./OffsetShower-CZf4Y8fK.js";import"./PlotAreaShower-B03de4RT.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
