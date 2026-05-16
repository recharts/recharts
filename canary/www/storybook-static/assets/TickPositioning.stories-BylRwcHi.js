import{e as t}from"./iframe-De3AYcmL.js";import{g as n}from"./arrayEqualityCheck-8J4d381_.js";import{L as s}from"./LineChart-D2i8xqaf.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BTdFVOE-.js";import{X as l}from"./XAxis-yu0JnOft.js";import{R as v}from"./RechartsHookInspector-D_q1sFah.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CcM6EHAr.js";import"./immer-B3IrcYoh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-zGbVOYaW.js";import"./index-uL_5FIKS.js";import"./hooks-B6mrGJaY.js";import"./axisSelectors-0INLWORQ.js";import"./d3-scale-C-QBsPkn.js";import"./zIndexSlice-pmRq5Z0K.js";import"./renderedTicksSlice-CJRhDBm9.js";import"./CartesianChart-BqrRTf2N.js";import"./chartDataContext-CqPzveAf.js";import"./CategoricalChart-7Ea_WF3s.js";import"./Layer-CvP2ZRzB.js";import"./ReactUtils-smyHXU-m.js";import"./Label-BNrDAtep.js";import"./Text-C6Iq6Q5F.js";import"./DOMUtils-CspO4-oS.js";import"./ZIndexLayer-CofVuiDD.js";import"./ActivePoints-DLYoMrZC.js";import"./Dot-B4Ai6LOf.js";import"./types-B0moMXXW.js";import"./RegisterGraphicalItemId-DAYanOqB.js";import"./ErrorBarContext-CX9g_kEB.js";import"./GraphicalItemClipPath-CJOH5ivR.js";import"./SetGraphicalItem-Cu0fWv08.js";import"./useAnimationId-DfOYRRzz.js";import"./getRadiusAndStrokeWidthFromDot-CyShnh2z.js";import"./ActiveShapeUtils-Br556SC7.js";import"./isPlainObject-Bf8xB-ha.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dd6aqeBt.js";import"./Trapezoid-t9gr1WzF.js";import"./Sector-V0157Hdp.js";import"./Symbols-C1VJaBCL.js";import"./symbol-CpBATsG6.js";import"./step-CaS84Y98.js";import"./Curve-C6hmNTxr.js";import"./CartesianAxis-CTQd1Whd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-5m3zpj_N.js";import"./ChartSizeDimensions-DhJtSzTW.js";import"./OffsetShower-C6EyWY-L.js";import"./PlotAreaShower-Ddz7JCST.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
