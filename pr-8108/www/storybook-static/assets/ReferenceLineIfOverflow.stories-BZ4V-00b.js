import{R as e}from"./iframe-6K1b1-eT.js";import{R as a}from"./zIndexSlice-B780JRIC.js";import{C as p}from"./ComposedChart-B8GwPjuZ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BKiU5nyq.js";import{X as f}from"./XAxis-ClhB_79n.js";import{Y as l}from"./YAxis-_GZI3dYv.js";import{L as d}from"./Line-CKyMQ0XF.js";import{R as h}from"./ReferenceLine-Bqzr7Q-j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BYoWz9Yk.js";import"./throttle-CBl9h_oH.js";import"./index-Crbtmu02.js";import"./index-DtOoPLNq.js";import"./RechartsWrapper-DqVTXzd2.js";import"./axisSelectors-C-rSKBiJ.js";import"./polarAxisSelectors-DAIX196M.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-vHo5DJBH.js";import"./index-fwe0fbm7.js";import"./index-C8-Ylk7e.js";import"./renderedTicksSlice-DsuMbTii.js";import"./index-EJ_yhvZY.js";import"./CartesianChart-Cvo7HdWy.js";import"./ZIndexPortal-wkZ6Ra_J.js";import"./CategoricalChart-CqHWKoUt.js";import"./CartesianAxis-D2Tqoy9W.js";import"./Layer-CJqJ-HtM.js";import"./Text-CdUlZS4M.js";import"./pageBackground-j7FwZ6MF.js";import"./ZIndexLayer-BCfq-6yJ.js";import"./Label-BWjzWDJx.js";import"./types-O5YDoWOS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BTrtI1QS.js";import"./step-nJPm-9z_.js";import"./path-DyVhHtw_.js";import"./LabelList-Da0m2dvB.js";import"./ActivePoints-DfBmAS04.js";import"./Dot-mjfNbHvX.js";import"./activeStyles-C1gmhpCf.js";import"./useAnimationId-DP-ttVRU.js";import"./dataEntryStyles-DGPpD66W.js";import"./Symbols-j-UxEopj.js";import"./symbol-Ccjplwna.js";import"./ErrorBarContext-BrR5ewV-.js";import"./SetGraphicalItem-CxuWSH9Y.js";import"./getRadiusAndStrokeWidthFromDot-9YrPK3Nw.js";import"./ActiveShapeUtils-9jaloMvW.js";import"./useEffectiveDataKey-Cqgp5Kke.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
