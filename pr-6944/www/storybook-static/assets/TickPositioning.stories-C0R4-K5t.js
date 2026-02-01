import{e as t}from"./iframe-BJ3b3BfY.js";import{R as s}from"./arrayEqualityCheck-Bo2Wnkh3.js";import{L as m}from"./LineChart-D--QU74w.js";import{L as c}from"./Line-B0J8rKMr.js";import{X as d}from"./XAxis-DGMxd97y.js";import{R as l}from"./RechartsHookInspector-ORt5Hm4G.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BwYlSIqL.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CKiG0ykq.js";import"./hooks-C3LIgo6e.js";import"./axisSelectors-CqG3KyC6.js";import"./zIndexSlice-CWsPu_90.js";import"./CartesianChart-dQ-XbzLC.js";import"./chartDataContext-CMXdzaII.js";import"./CategoricalChart-Bg2hOV4d.js";import"./Layer-B4_ys6we.js";import"./ReactUtils-zwc7yRgu.js";import"./Label-DeB84C01.js";import"./Text-Ch5Da2lM.js";import"./DOMUtils-UovAGbSR.js";import"./ZIndexLayer-CUGD5-lC.js";import"./ActivePoints-BlpW6YCS.js";import"./Dot-C_Q3jwW2.js";import"./types-mvH4HYXR.js";import"./RegisterGraphicalItemId-DQUBtM_I.js";import"./ErrorBarContext-C1pIVCq0.js";import"./GraphicalItemClipPath-DbsTfdnw.js";import"./SetGraphicalItem-MDKWBLr9.js";import"./useAnimationId-PYCZu_AY.js";import"./getRadiusAndStrokeWidthFromDot-CafT4P9y.js";import"./ActiveShapeUtils-CxNZmNtv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B2kMW3VJ.js";import"./Trapezoid-DF2tlYWx.js";import"./Sector-BHT4ZWAz.js";import"./Symbols-DMZSC_-N.js";import"./Curve-Kded-2mW.js";import"./CartesianAxis-LraHpKTU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-vodQRtzb.js";import"./ChartSizeDimensions-C-iWuIdI.js";import"./OffsetShower-CldxxWXJ.js";import"./PlotAreaShower-CYDRIz5k.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
