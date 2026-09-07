import{R as e}from"./iframe-RcHlpEKf.js";import{R as a}from"./zIndexSlice-BoP2xr6w.js";import{C as p}from"./ComposedChart-EFkEwSkN.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BdDPFwQK.js";import{X as f}from"./XAxis-BH3R8cCN.js";import{Y as l}from"./YAxis-C5hXHmze.js";import{L as d}from"./Line-HYy8FRYx.js";import{R as h}from"./ReferenceLine-DTm1rBpp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B-NCjC4g.js";import"./index-vzeW1Ty_.js";import"./index-rSShmn2P.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Sy-hwd8S.js";import"./isWellBehavedNumber-h-vCOYII.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqdoPGo4.js";import"./axisSelectors-BfZD20OT.js";import"./d3-scale-phcZca4Z.js";import"./index-DfHRgTU5.js";import"./index-D8H-d46C.js";import"./renderedTicksSlice-Dzlqim1n.js";import"./index-BtSxVTMy.js";import"./CartesianChart-DDx2cMpK.js";import"./chartDataContext-vN80Diu9.js";import"./CategoricalChart-CAKS8zF4.js";import"./CartesianAxis-Br9WShXs.js";import"./Layer-Bl7Trn9v.js";import"./Text-DfdPFWZL.js";import"./DOMUtils-CQKDG8TV.js";import"./useId-B6srCqhz.js";import"./useBackwardsCompatibleTheme-nHddxgax.js";import"./Label-BpQvgwWr.js";import"./ZIndexLayer-BNX-NDC0.js";import"./types-JXLuZB-s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CcZscRZ7.js";import"./step-pIWHJRNG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BD0VccbN.js";import"./useAnimationId-9jumoZun.js";import"./ActivePoints-Ba2vyqxq.js";import"./Dot-C4knZ77r.js";import"./RegisterGraphicalItemId-CnIEFT0k.js";import"./ErrorBarContext-D1YbY_j0.js";import"./GraphicalItemClipPath-CsLhpBaz.js";import"./SetGraphicalItem-DuO6azf0.js";import"./getRadiusAndStrokeWidthFromDot-hc8l7Jma.js";import"./ActiveShapeUtils-B2oqSRKl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
