import{e}from"./iframe-Qbvlqe9c.js";import{R as n}from"./arrayEqualityCheck-B3n_664E.js";import{C as p}from"./ComposedChart-dCvdXjW4.js";import{C as s}from"./CartesianGrid-BrR2o-p8.js";import{X as c}from"./XAxis-DvwXUl6_.js";import{Y as f}from"./YAxis-CbhDcywn.js";import{L as l}from"./Line-CETAi-Tq.js";import{R as d}from"./ReferenceLine-DNJssYEO.js";import{R as h}from"./RechartsHookInspector-Bcf65z8s.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-76Pg9xKV.js";import"./PolarUtils-1Zh54hEc.js";import"./RechartsWrapper-j0khHO2J.js";import"./hooks-C__9gfvB.js";import"./axisSelectors-DP3q5L3p.js";import"./zIndexSlice-Dd4fWTvl.js";import"./CartesianChart-BEe2ZeB9.js";import"./chartDataContext-meOOuMw1.js";import"./CategoricalChart-BN7dR1q_.js";import"./CartesianAxis-a9jFIi9h.js";import"./Layer-CGD9i9Tv.js";import"./Text-BhRNkj8s.js";import"./DOMUtils-D4R1mvUb.js";import"./Label-BjNpzDAS.js";import"./ZIndexLayer-BGnFu8Hz.js";import"./types-BIElRGEC.js";import"./ReactUtils-DDfXx9yL.js";import"./ActivePoints-Z50a9Y5S.js";import"./Dot-K6oNejLl.js";import"./RegisterGraphicalItemId-Bl4eT23s.js";import"./ErrorBarContext-BToEOD0T.js";import"./GraphicalItemClipPath-LG6KLgtm.js";import"./SetGraphicalItem-BGT_K21t.js";import"./useAnimationId-BMBkTPld.js";import"./getRadiusAndStrokeWidthFromDot-iWUSXSti.js";import"./ActiveShapeUtils-DIh0EQro.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dq-tt7hT.js";import"./Trapezoid-B2gFU9p-.js";import"./Sector-Byha0vVB.js";import"./Symbols-DUUTByO6.js";import"./Curve-viWUlKkP.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BFsVO8Up.js";import"./ChartSizeDimensions-DHXLFfdm.js";import"./OffsetShower-CcbpVL0P.js";import"./PlotAreaShower-Bw9dKf0L.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
