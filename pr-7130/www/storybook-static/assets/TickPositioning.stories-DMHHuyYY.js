import{e as t}from"./iframe-RyyUADvi.js";import{R as n}from"./arrayEqualityCheck-BK7ZKOIC.js";import{L as s}from"./LineChart-6r5A_zvp.js";import{L as c}from"./Line-CWDvrl0r.js";import{X as d}from"./XAxis-CoWhvSWs.js";import{R as l}from"./RechartsHookInspector-p0Yz6ifZ.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwxDEkD6.js";import"./immer-DiJOv4tT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-oQCIJm_t.js";import"./index-DS9IaigZ.js";import"./hooks-ZFjK5fyy.js";import"./axisSelectors-Bf3stQgf.js";import"./d3-scale-ZW2PW4r9.js";import"./zIndexSlice-I41T8JEG.js";import"./renderedTicksSlice-BUipPmkG.js";import"./CartesianChart-BVog2BC6.js";import"./chartDataContext-D7w4QAUg.js";import"./CategoricalChart-D1KFd6eK.js";import"./Layer-DGeVqCLc.js";import"./ReactUtils-BuUocuWo.js";import"./Label-CQil7oNR.js";import"./Text-BCjtKebt.js";import"./DOMUtils-CUy7YYLN.js";import"./ZIndexLayer-CXHEgDXB.js";import"./ActivePoints-BiNqWYY2.js";import"./Dot-CH5vcBHO.js";import"./types-Bp-ZZqOO.js";import"./RegisterGraphicalItemId-BvOeRSvq.js";import"./ErrorBarContext-DoMKVMyl.js";import"./GraphicalItemClipPath-B8_DVnDn.js";import"./SetGraphicalItem-Cl0KJDHX.js";import"./useAnimationId-6eUUABj9.js";import"./getRadiusAndStrokeWidthFromDot-BZmLJ3C8.js";import"./ActiveShapeUtils-Db-WQFuK.js";import"./isPlainObject-Dd20guMq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BY6gKUrO.js";import"./Trapezoid-BnRug_7I.js";import"./Sector-CY4skt_U.js";import"./Symbols-C-qwK5A2.js";import"./symbol-BBBIWRyY.js";import"./step-4PchhSUC.js";import"./Curve-BOxvHyTd.js";import"./CartesianAxis-BpXuAb-I.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BPy7O-_m.js";import"./ChartSizeDimensions-B2WcmWF_.js";import"./OffsetShower-Cy4pmMeQ.js";import"./PlotAreaShower-CgXv_TiK.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
