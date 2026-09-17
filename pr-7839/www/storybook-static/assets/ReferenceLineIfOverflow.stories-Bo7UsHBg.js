import{R as e}from"./iframe-MgA714vo.js";import{R as a}from"./zIndexSlice-BFtzjsbT.js";import{C as p}from"./ComposedChart-DLmauAU1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CJCqY4vS.js";import{X as f}from"./XAxis-BO_zCdYE.js";import{Y as l}from"./YAxis-BWw82tYQ.js";import{L as d}from"./Line-DZr5k1zJ.js";import{R as h}from"./ReferenceLine-DiJ4n12-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CokMtKXH.js";import"./index-yQC3T5y5.js";import"./index-DFNNaDkT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CB1SP_2F.js";import"./isWellBehavedNumber-DFMdcmiK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1iPbMRH.js";import"./axisSelectors-D8SlF3gx.js";import"./d3-scale-DxJKI2TE.js";import"./index-Gf96Mz3o.js";import"./index-BISHQAp4.js";import"./renderedTicksSlice-C4wx_D1w.js";import"./index-Bvn5aErC.js";import"./CartesianChart-BsRTJ-St.js";import"./chartDataContext-j9c_a0aH.js";import"./CategoricalChart-DPsIkKm4.js";import"./CartesianAxis-DiAsTuGj.js";import"./Layer-B-SLfZPM.js";import"./Text-DScWdIKY.js";import"./DOMUtils-79tWRulU.js";import"./useId-Wj9uSNps.js";import"./useBackwardsCompatibleTheme-DSXeHE4Z.js";import"./Label-cwVDT-eO.js";import"./ZIndexLayer-CrYLcujZ.js";import"./types-CZP1hKch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BBMmlamO.js";import"./step-Jmsq3o4W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DYaErfcH.js";import"./useAnimationId-Dkacjwid.js";import"./ActivePoints-BYWv-6T2.js";import"./Dot-DxSSo-Hw.js";import"./RegisterGraphicalItemId-DjHk3rYd.js";import"./ErrorBarContext-DOEhJtWW.js";import"./GraphicalItemClipPath-CuTt-XI_.js";import"./SetGraphicalItem-C0yQ7ETh.js";import"./getRadiusAndStrokeWidthFromDot-DoNGVpMm.js";import"./ActiveShapeUtils-GenD1j5W.js";import"./useGraphicalItemIdentity-BtRSxKs5.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
