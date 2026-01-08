import{e as t}from"./iframe-BeTvSsnM.js";import{R as s}from"./arrayEqualityCheck-D3IRE7yY.js";import{L as m}from"./LineChart-kBx3Kfyh.js";import{L as c}from"./Line-bp10Wzax.js";import{X as d}from"./XAxis-CikzDxWn.js";import{R as l}from"./RechartsHookInspector-CQodTe4G.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bu9sKtx0.js";import"./PolarUtils-CiP_-J6C.js";import"./RechartsWrapper-DqbHfwZA.js";import"./hooks-Buy-B5J7.js";import"./axisSelectors-B3oALCrY.js";import"./zIndexSlice-ClDvfLGt.js";import"./CartesianChart-Btcoj6QB.js";import"./chartDataContext-BveSyHyY.js";import"./CategoricalChart-7psyK6-L.js";import"./Layer-vwm7UlyD.js";import"./ReactUtils-Bt5PnhOQ.js";import"./Label-DX1B0Se3.js";import"./Text-DQUPEW1Z.js";import"./DOMUtils-CPaL2uk1.js";import"./ZIndexLayer-D3vvSLkM.js";import"./ActivePoints-B6jpmgBg.js";import"./Dot-DD-hz-w5.js";import"./types-ColG541f.js";import"./RegisterGraphicalItemId-ktGcRGkW.js";import"./ErrorBarContext-MJgNid9a.js";import"./GraphicalItemClipPath-CllyT1DZ.js";import"./SetGraphicalItem-T9xLTiUd.js";import"./useAnimationId-CijMLLZk.js";import"./getRadiusAndStrokeWidthFromDot-BZQhgDsT.js";import"./ActiveShapeUtils-DAFlR22H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do5x2l-c.js";import"./Trapezoid-zw4Ixv-f.js";import"./Sector-CUcldSZb.js";import"./Symbols-Drvhtafw.js";import"./Curve-B6pW5hMh.js";import"./CartesianAxis-CLVwDgLN.js";import"./index-BBjIj-68.js";import"./ChartSizeDimensions-8siL2NNx.js";import"./OffsetShower-Bali05F_.js";import"./PlotAreaShower-DNqWhhRF.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
