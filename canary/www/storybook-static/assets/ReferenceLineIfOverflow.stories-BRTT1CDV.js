import{e}from"./iframe-IYV0DWV_.js";import{R as n}from"./arrayEqualityCheck-Bd9te8h5.js";import{C as p}from"./ComposedChart--vw2gJgx.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-COBVU_Zt.js";import{X as f}from"./XAxis-D3Ygop7A.js";import{Y as l}from"./YAxis-CWiUIZ-q.js";import{L as d}from"./Line-B7tqEV9l.js";import{R as h}from"./ReferenceLine-PtoIPgmL.js";import{R as w}from"./RechartsHookInspector-F4E7g6Er.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DW10euc9.js";import"./immer-C5y28x1y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CiV29pyr.js";import"./index-C-_sV-M9.js";import"./hooks-CYsU2mzH.js";import"./axisSelectors-D7Iryj26.js";import"./d3-scale-gSH8fZ7r.js";import"./zIndexSlice-DeGAM3mJ.js";import"./renderedTicksSlice-oy8dviAt.js";import"./CartesianChart-DeU7jjaP.js";import"./chartDataContext-DpSq4A2Y.js";import"./CategoricalChart-C5NFGp4t.js";import"./CartesianAxis-Bs0B3eSH.js";import"./Layer-BlQSfqc0.js";import"./Text-CljAKOCB.js";import"./DOMUtils-lNitbhsw.js";import"./Label-Ue-uNxNq.js";import"./ZIndexLayer-CuF5EOOK.js";import"./types-wRdleKl8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils--lF51C7F.js";import"./ActivePoints-CQCkaYoR.js";import"./Dot-BVl4fcd6.js";import"./RegisterGraphicalItemId-hvr3G_mi.js";import"./ErrorBarContext-BIw-Eurm.js";import"./GraphicalItemClipPath-CJMuL245.js";import"./SetGraphicalItem-DeMSd0nu.js";import"./useAnimationId-Bm2M_Pz2.js";import"./getRadiusAndStrokeWidthFromDot-BrQDVO0Z.js";import"./ActiveShapeUtils-Bagg-bQt.js";import"./isPlainObject-wylrXpJQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxtnmBb5.js";import"./Trapezoid-82F1yuXU.js";import"./Sector-CKN5Z_1V.js";import"./Symbols-3dp5_ZFf.js";import"./symbol-DNJG8l3z.js";import"./step-A9nbxnob.js";import"./Curve-DbGLQtgf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DlrvcT1S.js";import"./ChartSizeDimensions-qhfaRB1O.js";import"./OffsetShower-CVu4qLNi.js";import"./PlotAreaShower-B-AaQufv.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
