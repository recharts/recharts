import{e}from"./iframe-CjnSqbHY.js";import{R as n}from"./arrayEqualityCheck-Cu3uzYRG.js";import{C as p}from"./ComposedChart-C1GJHbWV.js";import{C as s}from"./CartesianGrid-OW63ZEb5.js";import{X as c}from"./XAxis-BjLd7C2C.js";import{Y as f}from"./YAxis-CfoOURqB.js";import{L as l}from"./Line-Cn7LoADd.js";import{R as d}from"./ReferenceLine-Pj2paa-Y.js";import{R as h}from"./RechartsHookInspector-Df5OjUd3.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B-Bnboba.js";import"./PolarUtils-Dtm6FADD.js";import"./RechartsWrapper-Bjy9O6Bl.js";import"./hooks-z5iYR9uK.js";import"./axisSelectors-2WFqeeny.js";import"./zIndexSlice-B31h325U.js";import"./CartesianChart-QvBm8Fl6.js";import"./chartDataContext-OrqrGnHW.js";import"./CategoricalChart-CVHNAiHm.js";import"./CartesianAxis-D2VxaDmK.js";import"./Layer-BPLY51e7.js";import"./Text-CLMmVwol.js";import"./DOMUtils-Bui7kyZ-.js";import"./Label-DvPPISHS.js";import"./ZIndexLayer-6i7cawcn.js";import"./types-BYGLnYta.js";import"./ReactUtils-Bdj2Y15E.js";import"./ActivePoints-Djyh2ioT.js";import"./Dot-BiSTmROa.js";import"./RegisterGraphicalItemId-B25edjY0.js";import"./ErrorBarContext-YKLWr-xE.js";import"./GraphicalItemClipPath-BH8EdR6E.js";import"./SetGraphicalItem-RCHMBw2A.js";import"./useAnimationId-BIU6gnQ_.js";import"./getRadiusAndStrokeWidthFromDot-DJkck7K5.js";import"./ActiveShapeUtils-B0wPh4Lu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DRbwIDD9.js";import"./Trapezoid-BpUw0ZK8.js";import"./Sector-CCKEyOJh.js";import"./Symbols-wzrVuNDj.js";import"./Curve-5ylBOp_W.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BmN97iZD.js";import"./ChartSizeDimensions-BYQzTjU5.js";import"./OffsetShower-BP7aiJM0.js";import"./PlotAreaShower-CvhWYGuu.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
