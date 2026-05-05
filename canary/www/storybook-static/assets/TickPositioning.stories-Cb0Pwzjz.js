import{e as t}from"./iframe-DftoLjMQ.js";import{R as n}from"./arrayEqualityCheck-OUBI6cxl.js";import{L as s}from"./LineChart-CJGt3KAQ.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BaarjASd.js";import{X as l}from"./XAxis-diXG-Ooh.js";import{R as v}from"./RechartsHookInspector-BW_p22UR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BarHlGRM.js";import"./immer-CQJBkabG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHlVG8GT.js";import"./index-uEh81NxT.js";import"./hooks-CtUEKUIT.js";import"./axisSelectors-wXsEFnMj.js";import"./d3-scale-BsmYBoZY.js";import"./zIndexSlice--T96FzXv.js";import"./renderedTicksSlice-D9MmoYOr.js";import"./CartesianChart-Dc_3s4TO.js";import"./chartDataContext-IpRtB3jy.js";import"./CategoricalChart-DhhIk46Q.js";import"./Layer-Dsgs0O8o.js";import"./ReactUtils-D8J0Scd8.js";import"./Label-OGw7wMde.js";import"./Text-BLuQUWft.js";import"./DOMUtils-DS-WaQM8.js";import"./ZIndexLayer--xl3uim8.js";import"./ActivePoints-CvxxlQO1.js";import"./Dot-BPJX98FX.js";import"./types-Bejjp4Hx.js";import"./RegisterGraphicalItemId-BsfM9YTI.js";import"./ErrorBarContext-BqvDCGa4.js";import"./GraphicalItemClipPath-CA0a5dPY.js";import"./SetGraphicalItem-CtgQyVhP.js";import"./useAnimationId-HlRR6VOg.js";import"./getRadiusAndStrokeWidthFromDot-1sEj6j-N.js";import"./ActiveShapeUtils-KSU4yUqy.js";import"./isPlainObject-DhKwCKiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdclZ8ZW.js";import"./Trapezoid-Cfr8ELTn.js";import"./Sector-9UyeEGs-.js";import"./Symbols-xJuY3fVT.js";import"./symbol--t7F40kw.js";import"./step-DzOVAhhf.js";import"./Curve-5-yobk2P.js";import"./CartesianAxis-D4w_zo3U.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-l8sRLK9z.js";import"./ChartSizeDimensions-BJ7Qv0Pi.js";import"./OffsetShower-DBZtide3.js";import"./PlotAreaShower-DKTeWqRs.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
