import{e as t}from"./iframe-BucFZ_rI.js";import{R as s}from"./arrayEqualityCheck-Cub9yyg8.js";import{L as m}from"./LineChart-DkZDwCQU.js";import{L as c}from"./Line-Cd2y3VXM.js";import{X as d}from"./XAxis-ClQb6fgI.js";import{R as l}from"./RechartsHookInspector-DS-kex3x.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B03Au56-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i9ArJ6TM.js";import"./hooks-CMyWVrIA.js";import"./axisSelectors-BCa6g1kh.js";import"./zIndexSlice-DdWCw1KG.js";import"./CartesianChart-DZyhln5E.js";import"./chartDataContext-Ce-1EmfI.js";import"./CategoricalChart-CgTXpeDi.js";import"./Layer-CF_MVGlz.js";import"./ReactUtils-Bzngk0QG.js";import"./Label-9_EmwvzQ.js";import"./Text-svvcwPPD.js";import"./DOMUtils-CBBy-RCP.js";import"./ZIndexLayer-L4xm7ML-.js";import"./ActivePoints-Cj-4yTg7.js";import"./Dot-DIY2dqYP.js";import"./types-ClOjhPxm.js";import"./RegisterGraphicalItemId-BEasT3d7.js";import"./ErrorBarContext-B9myFNJx.js";import"./GraphicalItemClipPath-DkF2Uro5.js";import"./SetGraphicalItem-CNbOq2T5.js";import"./useAnimationId-aMKT9xva.js";import"./getRadiusAndStrokeWidthFromDot-Bz3A-CCh.js";import"./ActiveShapeUtils-AjngprED.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kS3taT6f.js";import"./Trapezoid-Dws_Jj0J.js";import"./Sector-BsDsJ4xC.js";import"./Symbols-oEWjslm_.js";import"./Curve-DctSWulj.js";import"./CartesianAxis-CXwjW_bT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B0oRtae4.js";import"./ChartSizeDimensions-wcbhDTBa.js";import"./OffsetShower-DrBH3Pp2.js";import"./PlotAreaShower-CmZTeEbv.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
