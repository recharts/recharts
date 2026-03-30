import{e}from"./iframe-_tOEOrTB.js";import{R as n}from"./arrayEqualityCheck-B2ATAN_K.js";import{C as p}from"./ComposedChart-BOz3Cc1U.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-x0d5UvjV.js";import{X as f}from"./XAxis-B99ydacs.js";import{Y as l}from"./YAxis-MKkirg66.js";import{L as d}from"./Line-CSH30hMe.js";import{R as h}from"./ReferenceLine-DG4rGm-0.js";import{R as w}from"./RechartsHookInspector-BgNu5TE0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-QC90EbHK.js";import"./immer-Ctu7T9Ma.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B4fVc8pz.js";import"./index-C8IxNL1D.js";import"./hooks-Dxc4ftFI.js";import"./axisSelectors-C0eqwsIc.js";import"./d3-scale-BYOnugJI.js";import"./zIndexSlice-CWqmREsN.js";import"./renderedTicksSlice-C1VyvUnW.js";import"./CartesianChart-BdgakOV8.js";import"./chartDataContext-Cj00HDaN.js";import"./CategoricalChart-uPJQTpzY.js";import"./CartesianAxis-DXWYS4eF.js";import"./Layer-DKn_t_OY.js";import"./Text-CLhNqgF1.js";import"./DOMUtils-Dp_xH288.js";import"./Label-DY2hHCUB.js";import"./ZIndexLayer-CgC8xk-g.js";import"./types-0739cztl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D3WhBtDM.js";import"./ActivePoints-UW1fO4V4.js";import"./Dot-MLQan19h.js";import"./RegisterGraphicalItemId-Dse9b0HT.js";import"./ErrorBarContext-DwAJtrMz.js";import"./GraphicalItemClipPath-DkwW047q.js";import"./SetGraphicalItem-FaJmXbmv.js";import"./useAnimationId-x2-6Yyy0.js";import"./getRadiusAndStrokeWidthFromDot-DShwyyA4.js";import"./ActiveShapeUtils-XLBlJtUm.js";import"./isPlainObject-jyHTfG6K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-hCYFffPl.js";import"./Trapezoid-CqizPLb6.js";import"./Sector-Cruz6N8W.js";import"./Symbols-CXub2t2y.js";import"./symbol-BgrsGtcm.js";import"./step-rG5mhkUn.js";import"./Curve-BgKgFd6U.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BRj_naI3.js";import"./ChartSizeDimensions-DuqOm4SH.js";import"./OffsetShower-BuTy_q5n.js";import"./PlotAreaShower-DHEJGydW.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
