import{R as e}from"./iframe-IEvG1YpM.js";import{R as a}from"./zIndexSlice-Cihis5J4.js";import{C as p}from"./ComposedChart-BBH3eYaa.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CjJbgPpH.js";import{X as f}from"./XAxis-DtybEOgK.js";import{Y as l}from"./YAxis-Ci6Vvz28.js";import{L as d}from"./Line-CUy9vJUP.js";import{R as h}from"./ReferenceLine-DRBN-B3S.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-By8-YJwd.js";import"./index-POEf-RyB.js";import"./index-CK_MpSkX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-bAVDGQbe.js";import"./isWellBehavedNumber-tc8VJoOF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CcfL5xRi.js";import"./axisSelectors-Df8E9bUD.js";import"./d3-scale-TRidtPn4.js";import"./index-BBOVdE4u.js";import"./index-DwR3lO_P.js";import"./renderedTicksSlice-CllAnVPd.js";import"./index-DdsMrJb_.js";import"./CartesianChart-DCzoDDQF.js";import"./chartDataContext-xd-wjTQ9.js";import"./CategoricalChart-DdwxNdAm.js";import"./CartesianAxis-CPXu2kHS.js";import"./Layer-BKPgTeR2.js";import"./Text-Dae-pI4X.js";import"./DOMUtils-DCB2CSvd.js";import"./useId-CcNvwQMQ.js";import"./useBackwardsCompatibleTheme-BUS5d1Jo.js";import"./Label-CuRdPt5D.js";import"./ZIndexLayer-DyfcVau_.js";import"./types-CuB5x_0O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve--AmmIjVJ.js";import"./step-DtrjPrha.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-UW_5IIXp.js";import"./useAnimationId-qJZeznSq.js";import"./ActivePoints-C4j-E_4c.js";import"./Dot-Dp0Tai_6.js";import"./RegisterGraphicalItemId-CAU5eRLw.js";import"./ErrorBarContext-BWjTRxXS.js";import"./GraphicalItemClipPath-BuVEsdiO.js";import"./SetGraphicalItem-Du-9XCGr.js";import"./getRadiusAndStrokeWidthFromDot-DStXY72J.js";import"./ActiveShapeUtils-BSvyuOAY.js";import"./useGraphicalItemIdentity-BKM5eyt0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
