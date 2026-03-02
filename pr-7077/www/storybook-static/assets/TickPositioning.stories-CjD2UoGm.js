import{e as t}from"./iframe-XFn8o3qI.js";import{R as n}from"./arrayEqualityCheck-DoWZ8Al-.js";import{L as s}from"./LineChart-B3DG_fr-.js";import{L as c}from"./Line-CI-PKSEE.js";import{X as d}from"./XAxis-wsJSxX26.js";import{R as l}from"./RechartsHookInspector-D90IXMov.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DasUcEmR.js";import"./immer-Hw8ZlrcX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bqol093Z.js";import"./index-DNZJK2gS.js";import"./hooks-CgDMZSu6.js";import"./axisSelectors-B-8e66Qc.js";import"./d3-scale-BECtu2Jj.js";import"./zIndexSlice-BaTuqdfU.js";import"./renderedTicksSlice-Dl0HjFeM.js";import"./CartesianChart-CtYhkutQ.js";import"./chartDataContext-C4USeiES.js";import"./CategoricalChart-BM4cINHZ.js";import"./Layer-DCadlIaL.js";import"./ReactUtils-B41U7gki.js";import"./Label-BlYwY5-1.js";import"./Text-Bl76oSnc.js";import"./DOMUtils-DhQP54ma.js";import"./ZIndexLayer-DWBavU2w.js";import"./ActivePoints-BMnMeirf.js";import"./Dot-BXU7GTUQ.js";import"./types-Bj0G5aQF.js";import"./RegisterGraphicalItemId-JBTo95SG.js";import"./ErrorBarContext-BybKQWHl.js";import"./GraphicalItemClipPath-Cv74D6gd.js";import"./SetGraphicalItem-gSI2Cn_M.js";import"./useAnimationId-DlDP6-K6.js";import"./getRadiusAndStrokeWidthFromDot-YxhzX5we.js";import"./ActiveShapeUtils-MPa98qw4.js";import"./isPlainObject-CuZzfPHd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kXtUPCc6.js";import"./Trapezoid-CWabxdPa.js";import"./Sector-DJqtk5y0.js";import"./Symbols-zbF4VeV5.js";import"./symbol-D6QfEsFp.js";import"./step-DeRmKfqt.js";import"./Curve-C3P9kzpN.js";import"./CartesianAxis-j4wY0iFh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BCvGM1bQ.js";import"./ChartSizeDimensions-BgEuIf6D.js";import"./OffsetShower-2hoMWt5-.js";import"./PlotAreaShower-D2hH_gCG.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
