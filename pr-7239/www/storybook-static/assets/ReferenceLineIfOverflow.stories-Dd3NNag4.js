import{e}from"./iframe-CQz6-rqU.js";import{R as n}from"./arrayEqualityCheck-B3hp3dy1.js";import{C as p}from"./ComposedChart-Db6t5I8M.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CR6vgPuV.js";import{X as f}from"./XAxis-CbqTpJSy.js";import{Y as l}from"./YAxis-BQnCi2Gr.js";import{L as d}from"./Line-CqVeTqkE.js";import{R as h}from"./ReferenceLine-DYVq3Mj1.js";import{R as w}from"./RechartsHookInspector-B2GPukyV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bsy3ef9f.js";import"./immer-C1Ef071P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0t3ed1JS.js";import"./index-DcdNEEYJ.js";import"./hooks-Cv8BoRyK.js";import"./axisSelectors-bV92EhmM.js";import"./d3-scale-Dy1NrWss.js";import"./zIndexSlice-jdolFKYR.js";import"./renderedTicksSlice-D_gYaTKe.js";import"./CartesianChart-KdDR_fN8.js";import"./chartDataContext-BrSsmPTw.js";import"./CategoricalChart-Cya9ekS6.js";import"./CartesianAxis-BA0-wFGi.js";import"./Layer-aJdiXKbK.js";import"./Text-JvXAfe8A.js";import"./DOMUtils-2zTsLgWC.js";import"./Label-D5a5ehTh.js";import"./ZIndexLayer-D5ngjIV-.js";import"./types-XpdbXnbU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BqVg2WmD.js";import"./ActivePoints-C9xPRrJf.js";import"./Dot-DEN8tXMw.js";import"./RegisterGraphicalItemId-Ch1pO7WV.js";import"./ErrorBarContext-DgfGrsqm.js";import"./GraphicalItemClipPath-CPeTkZJp.js";import"./SetGraphicalItem-DB6-mG_s.js";import"./useAnimationId-DfRjeBwp.js";import"./getRadiusAndStrokeWidthFromDot-CpMo6JgK.js";import"./ActiveShapeUtils-DN6LeKsQ.js";import"./isPlainObject-rkdQ43EP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cna_W9G7.js";import"./Trapezoid-dmc5_bkF.js";import"./Sector-D8lvqTTS.js";import"./Symbols-BXHTL0iF.js";import"./symbol-BurpkDKi.js";import"./step-DP79CAdJ.js";import"./Curve-3nz25txP.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BGBLB-6R.js";import"./ChartSizeDimensions-CkcmSnfk.js";import"./OffsetShower-D1GSKoft.js";import"./PlotAreaShower-L499Q96k.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
