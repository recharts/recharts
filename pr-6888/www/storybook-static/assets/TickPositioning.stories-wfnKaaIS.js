import{e as t}from"./iframe-C4Awkoff.js";import{R as s}from"./arrayEqualityCheck-B4QvsFQi.js";import{L as m}from"./LineChart-C4YqGcHz.js";import{L as c}from"./Line-C_0XSPDY.js";import{X as d}from"./XAxis-BNPVvEKI.js";import{R as l}from"./RechartsHookInspector-C8xIuzm_.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B49yJYL9.js";import"./PolarUtils-CG-ELovL.js";import"./RechartsWrapper-D13K1qt6.js";import"./hooks-Gb_nE6Hc.js";import"./axisSelectors-CRRN5Cb6.js";import"./zIndexSlice-BPscvr6m.js";import"./CartesianChart-DYhYqUl7.js";import"./chartDataContext-BbHvubZk.js";import"./CategoricalChart-CQLlvG-9.js";import"./Layer-3uSdf7p6.js";import"./ReactUtils-QCPHueip.js";import"./Label-BgopB1Yd.js";import"./Text-C7YJVqE3.js";import"./DOMUtils-sn9DJRHa.js";import"./ZIndexLayer-KiDqj_Cd.js";import"./ActivePoints-DJ6uMpir.js";import"./Dot-D_3FP8hc.js";import"./types-BzBfPwET.js";import"./RegisterGraphicalItemId-DlrlPqlA.js";import"./ErrorBarContext-COm8GL2L.js";import"./GraphicalItemClipPath-DelQe7IH.js";import"./SetGraphicalItem-Dytz3s7d.js";import"./useAnimationId-BOjGjWHD.js";import"./getRadiusAndStrokeWidthFromDot-DM4948L6.js";import"./ActiveShapeUtils-DGax7cBC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGrEruZe.js";import"./Trapezoid-C9Na_GGw.js";import"./Sector-Bh3LTLHk.js";import"./Symbols-D7LlaOYy.js";import"./Curve-CSLJzt9O.js";import"./CartesianAxis-CA9DIeAi.js";import"./index-C4xfSpfA.js";import"./ChartSizeDimensions-Bhhb-T47.js";import"./OffsetShower-CHWuz_7E.js";import"./PlotAreaShower-DgnmR6hn.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
