import{R as e}from"./iframe-GoDWXF60.js";import{R as a}from"./zIndexSlice-rcyByprz.js";import{C as p}from"./ComposedChart-BNv_QKcO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ByDOxb50.js";import{X as f}from"./XAxis-Sd8wKWiC.js";import{Y as l}from"./YAxis-oTWrO0dZ.js";import{L as d}from"./Line-Cqf_UWfB.js";import{R as h}from"./ReferenceLine-CDs0xdHg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BC2iKf2c.js";import"./index-BMGI6I6X.js";import"./index-B1wbuLB1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtF3WVtu.js";import"./isWellBehavedNumber-DVk2TMuq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5ODBaUh.js";import"./axisSelectors-BMoJ3285.js";import"./d3-scale-Dm23_hA9.js";import"./index-B5osc4Bz.js";import"./index-4L7QbpcF.js";import"./renderedTicksSlice-Cio8NKuI.js";import"./index-b9Wor0gC.js";import"./CartesianChart-Ev1lyziP.js";import"./chartDataContext-B5KQQNXg.js";import"./CategoricalChart-Cojbw-YR.js";import"./CartesianAxis-B6o5gRjs.js";import"./Layer-BmsCQfeY.js";import"./Text-DHajDoQn.js";import"./DOMUtils-BcP1iiu3.js";import"./useId-CHExwNNq.js";import"./useBackwardsCompatibleTheme-C39YasS8.js";import"./Label-TKBbCyEO.js";import"./ZIndexLayer-B3yNW9nz.js";import"./types-y5j7YtAw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CRH1Pdo7.js";import"./step-5I62O3qM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_43VQlt.js";import"./useAnimationId-Bb0rmRoM.js";import"./ActivePoints-BWgMdJzf.js";import"./Dot-CVU-ffNv.js";import"./RegisterGraphicalItemId-6e9wRMFk.js";import"./ErrorBarContext-RjE2YZS3.js";import"./GraphicalItemClipPath-pySZvy8y.js";import"./SetGraphicalItem-BKw5VKzR.js";import"./getRadiusAndStrokeWidthFromDot-DhWLpkDS.js";import"./ActiveShapeUtils-BMxJ69jq.js";import"./useGraphicalItemIdentity-2iH_0CiR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
