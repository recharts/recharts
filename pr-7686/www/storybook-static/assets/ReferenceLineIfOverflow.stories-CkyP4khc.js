import{R as e}from"./iframe-DY5yIkq2.js";import{R as n}from"./zIndexSlice-BJ9sbnI3.js";import{C as p}from"./ComposedChart-Qtg4qpHf.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C1j9sRnO.js";import{X as f}from"./XAxis-DqmgH3_K.js";import{Y as l}from"./YAxis-DKNkaL0G.js";import{L as d}from"./Line-D8pVJeO2.js";import{R as h}from"./ReferenceLine-ABe3kkEU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ClrYp41z.js";import"./index-6CL2Bs_1.js";import"./index-Cl8EGK2P.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CD9o0rsG.js";import"./isWellBehavedNumber-DqVPPSXs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-fiPqbXet.js";import"./index-CqtRrj2-.js";import"./index-BgsJFNTR.js";import"./axisSelectors-BA6Z_Ork.js";import"./d3-scale-L5elDZ4E.js";import"./renderedTicksSlice-CkTe5jVw.js";import"./CartesianChart-BYEGQZkF.js";import"./chartDataContext-CpL7gfA0.js";import"./CategoricalChart-xf3XNLGA.js";import"./CartesianAxis-Dkt1u38S.js";import"./Layer-sQPOBB7C.js";import"./Text-CbUk5Nnj.js";import"./DOMUtils-PzmIv2NH.js";import"./useId-s6AFE7pi.js";import"./useBackwardsCompatibleTheme-CQzhlAGv.js";import"./Label-DF-ljJas.js";import"./ZIndexLayer-BUoXCop5.js";import"./types-CYQx7sGq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CFlple2Z.js";import"./step-3W0WqQC-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0mJPdXUD.js";import"./useAnimationId-bV9tA_xy.js";import"./ActivePoints-DO3E4C9p.js";import"./Dot-CFTB-H51.js";import"./RegisterGraphicalItemId-uvsWx-K_.js";import"./ErrorBarContext-DeFkaPs_.js";import"./GraphicalItemClipPath-pdIKb4VD.js";import"./SetGraphicalItem-CQx7YnIu.js";import"./getRadiusAndStrokeWidthFromDot-9lBJp0HG.js";import"./ActiveShapeUtils-D2cfX5ZD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
