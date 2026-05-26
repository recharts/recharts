import{e as t}from"./iframe-C389UKKQ.js";import{g as m}from"./arrayEqualityCheck-Cu2SMg-k.js";import{L as s}from"./LineChart-D8QJGyP4.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CTNqbcwQ.js";import{X as l}from"./XAxis-CkTpgH_L.js";import{R as v}from"./RechartsHookInspector-CxbWCB6n.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2PDdAmjP.js";import"./immer-4pDlWF5t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-De-O4PZ_.js";import"./index-CDhhJ3He.js";import"./hooks-yBoCoA8O.js";import"./axisSelectors-B2s8T9Mh.js";import"./d3-scale-CLP74tcR.js";import"./zIndexSlice-DHdgWlAr.js";import"./renderedTicksSlice-BUt1aBWJ.js";import"./CartesianChart-3kGQQmyR.js";import"./chartDataContext-UATbZCFS.js";import"./CategoricalChart-C8H-MuO4.js";import"./Curve-DBcCTjlE.js";import"./types-9ii6Ug_u.js";import"./step-DbNUII7N.js";import"./path-DyVhHtw_.js";import"./Layer-BRJkvvA0.js";import"./ReactUtils-B3LU80BF.js";import"./Label-BsU6QA-m.js";import"./Text-CdmDvBPW.js";import"./DOMUtils-CjAbMbXQ.js";import"./ZIndexLayer-OX2yCAej.js";import"./ActivePoints-CgiRv0IS.js";import"./Dot-BzYUQbpy.js";import"./RegisterGraphicalItemId-e2Xsds3X.js";import"./ErrorBarContext-BnMue-Vz.js";import"./GraphicalItemClipPath-CCvWImiO.js";import"./SetGraphicalItem-DcN0Hr85.js";import"./useAnimationId-CxUXlcSZ.js";import"./getRadiusAndStrokeWidthFromDot-DD7Lnopo.js";import"./ActiveShapeUtils-FSjQNWDr.js";import"./CartesianAxis-BfjJ9MKk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-BR3VF3oH.js";import"./ChartSizeDimensions-BBcqsgSH.js";import"./OffsetShower-CIf7NCdz.js";import"./PlotAreaShower-DabrICzc.js";const pt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const mt=["TickPositioning"];export{r as TickPositioning,mt as __namedExportsOrder,pt as default};
