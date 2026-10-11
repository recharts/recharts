import{R as e}from"./iframe-PFnyvlis.js";import{R as a}from"./zIndexSlice-B0qSSbxG.js";import{C as p}from"./ComposedChart-CYoxv7K5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CciC7zHF.js";import{X as f}from"./XAxis-DhJ_whev.js";import{Y as l}from"./YAxis-B7MGVxIC.js";import{L as d}from"./Line-C8KN53PB.js";import{R as h}from"./ReferenceLine-C0gnr_eB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-GW0_gATC.js";import"./index-Bnt3KeU-.js";import"./index-sAeTipYl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-w5xflEp3.js";import"./isWellBehavedNumber-fJrag4D_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3E-J46N.js";import"./axisSelectors-DhkVgott.js";import"./d3-scale-Ct392CQc.js";import"./index-D5l8ABkB.js";import"./index-Cd7PqRR0.js";import"./renderedTicksSlice-CEcKwYs8.js";import"./index-Bz4JWd5z.js";import"./CartesianChart-CsLYaxaY.js";import"./chartDataContext-DOm0tmmB.js";import"./CategoricalChart-C-GflChV.js";import"./CartesianAxis-D8jcLweO.js";import"./Layer-8HYYz2ZX.js";import"./Text-Bjtm-BnX.js";import"./pageBackground-D9EVWege.js";import"./useId-B6VTORgN.js";import"./useBackwardsCompatibleTheme-BHl7LW2d.js";import"./Label-CHf8Dh9F.js";import"./ZIndexLayer-B4ISEqyM.js";import"./types-Cdq40KHv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BDK-Xp5l.js";import"./step-DeVCdmYq.js";import"./path-DyVhHtw_.js";import"./activeStyles-DeGfiuQP.js";import"./useAnimationId-E_cgqRBb.js";import"./dataEntryStyles-DVpontPM.js";import"./ActivePoints-DOitargu.js";import"./Dot-FM4Coi4D.js";import"./ErrorBarContext-C5e-NQj7.js";import"./GraphicalItemClipPath-Bhp27ob6.js";import"./SetGraphicalItem-TVDRdMaU.js";import"./getRadiusAndStrokeWidthFromDot-fHs-9w3x.js";import"./ActiveShapeUtils-1mgFNr1z.js";import"./useGraphicalItemIdentity-YcO-x1ZM.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
