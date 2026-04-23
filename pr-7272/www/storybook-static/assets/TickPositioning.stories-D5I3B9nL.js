import{e as t}from"./iframe-C1fnHnKT.js";import{R as n}from"./arrayEqualityCheck-l6uT4Usv.js";import{L as s}from"./LineChart-DtqLvayy.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CMzeYv-o.js";import{X as l}from"./XAxis-CQ2fda0r.js";import{R as v}from"./RechartsHookInspector-ewceuCfq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0awOkESO.js";import"./immer-hlXcvFio.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsoN9NQZ.js";import"./index-C2jDSQT9.js";import"./hooks-D4TdCpxu.js";import"./axisSelectors-AIxg2YTu.js";import"./d3-scale-Br8Qy1nV.js";import"./zIndexSlice-BoAv0LH1.js";import"./renderedTicksSlice-DAUXyaQX.js";import"./CartesianChart-DJhd_WoR.js";import"./chartDataContext-DOE3KdCn.js";import"./CategoricalChart-oohW2fAH.js";import"./Layer-BIYNx1xN.js";import"./ReactUtils-Dm1SJpk1.js";import"./Label-8_9z-Hx3.js";import"./Text-BUAHuXAg.js";import"./DOMUtils-CXwfjRJu.js";import"./ZIndexLayer-UU7tiK14.js";import"./ActivePoints-CLnaFdlX.js";import"./Dot-CuqwvLTE.js";import"./types-C6vI6gcr.js";import"./RegisterGraphicalItemId-BcT6ipJt.js";import"./ErrorBarContext-BJ-bLhxe.js";import"./GraphicalItemClipPath-_2MLatM1.js";import"./SetGraphicalItem-ByOhwbI-.js";import"./useAnimationId-mn0ugSXH.js";import"./getRadiusAndStrokeWidthFromDot-DMYxlHUI.js";import"./ActiveShapeUtils-CJoqVDNw.js";import"./isPlainObject-BdficFEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKvxhVC9.js";import"./Trapezoid-DbflFOBZ.js";import"./Sector-BUT460qv.js";import"./Symbols-Bo3RkkJn.js";import"./symbol-D-2KK1gt.js";import"./step-BfW9Id0A.js";import"./Curve-CnB-6T_0.js";import"./CartesianAxis-CluKEQWr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BXsfGSea.js";import"./ChartSizeDimensions-Dhy2eg61.js";import"./OffsetShower-C23rQ0FG.js";import"./PlotAreaShower-P9zfdMTd.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
