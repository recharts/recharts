import{e as t}from"./iframe-DsOUfprP.js";import{R as s}from"./arrayEqualityCheck-DjO11PbP.js";import{L as m}from"./LineChart-CMwbZRR2.js";import{L as c}from"./Line-Bsatc-QO.js";import{X as d}from"./XAxis-CfXuJc3U.js";import{R as l}from"./RechartsHookInspector-mhd3rbsm.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ZmhcaTjs.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DwZNGVuW.js";import"./hooks-wPJ0hpZq.js";import"./axisSelectors-CJQMQFai.js";import"./zIndexSlice-Dgi_woyo.js";import"./CartesianChart-BHRGlbKq.js";import"./chartDataContext-Dq9n1Njf.js";import"./CategoricalChart-BNNYxF9g.js";import"./Layer-LWw9M75d.js";import"./ReactUtils-CwDP136p.js";import"./Label-CbeoYjYN.js";import"./Text-D4hbrhbx.js";import"./DOMUtils-C9zx0qvq.js";import"./ZIndexLayer-kg9R7P8d.js";import"./ActivePoints-D2olhcFn.js";import"./Dot-DDC52ur4.js";import"./types-PuShQX9K.js";import"./RegisterGraphicalItemId-BjXMbvNS.js";import"./ErrorBarContext-D6eG4SLo.js";import"./GraphicalItemClipPath-DG39ifF4.js";import"./SetGraphicalItem-CQYRXGzG.js";import"./useAnimationId-zJAyy6w7.js";import"./getRadiusAndStrokeWidthFromDot-4V8YrcAz.js";import"./ActiveShapeUtils-CdiCAAYX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqV75pSw.js";import"./Trapezoid-tgNCAV59.js";import"./Sector-ClMrTgKg.js";import"./Symbols-DhTE1eBy.js";import"./Curve-DNHLMjMe.js";import"./CartesianAxis-Cr7pmBhV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-G8W79pF2.js";import"./ChartSizeDimensions-CtzLecLz.js";import"./OffsetShower-CmgUZqHD.js";import"./PlotAreaShower-Da3_E1UK.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
