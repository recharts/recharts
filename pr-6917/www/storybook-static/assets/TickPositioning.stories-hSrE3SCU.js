import{e as t}from"./iframe-A-0tKSWD.js";import{R as s}from"./arrayEqualityCheck-Bi53fE_W.js";import{L as m}from"./LineChart-CPrlV1jB.js";import{L as c}from"./Line-JkOAy3vk.js";import{X as d}from"./XAxis-BXhGyvV2.js";import{R as l}from"./RechartsHookInspector-BiAUdU7M.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DGQ-_Q5N.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-SmBFshtg.js";import"./hooks-BIt-PEDd.js";import"./axisSelectors-BPBM-BQI.js";import"./zIndexSlice-BnuFP1kN.js";import"./CartesianChart-2alRd1pz.js";import"./chartDataContext-BdRC9Sc-.js";import"./CategoricalChart-El9GFkBl.js";import"./Layer-CxQ6kbYz.js";import"./ReactUtils-ptTox43v.js";import"./Label-C7autWsa.js";import"./Text-DMK2KaGs.js";import"./DOMUtils-gTBfrWdN.js";import"./ZIndexLayer-BJZUY29j.js";import"./ActivePoints-Jfec1qwc.js";import"./Dot-1LqtVP9Q.js";import"./types-BYDpjVEr.js";import"./RegisterGraphicalItemId-DjlQV6Vi.js";import"./ErrorBarContext-9JUs1gmp.js";import"./GraphicalItemClipPath-Sdkq8hlz.js";import"./SetGraphicalItem-C1AKRyjE.js";import"./useAnimationId-CvIqeW01.js";import"./getRadiusAndStrokeWidthFromDot-D6jqQXc0.js";import"./ActiveShapeUtils-CxepjeQB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9GYhQ17.js";import"./Trapezoid-B9ii8EyS.js";import"./Sector-BedQrfAt.js";import"./Symbols-C_xPmfi9.js";import"./Curve-BQURRmu9.js";import"./CartesianAxis-DX3J6okb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B-Mvr0XH.js";import"./ChartSizeDimensions-22sFfi6P.js";import"./OffsetShower-C5qrbqGT.js";import"./PlotAreaShower-DXZIEGcd.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
