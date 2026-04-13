import{e}from"./iframe-CQz6-rqU.js";import{R as i}from"./arrayEqualityCheck-B3hp3dy1.js";import{C as p}from"./ComposedChart-Db6t5I8M.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CR6vgPuV.js";import{X as s}from"./XAxis-CbqTpJSy.js";import{Y as c}from"./YAxis-BQnCi2Gr.js";import{L as d}from"./Line-CqVeTqkE.js";import{R as g}from"./ReferenceLine-DYVq3Mj1.js";import{R as f}from"./RechartsHookInspector-B2GPukyV.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bsy3ef9f.js";import"./immer-C1Ef071P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0t3ed1JS.js";import"./index-DcdNEEYJ.js";import"./hooks-Cv8BoRyK.js";import"./axisSelectors-bV92EhmM.js";import"./d3-scale-Dy1NrWss.js";import"./zIndexSlice-jdolFKYR.js";import"./renderedTicksSlice-D_gYaTKe.js";import"./CartesianChart-KdDR_fN8.js";import"./chartDataContext-BrSsmPTw.js";import"./CategoricalChart-Cya9ekS6.js";import"./CartesianAxis-BA0-wFGi.js";import"./Layer-aJdiXKbK.js";import"./Text-JvXAfe8A.js";import"./DOMUtils-2zTsLgWC.js";import"./Label-D5a5ehTh.js";import"./ZIndexLayer-D5ngjIV-.js";import"./types-XpdbXnbU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BqVg2WmD.js";import"./ActivePoints-C9xPRrJf.js";import"./Dot-DEN8tXMw.js";import"./RegisterGraphicalItemId-Ch1pO7WV.js";import"./ErrorBarContext-DgfGrsqm.js";import"./GraphicalItemClipPath-CPeTkZJp.js";import"./SetGraphicalItem-DB6-mG_s.js";import"./useAnimationId-DfRjeBwp.js";import"./getRadiusAndStrokeWidthFromDot-CpMo6JgK.js";import"./ActiveShapeUtils-DN6LeKsQ.js";import"./isPlainObject-rkdQ43EP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cna_W9G7.js";import"./Trapezoid-dmc5_bkF.js";import"./Sector-D8lvqTTS.js";import"./Symbols-BXHTL0iF.js";import"./symbol-BurpkDKi.js";import"./step-DP79CAdJ.js";import"./Curve-3nz25txP.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BGBLB-6R.js";import"./ChartSizeDimensions-CkcmSnfk.js";import"./OffsetShower-D1GSKoft.js";import"./PlotAreaShower-L499Q96k.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
