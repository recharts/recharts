import{e}from"./iframe-BUt3wnEM.js";import{R as n}from"./arrayEqualityCheck-DNOyFRmd.js";import{C as p}from"./ComposedChart-D7vv44Nm.js";import{C as s}from"./CartesianGrid-BgL3q-w5.js";import{X as c}from"./XAxis-Ireg13eN.js";import{Y as f}from"./YAxis-BhjjKpsZ.js";import{L as l}from"./Line-B_R5ro-W.js";import{R as d}from"./ReferenceLine-CkMjvPu-.js";import{R as h}from"./RechartsHookInspector-u0LRhk5N.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk1l2Vo6.js";import"./immer-Djj2d5DN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-z5ezD12U.js";import"./index-pWLF-s6P.js";import"./hooks-CaJZCr7l.js";import"./axisSelectors-B8r2gBVy.js";import"./d3-scale-BSxK4JDa.js";import"./zIndexSlice-7peEmfkk.js";import"./renderedTicksSlice-Cr17VpQE.js";import"./CartesianChart-BzRkrrXE.js";import"./chartDataContext-Cyy9MogO.js";import"./CategoricalChart-BpyTrJhB.js";import"./CartesianAxis-DLCN0lIN.js";import"./Layer-f0MP4yLB.js";import"./Text-D2qhx32y.js";import"./DOMUtils-Depo16NU.js";import"./Label-BNS9QM1w.js";import"./ZIndexLayer-CD2y65wD.js";import"./types-C3jmTsfH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cta0-SSd.js";import"./ActivePoints-QLUPv-Aq.js";import"./Dot-Jhi_4Eo2.js";import"./RegisterGraphicalItemId-Cwf1Uzb7.js";import"./ErrorBarContext-DOPfAlmD.js";import"./GraphicalItemClipPath-7Tn5wXWU.js";import"./SetGraphicalItem-DIiOAn_y.js";import"./useAnimationId-0NKy_VJI.js";import"./getRadiusAndStrokeWidthFromDot-0A88qvLk.js";import"./ActiveShapeUtils-Cy5NcMU8.js";import"./isPlainObject-BhaX48PC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYFau3NF.js";import"./Trapezoid-Bi5qBDT5.js";import"./Sector-CEgJ3DUB.js";import"./Symbols-1DUTRnJc.js";import"./symbol-x739FVZ2.js";import"./step-CelYc6K9.js";import"./Curve-BEPpct8h.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-vkdvzxS4.js";import"./ChartSizeDimensions-Ch1iJoza.js";import"./OffsetShower-Bgrzwk34.js";import"./PlotAreaShower-BgnhljdN.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
