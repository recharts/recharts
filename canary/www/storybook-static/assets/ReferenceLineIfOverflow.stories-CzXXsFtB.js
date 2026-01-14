import{e}from"./iframe-_im4GKTL.js";import{R as n}from"./arrayEqualityCheck-DQWePApg.js";import{C as p}from"./ComposedChart-BY8obHgx.js";import{C as s}from"./CartesianGrid-DiDHt8mA.js";import{X as c}from"./XAxis-BtqRyYI3.js";import{Y as f}from"./YAxis-D-u8YWMK.js";import{L as l}from"./Line-0hzLwUmh.js";import{R as d}from"./ReferenceLine-C_MTbKRu.js";import{R as h}from"./RechartsHookInspector-2hFEojhh.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CaxhqgES.js";import"./PolarUtils-DcWiW1XO.js";import"./RechartsWrapper-DKFQy6Ae.js";import"./hooks-DKOVFqS5.js";import"./axisSelectors-DpIDWeTq.js";import"./zIndexSlice-CPIWfeLh.js";import"./CartesianChart-DG1wjONq.js";import"./chartDataContext-DX2vSSsK.js";import"./CategoricalChart-CQUZMGEq.js";import"./CartesianAxis-BZEJptN1.js";import"./Layer-ojK6bjXb.js";import"./Text-DEtZyA_I.js";import"./DOMUtils-BcupyZUP.js";import"./Label-CTy8eywr.js";import"./ZIndexLayer-DmWCVoEY.js";import"./types-CFuB44L5.js";import"./ReactUtils-CAkOWUwD.js";import"./ActivePoints-DX8NdDb8.js";import"./Dot-D7h6v8mz.js";import"./RegisterGraphicalItemId-B4K3Ftz3.js";import"./ErrorBarContext-NodAal-E.js";import"./GraphicalItemClipPath-BfdvnoI7.js";import"./SetGraphicalItem-fuqPKC-n.js";import"./useAnimationId-iCdU_Q_k.js";import"./getRadiusAndStrokeWidthFromDot-ClQkEbgX.js";import"./ActiveShapeUtils-rIph4crd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ejGTCKcw.js";import"./Trapezoid-C1OI6suu.js";import"./Sector-BGg8SpOK.js";import"./Symbols-aMSa3fiu.js";import"./Curve-CjWJcBC1.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B3zuwbjl.js";import"./ChartSizeDimensions-Db8YW_qh.js";import"./OffsetShower-C0adziBs.js";import"./PlotAreaShower-BEBglPgm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
