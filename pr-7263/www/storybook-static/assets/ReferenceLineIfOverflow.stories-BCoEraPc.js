import{e}from"./iframe-DyvFbeiY.js";import{R as n}from"./arrayEqualityCheck-Bn5wKa8z.js";import{C as p}from"./ComposedChart-DfTxnUhc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DwKHDwdI.js";import{X as f}from"./XAxis-B293BcKI.js";import{Y as l}from"./YAxis-D9QZuXTS.js";import{L as d}from"./Line-Dwikz1-j.js";import{R as h}from"./ReferenceLine-BPfKdunM.js";import{R as w}from"./RechartsHookInspector-DV82AArc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DGnWrc4H.js";import"./immer-BXVzTfKp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdWihcwC.js";import"./index-CNtF4wRg.js";import"./hooks-CfJmKGn6.js";import"./axisSelectors-088cVuhB.js";import"./d3-scale-CNJHznva.js";import"./zIndexSlice-Bqm6vulu.js";import"./renderedTicksSlice-CJenSa8J.js";import"./CartesianChart-CS3DBPlX.js";import"./chartDataContext-DviLklHI.js";import"./CategoricalChart-D-rA1y19.js";import"./CartesianAxis-DvrkT7dv.js";import"./Layer-CpTA_ktM.js";import"./Text-Be76LL2i.js";import"./DOMUtils-CzBYED_e.js";import"./Label-CDXCniHM.js";import"./ZIndexLayer-C1288rIw.js";import"./types-CSsXZ5tJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-COq0Y09w.js";import"./ActivePoints-Ci7sTbDq.js";import"./Dot-RjdCxHU2.js";import"./RegisterGraphicalItemId-B9D6uPLZ.js";import"./ErrorBarContext-DayA8Agl.js";import"./GraphicalItemClipPath-CYHMq85Z.js";import"./SetGraphicalItem-DiBnTnci.js";import"./useAnimationId-DwaEpfhV.js";import"./getRadiusAndStrokeWidthFromDot-Ce9nLJu3.js";import"./ActiveShapeUtils-BcQiGKd0.js";import"./isPlainObject-CQyTvYqF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ddgym3Wn.js";import"./Trapezoid-vyL8C7j7.js";import"./Sector-DWMmtBrv.js";import"./Symbols-Be2vj1mX.js";import"./symbol-BvP6gztC.js";import"./step-CqS1DS8s.js";import"./Curve-BctzKEO8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C_zDqZx9.js";import"./ChartSizeDimensions-Ca623tER.js";import"./OffsetShower-B7jjHmTv.js";import"./PlotAreaShower-B6clyZxt.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
