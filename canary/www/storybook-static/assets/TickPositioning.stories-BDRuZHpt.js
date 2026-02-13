import{e as t}from"./iframe-DDewu6bn.js";import{R as s}from"./arrayEqualityCheck-DXTExga0.js";import{L as m}from"./LineChart-LJiyIJ8c.js";import{L as c}from"./Line-Bn8-TD5I.js";import{X as d}from"./XAxis-8FAWklv8.js";import{R as l}from"./RechartsHookInspector-CD3vvvGL.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B5JubxST.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzQiRy-1.js";import"./hooks-DyhX_5uQ.js";import"./axisSelectors-DesRmFZd.js";import"./zIndexSlice-DyN1nTyR.js";import"./CartesianChart-C8I-Y6aj.js";import"./chartDataContext-CbJjYI1P.js";import"./CategoricalChart-hCldkx1o.js";import"./Layer-DqLbE6Uv.js";import"./ReactUtils-DtjzxdpY.js";import"./Label-J4ZfWAib.js";import"./Text-ytjI21CM.js";import"./DOMUtils-Cf-jMyF1.js";import"./ZIndexLayer-mUyPWZcK.js";import"./ActivePoints-6rWUYf_F.js";import"./Dot-CCTp0i8d.js";import"./types-BJyKbQEz.js";import"./RegisterGraphicalItemId-CHV5Wa4s.js";import"./ErrorBarContext-CZxFfXpJ.js";import"./GraphicalItemClipPath-B9jmiGSm.js";import"./SetGraphicalItem-CnIZ3Mlk.js";import"./useAnimationId-CjgQOJMR.js";import"./getRadiusAndStrokeWidthFromDot-dhATJ_xE.js";import"./ActiveShapeUtils-uXTIH56O.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Don_yAtF.js";import"./Trapezoid-Bbc_2Q2m.js";import"./Sector-efCwWuY6.js";import"./Symbols-DzJjx9Jp.js";import"./Curve-BBC21-sm.js";import"./CartesianAxis-D7kXIk58.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BXZrkBkN.js";import"./ChartSizeDimensions-BLu5DM0Z.js";import"./OffsetShower-D84gsABh.js";import"./PlotAreaShower-CEgKBwqt.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
