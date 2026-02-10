import{e as t}from"./iframe-Bg6hY-Lh.js";import{R as s}from"./arrayEqualityCheck-BDis9FaH.js";import{L as m}from"./LineChart-2Vx32A7B.js";import{L as c}from"./Line-Dg5CPa1P.js";import{X as d}from"./XAxis-CuwyE-Aw.js";import{R as l}from"./RechartsHookInspector-C0SDsqLX.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BI7FFBV-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkqFGzuB.js";import"./hooks-DM-gzZjo.js";import"./axisSelectors-GHndRTSk.js";import"./zIndexSlice-DBH2YRr7.js";import"./CartesianChart-B3uSsgOm.js";import"./chartDataContext-BNQKMBbL.js";import"./CategoricalChart-fiMHtwty.js";import"./Layer-CbLnIqdO.js";import"./ReactUtils-CFjZLDuN.js";import"./Label-XrRQ-MXs.js";import"./Text-G-UMIUqa.js";import"./DOMUtils-BOstDSsm.js";import"./ZIndexLayer-DyYnxyDJ.js";import"./ActivePoints-DvypOqa9.js";import"./Dot-BIrCeUw-.js";import"./types-CCzU0McW.js";import"./RegisterGraphicalItemId-DQWcO4Xr.js";import"./ErrorBarContext-BJIGtpIX.js";import"./GraphicalItemClipPath-CQF6nnWi.js";import"./SetGraphicalItem-B1--8enS.js";import"./useAnimationId-9L0wWVYf.js";import"./getRadiusAndStrokeWidthFromDot-B6sH4uog.js";import"./ActiveShapeUtils-YlmjpsSF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cIsPACi8.js";import"./Trapezoid-BJ7F2nGX.js";import"./Sector-CEFw5FZM.js";import"./Symbols-CxwFL1-B.js";import"./Curve-J_xBTbd1.js";import"./CartesianAxis-vJmkqZaZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-C3KvIg2I.js";import"./ChartSizeDimensions-oau-P_ha.js";import"./OffsetShower-B8fezjcj.js";import"./PlotAreaShower-_vIJxFcu.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
