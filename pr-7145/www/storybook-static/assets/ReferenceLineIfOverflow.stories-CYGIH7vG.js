import{e}from"./iframe-BTtdS09W.js";import{R as n}from"./arrayEqualityCheck-Cr7uheU5.js";import{C as p}from"./ComposedChart-llfZcW-b.js";import{C as s}from"./CartesianGrid-DSOp2x3E.js";import{X as c}from"./XAxis-BIGryZaf.js";import{Y as f}from"./YAxis-CGeIp8Ig.js";import{L as l}from"./Line-BlgG3M-A.js";import{R as d}from"./ReferenceLine-TNnNcUco.js";import{R as h}from"./RechartsHookInspector-CAlJBqiK.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BNjLFhbQ.js";import"./immer-h2tBWHbd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVSfFbBC.js";import"./index-qoIXPrbj.js";import"./hooks-D1OOIbEZ.js";import"./axisSelectors-C-C-XPOd.js";import"./d3-scale-cMqm19h5.js";import"./zIndexSlice-upTe-uMW.js";import"./renderedTicksSlice-DJkpJNhd.js";import"./CartesianChart-ClmLpAb4.js";import"./chartDataContext-ByF2cza-.js";import"./CategoricalChart-DC4azccj.js";import"./CartesianAxis-Bttov5cI.js";import"./Layer-CG03jz1V.js";import"./Text-bWAVTtUg.js";import"./DOMUtils-WKcDWUte.js";import"./Label-DQKpHpKK.js";import"./ZIndexLayer-CbMDIpL4.js";import"./types-DbbwF8j4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DVOsTE35.js";import"./ActivePoints-B3QE05Z9.js";import"./Dot-PYiq21Zo.js";import"./RegisterGraphicalItemId-3lWinSBd.js";import"./ErrorBarContext-amKR2pcK.js";import"./GraphicalItemClipPath-5TXw2OKP.js";import"./SetGraphicalItem-BR57Hu8e.js";import"./useAnimationId-D12e2U_3.js";import"./getRadiusAndStrokeWidthFromDot-B3UN4p5A.js";import"./ActiveShapeUtils-BJOC9-wX.js";import"./isPlainObject-LS29Qx7o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIL45UrG.js";import"./Trapezoid-DqH5uCSa.js";import"./Sector-U4JfKldd.js";import"./Symbols-DPD-AVYc.js";import"./symbol-C5fxreGH.js";import"./step-8k9vNXVF.js";import"./Curve-DdtOV6ZM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DrM9enLn.js";import"./ChartSizeDimensions-DNML0thn.js";import"./OffsetShower-CC2yWEZE.js";import"./PlotAreaShower-4F-cactL.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
