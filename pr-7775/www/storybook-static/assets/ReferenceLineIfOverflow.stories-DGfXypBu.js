import{R as e}from"./iframe-Gdd3jtsk.js";import{R as a}from"./zIndexSlice-CSZDPlYV.js";import{C as p}from"./ComposedChart-wOVymvQS.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Byr6LEcY.js";import{X as f}from"./XAxis-CfRxe5fa.js";import{Y as l}from"./YAxis-Di2w_laQ.js";import{L as d}from"./Line-BsY-LYne.js";import{R as h}from"./ReferenceLine-BAu-LXXz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BmbkxDbb.js";import"./index-OXuJkc0G.js";import"./index-BYdAkKa9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAx7A2d0.js";import"./isWellBehavedNumber-dcNjbQjU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHzy1vja.js";import"./axisSelectors-gB1Qysm6.js";import"./d3-scale-CuO1bYlf.js";import"./index-BA4wfNHy.js";import"./index-DLhl39MV.js";import"./renderedTicksSlice-Bnpylx8R.js";import"./index-D3-ryID0.js";import"./CartesianChart-Ddy5lGq_.js";import"./chartDataContext-Cj_vDVUA.js";import"./CategoricalChart-Wstkm_N3.js";import"./CartesianAxis-ZunbmCHs.js";import"./Layer-D1lMlbyy.js";import"./Text-vzNtnCvi.js";import"./DOMUtils-DsTGrs8B.js";import"./useId-DBiLJeK_.js";import"./useBackwardsCompatibleTheme-vrrckkYj.js";import"./Label-DL60lMB9.js";import"./ZIndexLayer-BONCUyCr.js";import"./types-TRPks9BY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CY9DQNQA.js";import"./step-Tntu3fQG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BmvPvy1l.js";import"./useAnimationId-DI-q8E5L.js";import"./ActivePoints-DdmI4xi2.js";import"./Dot-BEO0U3qq.js";import"./RegisterGraphicalItemId-BmqdRBnz.js";import"./ErrorBarContext-uChJYirb.js";import"./GraphicalItemClipPath-CxxXrJBj.js";import"./SetGraphicalItem-C6Ve9h1l.js";import"./getRadiusAndStrokeWidthFromDot-Bfe6QX96.js";import"./ActiveShapeUtils-Cb2VhDvv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
