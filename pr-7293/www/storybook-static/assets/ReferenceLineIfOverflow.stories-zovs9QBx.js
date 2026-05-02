import{e}from"./iframe-CGwnqAI9.js";import{R as n}from"./arrayEqualityCheck-DRh0NsZa.js";import{C as p}from"./ComposedChart-C3W32EcH.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BrzCw4F9.js";import{X as f}from"./XAxis-B1wOh-_6.js";import{Y as l}from"./YAxis-DQ_Ub3Le.js";import{L as d}from"./Line-hsHA11JF.js";import{R as h}from"./ReferenceLine-DY66y5hB.js";import{R as w}from"./RechartsHookInspector-Dp5vB4hQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DSTq7oxQ.js";import"./immer-DfOKcAuw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DByz9jGi.js";import"./index-mavG575g.js";import"./hooks-CyDmPBvG.js";import"./axisSelectors-BGY1T7LG.js";import"./d3-scale-DlZgn0s2.js";import"./zIndexSlice-BTBhIRz7.js";import"./renderedTicksSlice-C0ADS2ij.js";import"./CartesianChart-Bbfh0WUo.js";import"./chartDataContext-oPYA1VCq.js";import"./CategoricalChart-COt4unt0.js";import"./CartesianAxis-4LCb4x4u.js";import"./Layer-CQ6uqOgk.js";import"./Text-DNmyQGES.js";import"./DOMUtils-nZK1ZF4e.js";import"./Label-CJpeNkBK.js";import"./ZIndexLayer-CMaPWngm.js";import"./types-VBg1tlke.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CbJaRrjx.js";import"./ActivePoints-Cr6dU73k.js";import"./Dot-0lNFu7iq.js";import"./RegisterGraphicalItemId-nbnlv4b-.js";import"./ErrorBarContext-CxWaFe4Q.js";import"./GraphicalItemClipPath-kWf0wfBs.js";import"./SetGraphicalItem-p36bNdDU.js";import"./useAnimationId-DHwy2PIZ.js";import"./getRadiusAndStrokeWidthFromDot-8id4PXjH.js";import"./ActiveShapeUtils-CKeH7i0X.js";import"./isPlainObject-BF1Vp7m2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsqGVbsk.js";import"./Trapezoid-BXyomBoy.js";import"./Sector-NwDh2164.js";import"./Symbols-CWdafSUI.js";import"./symbol-D9RrWTM2.js";import"./step-BVKFw9bQ.js";import"./Curve-kVtEDQbb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-JaLX6-zQ.js";import"./ChartSizeDimensions-DcTb07cJ.js";import"./OffsetShower-DNDx_7Gv.js";import"./PlotAreaShower-C1OT31tE.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
