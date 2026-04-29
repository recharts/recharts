import{e}from"./iframe-BDbjAAY0.js";import{R as n}from"./arrayEqualityCheck-DJY85fxA.js";import{C as p}from"./ComposedChart-DUpW5Dqy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-UHIgoZEp.js";import{X as f}from"./XAxis-DCFLoNQ-.js";import{Y as l}from"./YAxis-DaSpqUSS.js";import{L as d}from"./Line-B--5SyW6.js";import{R as h}from"./ReferenceLine-CGZXHgYM.js";import{R as w}from"./RechartsHookInspector-l9vgHPs1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-Zx47ck.js";import"./immer-3ylQEXI_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Gh-MCRwt.js";import"./index-BhpTR8oZ.js";import"./hooks-C0v4GivV.js";import"./axisSelectors-DbWMAUln.js";import"./d3-scale-BNnaBGak.js";import"./zIndexSlice-CHJt3ZwD.js";import"./renderedTicksSlice-CKF1aMX1.js";import"./CartesianChart-CLKXkeKc.js";import"./chartDataContext-BKhnDKi8.js";import"./CategoricalChart-DHzD4_v9.js";import"./CartesianAxis-Cy9ephC4.js";import"./Layer-ChHYMtjc.js";import"./Text-BIZLV0ge.js";import"./DOMUtils-BrS2Cx0f.js";import"./Label-CjqdpviA.js";import"./ZIndexLayer-DzwMAaCJ.js";import"./types-rcyNgq1E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BoM_s_He.js";import"./ActivePoints-ChWVh6u7.js";import"./Dot-CKhpqWMa.js";import"./RegisterGraphicalItemId-C7xusUhZ.js";import"./ErrorBarContext-CdZbKyaL.js";import"./GraphicalItemClipPath-DAX0DDhK.js";import"./SetGraphicalItem-BNU0IRAh.js";import"./useAnimationId--rOGa3cY.js";import"./getRadiusAndStrokeWidthFromDot-DcUffzmW.js";import"./ActiveShapeUtils-NUFnhrmW.js";import"./isPlainObject-BaMZfXSR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D6qTYq9W.js";import"./Trapezoid-DbFTD1xK.js";import"./Sector-Bpj1QdoM.js";import"./Symbols-DjgjaJLS.js";import"./symbol-CPmvNDGT.js";import"./step-EtEDGKHl.js";import"./Curve-0uMvsclI.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-s419WJjU.js";import"./ChartSizeDimensions-DpPbcXoW.js";import"./OffsetShower-0WW1yvr8.js";import"./PlotAreaShower-BpI_n9Qg.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
