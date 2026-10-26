import{R as e}from"./iframe-BfpZEj1J.js";import{R as a}from"./zIndexSlice-DN9OEqSU.js";import{C as p}from"./ComposedChart-sYHyq_r0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bgzyrck0.js";import{X as f}from"./XAxis-CaBw27aw.js";import{Y as l}from"./YAxis-BjTIc8Tf.js";import{L as d}from"./Line-XMFg_Gfd.js";import{R as h}from"./ReferenceLine-C-Nk_oqQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-RgMSUlUO.js";import"./throttle-of37Yc3d.js";import"./index-lWFIbTSl.js";import"./index-BjD6SDXa.js";import"./RechartsWrapper-DgjurVnr.js";import"./axisSelectors-DdEmqG6y.js";import"./polarAxisSelectors-D5cajvkJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DAHzu_9m.js";import"./index-BZ99J-Wl.js";import"./index-Wmom0di-.js";import"./renderedTicksSlice-DAkeOnVU.js";import"./index-CWp6QAhS.js";import"./CartesianChart-BMikS9ic.js";import"./chartDataContext-CDRBSiAQ.js";import"./CategoricalChart-AcKzUHIb.js";import"./CartesianAxis-ChtcS9gQ.js";import"./Layer-CLoP9xkX.js";import"./Text-C5CT5OBg.js";import"./pageBackground-DtTiB4cX.js";import"./useId-CWVkYNpQ.js";import"./ZIndexLayer-BnqS0DyP.js";import"./Label-Cr-kSyez.js";import"./dataEntryStyles-B31S2PZ0.js";import"./types-Dmnhw6yf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DcgjXnaH.js";import"./step-BIMKm40t.js";import"./path-DyVhHtw_.js";import"./activeStyles--hoQ05pe.js";import"./useAnimationId-CO5y2Yl_.js";import"./ActivePoints-C1WdAM52.js";import"./Dot-BgvZVx9M.js";import"./Symbols-DlN3yTjK.js";import"./symbol-WMObR4nv.js";import"./RegisterGraphicalItemId-B270wFxD.js";import"./ErrorBarContext-CGuCRP-n.js";import"./SetGraphicalItem-BEEPPsSN.js";import"./getRadiusAndStrokeWidthFromDot-Cr9Vi9Z2.js";import"./ActiveShapeUtils-CX9J7Siy.js";import"./useEffectiveDataKey-CijXZAWm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
