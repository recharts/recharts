import{R as e}from"./iframe-DgWro0Cb.js";import{R as a}from"./zIndexSlice-kqW7224Y.js";import{C as p}from"./ComposedChart-BkLdUaFI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BBH-C6Ly.js";import{X as f}from"./XAxis-CkB5HD-K.js";import{Y as l}from"./YAxis-D4vSwiu5.js";import{L as d}from"./Line-BHp2SfN2.js";import{R as h}from"./ReferenceLine-DZbA8kbB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BP62aThC.js";import"./index-DztsUb_g.js";import"./index-D3He7cmP.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhS12mAV.js";import"./isWellBehavedNumber-DwM6ebKF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-h6y9B5zn.js";import"./axisSelectors-CZ13_oVc.js";import"./d3-scale-BfkfHoGl.js";import"./index-BDglQEHq.js";import"./index-CTaoAsOx.js";import"./renderedTicksSlice-gL8A1NDh.js";import"./index-DaYKny0o.js";import"./CartesianChart-DA39YynM.js";import"./chartDataContext-CGD2iDmQ.js";import"./CategoricalChart-u8OOiycT.js";import"./CartesianAxis-CA5xaS56.js";import"./Layer-XFlq6LCH.js";import"./Text-waGCJknf.js";import"./DOMUtils-D88jtPAc.js";import"./useId-BFsrAK1l.js";import"./useBackwardsCompatibleTheme-VKMGBrP2.js";import"./Label-CAU1RuQf.js";import"./ZIndexLayer-DpP2thTP.js";import"./types-pVUrsENP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BxTMDs4y.js";import"./step-JFePqLTA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DqXJhGnM.js";import"./useAnimationId-NxEFQxZ2.js";import"./ActivePoints-CrJTvJjI.js";import"./Dot-BcllKm9J.js";import"./RegisterGraphicalItemId-9cmkZE1J.js";import"./ErrorBarContext-8rr3nTdF.js";import"./GraphicalItemClipPath-D8FUo4fb.js";import"./SetGraphicalItem-DPr6Abv8.js";import"./getRadiusAndStrokeWidthFromDot-C1GKzwpP.js";import"./ActiveShapeUtils-BxIddtsB.js";import"./useGraphicalItemIdentity-DUrbqVuJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
