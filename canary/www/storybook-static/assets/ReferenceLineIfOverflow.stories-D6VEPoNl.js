import{e}from"./iframe-C3UZ-t_V.js";import{R as n}from"./arrayEqualityCheck-DIL50JWa.js";import{C as p}from"./ComposedChart-C4m1Eygp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D2p0Ir6T.js";import{X as f}from"./XAxis-DMAObJwa.js";import{Y as l}from"./YAxis-B5LKtkqe.js";import{L as d}from"./Line-gDEmZD-v.js";import{R as h}from"./ReferenceLine-AzQlUj7J.js";import{R as w}from"./RechartsHookInspector-BFtfPmXC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-aaXGpNRZ.js";import"./immer-Bf7Gcqi0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bsvy-j69.js";import"./index-ClWM-yv2.js";import"./hooks-DPl2sBv5.js";import"./axisSelectors-DmOEhaOy.js";import"./d3-scale-UHw6FirY.js";import"./zIndexSlice-Dx4k4ZlJ.js";import"./renderedTicksSlice-CLnyFrSg.js";import"./CartesianChart-BmK7YYly.js";import"./chartDataContext-BmElG8Xh.js";import"./CategoricalChart-DaGR7SKz.js";import"./CartesianAxis-CYGD0r1r.js";import"./Layer-CI6sC4Pl.js";import"./Text-DPTsyd0A.js";import"./DOMUtils-BUXVBs_y.js";import"./Label-BrcoQVek.js";import"./ZIndexLayer-D78RDR2e.js";import"./types-5hKD9RW5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BnJyydkM.js";import"./ActivePoints-Donj28kx.js";import"./Dot-CQmFG6vz.js";import"./RegisterGraphicalItemId-CRHVW6BC.js";import"./ErrorBarContext-D1tpAEu1.js";import"./GraphicalItemClipPath-CM4WNw68.js";import"./SetGraphicalItem-aZjM1KWs.js";import"./useAnimationId-DB48Qg13.js";import"./getRadiusAndStrokeWidthFromDot-Cj9gBiC7.js";import"./ActiveShapeUtils-faJHcahZ.js";import"./isPlainObject-CwlSp2ia.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DGuVg7wO.js";import"./Trapezoid-VJ5gUEBt.js";import"./Sector-BhwWS5u1.js";import"./Symbols-DCi2amY7.js";import"./symbol-DGgXQDAi.js";import"./step-mUeGDqfh.js";import"./Curve-C7Xh0Uh3.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-iiKok6sI.js";import"./ChartSizeDimensions-C9L6kdtQ.js";import"./OffsetShower-DbJZQebV.js";import"./PlotAreaShower-B5C3jvki.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
