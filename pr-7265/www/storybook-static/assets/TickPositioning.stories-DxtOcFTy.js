import{e as t}from"./iframe-B9O9PLmj.js";import{R as n}from"./arrayEqualityCheck-DC5CCiaX.js";import{L as s}from"./LineChart-u0nXp41P.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C5FWVrxM.js";import{X as l}from"./XAxis-B1EE7uVS.js";import{R as v}from"./RechartsHookInspector-oD2s6CPO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BG5-jm5o.js";import"./immer-CorX8m6_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGbm3XN2.js";import"./index-CAnKFVeM.js";import"./hooks-BTzSQdIL.js";import"./axisSelectors-D00_Gdzw.js";import"./d3-scale-CExCS1t0.js";import"./zIndexSlice-CXYg_MdN.js";import"./renderedTicksSlice-M3URujhE.js";import"./CartesianChart-CzHYXFWb.js";import"./chartDataContext-CXYcSTD1.js";import"./CategoricalChart-CMv5R2DQ.js";import"./Layer-CeeJrP8o.js";import"./ReactUtils-BBiT48UQ.js";import"./Label-CyHBMA3l.js";import"./Text-BILB17Zq.js";import"./DOMUtils-CwoLiA_U.js";import"./ZIndexLayer-DYfC-fux.js";import"./ActivePoints-DwZhrzjl.js";import"./Dot-CuQoBawd.js";import"./types-wS1CwaJ6.js";import"./RegisterGraphicalItemId-B6wW9i8n.js";import"./ErrorBarContext-CdQGiGFg.js";import"./GraphicalItemClipPath-CTLEHBag.js";import"./SetGraphicalItem-C1WNJGNc.js";import"./useAnimationId-CEyoSkEC.js";import"./getRadiusAndStrokeWidthFromDot-BJYT2kqZ.js";import"./ActiveShapeUtils-BZRBvXfn.js";import"./isPlainObject-DKUUO2R6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD4TDJ91.js";import"./Trapezoid-BTKQS4gb.js";import"./Sector-Cr5FAs6h.js";import"./Symbols-CFtKhMEP.js";import"./symbol-gibfx3Ew.js";import"./step-DmhUsuIO.js";import"./Curve-CnUGNDOG.js";import"./CartesianAxis-D9MTlCrN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-B7585ExM.js";import"./ChartSizeDimensions-BLFdg5d7.js";import"./OffsetShower-BZwyeReB.js";import"./PlotAreaShower-4RtYHx69.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
