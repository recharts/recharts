import{R as e}from"./iframe-B87NFlIP.js";import{R as n}from"./zIndexSlice-BXFzXSCA.js";import{C as p}from"./ComposedChart-B90Uqp-u.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CCVqM5KV.js";import{X as f}from"./XAxis-B3Q4Ss-r.js";import{Y as l}from"./YAxis-DEe_988n.js";import{L as d}from"./Line-CZqPG8TG.js";import{R as h}from"./ReferenceLine-6sEZLngh.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-QFj5HQLb.js";import"./index-CKu5wzsE.js";import"./index-00O5dIdv.js";import"./get-D4uUMniQ.js";import"./resolveDefaultProps-BYA5JPhb.js";import"./isWellBehavedNumber-BoHGXF6T.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUNisers.js";import"./index-BOjePhwv.js";import"./index-CacHHN54.js";import"./renderedTicksSlice-Ca7Y29Mx.js";import"./axisSelectors-D4K8gA-k.js";import"./d3-scale-CHNXjue9.js";import"./CartesianChart-C-pJxpsO.js";import"./chartDataContext-CHvUY65z.js";import"./CategoricalChart-C9EAem8i.js";import"./CartesianAxis-fmozs-7p.js";import"./Layer-DtWSIRkx.js";import"./Text-ClNCBjV1.js";import"./DOMUtils-CIzchNYO.js";import"./Label-jdUwmN2T.js";import"./ZIndexLayer-D6XfIW9f.js";import"./types-D1UBNpSv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-B4_Cj2x_.js";import"./step-BTnurF1K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D7tPVB1r.js";import"./useAnimationId-a9uwME5U.js";import"./ActivePoints-6m2eaavh.js";import"./Dot-BdACAh9E.js";import"./RegisterGraphicalItemId-B6YKmbmq.js";import"./ErrorBarContext-DZxTDSzq.js";import"./GraphicalItemClipPath-q-krKk84.js";import"./SetGraphicalItem-CKmZqTho.js";import"./getRadiusAndStrokeWidthFromDot-D19VTirB.js";import"./ActiveShapeUtils-Ba_G1J2p.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
