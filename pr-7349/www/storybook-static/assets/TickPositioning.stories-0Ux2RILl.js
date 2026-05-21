import{e as t}from"./iframe-D2xkh5VA.js";import{g as m}from"./arrayEqualityCheck-BcvopYI_.js";import{L as s}from"./LineChart-BHnQkEzj.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-C-3S5d4g.js";import{X as l}from"./XAxis-8irwFxlw.js";import{R as v}from"./RechartsHookInspector-BNLXTPTn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ba1qBB1K.js";import"./immer-CX6PUSO2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAWcFgQP.js";import"./index-DQcqmY6q.js";import"./hooks-BYxDncjb.js";import"./axisSelectors-7PXIpU8J.js";import"./d3-scale-CrDd0VeH.js";import"./zIndexSlice-BbkJeUOK.js";import"./renderedTicksSlice-C-KOSoJD.js";import"./CartesianChart-BJzueQ6r.js";import"./chartDataContext-DR1VP15t.js";import"./CategoricalChart-BDCy0ysN.js";import"./Curve-DLNzalYA.js";import"./types-CxiHHYTB.js";import"./step-C9rAKZ37.js";import"./path-DyVhHtw_.js";import"./Layer-DhOsa-t6.js";import"./ReactUtils-Bwb7QYmO.js";import"./Label-DeRbtMqy.js";import"./Text-hIOc-MSS.js";import"./DOMUtils-BkYWFWy3.js";import"./ZIndexLayer-C7En4AyY.js";import"./ActivePoints-BGHqbzdd.js";import"./Dot-I5Kzo50C.js";import"./RegisterGraphicalItemId-D_8matpL.js";import"./ErrorBarContext-CJXaSsld.js";import"./GraphicalItemClipPath-DFyECcqW.js";import"./SetGraphicalItem-DpgyXd2u.js";import"./useAnimationId-DiNRYHAi.js";import"./getRadiusAndStrokeWidthFromDot-BhBat3wy.js";import"./ActiveShapeUtils-B5QqFS4A.js";import"./isPlainObject-BMKBAZsK.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianAxis-DAZlFlgD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-bibejZah.js";import"./ChartSizeDimensions-1DNJC0TT.js";import"./OffsetShower-CUjzMbk1.js";import"./PlotAreaShower-BjwPr_87.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),p.map((e,n)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:n,label:e,height:70})),t.createElement(v,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ct=["TickPositioning"];export{r as TickPositioning,ct as __namedExportsOrder,st as default};
