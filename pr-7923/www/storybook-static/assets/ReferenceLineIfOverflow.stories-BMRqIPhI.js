import{R as e}from"./iframe-wyV1OFJQ.js";import{R as a}from"./zIndexSlice-0AwT1g9-.js";import{C as p}from"./ComposedChart-CBisthEs.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BDFP6rWZ.js";import{X as f}from"./XAxis-C5gx8h5c.js";import{Y as l}from"./YAxis-Vd3tzgVC.js";import{L as d}from"./Line-BEKv9UbE.js";import{R as h}from"./ReferenceLine-BBsTLT4_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CUUK7_-R.js";import"./index-D2dSqbX-.js";import"./index-DF9BGNcn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ChoAHX7J.js";import"./isWellBehavedNumber-DZ7NyhtT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0u6nGOPN.js";import"./axisSelectors-DUKM8TOz.js";import"./d3-scale-BCMPgSvY.js";import"./index-ZiSf6-0W.js";import"./index-BMAJF2wT.js";import"./renderedTicksSlice-B5WYeoae.js";import"./index-DnbQaRSG.js";import"./CartesianChart-wU-_7i2L.js";import"./chartDataContext-BFbqUx5W.js";import"./CategoricalChart-CYyVEG_Z.js";import"./CartesianAxis-C_-7YUyD.js";import"./Layer-C6HNy6Ts.js";import"./Text-LrIwM5Ef.js";import"./DOMUtils-CMxfKpC9.js";import"./useId-CyB1NCIB.js";import"./useBackwardsCompatibleTheme-DPV1EzeF.js";import"./Label-DI-dZ1Mj.js";import"./ZIndexLayer--FDGDHLw.js";import"./types-Df9zKJ57.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BT6y-5_3.js";import"./step-DN0D11qs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-9EcBcc8f.js";import"./useAnimationId-BF1AH8CU.js";import"./ActivePoints-C-ZsoMWs.js";import"./Dot-CQzkvjlm.js";import"./RegisterGraphicalItemId-_B2FfK6k.js";import"./ErrorBarContext-D8mz_gNG.js";import"./GraphicalItemClipPath-Txs2MFfL.js";import"./SetGraphicalItem-DW8cLaxQ.js";import"./getRadiusAndStrokeWidthFromDot-BVhvwnfR.js";import"./ActiveShapeUtils-D6GHKFv-.js";import"./useGraphicalItemIdentity-gmKXJpLw.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
