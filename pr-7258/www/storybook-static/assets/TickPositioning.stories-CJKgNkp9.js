import{e as t}from"./iframe-RBDhNuvY.js";import{R as n}from"./arrayEqualityCheck-BS348k5r.js";import{L as s}from"./LineChart-D7eXcRdl.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BcjxrMGm.js";import{X as l}from"./XAxis-DanSQFXO.js";import{R as v}from"./RechartsHookInspector-DOfZr9C1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BY9krx0N.js";import"./immer-C4c_Wnmh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-pTvawuVp.js";import"./index-DTbqq10f.js";import"./hooks-CGOwSC0e.js";import"./axisSelectors-BWB9zPfa.js";import"./d3-scale-D1n_szfL.js";import"./zIndexSlice-D1BncfDi.js";import"./renderedTicksSlice-zElQoHGi.js";import"./CartesianChart-CvfrETq8.js";import"./chartDataContext-CHNtAjFy.js";import"./CategoricalChart-DfYiu2DH.js";import"./Layer-u__8P6Sj.js";import"./ReactUtils-2aoVptM5.js";import"./Label-R4J1fJpi.js";import"./Text-ksXr8HZ7.js";import"./DOMUtils-CPBkTdDQ.js";import"./ZIndexLayer-Bft7LqoW.js";import"./ActivePoints-CWeKESIY.js";import"./Dot-D4355bFc.js";import"./types-bb6aQwNz.js";import"./RegisterGraphicalItemId-Nj3D91YX.js";import"./ErrorBarContext-CdH3aE4v.js";import"./GraphicalItemClipPath-DADrCLWg.js";import"./SetGraphicalItem-n97qV-yJ.js";import"./useAnimationId-Dwr1YxhS.js";import"./getRadiusAndStrokeWidthFromDot-Kev9_BfR.js";import"./ActiveShapeUtils-Bog2Lcip.js";import"./isPlainObject-Do42GsO_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWX_qciT.js";import"./Trapezoid-DJVnFGas.js";import"./Sector-HpIE4-5_.js";import"./Symbols-CumYzi7M.js";import"./symbol-Dd7u_zBc.js";import"./step-B8I79wVl.js";import"./Curve-D-xIgRTC.js";import"./CartesianAxis-BomHuY_r.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-DrnbXucV.js";import"./ChartSizeDimensions-CoDDlzmV.js";import"./OffsetShower-CNAox3ML.js";import"./PlotAreaShower-BuNBetuA.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
