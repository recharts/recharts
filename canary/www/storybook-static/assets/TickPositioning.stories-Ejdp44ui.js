import{e as t}from"./iframe-DCkCb3cL.js";import{R as n}from"./arrayEqualityCheck-Cyv8hSdj.js";import{L as s}from"./LineChart-BdCmXomq.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DajRYZAP.js";import{X as l}from"./XAxis-DjeZloTX.js";import{R as v}from"./RechartsHookInspector-GywlJnGS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Brvb-unE.js";import"./immer-CJIR5Dxo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ysnAkpcY.js";import"./index-DmTf6G0P.js";import"./hooks-rTm4XK8H.js";import"./axisSelectors-DLVZqdCy.js";import"./d3-scale-cKex8xs_.js";import"./zIndexSlice-C2SLAmdu.js";import"./renderedTicksSlice-dBR_dEs7.js";import"./CartesianChart-U8I4mwYO.js";import"./chartDataContext-BB8jRTpM.js";import"./CategoricalChart-sLprv-i8.js";import"./Layer-DdpUaJ6z.js";import"./ReactUtils-UnUZnhmf.js";import"./Label-DgXvgibU.js";import"./Text-C0rSCzeg.js";import"./DOMUtils-D_52ZroA.js";import"./ZIndexLayer-DmR4HC_4.js";import"./ActivePoints-Be0P0LgS.js";import"./Dot-H-WiFDrq.js";import"./types-BN3BphoZ.js";import"./RegisterGraphicalItemId-D6ZXTRMS.js";import"./ErrorBarContext-B-qZZjga.js";import"./GraphicalItemClipPath-CSx6dkEB.js";import"./SetGraphicalItem-DyLJ3K98.js";import"./useAnimationId-CqiSzw9P.js";import"./getRadiusAndStrokeWidthFromDot-DH5ceNx-.js";import"./ActiveShapeUtils-6FenCz6m.js";import"./isPlainObject-De9uXPg3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B2C1fB0K.js";import"./Trapezoid-D7d51r_V.js";import"./Sector-BrEwMQo2.js";import"./Symbols-3b29A3qW.js";import"./symbol-CfRPBnBt.js";import"./step-CFTOTHh4.js";import"./Curve-0mQU3lN2.js";import"./CartesianAxis-2U-Fs3nY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-tKLwA4MY.js";import"./ChartSizeDimensions-3SLqT2DF.js";import"./OffsetShower-DuCJOCxi.js";import"./PlotAreaShower-DYkpYr6V.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
