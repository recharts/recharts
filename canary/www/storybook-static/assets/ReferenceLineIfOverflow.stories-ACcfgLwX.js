import{e}from"./iframe-C6Uu7pTN.js";import{R as n}from"./arrayEqualityCheck-CwnCehta.js";import{C as p}from"./ComposedChart-ChY5wym6.js";import{C as s}from"./CartesianGrid-CG2ujgu_.js";import{X as c}from"./XAxis-DYlJSFAX.js";import{Y as f}from"./YAxis-BFKySEYM.js";import{L as l}from"./Line-DBBe-eb5.js";import{R as d}from"./ReferenceLine-CyNW8omJ.js";import{R as h}from"./RechartsHookInspector-DK8LEn3K.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BFs3c8XE.js";import"./immer-BQbVNYZa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGLJriAG.js";import"./index-86WMnZat.js";import"./hooks-CPOFWC30.js";import"./axisSelectors-CvaRXDpT.js";import"./d3-scale-jTFhmIQC.js";import"./zIndexSlice-TqQJPXuj.js";import"./renderedTicksSlice-BbR9AX3S.js";import"./CartesianChart-Df2fxLuG.js";import"./chartDataContext-78iSRkXw.js";import"./CategoricalChart-DiJF7AWc.js";import"./CartesianAxis-CSfXt17s.js";import"./Layer-lr_Myov5.js";import"./Text-D3aSBSTN.js";import"./DOMUtils-C3fhmnrv.js";import"./Label-BWxvsGM2.js";import"./ZIndexLayer-BGg3LDJH.js";import"./types-LVTyj2cP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-De_gzh57.js";import"./ActivePoints-B8JphRK3.js";import"./Dot-Dz4sxWoj.js";import"./RegisterGraphicalItemId-DjVfXSwO.js";import"./ErrorBarContext-_q0KzTsJ.js";import"./GraphicalItemClipPath-enSk32wK.js";import"./SetGraphicalItem-BpIjVc9U.js";import"./useAnimationId-B1cyGcAu.js";import"./getRadiusAndStrokeWidthFromDot-fX_t_PhE.js";import"./ActiveShapeUtils-H4GnlVn4.js";import"./isPlainObject-BW25J73Y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DgIvpV-o.js";import"./Trapezoid-Cqle6yIN.js";import"./Sector-pDHcay4d.js";import"./Symbols-CHqyFdvp.js";import"./symbol-B6JyGFlS.js";import"./step-DybRLWtN.js";import"./Curve-D9DtbUHf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bw3U1Qlv.js";import"./ChartSizeDimensions-Bo_lxHZc.js";import"./OffsetShower-CHRjZmG4.js";import"./PlotAreaShower-BfZVYUAY.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
