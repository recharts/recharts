import{R as e}from"./iframe-BYXa1Tn_.js";import{R as n}from"./zIndexSlice-CoJck3d_.js";import{C as p}from"./ComposedChart-DqcQ0VDg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BSBG32R1.js";import{X as f}from"./XAxis-B5zWifv0.js";import{Y as l}from"./YAxis-DizXoRZi.js";import{L as d}from"./Line-6gFOJp9o.js";import{R as h}from"./ReferenceLine-CQrD_Ouo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CoxoiN6t.js";import"./index-B0FnoVJH.js";import"./index-DuqGTInP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BEKG2AD6.js";import"./isWellBehavedNumber-TGnGu01x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OaYp5Da5.js";import"./index-D68cxjh6.js";import"./index-BI8zhQ65.js";import"./renderedTicksSlice-CNHtcDgN.js";import"./axisSelectors-CdQyM0Ik.js";import"./d3-scale-BtOkOC4O.js";import"./CartesianChart-Cs0h_EiO.js";import"./chartDataContext-DfKLz63T.js";import"./CategoricalChart-DdtEtndX.js";import"./CartesianAxis-C3icPOpT.js";import"./Layer-C8ZXIHkO.js";import"./Text-ClavD2Bt.js";import"./DOMUtils-BRP-TV91.js";import"./Label-CW6jLePn.js";import"./ZIndexLayer-BQRYe1sp.js";import"./types-BeIXyo3E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Dj7m8Gm_.js";import"./isBuffer-Crkas5dz.js";import"./Curve-aAd9t3Ts.js";import"./step-pRYWj5UR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DMwIY_YG.js";import"./useAnimationId-8c28klLP.js";import"./ActivePoints-Cjb131Hl.js";import"./Dot-CQ0xec6K.js";import"./RegisterGraphicalItemId-D6qWKqiK.js";import"./ErrorBarContext-Cf7wWmw3.js";import"./GraphicalItemClipPath-Dujotke_.js";import"./SetGraphicalItem-C_1bFSrg.js";import"./getRadiusAndStrokeWidthFromDot-DwmygPe4.js";import"./ActiveShapeUtils-DejqAcqQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
