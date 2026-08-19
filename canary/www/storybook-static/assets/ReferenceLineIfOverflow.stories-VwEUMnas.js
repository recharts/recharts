import{R as e}from"./iframe-Ce2LNmzq.js";import{R as n}from"./zIndexSlice-1iBSzntV.js";import{C as p}from"./ComposedChart-D8QzjQGV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BogmWVqB.js";import{X as f}from"./XAxis-ChLxoQeP.js";import{Y as l}from"./YAxis-CHPMR7tu.js";import{L as d}from"./Line-Cmb7zLRd.js";import{R as h}from"./ReferenceLine-CMHYTs4J.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BPcDKDas.js";import"./index-CwWtniec.js";import"./index-A8_rJiXz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bt6qRPyP.js";import"./isWellBehavedNumber-LiGS8Ktg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NruqEuMP.js";import"./index-CWtZ9yph.js";import"./index-C0AYEPvF.js";import"./axisSelectors-nf5d_TCI.js";import"./d3-scale-uRAm4Q4g.js";import"./renderedTicksSlice-DRhSVK4R.js";import"./CartesianChart-C3QGU_Gm.js";import"./chartDataContext-mV7HyGJe.js";import"./CategoricalChart-CdBHij7l.js";import"./CartesianAxis-D_IJzMyn.js";import"./Layer-CmHiQhsD.js";import"./Text-1GNKdZPR.js";import"./DOMUtils-DXjDSVEa.js";import"./useBackwardsCompatibleTheme-C9k5uHL0.js";import"./Label-E5RSdERr.js";import"./ZIndexLayer-hciQBMwm.js";import"./types-D9eaN5qP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-pGKyKnaa.js";import"./step-B81xmQ7d.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-EYOrwSGz.js";import"./useAnimationId-DJBKMCXo.js";import"./ActivePoints-BV19snok.js";import"./Dot-BtvWNtdQ.js";import"./RegisterGraphicalItemId-BhPsp4dD.js";import"./ErrorBarContext-z5kDqZ_L.js";import"./GraphicalItemClipPath-DPYSwVHo.js";import"./SetGraphicalItem-CX7uV2i5.js";import"./getRadiusAndStrokeWidthFromDot-D3ct2NHr.js";import"./ActiveShapeUtils-DVN9EFMa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
