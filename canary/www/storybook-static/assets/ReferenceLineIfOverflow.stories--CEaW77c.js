import{R as e}from"./iframe-CuGhPmlk.js";import{R as a}from"./zIndexSlice-BOf55cXv.js";import{C as p}from"./ComposedChart-BaRxWhmE.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dm2DOXaA.js";import{X as f}from"./XAxis-CKjURUro.js";import{Y as l}from"./YAxis-DLBgWodt.js";import{L as d}from"./Line-DF_AoKL_.js";import{R as h}from"./ReferenceLine-CypBSoCI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-JU216Ibw.js";import"./throttle-D0-4r1vg.js";import"./index-D9ZLEpwh.js";import"./index-CLkWjMz0.js";import"./RechartsWrapper-CkD6y7S6.js";import"./axisSelectors-Bzh2qDn8.js";import"./polarAxisSelectors-BwdXKLtW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH8f3Idv.js";import"./index-pU8qqa02.js";import"./index--76JpPy7.js";import"./renderedTicksSlice-DbYgrNox.js";import"./index-CxvEfTaS.js";import"./CartesianChart-CEtK8vTY.js";import"./ZIndexPortal-ClQ_oNM2.js";import"./CategoricalChart-DiUb-iYo.js";import"./CartesianAxis-D0E-Hq6W.js";import"./Layer-C-miwaoG.js";import"./Text-L-8TUXNX.js";import"./pageBackground-DCo2yzAB.js";import"./ZIndexLayer-BtXB3z2o.js";import"./Label-B62wTY7D.js";import"./types-B0LhVrLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Cv9VJ7_-.js";import"./step-Bpop3Ls-.js";import"./path-DyVhHtw_.js";import"./LabelList-T4o6_Eqe.js";import"./ActivePoints-Bn3lQzBu.js";import"./Dot-DK7HsTYP.js";import"./activeStyles-U82greWp.js";import"./useAnimationId-DwU2Zwh7.js";import"./dataEntryStyles-DpUTp7qZ.js";import"./Symbols-DiagS28o.js";import"./symbol-CetSzj0T.js";import"./ErrorBarContext-B35UIqZH.js";import"./SetGraphicalItem-Csvl1Ioj.js";import"./getRadiusAndStrokeWidthFromDot-CE9VpvC8.js";import"./ActiveShapeUtils-BpXA90LR.js";import"./useEffectiveDataKey-Q10jxXsl.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
