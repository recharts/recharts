import{R as e}from"./iframe-CUvNAvus.js";import{R as a}from"./zIndexSlice-D-rH8vD1.js";import{C as p}from"./ComposedChart-CpK6zK-b.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-O1nKehQ1.js";import{X as f}from"./XAxis-CM346fVw.js";import{Y as l}from"./YAxis-BY3XsiJB.js";import{L as d}from"./Line-DZZP5hqp.js";import{R as h}from"./ReferenceLine-Kf6ElH5q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-3SUBoYwM.js";import"./throttle-CYllgfiW.js";import"./index-Cp_pTOca.js";import"./index-CAWn2Z9i.js";import"./RechartsWrapper-BjljmlV4.js";import"./axisSelectors-Xjgkf-2T.js";import"./polarAxisSelectors-B2l_kUqX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CA_D1sKG.js";import"./index-BMOBZiEl.js";import"./index-58JkOBJX.js";import"./renderedTicksSlice-A7Y2iS9L.js";import"./index-BkH-1jYD.js";import"./fillDefinitions-Dr0Z3ytP.js";import"./CartesianChart-cFWvwfAO.js";import"./chartDataContext-CYuQBQZt.js";import"./CategoricalChart-BW_ZnICB.js";import"./CartesianAxis-BL1UgLf5.js";import"./Layer-CoFmyLu_.js";import"./Text-BRc4p81h.js";import"./ZIndexLayer-CPI_Yi1m.js";import"./Label-B7OEZM_6.js";import"./types-CsWgfhSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-BfiOw2M0.js";import"./Curve-C_xw8Bh0.js";import"./step-DRuHJRtS.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-C_QXXqcb.js";import"./ActivePoints-d-D6hIRO.js";import"./Dot-Dg1tnWhx.js";import"./activeStyles-DPihfCdA.js";import"./useAnimationId-BneLXqad.js";import"./Symbols-CmJ419_u.js";import"./symbol-CLRUs3HG.js";import"./ErrorBarContext-C0H1v8By.js";import"./SetGraphicalItem-DRGWCaTd.js";import"./ActiveShapeUtils-Davo8QQp.js";import"./useEffectiveDataKey-BAjzW2qT.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
