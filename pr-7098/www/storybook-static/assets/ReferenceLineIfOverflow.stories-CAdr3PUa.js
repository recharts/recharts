import{e}from"./iframe-BheSPRxC.js";import{R as n}from"./arrayEqualityCheck-DTJTJDIZ.js";import{C as p}from"./ComposedChart-CU5BXUNz.js";import{C as s}from"./CartesianGrid-BEc0b5n8.js";import{X as c}from"./XAxis-w4I0Dz-P.js";import{Y as f}from"./YAxis-Co--vqpb.js";import{L as l}from"./Line--7zz5i3r.js";import{R as d}from"./ReferenceLine-CahOfDPx.js";import{R as h}from"./RechartsHookInspector-BuIPrOmw.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-YxfO8nVM.js";import"./immer-Bk3tlmFk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BReu-8p6.js";import"./index-BTAK_CzP.js";import"./hooks-D7thV8Yx.js";import"./axisSelectors-Bt_ndlyL.js";import"./d3-scale-Bi7kPPR-.js";import"./zIndexSlice-RIxi073z.js";import"./renderedTicksSlice-B7gUlO0Z.js";import"./CartesianChart-oljUKRjY.js";import"./chartDataContext-CTcUXfN7.js";import"./CategoricalChart-BxAT78Yw.js";import"./CartesianAxis-BNiz-eqI.js";import"./Layer-Dnr25hkA.js";import"./Text-BUur2DfR.js";import"./DOMUtils-qoxeJE6c.js";import"./Label-DvFgjn-2.js";import"./ZIndexLayer-BR-xGhiB.js";import"./types-Ig8fwHS7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-eBHsRDRZ.js";import"./ActivePoints-Bsd3d-yb.js";import"./Dot-DYB5kbJj.js";import"./RegisterGraphicalItemId-CfZTXmBZ.js";import"./ErrorBarContext-CYeurdws.js";import"./GraphicalItemClipPath-CyqMb0de.js";import"./SetGraphicalItem-vkl4WKoz.js";import"./useAnimationId-CA-fcZvu.js";import"./getRadiusAndStrokeWidthFromDot-BDUfg5jI.js";import"./ActiveShapeUtils-CEbptTt-.js";import"./isPlainObject-DdlnvCr2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLKGSdHG.js";import"./Trapezoid-8ylyG2hR.js";import"./Sector-GkU_9DAY.js";import"./Symbols-DnaEJ_wk.js";import"./symbol-BrB1FpAX.js";import"./step-BEEMHEX_.js";import"./Curve-D5XGZpaq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-NavELH2p.js";import"./ChartSizeDimensions-Dbu0-vjG.js";import"./OffsetShower-DiJ1X-2O.js";import"./PlotAreaShower-CtIhvInc.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
