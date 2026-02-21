import{e}from"./iframe-_bxOXoO9.js";import{R as n}from"./arrayEqualityCheck-B7kPjOe4.js";import{C as p}from"./ComposedChart-CwEnGBQS.js";import{C as s}from"./CartesianGrid-CccUh1NJ.js";import{X as c}from"./XAxis-B25iHqjD.js";import{Y as f}from"./YAxis-A1NUb23w.js";import{L as l}from"./Line-CEP2Y-ve.js";import{R as d}from"./ReferenceLine-JjRP9Ice.js";import{R as h}from"./RechartsHookInspector-CQ4RIQ5B.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D0m7DKS7.js";import"./immer-4xgaWIU1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CLtRnOh5.js";import"./index-BFgxmFq6.js";import"./hooks-Cyo7uYKI.js";import"./axisSelectors-BABYG139.js";import"./d3-scale-CMcXs8cL.js";import"./zIndexSlice-YmRlXVtY.js";import"./renderedTicksSlice-BhRx_d4S.js";import"./CartesianChart-BeL_fJ-U.js";import"./chartDataContext-CdQCRTNV.js";import"./CategoricalChart-5uJ4ezdK.js";import"./CartesianAxis-B0aXIuqq.js";import"./Layer-B4OQX5mX.js";import"./Text-BcYFtKsN.js";import"./DOMUtils-MxvGotSE.js";import"./Label-puZUAwbJ.js";import"./ZIndexLayer-B8XFMXb9.js";import"./types-CaD-AAbb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BFPf_n2z.js";import"./ActivePoints-C_CIVq-A.js";import"./Dot-CDhDmUCL.js";import"./RegisterGraphicalItemId-CTB49Iya.js";import"./ErrorBarContext-3ohsNMPc.js";import"./GraphicalItemClipPath-5qnulUvK.js";import"./SetGraphicalItem-BJ4aCabI.js";import"./useAnimationId-CniUVvXd.js";import"./getRadiusAndStrokeWidthFromDot-ZajgNGGY.js";import"./ActiveShapeUtils-DYBOuNOh.js";import"./isPlainObject-NBybHA4D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaX2mvZh.js";import"./Trapezoid-D0RHyHyZ.js";import"./Sector-Dr45uA-k.js";import"./Symbols-DC5bGOMu.js";import"./symbol-B3FMMLJa.js";import"./step-eq8OAlUh.js";import"./Curve-lVDO4rto.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D6dEx3op.js";import"./ChartSizeDimensions-DiDEOzCF.js";import"./OffsetShower-DtnIakTn.js";import"./PlotAreaShower-BaYMr28N.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
