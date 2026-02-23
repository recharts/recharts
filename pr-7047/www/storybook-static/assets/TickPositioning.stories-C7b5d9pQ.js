import{e as t}from"./iframe-NG7xn8us.js";import{R as n}from"./arrayEqualityCheck-DBfkDrHK.js";import{L as s}from"./LineChart-CPRQC74d.js";import{L as c}from"./Line-B1LTLamM.js";import{X as d}from"./XAxis-DsLntPLQ.js";import{R as l}from"./RechartsHookInspector-DUqk6vIV.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-wED6QReO.js";import"./immer-B8QNuQuL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZXpt1WI.js";import"./index-DNpbdYzC.js";import"./hooks-BHzjNaS-.js";import"./axisSelectors-BO092XPC.js";import"./d3-scale-C8XpcDzx.js";import"./zIndexSlice-a1m4fSW4.js";import"./renderedTicksSlice-BnMzv5_X.js";import"./CartesianChart-BQHwW8oQ.js";import"./chartDataContext-CXUKTGqi.js";import"./CategoricalChart-CYSdgUQn.js";import"./Layer-DoTh6aNf.js";import"./ReactUtils-CiPsQej4.js";import"./Label-mpYwp3tS.js";import"./Text-C1Ij1VWt.js";import"./DOMUtils-BH2xyswp.js";import"./ZIndexLayer-BXUSr-Ha.js";import"./ActivePoints-B4qq1bzg.js";import"./Dot-CLcJP3NH.js";import"./types-DHhKLS2Y.js";import"./RegisterGraphicalItemId-wCSwaH-X.js";import"./ErrorBarContext-D-lQEB7R.js";import"./GraphicalItemClipPath-CXScC-pK.js";import"./SetGraphicalItem-C8yfvTXJ.js";import"./useAnimationId-DOHX5rOk.js";import"./getRadiusAndStrokeWidthFromDot-CbR_-ksc.js";import"./ActiveShapeUtils-DHpoPjkT.js";import"./isPlainObject-5-gXFuU7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C6QRuf4O.js";import"./Trapezoid-CPIxctnZ.js";import"./Sector-CCDhVr63.js";import"./Symbols-DVT-5QSh.js";import"./symbol-BtGJ97KY.js";import"./step-CZRzZlp2.js";import"./Curve-CO2TUzXD.js";import"./CartesianAxis-F1bzBjNH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D29y0xCx.js";import"./ChartSizeDimensions-DBi-EbUV.js";import"./OffsetShower-BpCRw-nU.js";import"./PlotAreaShower-sY7tlQH0.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
