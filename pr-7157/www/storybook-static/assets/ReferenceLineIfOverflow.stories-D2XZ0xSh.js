import{e}from"./iframe-C-50EfA7.js";import{R as n}from"./arrayEqualityCheck-C4RXKFVZ.js";import{C as p}from"./ComposedChart-Ck4Ct4W9.js";import{C as s}from"./CartesianGrid-BmEmiUwG.js";import{X as c}from"./XAxis-90LmsjPO.js";import{Y as f}from"./YAxis-D2KQalCb.js";import{L as l}from"./Line-Ch8yl9X2.js";import{R as d}from"./ReferenceLine-k1EihaiF.js";import{R as h}from"./RechartsHookInspector-B1kq2kh2.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyfkEz9s.js";import"./immer-4zqQKvZM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4XlXwyP0.js";import"./index-DgChmAdf.js";import"./hooks-B8m9isT1.js";import"./axisSelectors-CpmXiDAA.js";import"./d3-scale-B6NfZS7A.js";import"./zIndexSlice-B4bKHPxl.js";import"./renderedTicksSlice-DmzhzySp.js";import"./CartesianChart-CGym5D6x.js";import"./chartDataContext-CVjjKugU.js";import"./CategoricalChart-BhkXQps_.js";import"./CartesianAxis-CA7owa59.js";import"./Layer-CjzK_mik.js";import"./Text-Bjbs5yvb.js";import"./DOMUtils-BJ8awGJ7.js";import"./Label-D4RxJjz3.js";import"./ZIndexLayer-CEEBNKDA.js";import"./types--ddu9raC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CO3iMEw6.js";import"./ActivePoints-DJzgHe1Z.js";import"./Dot-DJCM9NbX.js";import"./RegisterGraphicalItemId-CwXq2ePK.js";import"./ErrorBarContext-DKJlMfPG.js";import"./GraphicalItemClipPath-BG4MlZY6.js";import"./SetGraphicalItem-k5xaJlVz.js";import"./useAnimationId-DEOKae8V.js";import"./getRadiusAndStrokeWidthFromDot-Bfo0EhLe.js";import"./ActiveShapeUtils-BQKoRXiq.js";import"./isPlainObject-C7QiIDX3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DylkAvEv.js";import"./Trapezoid-CVfMGfer.js";import"./Sector-BqYe_ni4.js";import"./Symbols-DEUKzo69.js";import"./symbol-B7uWDEKo.js";import"./step-D-hsF5Bn.js";import"./Curve-BrkfeITg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D0wRUjZQ.js";import"./ChartSizeDimensions-CLZ_38hy.js";import"./OffsetShower-B2bw8EI-.js";import"./PlotAreaShower-GeIkbIXn.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
