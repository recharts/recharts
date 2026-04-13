import{e as t}from"./iframe-CQz6-rqU.js";import{P as a}from"./PlotAreaShower-L499Q96k.js";import{c as p}from"./hooks-Cv8BoRyK.js";import{R as s}from"./arrayEqualityCheck-B3hp3dy1.js";import{C as n}from"./ComposedChart-Db6t5I8M.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CqVeTqkE.js";import{X as h}from"./XAxis-CbqTpJSy.js";import{Y as c}from"./YAxis-BQnCi2Gr.js";import{L as g}from"./Legend-KW9mUM4i.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CkcmSnfk.js";import"./immer-C1Ef071P.js";import"./axisSelectors-bV92EhmM.js";import"./d3-scale-Dy1NrWss.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bsy3ef9f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0t3ed1JS.js";import"./index-DcdNEEYJ.js";import"./zIndexSlice-jdolFKYR.js";import"./renderedTicksSlice-D_gYaTKe.js";import"./CartesianChart-KdDR_fN8.js";import"./chartDataContext-BrSsmPTw.js";import"./CategoricalChart-Cya9ekS6.js";import"./Layer-aJdiXKbK.js";import"./ReactUtils-BqVg2WmD.js";import"./Label-D5a5ehTh.js";import"./Text-JvXAfe8A.js";import"./DOMUtils-2zTsLgWC.js";import"./ZIndexLayer-D5ngjIV-.js";import"./ActivePoints-C9xPRrJf.js";import"./Dot-DEN8tXMw.js";import"./types-XpdbXnbU.js";import"./RegisterGraphicalItemId-Ch1pO7WV.js";import"./ErrorBarContext-DgfGrsqm.js";import"./GraphicalItemClipPath-CPeTkZJp.js";import"./SetGraphicalItem-DB6-mG_s.js";import"./useAnimationId-DfRjeBwp.js";import"./getRadiusAndStrokeWidthFromDot-CpMo6JgK.js";import"./ActiveShapeUtils-DN6LeKsQ.js";import"./isPlainObject-rkdQ43EP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cna_W9G7.js";import"./Trapezoid-dmc5_bkF.js";import"./Sector-D8lvqTTS.js";import"./Symbols-BXHTL0iF.js";import"./symbol-BurpkDKi.js";import"./step-DP79CAdJ.js";import"./Curve-3nz25txP.js";import"./CartesianAxis-BA0-wFGi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DOMlaDHk.js";import"./uniqBy-BpAtPS6e.js";import"./iteratee-Dac6CcmO.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
