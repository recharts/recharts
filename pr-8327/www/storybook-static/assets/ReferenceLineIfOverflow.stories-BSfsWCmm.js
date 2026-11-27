import{R as e}from"./iframe-2f2w1eP7.js";import{R as a}from"./zIndexSlice-CjJDCeK0.js";import{C as p}from"./ComposedChart-D2F9GDNP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-TBapx3Gf.js";import{X as f}from"./XAxis-CJ4nXsTf.js";import{Y as l}from"./YAxis-CAInNDnd.js";import{L as d}from"./Line-5fH2CL9K.js";import{R as h}from"./ReferenceLine-DA3jZQJH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CGl449JI.js";import"./get-CjriyByo.js";import"./throttle-b8Y6KxZo.js";import"./index-C9gJxZVs.js";import"./index-Ftdy-Ulz.js";import"./RechartsWrapper-BnbJXMBG.js";import"./axisSelectors-D3RC08dV.js";import"./polarAxisSelectors--pE3aPXl.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cc08ccIM.js";import"./index-6HopGisC.js";import"./index-CczUKsLU.js";import"./renderedTicksSlice-Bc2u_l9O.js";import"./index-fhAHbGs4.js";import"./fillDefinitions-CQk55RgO.js";import"./CartesianChart-DpJaOFiF.js";import"./chartDataContext-D-ZzsBgN.js";import"./CategoricalChart-BX6OynRn.js";import"./CartesianAxis-Bgf8P4J0.js";import"./Layer-BbIS_iGu.js";import"./Text-Ch8rCVXH.js";import"./ZIndexLayer-UYyaz2px.js";import"./Label-CxsWdT_n.js";import"./types-DRiMB5bf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-AuV9g_SF.js";import"./Curve-mX17fPzt.js";import"./step-DiSsdMnX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CX3wrxT3.js";import"./ActivePoints-Bv6CckHB.js";import"./Dot-BR-A3ViM.js";import"./activeStyles-fmqkmIUl.js";import"./useAnimationId-CyAJnZP0.js";import"./Symbols-fsmg-V93.js";import"./symbol-CyxV486p.js";import"./ErrorBarContext-BMvZMoH6.js";import"./SetGraphicalItem-12XTWwtV.js";import"./ActiveShapeUtils-C_e7Ka4v.js";import"./useEffectiveDataKey-BS5IJ5Is.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
