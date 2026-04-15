import{e as t}from"./iframe-DJH7-DuZ.js";import{R as n}from"./arrayEqualityCheck-BCL8BMWc.js";import{L as s}from"./LineChart-CSfi06d5.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C8wq7-ld.js";import{X as l}from"./XAxis-CZkA-oar.js";import{R as v}from"./RechartsHookInspector-Cl1nQjm_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DEI4xjdp.js";import"./immer-Up9jfWyF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-lBMzT84x.js";import"./index-DdbzQdr9.js";import"./hooks-CHeZq7QJ.js";import"./axisSelectors-QKrA9-VE.js";import"./d3-scale-DorYBcEd.js";import"./zIndexSlice-DDN8c_9B.js";import"./renderedTicksSlice-BZJ0LC0-.js";import"./CartesianChart-DS-UTjvk.js";import"./chartDataContext-tGyrX-5w.js";import"./CategoricalChart-BCCF7qba.js";import"./Layer-DXEVbG5U.js";import"./ReactUtils-CaksUlzy.js";import"./Label-CqQ3p6o_.js";import"./Text-D3lbDKii.js";import"./DOMUtils-MBSOXcf3.js";import"./ZIndexLayer-BCFams-U.js";import"./ActivePoints-CTsHhn1X.js";import"./Dot-DqIFXDgd.js";import"./types-xH_rqDEy.js";import"./RegisterGraphicalItemId-BdCMR3nP.js";import"./ErrorBarContext-B33zly5n.js";import"./GraphicalItemClipPath-BkUssZcX.js";import"./SetGraphicalItem-CwRe-vCa.js";import"./useAnimationId-CnjUKELe.js";import"./getRadiusAndStrokeWidthFromDot-B30SAq_H.js";import"./ActiveShapeUtils-B6QMjEZK.js";import"./isPlainObject-CUvGDmNO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DffZWIBt.js";import"./Trapezoid-Bfh0_KKX.js";import"./Sector-DN23uiBq.js";import"./Symbols-C-1ojLAZ.js";import"./symbol-C9P6TcDS.js";import"./step-DL72aW96.js";import"./Curve-BCbaV2-E.js";import"./CartesianAxis-CPsFrMJH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-3J-EA25K.js";import"./ChartSizeDimensions-B_Dm3cCN.js";import"./OffsetShower-BnHyQTzL.js";import"./PlotAreaShower-B21fSxhD.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
