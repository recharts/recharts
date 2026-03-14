import{e as t}from"./iframe-CMkrvckg.js";import{R as n}from"./arrayEqualityCheck-C-j9cVnD.js";import{L as s}from"./LineChart-IIS7shG-.js";import{L as c}from"./Line-DyabMQ5Q.js";import{X as d}from"./XAxis-CRTScQzT.js";import{R as l}from"./RechartsHookInspector-LPNgAumr.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0hHUpMbb.js";import"./immer-CyD0Wx6o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_AEo7CP.js";import"./index-l2b25tqQ.js";import"./hooks-z2F_PL2D.js";import"./axisSelectors-DiKss4V_.js";import"./d3-scale-fpsdvWAN.js";import"./zIndexSlice-CRGV0CLv.js";import"./renderedTicksSlice-DRtBvqzi.js";import"./CartesianChart-mSJGg3IH.js";import"./chartDataContext-Dg6bbq-C.js";import"./CategoricalChart-Bl6nS1b9.js";import"./Layer-4Y2Bpro8.js";import"./ReactUtils-koRtCpPb.js";import"./Label-CK8WpSeL.js";import"./Text-CfL4AkJ2.js";import"./DOMUtils-CY4V2W-_.js";import"./ZIndexLayer--DEMgBxJ.js";import"./ActivePoints-DPO6sfmL.js";import"./Dot-WqWz8qFp.js";import"./types-h_n1Y6CX.js";import"./RegisterGraphicalItemId-B_jKurhL.js";import"./ErrorBarContext-DR1SZQJs.js";import"./GraphicalItemClipPath-CdBUcuRI.js";import"./SetGraphicalItem-D8O9NSBD.js";import"./useAnimationId-Dnz94C6_.js";import"./getRadiusAndStrokeWidthFromDot-BtVMYfvn.js";import"./ActiveShapeUtils-fAQzD1Cv.js";import"./isPlainObject-E65nxFXT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXlSVzkG.js";import"./Trapezoid-B-eKIWgm.js";import"./Sector-BAVvYkxC.js";import"./Symbols-C3K856pn.js";import"./symbol-C1RL9RI_.js";import"./step-BgKCtsuA.js";import"./Curve-D0J3TcJs.js";import"./CartesianAxis-BQn2ecgs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BpykTG3u.js";import"./ChartSizeDimensions-tEh5XVCc.js";import"./OffsetShower-CI6ZxkzS.js";import"./PlotAreaShower-CiPqTN59.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
