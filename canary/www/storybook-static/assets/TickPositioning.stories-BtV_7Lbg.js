import{e as t}from"./iframe-B26tvh8M.js";import{R as n}from"./arrayEqualityCheck-MuT8Gq0B.js";import{L as s}from"./LineChart-Bj3ELeXD.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CTwc6FHC.js";import{X as l}from"./XAxis-DIWBB6UA.js";import{R as v}from"./RechartsHookInspector-hyCg-8qC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DWRHZiFf.js";import"./immer-CXuxt10J.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCeLN1YR.js";import"./index-Bz4UcQS6.js";import"./hooks-CFGRd7FZ.js";import"./axisSelectors-znnp0ZTC.js";import"./d3-scale-D8gDHM7P.js";import"./zIndexSlice-9WIqVBWy.js";import"./renderedTicksSlice-BdibsHeH.js";import"./CartesianChart-Cyzcm2Bf.js";import"./chartDataContext-DgpnTfq-.js";import"./CategoricalChart-ClHT_DQk.js";import"./Layer-BLXteb37.js";import"./ReactUtils-EalmbCaR.js";import"./Label-CKyHcssN.js";import"./Text-B7apQSTa.js";import"./DOMUtils-Cbj4CypK.js";import"./ZIndexLayer-2hV_wyzX.js";import"./ActivePoints-DDMO3vxb.js";import"./Dot-DJ6U_l3e.js";import"./types-gN1P51X3.js";import"./RegisterGraphicalItemId-z3-LYLAM.js";import"./ErrorBarContext-BV9_6zF2.js";import"./GraphicalItemClipPath-tnHq66M5.js";import"./SetGraphicalItem-D6N-Tuye.js";import"./useAnimationId-C40xd6Et.js";import"./getRadiusAndStrokeWidthFromDot-CX1KMj8W.js";import"./ActiveShapeUtils-C5QwOCv6.js";import"./isPlainObject-DAsoG4ko.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7IYda03.js";import"./Trapezoid-Dj9VILyv.js";import"./Sector-s0RSAPuc.js";import"./Symbols-B7tb4BlZ.js";import"./symbol-M8-_4T55.js";import"./step-DSlKLIZT.js";import"./Curve-CeBurhsE.js";import"./CartesianAxis-wEW14JHd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-qKcyhpYV.js";import"./ChartSizeDimensions-D4w-gUjQ.js";import"./OffsetShower-m7V4Yrzs.js";import"./PlotAreaShower-CWNEjbya.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
