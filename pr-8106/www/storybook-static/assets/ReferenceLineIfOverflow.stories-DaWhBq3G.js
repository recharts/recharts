import{R as e}from"./iframe-B_MIDKz_.js";import{R as a}from"./zIndexSlice-BRdFs8ID.js";import{C as p}from"./ComposedChart-BLBMKU0r.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C_d4KfQI.js";import{X as f}from"./XAxis-C4lIERbq.js";import{Y as l}from"./YAxis-D3fzxS21.js";import{L as d}from"./Line-CxvYc4C3.js";import{R as h}from"./ReferenceLine-D1Q2oB3p.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-xzz5mEiC.js";import"./throttle-BEqz9r6e.js";import"./index-BrIcEx9Z.js";import"./index-BOmAjlKN.js";import"./RechartsWrapper-CqGFDY60.js";import"./axisSelectors-Dl7meOBx.js";import"./polarAxisSelectors-mzwQQ_dU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-TVFiOeXq.js";import"./index-DPAMyEeL.js";import"./index-CwOCWg00.js";import"./renderedTicksSlice-yOWeuXiw.js";import"./index-BKlyB3jB.js";import"./CartesianChart-_H9IG9R2.js";import"./ZIndexPortal-DjuZ3mTH.js";import"./CategoricalChart-D_eNWRTX.js";import"./CartesianAxis-ZYJAAdvA.js";import"./Layer-DNwByRxz.js";import"./Text-B7cqpu59.js";import"./pageBackground-5b67NUgV.js";import"./ZIndexLayer-CUoHFkKf.js";import"./Label-CENIwYcD.js";import"./types-B5hVBX50.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-9U6noJF7.js";import"./step-Bj2YjaOf.js";import"./path-DyVhHtw_.js";import"./LabelList-BZln5lTY.js";import"./ActivePoints-rPg8bsf1.js";import"./Dot-COTCbAgg.js";import"./activeStyles-CDqKbiIO.js";import"./useAnimationId-BYTiB8_B.js";import"./dataEntryStyles-BFC38uYF.js";import"./Symbols-C4T4jjYn.js";import"./symbol-D75a70A4.js";import"./ErrorBarContext-Dwk9fL5w.js";import"./SetGraphicalItem-vDiBonc7.js";import"./getRadiusAndStrokeWidthFromDot-DE4AoGFo.js";import"./ActiveShapeUtils-D5xg6B3r.js";import"./useEffectiveDataKey-CNJBjtBe.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
