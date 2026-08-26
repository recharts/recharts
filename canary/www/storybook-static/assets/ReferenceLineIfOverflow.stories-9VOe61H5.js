import{R as e}from"./iframe-Yg2vC8jl.js";import{R as n}from"./zIndexSlice-BElsb48m.js";import{C as p}from"./ComposedChart-DjyZhCdh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B6EPQvSG.js";import{X as f}from"./XAxis-BCD8PGRZ.js";import{Y as l}from"./YAxis-C7vKKbMF.js";import{L as d}from"./Line-Cc2La8TY.js";import{R as h}from"./ReferenceLine-CvQl8PQ5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BaCh1BSI.js";import"./index-CHZ1utW3.js";import"./index-CN9KpfAX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bsa29K_S.js";import"./isWellBehavedNumber-DQgk1tKw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-rNmWVTcA.js";import"./axisSelectors-nv9p39UG.js";import"./d3-scale-DXOKnb1o.js";import"./index--8spWne3.js";import"./index-B_F5nQFz.js";import"./renderedTicksSlice-ChVEhIgt.js";import"./index-CqWRosMe.js";import"./CartesianChart-C7IlXP4I.js";import"./chartDataContext-Dlt4sLo1.js";import"./CategoricalChart-EUZHEGq1.js";import"./CartesianAxis-D_n_4bqq.js";import"./Layer-B4IabIdW.js";import"./Text-DdvnI_Yn.js";import"./DOMUtils-CUUEg-Ut.js";import"./useId-CIFQ64hu.js";import"./useBackwardsCompatibleTheme-ByLQZtu6.js";import"./Label-D-3Je9Ku.js";import"./ZIndexLayer-DxM-QnJb.js";import"./types-DJ9rCugd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DpihRFk6.js";import"./step-DK4VgiZ3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CaVCuQAN.js";import"./useAnimationId-DsPfmOTd.js";import"./ActivePoints-BlvoLXcy.js";import"./Dot-C9WYn9kj.js";import"./RegisterGraphicalItemId-DblvaP9s.js";import"./ErrorBarContext-BRhPIJ9q.js";import"./GraphicalItemClipPath-Ow_WyG3Z.js";import"./SetGraphicalItem-V-QFpaIF.js";import"./getRadiusAndStrokeWidthFromDot-hxmc-IYv.js";import"./ActiveShapeUtils-Ch49efhn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ye=["IfOverflow"];export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
