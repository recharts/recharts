import{R as e}from"./iframe-ZGGTKsi4.js";import{R as a}from"./zIndexSlice-DxfJO5SI.js";import{C as p}from"./ComposedChart-HoHDKyYF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BDuAwTAR.js";import{X as f}from"./XAxis-DNlNZaF2.js";import{Y as l}from"./YAxis-D3HJo_sZ.js";import{L as d}from"./Line-hyiuMJlU.js";import{R as h}from"./ReferenceLine-G_BTriH4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DU3r4hZM.js";import"./index-BPQC-jNG.js";import"./index-HrJWGj9i.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-vV3khv5M.js";import"./isWellBehavedNumber-QCZGXLEu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bhqr1bRq.js";import"./axisSelectors-sP9dBG4h.js";import"./d3-scale-BsspybO2.js";import"./index-BpyhtFRO.js";import"./index-DsBTLunf.js";import"./renderedTicksSlice-BrYwA8bW.js";import"./index-SSLiRbGX.js";import"./CartesianChart-FipRlzk-.js";import"./chartDataContext-CVwvDOw7.js";import"./CategoricalChart-Da_wyX1Y.js";import"./CartesianAxis-y6hYyFes.js";import"./Layer-yZG6HjYa.js";import"./Text-uTHCfqpL.js";import"./DOMUtils-KcdWyv8l.js";import"./useId-BJoAZaHY.js";import"./useBackwardsCompatibleTheme-DiGhz-R4.js";import"./Label-CuL7W9s2.js";import"./ZIndexLayer-CnUQDGMu.js";import"./types-Cv_7IfEs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BGLf-py4.js";import"./step-D_M_3p-d.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B0OCbKtI.js";import"./useAnimationId-BA-Y1lsT.js";import"./ActivePoints-DW5iFVK5.js";import"./Dot-DrTqTbYy.js";import"./RegisterGraphicalItemId-DAVF2joS.js";import"./ErrorBarContext-DZHL-lpY.js";import"./GraphicalItemClipPath-DOFRcoC3.js";import"./SetGraphicalItem-rcmPBlm0.js";import"./getRadiusAndStrokeWidthFromDot-CtaK0aI-.js";import"./ActiveShapeUtils-CShJY30W.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
