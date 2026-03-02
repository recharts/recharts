import{e}from"./iframe-VPJyTU3C.js";import{R as n}from"./arrayEqualityCheck-CXN3l8IH.js";import{C as p}from"./ComposedChart-BcIOapvV.js";import{C as s}from"./CartesianGrid-BbDsYPkG.js";import{X as c}from"./XAxis-3pLP0gWY.js";import{Y as f}from"./YAxis-wNsuba1v.js";import{L as l}from"./Line-YSIAJHaU.js";import{R as d}from"./ReferenceLine-FWUeC00-.js";import{R as h}from"./RechartsHookInspector-vDuc6y-U.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvWNwQsu.js";import"./immer-BfJiACOe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCl2bEfe.js";import"./index-DQ7yK4Y3.js";import"./hooks-nSftgnTX.js";import"./axisSelectors-saXNBwIQ.js";import"./d3-scale-DGhAz-7E.js";import"./zIndexSlice-Dq9melht.js";import"./renderedTicksSlice-Eh1g0N0V.js";import"./CartesianChart-hKkJhyE8.js";import"./chartDataContext-cb_R-PX2.js";import"./CategoricalChart-Cn-cyvDx.js";import"./CartesianAxis-CiyiTEma.js";import"./Layer-7CDZtGSl.js";import"./Text-DR-p8moo.js";import"./DOMUtils-CEVaRraF.js";import"./Label-9AdH7Mzz.js";import"./ZIndexLayer-Bu1rH0K3.js";import"./types-CXB2nDIk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DXFU76qs.js";import"./ActivePoints-BG43CjVF.js";import"./Dot-DKFvoc5_.js";import"./RegisterGraphicalItemId-Ba6mil3n.js";import"./ErrorBarContext-DWym-0i0.js";import"./GraphicalItemClipPath-CQ7JIwC5.js";import"./SetGraphicalItem-Dq4tocaN.js";import"./useAnimationId-83t5rQCc.js";import"./getRadiusAndStrokeWidthFromDot-CLsj08-5.js";import"./ActiveShapeUtils-BDCuCLeM.js";import"./isPlainObject-Cb28tfBr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cpr74bo7.js";import"./Trapezoid-CegYn91N.js";import"./Sector-CrGccqha.js";import"./Symbols-ByNtTTT8.js";import"./symbol-DppUUTIu.js";import"./step-AwB8z33l.js";import"./Curve-C7OUetYn.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C07bsWnd.js";import"./ChartSizeDimensions-CmjLLHly.js";import"./OffsetShower-3s1Vs-j5.js";import"./PlotAreaShower-B0po3Iq4.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
