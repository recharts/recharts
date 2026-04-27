import{e as t}from"./iframe-Qs6O8wpy.js";import{R as n}from"./arrayEqualityCheck-DiPmtVsh.js";import{L as s}from"./LineChart-ZtVWuRdh.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BBeciYnn.js";import{X as l}from"./XAxis-B5r0d-Gb.js";import{R as v}from"./RechartsHookInspector-D6-uk_4z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DkvZoiFw.js";import"./immer-BUNCc4EX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXH9h8qa.js";import"./index-BLhY0zjE.js";import"./hooks-C6T0ux6I.js";import"./axisSelectors-BqhGWF7A.js";import"./d3-scale-C7QcSE0p.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-BdRBx_3M.js";import"./renderedTicksSlice-Si7G1rdh.js";import"./CartesianChart-CZ-ONe5U.js";import"./chartDataContext-Dx6fqFLh.js";import"./CategoricalChart-D7dhNxwj.js";import"./Layer-CICKsHec.js";import"./Curve-uoVbw7SZ.js";import"./types-Cs32UOA0.js";import"./step-6wxOI7IM.js";import"./AnimatedItems-Bmk-Vn6E.js";import"./Label-DJKNn60w.js";import"./Text-DQ28Uic0.js";import"./DOMUtils-C3QfuTRj.js";import"./ZIndexLayer-Dzi2jwDH.js";import"./useAnimationId-Bx8YWNYj.js";import"./ActivePoints-DlYWl3uo.js";import"./Dot-Ck8_T0Z-.js";import"./RegisterGraphicalItemId-D_GbpICU.js";import"./ErrorBarContext-DiylhWX0.js";import"./GraphicalItemClipPath-97GOlLPd.js";import"./SetGraphicalItem-CPtdCQ7b.js";import"./getRadiusAndStrokeWidthFromDot-DBGot3sv.js";import"./ActiveShapeUtils--dL8_NPS.js";import"./isPlainObject-CN0NSOTq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bukdiqfq.js";import"./Trapezoid-CT6ZG2gE.js";import"./Sector-ByAF8mSb.js";import"./Symbols-B1g8PGM_.js";import"./symbol-DP01-Acw.js";import"./CartesianAxis-BvKnbhLV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-COAE6_R9.js";import"./ChartSizeDimensions-h_Vewza7.js";import"./OffsetShower-Dv7qO3Dx.js";import"./PlotAreaShower-CTCwIg18.js";const ht={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((i,m)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:m,label:i,height:70})),t.createElement(v,null)))}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const xt=["TickPositioning"];export{r as TickPositioning,xt as __namedExportsOrder,ht as default};
