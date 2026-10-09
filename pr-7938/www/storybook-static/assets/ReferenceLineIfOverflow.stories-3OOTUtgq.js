import{R as e}from"./iframe-DuKrJ0zn.js";import{R as a}from"./zIndexSlice-CLjLalaX.js";import{C as p}from"./ComposedChart-1NZsUFmO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DwCM9b18.js";import{X as f}from"./XAxis-DcN8Db4p.js";import{Y as l}from"./YAxis-DQojOnyt.js";import{L as d}from"./Line-foXAM9pQ.js";import{R as h}from"./ReferenceLine-IwO0t94b.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DtzmWgqu.js";import"./index-UXVF2SDl.js";import"./index--f_yOVNJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-teTym_le.js";import"./isWellBehavedNumber-C1SokatK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEffPtCf.js";import"./axisSelectors-C-iDc9ZD.js";import"./d3-scale-DZyfBumm.js";import"./index-Bw0d1gq_.js";import"./index-CQPSgdXH.js";import"./renderedTicksSlice-DC-eZxTj.js";import"./index-BP-prfso.js";import"./CartesianChart-Dmo_0Xna.js";import"./chartDataContext-UIg6E7lh.js";import"./CategoricalChart-C3GMMeRH.js";import"./CartesianAxis-KhOJh8Ny.js";import"./Layer-DzPACqXk.js";import"./Text-BsbcFYx2.js";import"./DOMUtils-Bn1l__ER.js";import"./useId-DlXJwOUw.js";import"./useBackwardsCompatibleTheme-BxDCx_m8.js";import"./Label-T3-RQcya.js";import"./ZIndexLayer-F_xMErBH.js";import"./types-C0puMKP8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C7E_1QuT.js";import"./step-CGQ88gSo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-UVqcjqe1.js";import"./useAnimationId-BEtuyajc.js";import"./ActivePoints-DZ7JKpsC.js";import"./Dot-CnU97eIy.js";import"./dataEntryStyles-CQWLZIwm.js";import"./ErrorBarContext-DC_DRovh.js";import"./GraphicalItemClipPath-BH1_5J3a.js";import"./SetGraphicalItem-DHruVb1s.js";import"./getRadiusAndStrokeWidthFromDot-Dp-k2N1-.js";import"./ActiveShapeUtils-Ng0jEWa8.js";import"./useGraphicalItemIdentity-zknNX3FR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
